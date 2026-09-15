package com.devprath.Devprath.service;

import com.devprath.Devprath.dtos.BlogRequestDto;
import com.devprath.Devprath.dtos.BlogResponseDto;
import com.devprath.Devprath.dtos.CloudinaryUploadResponse;
import com.devprath.Devprath.entity.Blog;
import com.devprath.Devprath.errorHandler.BlogNotFoundException;
import com.devprath.Devprath.repository.BlogRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.UUID;

@Service
public class BlogService {
    private final String blogFolder = "blogs";
    private final BlogRepository blogRepository;
    private final ImageUploadService imageUploadService;

    public BlogService(BlogRepository blogRepository, ImageUploadService imageUploadService) {
        this.blogRepository = blogRepository;
        this.imageUploadService = imageUploadService;
    }

    public BlogResponseDto getBlogById(UUID id){
        Blog blog =  blogRepository
                .findById(id)
                .orElseThrow(()->
                        new BlogNotFoundException("Blog not found with id: "+id
                        ));
        return toBlogResponseDto(blog);
    }

    public List<BlogResponseDto> getAllBlogs(){
        List<Blog>blogs =   blogRepository
                .findAll();
        return blogs.stream().map(this::toBlogResponseDto).toList();
    }

    @Transactional
    public BlogResponseDto createBlog(BlogRequestDto blogRequestDto, MultipartFile file){
        String uploadedImageId = null;
        try {
            Blog blog = toBlogFromRequest(blogRequestDto);
            CloudinaryUploadResponse cloudinaryUploadResponse =
                    imageUploadService.uploadImage(file, blogFolder);
            uploadedImageId = cloudinaryUploadResponse.publicId();

            blog.setImageUrl(cloudinaryUploadResponse.url());
            blog.setImagePublicId(cloudinaryUploadResponse.publicId());
            blogRepository.save(blog);
            return toBlogResponseDto(blog);
        } catch (Exception e) {
            if(uploadedImageId != null){
                try{
                    imageUploadService.deleteImage(uploadedImageId);
                } catch (Exception ex) {
                    throw ex;
                }
            }
            throw e;
        }

    }

    @Transactional
    public BlogResponseDto updateBlog(UUID id, BlogRequestDto blogRequestDto,MultipartFile image){
        Blog blog = blogRepository.findById(id)
                .orElseThrow(()-> new BlogNotFoundException("Blog not found with id: "+id));

        if(image == null || image.isEmpty()){
            updateBlogContent(blogRequestDto,blog);
            return toBlogResponseDto(blog);
        }

        String newImagePublicId = null;
        String oldImagePublicId = blog.getImagePublicId();
        try{
            CloudinaryUploadResponse cloudinaryUploadResponse =
                    imageUploadService.uploadImage(image,blogFolder);

            newImagePublicId = cloudinaryUploadResponse.publicId();

            updateBlogContent(blogRequestDto,blog);
            blog.setImagePublicId(cloudinaryUploadResponse.publicId());
            blog.setImageUrl(cloudinaryUploadResponse.url());
            blogRepository.save(blog);

            imageUploadService.deleteImage(oldImagePublicId);

            return toBlogResponseDto(blog);
        }catch (Exception ex){
            if(newImagePublicId != null){
                try{
                    imageUploadService.deleteImage(newImagePublicId);
                } catch (Exception e) {
                    throw e;
                }
            }
            throw new RuntimeException("Blog update fails");
        }
    }

    public void updateBlogContent(BlogRequestDto blogRequestDto, Blog blog){
        blog.setContent(blogRequestDto.getContent());
        blog.setSlug(blogRequestDto.getSlug());
        blog.setTitle(blogRequestDto.getTitle());
        blog.setKeywords(blogRequestDto.getKeywords());
    }

    @Transactional
    public void deleteBlog(UUID id){

        Blog blog = blogRepository.findById(id)
                .orElseThrow(() ->
                        new BlogNotFoundException("Blog not found with id: "+id)
                );

        String publicId = blog.getImagePublicId();

        blogRepository.delete(blog);

        imageUploadService.deleteImage(publicId);
    }

    protected Blog toBlogFromRequest(BlogRequestDto blogRequestDto){
        Blog blog = new Blog();
        blog.setContent(blogRequestDto.getContent());
        blog.setKeywords(blogRequestDto.getKeywords());
        blog.setSlug(blogRequestDto.getSlug());
        blog.setTitle(blogRequestDto.getTitle());
        return blog;
    }

    protected BlogResponseDto toBlogResponseDto(Blog blog){
        BlogResponseDto responseDto = new BlogResponseDto();
        responseDto.setContent(blog.getContent());
        responseDto.setId(blog.getId());
        responseDto.setCreatedAt(blog.getCreatedAt());
        responseDto.setUpdatedAt(blog.getUpdatedAt());
        responseDto.setSlug(blog.getSlug());
        responseDto.setKeywords(blog.getKeywords());
        responseDto.setTitle(blog.getTitle());
        responseDto.setImageUrl(blog.getImageUrl());
        return responseDto;
    }
}
