package com.devprath.Devprath.controller;

import com.devprath.Devprath.dtos.BlogRequestDto;
import com.devprath.Devprath.dtos.BlogResponseDto;
import com.devprath.Devprath.dtos.PageResponse;
import com.devprath.Devprath.service.BlogService;
import jakarta.validation.Valid;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping("/fetch-all-blogs")
    public ResponseEntity<PageResponse<BlogResponseDto>> getAllBlogs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {

        if (page < 0) {
            page = 0;
        }

        size = Math.min(Math.max(size, 5), 10);

        return ResponseEntity.ok(
                blogService.getAllBlogs(page, size)
        );
    }

    @GetMapping("/fetch-blog/{id}")
    public ResponseEntity<BlogResponseDto> getBlogById(@PathVariable UUID id){
        return ResponseEntity.ok(
                blogService.getBlogById(id)
        );
    }

    @PostMapping(value = "/create-blog", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<BlogResponseDto> createBlog(
            @Valid @RequestPart("blog")BlogRequestDto blogRequestDto,
            @RequestPart("image") MultipartFile image){
        return ResponseEntity.ok(
                blogService.createBlog(blogRequestDto,image)
        );
    }

    @PatchMapping(value = "/update-blog/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<BlogResponseDto> updateBlogWithId(
            @PathVariable("id")UUID id,
            @Valid @RequestPart("blog") BlogRequestDto blogRequestDto,
            @RequestPart(value = "image", required = false) MultipartFile image
    ){
        return ResponseEntity.ok(
                blogService.updateBlog(id,blogRequestDto,image)
        );
    }

    @DeleteMapping("/remove-blog/{id}")
    public ResponseEntity<?> deleteBlogById(@PathVariable UUID id){
        blogService.deleteBlog(id);
        return ResponseEntity.ok(Map.of("Status","done"));
    }

}
