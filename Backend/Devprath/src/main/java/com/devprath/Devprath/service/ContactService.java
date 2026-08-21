package com.devprath.Devprath.service;

import com.devprath.Devprath.dtos.ContactCreateResponseDto;
import com.devprath.Devprath.dtos.ContactRequestDto;
import com.devprath.Devprath.dtos.ContactResponseDto;
import com.devprath.Devprath.dtos.PageResponse;
import com.devprath.Devprath.entity.Contact;
import com.devprath.Devprath.errorHandler.ContactNotFoundException;
import com.devprath.Devprath.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.UUID;

@Service
@Transactional(readOnly = true)
public class ContactService {

    private final int DEFAULT_PAGE_SIZE;


    private final ContactRepository contactRepository;

    public ContactService(
            @Value("${spring.paging.DEFAULT_PAGE_SIZE}") int DEFAULT_PAGE_NUMBER,
            ContactRepository contactRepository) {
        this.DEFAULT_PAGE_SIZE = DEFAULT_PAGE_NUMBER;
        this.contactRepository = contactRepository;
    }

    @Transactional
    public ContactCreateResponseDto addContact(ContactRequestDto contactRequestDto){
        Contact contact = contactRequestToContact(contactRequestDto);
        contact = contactRepository.save(contact);
        ContactCreateResponseDto responseDto = new ContactCreateResponseDto();
        responseDto.setDisplayMessage("Contact Request Created Successfully! 'Thank you, we'll be in touch within 24 hours");
        responseDto.setSuccess(true);
        responseDto.setReferenceId(contact.getId());
        return responseDto;
    }

    public ContactResponseDto getContactById(UUID id){
        Contact contact = contactRepository.findById(id)
                .orElseThrow(()-> new ContactNotFoundException("No contact exist with id: "+id));
        return contactToResponseDto(contact);
    }

    public PageResponse<ContactResponseDto> getAllContacts(int page, int size, String sortBy, boolean ascending){

        page = Math.max(page,0);

        if(size <= 0 || size > DEFAULT_PAGE_SIZE)
            size = DEFAULT_PAGE_SIZE;

        // default only date and view can sort pages
        if(!"isViewed".equalsIgnoreCase(sortBy) && !"createdAt".equalsIgnoreCase(sortBy))
            sortBy = "isViewed";

        Sort sort = ascending? Sort.by(sortBy).ascending(): Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page,size, sort);

        Page<Contact> contactList = contactRepository.findAll(pageable);

        Page<ContactResponseDto> responseDtos =
                contactList.map(this::contactToResponseDto);
        return PageResponse.from(responseDtos);
    }

    @Transactional
    public ContactResponseDto updateIsViewedById(UUID id){
        Contact contact = contactRepository.findById(id)
                .orElseThrow(()->new ContactNotFoundException("No contact exist with id: "+id));
        contact.setViewed(!Boolean.TRUE.equals(contact.getViewed()));
        return contactToResponseDto(contactRepository.save(contact));
    }

    public ContactResponseDto contactToResponseDto(Contact contact){
        ContactResponseDto responseDto = new ContactResponseDto();
        responseDto.setReferenceId(contact.getId());
        responseDto.setName(contact.getName());
        responseDto.setEmail(contact.getEmail());
        responseDto.setPhoneNo(contact.getPhoneNo());
        responseDto.setMessage(contact.getMessage());
        responseDto.setViewed(contact.getViewed());
        responseDto.setCreatedAt(contact.getCreatedAt());
        return responseDto;
    }

    public Contact contactRequestToContact(ContactRequestDto requestDto){
        Contact contact = new Contact();
        contact.setName(requestDto.getName());
        contact.setEmail(requestDto.getEmail());
        contact.setMessage(requestDto.getMessage());
        contact.setPhoneNo(requestDto.getPhoneNo());
        return contact;
    }
}
