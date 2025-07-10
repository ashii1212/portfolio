import React, { useState } from 'react';

const galleryImages = [
  { id: 1, src: "/images/1.jpg", alt: "Event Photo" },
  { id: 2, src: "/images/2.jpg", alt: "Event Photo" },
  { id: 4, src: "/images/4.jpg", alt: "Event Photo" },
  { id: 5, src: "/images/5.jpg", alt: "Event Photo" },
  { id: 6, src: "/images/6.jpg", alt: "Event Photo" },
  { id: 7, src: "/images/7.jpg", alt: "Event Photo" },
  { id: 8, src: "/images/8.jpg", alt: "Event Photo" },
  { id: 9, src: "/images/9.jpg", alt: "Event Photo" },
  { id: 10, src: "/images/10.jpg", alt: "Event Photo" },
  { id: 11, src: "/images/11.jpg", alt: "Event Photo" },
  { id: 12, src: "/images/12.jpg", alt: "Event Photo" },
  { id: 13, src: "/images/13.jpg", alt: "Event Photo" },
  { id: 14, src: "/images/14.jpg", alt: "Event Photo" },
  { id: 15, src: "/images/15.jpg", alt: "Event Photo" },
  { id: 16, src: "/images/russia.jpg", alt: "Event Photo" },
  { id: 17, src: "/images/russia2.jpg", alt: "Event Photo" }
];

const Gallery = () => {
  const [modal, setModal] = useState({ open: false, img: null, alt: '' });

  const openModal = (img, alt) => setModal({ open: true, img, alt });
  const closeModal = () => setModal({ open: false, img: null, alt: '' });

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-5 fw-bold gradient-text fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.8s'}}>
        <i className="bi bi-images me-2 text-info"></i>My Photo Gallery
      </h1>
      <div className="row g-4 justify-content-center">
        {galleryImages.map((image, idx) => (
          <div key={image.id} className="col-6 col-sm-4 col-md-3 col-lg-3 fade-in" style={{animationDelay: `${0.2 + idx * 0.07}s`, animationFillMode: 'forwards', opacity: 0, animationName: 'fadeInUp', animationDuration: '0.7s'}}>
            <div className="card gallery-item shadow-sm border-0">
              <img
                src={image.src}
                alt={image.alt}
                className="card-img-top gallery-image rounded"
                style={{ height: '180px', objectFit: 'cover', cursor: 'pointer', border: '3px solid #e0e7ff', boxShadow: '0 2px 8px rgba(102,126,234,0.07)' }}
                onClick={() => openModal(image.src, image.alt)}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Modal for image lightbox */}
      {modal.open && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modal.alt}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <img src={modal.img} alt={modal.alt} className="img-fluid rounded" style={{maxHeight: '70vh'}} />
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

export default Gallery; 