package com.devprath.Devprath.dtos;


import java.time.LocalDateTime;
import java.util.UUID;

public class ContactResponseDto {
    private UUID referenceId;

    private String name;

    private String email;

    private String phoneNo;

    private String message;

    private Boolean isViewed;

    private LocalDateTime createdAt;

    public UUID getReferenceId() {
        return referenceId;
    }

    public void setReferenceId(UUID referenceId) {
        this.referenceId = referenceId;
    }

    public Boolean getViewed() {
        return isViewed;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setViewed(Boolean viewed) {
        isViewed = viewed;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
