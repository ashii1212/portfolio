import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-dark w-100 animated-footer" 
      style={{
        background: 'linear-gradient(90deg, #e0e7ff 0%, #f3e8ff 100%)',
        boxShadow: '0 -2px 20px rgba(102,126,234,0.07)',
        marginTop: 'auto',
        padding: 0,
        borderTop: '1px solid #e0e7ff',
      }}>
      <div className="w-100" style={{padding: 0, margin: 0}}>
        <div className="container py-5">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-4 mb-4">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-code-slash fs-2 me-3" style={{color: '#667eea'}}></i>
                <h4 className="mb-0 fw-bold" style={{color: '#22223b'}}>Shaik Abdul Ashiq</h4>
              </div>
              <p className="mb-3" style={{color: '#4b4b6b'}}>
                A passionate Web Developer & Java Full Stack Developer with expertise in 
                modern web technologies, IoT, and embedded systems.
              </p>
              <div className="d-flex gap-3">
                <a href="https://github.com/yourusername" 
                  className="btn btn-outline-primary btn-sm border-0"
                  target="_blank" 
                  rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" 
                  className="btn btn-outline-primary btn-sm border-0"
                  target="_blank" 
                  rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="mailto:abdulashiqsk2003@gmail.com" 
                  className="btn btn-outline-primary btn-sm border-0">
                  <i className="bi bi-envelope"></i>
                </a>
                <a href="tel:+918121230218" 
                  className="btn btn-outline-primary btn-sm border-0">
                  <i className="bi bi-telephone"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 mb-4 text-center text-lg-start">
              <h5 className="mb-3 fw-bold" style={{color: '#22223b'}}>
                <i className="bi bi-link-45deg me-2"></i>
                Quick Links
              </h5>
              <ul className="list-unstyled d-inline-block d-lg-block text-start">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none" style={{color: '#4b4b6b'}}>
                    <i className="bi bi-chevron-right me-2"></i>
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-decoration-none" style={{color: '#4b4b6b'}}>
                    <i className="bi bi-chevron-right me-2"></i>
                    About Me
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/projects" className="text-decoration-none" style={{color: '#4b4b6b'}}>
                    <i className="bi bi-chevron-right me-2"></i>
                    Projects
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/education" className="text-decoration-none" style={{color: '#4b4b6b'}}>
                    <i className="bi bi-chevron-right me-2"></i>
                    Education
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/certifications" className="text-decoration-none" style={{color: '#4b4b6b'}}>
                    <i className="bi bi-chevron-right me-2"></i>
                    Certifications
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/gallery" className="text-decoration-none" style={{color: '#4b4b6b'}}>
                    <i className="bi bi-chevron-right me-2"></i>
                    Gallery
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-decoration-none" style={{color: '#4b4b6b'}}>
                    <i className="bi bi-chevron-right me-2"></i>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4 mb-4 text-center text-lg-start">
              <h5 className="mb-3 fw-bold" style={{color: '#22223b'}}>
                <i className="bi bi-geo-alt me-2"></i>
                Contact Info
              </h5>
              <div className="mb-2">
                <div className="d-flex flex-row align-items-center gap-2 justify-content-center justify-content-lg-start">
                  <i className="bi bi-geo-alt-fill" style={{color: '#667eea', fontSize: '1.1rem'}}></i>
                  <span className="fw-semibold">Address:</span>
                  <span className="text-muted small">Srikalahasthi, Tirupati Dist, AP</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="d-flex flex-row align-items-center gap-2 justify-content-center justify-content-lg-start">
                  <i className="bi bi-envelope-fill" style={{color: '#667eea', fontSize: '1.1rem'}}></i>
                  <span className="fw-semibold">Email:</span>
                  <span className="text-muted small">abdulashiqsk2003@gmail.com</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="d-flex flex-row align-items-center gap-2 justify-content-center justify-content-lg-start">
                  <i className="bi bi-telephone-fill" style={{color: '#667eea', fontSize: '1.1rem'}}></i>
                  <span className="fw-semibold">Phone:</span>
                  <span className="text-muted small">+91 8121230218</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div style={{background: 'rgba(255,255,255,0.7)', borderTop: '1px solid #e0e7ff'}}>
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <small className="text-muted">
                © {currentYear} Shaik Abdul Ashiq. All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 