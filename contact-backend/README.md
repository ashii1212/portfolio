# Contact Backend (Spring Boot)

This is a simple Java Spring Boot backend for receiving contact form submissions from your portfolio and sending them directly to your email.

## Features
- REST API endpoint to receive contact form data
- Sends the message to your email using SMTP
- CORS enabled for your React frontend
- Easy configuration with environment variables

## Tech Stack
- Java 17+
- Spring Boot
- Spring Web
- Spring Mail
- Maven

## Getting Started

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd contact-backend
```

### 2. Configure Email Credentials
Edit `src/main/resources/application.properties`:
```
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_app_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

contact.mail.to=your_email@gmail.com
```
- Use an **App Password** if using Gmail with 2FA.
- Set `contact.mail.to` to the email address where you want to receive messages.

### 3. Build and Run
```bash
mvn clean install
mvn spring-boot:run
```

### 4. API Usage
- **POST** `/api/contact`
- **Content-Type:** `application/json`
- **Body Example:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "position": "HR Manager",
  "contactInfo": "+1 555-1234",
  "subject": "Job Opportunity",
  "message": "We'd like to connect!"
}
```
- On success, you will receive `{ "status": "Message sent" }`

### 5. CORS
- The backend allows requests from your React frontend (adjust as needed in `ContactController`).

## Project Structure
```
contact-backend/
  ├── src/main/java/com/yourname/contact/
  │     ├── ContactApplication.java
  │     ├── controller/ContactController.java
  │     ├── model/ContactForm.java
  │     └── service/EmailService.java
  └── src/main/resources/application.properties
```

## Deployment
- You can deploy this backend to any Java server (Heroku, Render, AWS, etc.)

## License
MIT 