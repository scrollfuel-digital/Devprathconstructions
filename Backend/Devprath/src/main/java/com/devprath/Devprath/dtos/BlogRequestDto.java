package com.devprath.Devprath.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.List;

public class BlogRequestDto {
    @NotBlank(message = "Title should not be empty!")
    @Size(max = 300, message = "Title cannot exceed 300 characters")
    private String title;

    @Size(max = 50, message = "Slug should not exceed 50 characters")
    private String slug;

    @NotBlank(message = "Content is required")
    private String content;

    private List<String> keywords;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;
    }
}
