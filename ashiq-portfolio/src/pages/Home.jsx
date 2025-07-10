import React from 'react';

const techStack = [
  { name: 'React', icon: 'bi bi-react', color: '#61dafb' },
  { name: 'Java', icon: 'bi bi-cup-hot', color: '#f89820' },
  { name: 'Bootstrap', icon: 'bi bi-bootstrap', color: '#7952b3' },
  { name: 'IoT', icon: 'bi bi-cpu', color: '#00b894' },
  { name: 'MySQL', icon: 'bi bi-database', color: '#00758f' },
];

const Home = () => {
  return (
    <div className="container mt-5 pt-5 position-relative">
      {/* Tagline */}
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="text-center text-lg-start home-hero-animate">
            <h1 className="display-4 fw-bold mb-2">
              Hi, I'm <span className="text-primary">Shaik Abdul Ashiq</span>
            </h1>
            <h2 className="h3 text-muted mb-2">
              Web Developer & Java Full Stack Developer
            </h2>
            <p className="lead mb-3 gradient-text" style={{fontWeight: 600}}>
              Turning ideas into reality with code & creativity.
            </p>
            <p className="mb-4">
              A passionate developer with expertise in modern web technologies, 
              IoT, and embedded systems. Currently pursuing B.Tech in Electronics 
              and Communication Engineering with a CGPA of 9.5.
            </p>
            {/* Tech Stack Badges */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, idx) => (
                <span key={tech.name} className="badge d-flex align-items-center px-3 py-2" style={{background: '#fff', color: tech.color, border: `1.5px solid ${tech.color}`, fontWeight: 500, fontSize: '1rem', boxShadow: '0 2px 8px rgba(102,126,234,0.07)'}}>
                  <i className={`${tech.icon} me-2`} style={{color: tech.color, fontSize: '1.2rem'}}></i>
                  {tech.name}
                </span>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start home-btn-animate">
              <a 
                href="/ShaikAbdulAshiq_Resume.pdf" 
                className="btn btn-primary btn-lg"
                download
              >
                <i className="bi bi-download me-2"></i>
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg">
                <i className="bi bi-envelope me-2"></i>
                Contact Me
              </a>
            </div>
          </div>
        </div>
        {/* Profile Image */}
        <div className="col-lg-6 text-center home-img-animate">
          <img 
            src="/images/portfolioprofile.jpg" 
            alt="Shaik Abdul Ashiq" 
            className="img-fluid rounded-circle shadow-lg"
            style={{ maxWidth: '400px', width: '100%' }}
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="row mt-4">
        <div className="col-12 text-center home-social-animate">
          <h4 className="mb-4">Connect with me</h4>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/yourusername" className="btn btn-outline-dark btn-lg">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" className="btn btn-outline-primary btn-lg">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:abdulashiqsk2003@gmail.com" className="btn btn-outline-danger btn-lg">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="tel:+918121230218" className="btn btn-outline-success btn-lg">
              <i className="bi bi-telephone"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 