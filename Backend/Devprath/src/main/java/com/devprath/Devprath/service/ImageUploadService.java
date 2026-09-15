package com.devprath.Devprath.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.devprath.Devprath.dtos.CloudinaryUploadResponse;
import com.devprath.Devprath.errorHandler.ImageUploadException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class ImageUploadService {

    private final Cloudinary cloudinary;

    public ImageUploadService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }


    public CloudinaryUploadResponse uploadImage(
            MultipartFile file,
            String folderName
    ) {

        validateImage(file);
        try {
            Map<String, Object> options = ObjectUtils.asMap(
                    "folder", folderName,
                    "use_filename", true,
                    "unique_filename", true,
                    "resource_type", "image"
            );

            @SuppressWarnings("unchecked")
            Map<String, Object> result =
                    cloudinary.uploader().upload(
                            file.getBytes(),
                            options
                    );

            String url = (String) result.get("secure_url");
            String publicId = (String) result.get("public_id");

            return new CloudinaryUploadResponse(
                    url,
                    publicId
            );

        } catch (Exception ex) {
            throw new ImageUploadException(
                    "Failed to upload image to Cloudinary",
                    ex
            );
        }
    }


    public void deleteImage(String publicId) {

        if (publicId == null || publicId.isBlank()) {
            return;
        }

        try {

            cloudinary.uploader().destroy(
                    publicId,
                    ObjectUtils.asMap(
                            "resource_type", "image"
                    )
            );

        } catch (IOException ex) {

            throw new ImageUploadException(
                    "Failed to delete image from Cloudinary",
                    ex
            );
        }
    }


    private void validateImage(MultipartFile file) {

        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException(
                    "Image file cannot be empty"
            );
        }

        String contentType = file.getContentType();

        List<String> allowedTypes = List.of(
                "image/jpeg",
                "image/png",
                "image/webp"
        );

        
        if (contentType == null ||
                !allowedTypes.contains(contentType)) {

            throw new IllegalArgumentException(
                    "Only JPEG, PNG and WebP images are allowed"
            );
        }
    }
}