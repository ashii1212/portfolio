package com.ashiq.contact.controller;

import com.ashiq.contact.model.ContactForm;
import com.ashiq.contact.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000", "https://your-domain.com"})
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContact(@Valid @RequestBody ContactForm contactForm) {
        try {
            emailService.sendContactEmail(contactForm);
            
            Map<String, String> response = new HashMap<>();
            response.put("status", "Message sent successfully");
            response.put("message", "Thank you for your message. I'll get back to you soon!");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("status", "Error");
            errorResponse.put("message", "Failed to send message. Please try again later.");
            
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "OK");
        response.put("message", "Contact backend is running");
        return ResponseEntity.ok(response);
    }
} 