import React, { useState } from 'react';

const certificates = [
  {
    id: 1,
    image: "/certificates/LOR.jpg",
    title: "Letter of Recommendation",
    alt: "Letter of Recommendation"
  },
  {
    id: 2,
    image: "/certificates/Offer Letter.jpg",
    title: "Offer Letter",
    alt: "Offer Letter"
  },
  {
    id: 3,
    image: "/certificates/fullstackcomplection.jpg",
    title: "Java Full Stack Development",
    alt: "Full Stack Development"
  },
  {
    id: 4,
    image: "/certificates/coursevitaworkshop.jpg",
    title: "Web Development Workshop",
    alt: "Web Development Workshop"
  },
  {
    id: 5,
    image: "/certificates/python workshop.jpg",
    title: "Python Programming Workshop",
    alt: "Python Programming Workshop"
  },
  {
    id: 6,
    image: "/certificates/SrmprojectExpo.jpg",
    title: "Project Expo in SRM",
    alt: "Project Expo SRM"
  },
  {
    id: 7,
    image: "/certificates/10.jpg",
    title: "District Level Project Hackathon in AP",
    alt: "District Level Project Hackathon in AP"
  },
  {
    id: 8,
    image: "/certificates/6.jpg",
    title: "Coordinator Certification in 2K25 Project Expo",
    alt: "Coordinator Certification"
  }
];

const Certifications = () => {
  const [modal, setModal] = useState({ open: false, img: null, title: '' });

  const openModal = (img, title) => setModal({ open: true, img, title });
  const closeModal = () => setModal({ open: false, img: null, title: '' });

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-5 fw-bold gradient-text fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <i className="bi bi-award me-2 text-warning"></i>Certificates
      </h1>
      <div className="row g-4 justify-content-center">
        {certificates.map((certificate, idx) => (
          <div key={certificate.id} className="col-12 col-sm-6 col-md-4 col-lg-3 fade-in" style={{animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
            <div className="card h-100 shadow-lg border-0 text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  className="img-fluid rounded mb-3 certificate-thumb"
                  style={{ maxHeight: '160px', objectFit: 'cover', cursor: 'pointer', border: '3px solid #e0e7ff', boxShadow: '0 2px 8px rgba(102,126,234,0.07)' }}
                  onClick={() => openModal(certificate.image, certificate.title)}
                />
                <h6 className="card-title mt-auto mb-0" style={{fontWeight: 600}}>{certificate.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for certificate image */}
      {modal.open && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modal.title}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <img src={modal.img} alt={modal.title} className="img-fluid rounded" style={{maxHeight: '70vh'}} />
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

export default Certifications; 