package com.devprath.Devprath.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class ContactRequestDto {

    @NotBlank(message = "Name cannot be empty")
    @Size(max = 100, message = "Name must not exceed 100 characters")
    private String name;

    @NotBlank(message = "Email cannot be empty")
    @Email(message = "Please provide a valid email address")
    private String email;

    @NotBlank(message = "Phone number cannot be empty")
    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Please provide a valid phone number")
    private String phoneNo;

    @NotBlank(message = "Message cannot be empty")
    @Size(max = 500, message = "Message must not exceed 500 characters")
    private String message;

    @NotBlank(message = "Captcha verification token is missing")
    private String turnstileToken;

    public String getTurnstileToken() {
        return turnstileToken;
    }

    public void setTurnstileToken(String turnstileToken) {
        this.turnstileToken = turnstileToken;
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
}
