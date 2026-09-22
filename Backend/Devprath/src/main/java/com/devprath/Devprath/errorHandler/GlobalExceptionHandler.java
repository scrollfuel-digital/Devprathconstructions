package com.devprath.Devprath.errorHandler;

import com.devprath.Devprath.dtos.ErrorResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

// contact not found : custom exception
    @ExceptionHandler(ContactNotFoundException.class)
    public ResponseEntity<ErrorResponseDto> handleContactNotFound(ContactNotFoundException ex) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new ErrorResponseDto(HttpStatus.NOT_FOUND.value(), ex.getMessage()));
    }

// security credentials fails
    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponseDto> handleAuthenticationException(AuthenticationException ex) {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(new ErrorResponseDto(HttpStatus.UNAUTHORIZED.value(), "Invalid email or password"));
    }

    // security if credentials fails

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponseDto> handleAccessDenied(AccessDeniedException ex) {
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN)
                .body(new ErrorResponseDto(HttpStatus.FORBIDDEN.value(), "Access denied: Insufficient permissions"));
    }

    // validation exception

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult()
                .getFieldErrors()
                .forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }

    // security exception

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponseDto> handleMalformedJson(HttpMessageNotReadableException ex) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponseDto(HttpStatus.BAD_REQUEST.value(), "Malformed or missing request body"));
    }

// for pagination parameter mismatch
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponseDto> handleTypeMismatch(MethodArgumentTypeMismatchException ex) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponseDto(
                        HttpStatus.BAD_REQUEST.value(),
                        "Invalid parameter: '" + ex.getName() + "' has an invalid value"
                ));
    }

    // if blogs not found
    @ExceptionHandler(BlogNotFoundException.class)
    public ResponseEntity<ErrorResponseDto> handleBlogNotFound(BlogNotFoundException blogNotFoundException){
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(
                        new ErrorResponseDto(HttpStatus.NOT_FOUND.value(),
                                blogNotFoundException.getMessage()
                        )
                );
    }


    // of multipart file goes beyond configure size limit that set in application.properties
    // then throw this image

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<ErrorResponseDto> handleMaxUploadSize(
            MaxUploadSizeExceededException ex) {

        return ResponseEntity
                .status(HttpStatus.PAYLOAD_TOO_LARGE)
                .body(
                        new ErrorResponseDto(
                                HttpStatus.PAYLOAD_TOO_LARGE.value(),
                                ex.getMessage()
                        )
                );
    }

    // image upload exception
    @ExceptionHandler(ImageUploadException.class)
    public ResponseEntity<ErrorResponseDto> handleImageUploadException(
            ImageUploadException ex) {

        return ResponseEntity
                .status(HttpStatus.BAD_GATEWAY)
                .body(
                        new ErrorResponseDto(
                                HttpStatus.BAD_GATEWAY.value(),
                                "Unable to upload image\n"+ex.getMessage()
                        )
                );
    }

    // image validation failed in image upload service then
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponseDto> handleIllegalArgument(
            IllegalArgumentException ex
    ) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponseDto(
                        HttpStatus.BAD_REQUEST.value(),
                        ex.getMessage()
                ));
    }


    // if image is missing
    @ExceptionHandler(MissingServletRequestPartException.class)
    public ResponseEntity<ErrorResponseDto>handleMissingServletRequestPartException(MissingServletRequestPartException ex){
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(
                        new ErrorResponseDto(
                                HttpStatus.BAD_REQUEST.value(),
                                ex.getMessage()
                        )
                );
    }
// any exception occure
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponseDto> handleException(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponseDto(HttpStatus.INTERNAL_SERVER_ERROR.value(), ex.getMessage()));
    }

}
