package com.ashiq.contact.service;

import com.ashiq.contact.model.ContactForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${contact.mail.to}")
    private String toEmail;

    public void sendContactEmail(ContactForm contactForm) {
        SimpleMailMessage message = new SimpleMailMessage();
        
        message.setTo(toEmail);
        message.setSubject("Portfolio Contact: " + contactForm.getSubject());
        message.setText(buildEmailContent(contactForm));
        message.setFrom(contactForm.getEmail());
        
        mailSender.send(message);
    }

    private String buildEmailContent(ContactForm contactForm) {
        StringBuilder content = new StringBuilder();
        
        content.append("New contact message from your portfolio website:\n\n");
        content.append("Name: ").append(contactForm.getName()).append("\n");
        content.append("Email: ").append(contactForm.getEmail()).append("\n");
        
        if (contactForm.getCompany() != null && !contactForm.getCompany().trim().isEmpty()) {
            content.append("Company: ").append(contactForm.getCompany()).append("\n");
        }
        
        if (contactForm.getPosition() != null && !contactForm.getPosition().trim().isEmpty()) {
            content.append("Position: ").append(contactForm.getPosition()).append("\n");
        }
        
        if (contactForm.getContactInfo() != null && !contactForm.getContactInfo().trim().isEmpty()) {
            content.append("Contact Info: ").append(contactForm.getContactInfo()).append("\n");
        }
        
        content.append("Subject: ").append(contactForm.getSubject()).append("\n\n");
        content.append("Message:\n");
        content.append(contactForm.getMessage()).append("\n\n");
        content.append("---\n");
        content.append("This message was sent from your portfolio contact form.");
        
        return content.toString();
    }
} 