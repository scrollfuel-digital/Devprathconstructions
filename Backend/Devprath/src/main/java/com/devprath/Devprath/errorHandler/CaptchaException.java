package com.devprath.Devprath.errorHandler;

public class CaptchaException extends RuntimeException {
    public CaptchaException(String message) {
        super(message);
    }
}
