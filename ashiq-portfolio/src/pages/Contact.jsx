import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    contactInfo: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple required fields validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for reaching out! Your message has been sent successfully. I will get back to you within 24 hours.');
        setFormData({ name: '', email: '', company: '', position: '', contactInfo: '', subject: '', message: '' });
        // Optionally clear the message after a few seconds
        setTimeout(() => setSuccessMessage(''), 8000);
      } else {
        // Try to read backend error message and show the first validation error if present
        let data;
        try {
          data = await response.json();
        } catch (err) {
          data = null;
        }
        if (data && data.errors && typeof data.errors === 'object') {
          // Show the first validation error
          const firstError = Object.values(data.errors)[0];
          alert(firstError || data.message || 'There was an error sending your message. Please try again.');
        } else if (data && data.message) {
          alert(data.message);
        } else {
          alert('There was an error sending your message. Please try again.');
        }
      }
    } catch (error) {
      alert('There was an error connecting to the server.');
    }
  };

  return (
    <div className="container mt-5 pt-5">
      {successMessage && (
        <div className="alert alert-success text-center fw-bold" role="alert">
          {successMessage}
        </div>
      )}
      <h1 className="text-center mb-5 fw-bold gradient-text fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <i className="bi bi-briefcase-fill me-2 text-primary"></i>Let's Connect
      </h1>



      <div className="row justify-content-center g-4">
        {/* Professional Contact Form */}
        <div className="col-lg-7 fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
          <div className="card shadow-lg border-0 p-4">
            <h4 className="mb-4 fw-bold text-primary">
              <i className="bi bi-send me-2"></i>Send a Message
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>
              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <label htmlFor="company" className="form-label">Company/Organization</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="position" className="form-label">Position/Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Position"
                  />
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="contactInfo" className="form-label">Contact Information</label>
                <input
                  type="text"
                  className="form-control"
                  id="contactInfo"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="Phone or LinkedIn"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity, Project collaboration, etc."
                  required
                />
              </div>
              <div className="mt-3">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Brief description of the opportunity and requirements..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg mt-4 w-100">
                <i className="bi bi-send me-2"></i>Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Professional Contact Info */}
        <div className="col-lg-5 fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
          <div className="card shadow-lg border-0 p-4 h-100">
            <h4 className="mb-4 fw-bold text-success">
              <i className="bi bi-person-badge me-2"></i>Professional Contact
            </h4>
            
            {/* Quick Contact Buttons */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Quick Contact</h6>
              <div className="d-grid gap-2">
                <a href="mailto:abdulashiqsk2003@gmail.com?subject=Job Opportunity" className="btn btn-outline-primary">
                  <i className="bi bi-envelope me-2"></i>Email for Opportunities
                </a>
                <a href="tel:+918121230218" className="btn btn-outline-success">
                  <i className="bi bi-telephone me-2"></i>Call for Discussion
                </a>
                <a href="/ShaikAbdulAshiq_Resume.pdf" download className="btn btn-outline-info">
                  <i className="bi bi-file-earmark-pdf me-2"></i>Download Resume
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Contact Information</h6>
              <div className="mb-3 d-flex align-items-start">
                <i className="bi bi-envelope-fill text-primary fs-5 me-3"></i>
                <div>
                  <div className="fw-semibold">Email</div>
                  <div className="text-muted small">
                    <a href="mailto:abdulashiqsk2003@gmail.com" className="text-decoration-none">
                      abdulashiqsk2003@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-start">
                <i className="bi bi-telephone-fill text-success fs-5 me-3"></i>
                <div>
                  <div className="fw-semibold">Phone</div>
                  <div className="text-muted small">
                    <a href="tel:+918121230218" className="text-decoration-none">
                      +91 8121230218
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt-fill text-warning fs-5 me-3"></i>
                <div>
                  <div className="fw-semibold">Location</div>
                  <div className="text-muted small">
                    Srikalahasthi, Tirupati Dist,<br />
                    Andhra Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Professional Profiles</h6>
              <div className="d-flex gap-2 flex-wrap">
                <a href="https://github.com/yourusername" className="btn btn-outline-dark btn-sm">
                  <i className="bi bi-github me-1"></i>GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" className="btn btn-outline-primary btn-sm">
                  <i className="bi bi-linkedin me-1"></i>LinkedIn
                </a>
                <a href="mailto:abdulashiqsk2003@gmail.com" className="btn btn-outline-danger btn-sm">
                  <i className="bi bi-envelope me-1"></i>Email
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-4 p-3 bg-light rounded">
              <div className="d-flex align-items-center mb-2">
                <div className="badge bg-success me-2">Available</div>
                <span className="fw-semibold">Open to Opportunities</span>
              </div>
              <p className="text-muted small mb-0">
                Actively seeking roles in Web Development, App Development, and Full-Stack Development. 
                Available for immediate start and willing to relocate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="row mt-5 justify-content-center fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-4">
              <h4 className="text-center mb-4 fw-bold text-primary">Why Choose Me?</h4>
              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <i className="bi bi-award text-warning" style={{fontSize: '2.5rem'}}></i>
                  <h5 className="mt-2 mb-2">Academic Excellence</h5>
                  <p className="text-muted small">Consistent 9.5+ CGPA with strong foundation in Electronics & Communication Engineering</p>
                </div>
                <div className="col-md-4 text-center">
                  <i className="bi bi-lightbulb text-success" style={{fontSize: '2.5rem'}}></i>
                                     <h5 className="mt-2 mb-2">Technical Skills</h5>
                   <p className="text-muted small">Expertise in Web Development, App Development, Programming, and Full-Stack technologies with hands-on project experience</p>
                </div>
                <div className="col-md-4 text-center">
                  <i className="bi bi-people text-primary" style={{fontSize: '2.5rem'}}></i>
                  <h5 className="mt-2 mb-2">Team Player</h5>
                  <p className="text-muted small">Active participation in technical clubs, workshops, and collaborative projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 