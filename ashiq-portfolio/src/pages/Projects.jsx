import React, { useState } from 'react';

const softwareProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This personal portfolio website serves as a hub for showcasing my skills, academic background, and the projects I've worked on. The website features an interactive layout with sections dedicated to each area of my expertise. It was built using HTML, CSS, and JavaScript, ensuring a responsive and professional design. The website is optimized for all devices and offers a seamless user experience. It's an ongoing project, and I plan to integrate more advanced features like a blog or contact form in the future.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interactive layout with dedicated sections",
      "Responsive design for all devices",
      "Professional and modern interface",
      "Ongoing development with planned features"
    ],
    outcome: "Successfully created a professional portfolio that effectively showcases skills and projects with excellent user experience across all devices."
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "This e-commerce website provides a platform for users to browse and purchase products online. It includes features such as product categories, shopping cart functionality, user authentication, and secure payment gateways. The site is designed to ensure an easy, user-friendly shopping experience, with a responsive layout that adjusts to any device. I have focused on creating an engaging interface with modern design elements, and I'm continuously working on improving the backend for scalability and security.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Product categories and listings",
      "Shopping cart functionality",
      "User authentication system",
      "Secure payment gateways",
      "Responsive design for all devices"
    ],
    outcome: "Developed a comprehensive e-commerce platform with all essential features for online shopping, focusing on user experience and security."
  },
  {
    id: 3,
    title: "Vegetables & Fruits Selling E-commerce Website",
    description: "This is an online platform designed for users to buy fresh vegetables and fruits directly from the farm. It includes essential e-commerce features like product listings, shopping carts, and secure payment processing. The website focuses on providing high-quality produce and supports both local and international deliveries. I've built this platform to ensure it's easy for customers to navigate through the store, and the backend is designed for easy inventory management. I am planning to integrate real-time tracking features for customers and sellers.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Fresh produce product listings",
      "Shopping cart and secure payments",
      "Local and international delivery support",
      "Easy inventory management system",
      "Planned real-time tracking features"
    ],
    outcome: "Created a specialized e-commerce platform for fresh produce, connecting farmers directly with consumers while ensuring quality and delivery tracking."
  },
];

