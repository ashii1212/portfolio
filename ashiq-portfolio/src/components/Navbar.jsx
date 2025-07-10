import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', icon: 'bi bi-house-door' },
  { to: '/about', label: 'About', icon: 'bi bi-person' },
  { to: '/projects', label: 'Projects', icon: 'bi bi-folder' },
  { to: '/education', label: 'Education', icon: 'bi bi-mortarboard' },
  { to: '/certifications', label: 'Certificates', icon: 'bi bi-award' },
  { to: '/gallery', label: 'Gallery', icon: 'bi bi-images' },
  { to: '/contact', label: 'Contact', icon: 'bi bi-envelope' },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Sidebar for mobile
  const Sidebar = () => (
    <div className={`sidebar-drawer${sidebarOpen ? ' open' : ''}`}> 
      <div className="sidebar-header d-flex align-items-center justify-content-between px-3 py-3">
        <span className="fw-bold fs-5 d-flex align-items-center">
          <i className="bi bi-code-slash me-2 text-primary"></i> Shaik Abdul Ashiq
        </span>
        <button className="btn btn-link text-dark fs-3 p-0" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
          <i className="bi bi-x"></i>
        </button>
      </div>
      <ul className="list-unstyled px-3">
        {navLinks.map((link) => (
          <li key={link.to} className="mb-2">
            <Link
              to={link.to}
              className={`d-flex align-items-center py-2 px-2 rounded sidebar-link${isActive(link.to) ? ' active' : ''}`}
              onClick={() => setSidebarOpen(false)}
              style={{ fontWeight: isActive(link.to) ? 600 : 400 }}
            >
              <i className={`${link.icon} me-2`}></i> {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Overlay for sidebar */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
      <nav className="navbar navbar-expand-lg fixed-top animated-navbar" 
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
        }}>
        <div className="container position-relative">
          <Link className="navbar-brand fw-bold text-white d-flex align-items-center" to="/">
            <i className="bi bi-code-slash me-2 fs-4"></i>
            <span style={{ fontSize: '1.5rem' }}>Shaik Abdul Ashiq</span>
          </Link>
          {/* Desktop nav links */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.to}>
                  <Link
                    className={`nav-link${isActive(link.to) ? ' active' : ''}`}
                    to={link.to}
                    style={{
                      color: isActive(link.to) ? '#fff' : 'rgba(255,255,255,0.8)',
                      fontWeight: isActive(link.to) ? '600' : '400',
                      transition: 'all 0.3s ease',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      margin: '0 0.25rem'
                    }}
                  >
                    <i className={`${link.icon} me-1`}></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Hamburger for mobile, always to the right under nav */}
          <button 
            className="navbar-toggler border-0 d-lg-none position-absolute top-50 end-0 translate-middle-y mt-2 me-2" 
            type="button" 
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            style={{ border: 'none', zIndex: 1300 }}
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>
        </div>
      </nav>
      {/* Sidebar Drawer for mobile */}
      <Sidebar />
    </>
  );
};

export default Navbar; 