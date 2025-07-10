import React from 'react';

const skills = [
  { name: 'HTML, CSS, JavaScript', icon: 'bi bi-code-slash', color: '#667eea', percent: 95 },
  { name: 'Java, Spring Boot', icon: 'bi bi-cup-hot', color: '#f89820', percent: 90 },
  { name: 'React.js', icon: 'bi bi-react', color: '#61dafb', percent: 90 },
  { name: 'MySQL', icon: 'bi bi-database', color: '#00758f', percent: 85 },
  { name: 'Embedded Systems', icon: 'bi bi-cpu', color: '#00b894', percent: 80 },
  { name: 'IoT', icon: 'bi bi-wifi', color: '#764ba2', percent: 80 },
];

const About = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-lg-4 text-center mb-4 mb-lg-0 fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
          <img
            src="/images/portfolioprofile.jpg"
            alt="Shaik Abdul Ashiq"
            className="img-fluid rounded-circle shadow-lg mb-3"
            style={{ maxWidth: '220px', border: '6px solid #e0e7ff' }}
          />
          <h3 className="fw-bold mt-3 mb-1 gradient-text">Shaik Abdul Ashiq</h3>
          <div className="text-muted mb-2">Web Developer & Java Full Stack Developer</div>
        </div>
        <div className="col-lg-8 fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
          <div className="card shadow-lg border-0 p-4">
            <h2 className="mb-3 fw-bold">
              <i className="bi bi-person me-2 text-primary"></i>About Me
            </h2>
            <p className="mb-3">
              Hello! I'm <strong>Shaik Abdul Ashiq</strong>, a driven and detail-oriented <strong>Web Developer</strong> and <strong>Java Full Stack Developer</strong> currently pursuing my B.Tech in <strong>Electronics and Communication Engineering</strong> at Bharath Institute of Higher Education and Research.
            </p>
            <p className="mb-3">
              With a CGPA of 9.5 and leadership roles as a Class Representative and Project Lead, I bring a strong academic foundation and proven teamwork capabilities. I have interned at <strong>EazyByts Infotech</strong> and <strong>Coursevita</strong>, where I worked on front-end development and Java full stack projects.
            </p>
            <p className="mb-3">
              My portfolio includes diverse projects such as a <strong>Smart Traffic Control System</strong>, <strong>Cricket Protein Extraction Device</strong>, and an <strong>Automated Oil Spill Cleaner using Magnetite and IoT</strong>. These reflect my interest in sustainable innovation, embedded systems, and AI integration.
            </p>
            <p className="mb-3">
              I'm also proud to be selected for the <strong>Russia Summer Internship</strong> through the Precise Energy Olympiad and have presented at international conferences, winning a <strong>Best Paper Award</strong>.
            </p>
            <p className="mb-0">
              Beyond coding, I enjoy exploring agricultural biotechnology, participating in science exhibitions, and sharing knowledge through community programs. My goal is to merge technology with real-world problem-solving to create lasting impact.
            </p>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="row justify-content-center fade-in" style={{animationDelay: '0.7s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 p-4">
            <h2 className="mb-4 fw-bold text-center">
              <i className="bi bi-lightning-charge me-2 text-warning"></i>Skills
            </h2>
            <div className="row g-4">
              {skills.map((skill, idx) => (
                <div className="col-md-6" key={skill.name}>
                  <div className="d-flex align-items-center mb-2">
                    <i className={`${skill.icon} me-2`} style={{color: skill.color, fontSize: '1.5rem'}}></i>
                    <span className="fw-semibold" style={{color: skill.color}}>{skill.name}</span>
                  </div>
                  <div className="progress" style={{height: '10px', background: '#e0e7ff'}}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{width: `${skill.percent}%`, background: skill.color, transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)'}}
                      aria-valuenow={skill.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 