const iotProjects = [
  {
    id: 4,
    title: "Smart Traffic Control System",
    description: "The Smart Traffic Control System uses IoT sensors to monitor traffic flow in real time and automatically adjusts traffic signals to optimize traffic management. It reduces congestion by dynamically adjusting signal timings based on traffic density, improving overall traffic flow. The system uses embedded sensors to gather data, and the processing is done through an IoT platform to control the signals remotely. This project aims to improve road safety and reduce commute times in busy urban areas.",
    technologies: ["Arduino", "Sensors", "IoT", "Embedded C"],
    features: [
      "Real-time traffic flow monitoring",
      "Automatic signal timing adjustment",
      "Dynamic congestion management",
      "Remote IoT platform control",
      "Improved road safety features"
    ],
    outcome: "Successfully demonstrated intelligent traffic management with reduced congestion and improved commute times in urban areas."
  },
  {
    id: 5,
    title: "Automated Oil Spill Cleaner",
    description: "The Automated Oil Spill Cleaner uses a combination of magnetite particles and IoT sensors to remove oil from water bodies efficiently. The system works by detecting the oil spill and deploying magnetite particles to attract and extract the oil. IoT devices track the process in real-time and notify operators about the progress. This project is focused on protecting marine life, tourism, and human health while offering an eco-friendly solution to oil spill disasters. The use of IoT ensures precise control over the cleaning process, making it highly effective.",
    technologies: ["IoT", "Embedded Systems", "Magnetite", "Wireless Communication"],
    features: [
      "Oil spill detection and monitoring",
      "Magnetite particle deployment",
      "Real-time progress tracking",
      "Eco-friendly cleaning solution",
      "Marine life protection focus"
    ],
    outcome: "Developed an effective eco-friendly solution for oil spill cleanup that protects marine life and human health while being cost-effective."
  },
  {
    id: 6,
    title: "Smart Food Monitoring System Using AI",
    description: "This project uses AI algorithms and IoT sensors to monitor the quality of food items in real-time. The system detects changes in color, temperature, and other properties of food to determine if they are still fresh. It provides notifications to users about the status of their food, helping them avoid spoiled items. The system was built using Python for the AI algorithms and embedded systems for the sensor integration. The project aims to reduce food waste by ensuring consumers can make informed decisions about the food they consume.",
    technologies: ["IoT", "AI", "Embedded Systems", "Python"],
    features: [
      "Real-time food quality monitoring",
      "AI-powered freshness detection",
      "Color and temperature analysis",
      "User notification system",
      "Food waste reduction focus"
    ],
    outcome: "Successfully implemented AI-driven food monitoring that helps reduce food waste and ensures consumers make informed decisions about food consumption."
  },
  {
    id: 7,
    title: "Cricket Protein Extraction Device",
    description: "This project focuses on creating a sustainable method for extracting protein from crickets for use in food supplements. The system includes a compact device that processes crickets into high-quality protein powder. The device is designed to be energy-efficient, environmentally friendly, and scalable for commercial production. This innovative project aims to address the global protein shortage in an eco-friendly way, offering a sustainable alternative to traditional protein sources like meat and soy.",
    technologies: ["Biotech tools", "Embedded Tech", "Smart Processing"],
    features: [
      "Sustainable protein extraction",
      "Energy-efficient processing",
      "Scalable commercial production",
      "Eco-friendly alternative protein source",
      "High-quality protein powder output"
    ],
    outcome: "Created an innovative solution for sustainable protein production that addresses global protein shortage while being environmentally friendly."
  },
  {
    id: 8,
    title: "Indian Rosella (Hibiscus sabdariffa) Project",
    description: "The Indian Rosella project focuses on cultivating a high-vitamin C variant of Hibiscus sabdariffa using organic methods. This variety is aimed at the health supplement industry, as it offers a natural and rich source of Vitamin C. The project also includes innovative methods of packaging to preserve the product's nutrients and quality. The success of this project can help promote organic farming and offer a healthier alternative to synthetic Vitamin C supplements.",
    technologies: ["Agricultural Biotechnology", "Organic Cultivation", "Packaging Innovation"],
    features: [
      "High-vitamin C variant cultivation",
      "Organic farming methods",
      "Innovative packaging solutions",
      "Health supplement industry focus",
      "Natural alternative to synthetic supplements"
    ],
    outcome: "Successfully developed a natural Vitamin C source that promotes organic farming and provides healthier alternatives to synthetic supplements."
  },
  {
    id: 9,
    title: "Advanced Fire and Short Circuit Detection",
    description: "This project focuses on developing an advanced fire and short circuit detection system. Using a combination of temperature, smoke, and gas sensors, the system detects potential fire hazards early and provides real-time alerts. Additionally, it features short circuit detection for electrical systems, making it an essential safety feature for homes and industries. The system uses a microcontroller (Arduino) to process sensor data and trigger alerts when unusual temperature or gas levels are detected. The system is also designed to integrate with an IoT platform to send notifications, ensuring prompt action can be taken.",
    technologies: ["Arduino", "Temperature Sensors", "Smoke Sensors", "Gas Sensors", "Relay Module", "Buzzer", "IoT"],
    features: [
      "Early detection of fire through multiple sensor types (temperature, smoke, and gas)",
      "Automatic shutdown of electrical systems in case of a short circuit to prevent further damage",
      "Real-time alerts via IoT, ensuring immediate response from the concerned authorities",
      "Cost-effective, scalable solution for both home and industrial use"
    ],
    outcome: "The project successfully demonstrated the integration of IoT with fire detection technology, allowing for faster response times in emergency situations. It also provided a reliable method for early hazard detection, reducing the risk of significant property damage or loss."
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ open: false, project: null });

  const openModal = (project) => setModal({ open: true, project });
  const closeModal = () => setModal({ open: false, project: null });

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-5 fw-bold gradient-text fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <i className="bi bi-folder2-open me-2 text-primary"></i>My Projects
      </h1>
      {/* Software Projects */}
      <h2 className="mb-4 mt-5 fw-bold text-primary fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <i className="bi bi-code-slash me-2"></i>Software Projects
      </h2>
      <div className="row g-4">
        {softwareProjects.map((project, idx) => (
          <div className="col-md-6 col-lg-4 fade-in" key={project.id} style={{animationDelay: `${0.3 + idx * 0.1}s`, animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-primary mb-2">
                  <i className="bi bi-laptop me-2"></i>{project.title}
                </h5>
                <p className="card-text mb-3">{project.description.substring(0, 150)}...</p>
                <div className="mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="badge bg-primary bg-opacity-10 text-primary me-2 mb-1" style={{fontWeight: 500}}>{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="badge bg-secondary bg-opacity-10 text-secondary" style={{fontWeight: 500}}>+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <button 
                  onClick={() => openModal(project)}
                  className="btn btn-outline-primary btn-sm mt-auto align-self-start"
                >
                  View Details <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* IoT & Innovation Projects */}
      <h2 className="mb-4 mt-5 fw-bold text-success fade-in" style={{animationDelay: '0.7s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <i className="bi bi-cpu me-2"></i>IoT & Innovation Projects
      </h2>
      <div className="row g-4">
        {iotProjects.map((project, idx) => (
          <div className="col-md-6 col-lg-4 fade-in" key={project.id} style={{animationDelay: `${0.8 + idx * 0.1}s`, animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
            <div className="card h-100 shadow-lg border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-success mb-2">
                  <i className="bi bi-lightbulb me-2"></i>{project.title}
                </h5>
                <p className="card-text mb-3">{project.description.substring(0, 150)}...</p>
                <div className="mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="badge bg-success bg-opacity-10 text-success me-2 mb-1" style={{fontWeight: 500}}>{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="badge bg-secondary bg-opacity-10 text-secondary" style={{fontWeight: 500}}>+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <button 
                  onClick={() => openModal(project)}
                  className="btn btn-outline-success btn-sm mt-auto align-self-start"
                >
                  View Details <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {modal.open && modal.project && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">
                  <i className={`bi ${modal.project.id <= 3 ? 'bi-laptop' : 'bi-lightbulb'} me-2 ${modal.project.id <= 3 ? 'text-primary' : 'text-success'}`}></i>
                  {modal.project.title}
                </h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="mb-4">
                  <h6 className="fw-bold mb-2">Description:</h6>
                  <p className="text-muted">{modal.project.description}</p>
                </div>
                
                {modal.project.features && (
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Key Features:</h6>
                    <ul className="list-unstyled">
                      {modal.project.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>{feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {modal.project.outcome && (
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Outcome:</h6>
                    <p className="text-muted">{modal.project.outcome}</p>
                  </div>
                )}

                <div className="mb-3">
                  <h6 className="fw-bold mb-2">Technologies Used:</h6>
                  <div>
                    {modal.project.technologies.map((tech) => (
                      <span key={tech} className={`badge ${modal.project.id <= 3 ? 'bg-primary bg-opacity-10 text-primary' : 'bg-success bg-opacity-10 text-success'} me-2 mb-1`} style={{fontWeight: 500}}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal Backdrop */}
      {modal.open && (
        <div className="modal-backdrop fade show" onClick={closeModal}></div>
      )}
    </div>
  );
};

export default Projects; 