package com.devprath.Devprath.controller;

import com.devprath.Devprath.dtos.ContactCreateResponseDto;
import com.devprath.Devprath.dtos.ContactRequestDto;
import com.devprath.Devprath.dtos.ContactResponseDto;
import com.devprath.Devprath.dtos.PageResponse;
import com.devprath.Devprath.errorHandler.CaptchaException;
import com.devprath.Devprath.service.ContactService;
import com.digitalsanctuary.cf.turnstile.service.TurnstileValidationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
@RestController
@RequestMapping("/api/contact")

public class ContactController {

    private final ContactService contactService;
    private final TurnstileValidationService turnstileValidationService;

    public ContactController(ContactService contactService, TurnstileValidationService turnstileValidationService) {
        this.contactService = contactService;
        this.turnstileValidationService = turnstileValidationService;
    }

    @PostMapping("/create-contact")
    public ResponseEntity<ContactCreateResponseDto> addContact(
            @Valid @RequestBody ContactRequestDto contactRequestDto,
            HttpServletRequest request){

        String clientIp = turnstileValidationService
                .getClientIpAddress(request);

        boolean isHuman = turnstileValidationService
                .validateTurnstileResponse(
                        contactRequestDto.getTurnstileToken(),
                        clientIp);

        if(!isHuman){
            throw new CaptchaException("Invalid captcha token!");
        }

        ContactCreateResponseDto responseDto = contactService.addContact(contactRequestDto);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<ContactResponseDto> getContactById(@PathVariable UUID id){
        return ResponseEntity.ok(contactService.getContactById(id));
    }

    @GetMapping("/get-all")
    public ResponseEntity<PageResponse<ContactResponseDto>> getAllContacts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "isViewed") String sortBy,
            @RequestParam(defaultValue = "false") boolean ascending
            )
    {
        return ResponseEntity
                .ok(contactService.getAllContacts(page, size, sortBy, ascending));
    }

    @PatchMapping("/view-update/{id}")
    public ResponseEntity<ContactResponseDto> updateViewedStatus(@PathVariable UUID id){
        return ResponseEntity.ok(contactService.updateIsViewedById(id));
    }
}
