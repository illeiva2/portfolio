import PropTypes from 'prop-types';
import { useState } from 'react';
import '../css/index.css';

export default function Modal({ project, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.images?.length <= 1) return;
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (project.images?.length <= 1) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const renderImage = () => {
    if (!project.images?.length) return null;

    const isLastImage = currentImageIndex === project.images.length - 1;
    const hasUrl = Boolean(project.url);

    if (isLastImage && hasUrl) {
      return (
        <div className="image-container">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="image-link">
            <img src={project.images[currentImageIndex]} alt={project.title} />
            <div className="image-overlay">
              <i className="fas fa-external-link-alt"></i>
              <span>Visitar Sitio</span>
            </div>
          </a>
        </div>
      );
    }

    return <img src={project.images[currentImageIndex]} alt={project.title} />;
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
          <div className="image-gallery">
            {renderImage()}
            {project.images?.length > 1 && (
              <>
                <button className="gallery-nav prev" onClick={prevImage}>‹</button>
                <button className="gallery-nav next" onClick={nextImage}>›</button>
              </>
            )}
          </div>
        </div>

        <div className="modal-body">
          <div className="project-info">
            <p><strong>Cliente:</strong> {project.client}</p>
            <p><strong>Enfoque:</strong> {project.focus}</p>
            <p><strong>Plataforma:</strong> {project.platform}</p>
          </div>

          <div className="project-description">
            <h3>Descripción del Proyecto</h3>
            <p>{project.description}</p>
          </div>

          <div className="project-components">
            <h3>Componentes Clave</h3>
            {project.keyComponents.map((component, index) => (
              <div key={index} className="component">
                <h4>{component.title}</h4>
                <p>{component.description}</p>
              </div>
            ))}
          </div>

          <div className="project-result">
            <h3>Resultado</h3>
            <p>{project.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string,
    client: PropTypes.string,
    focus: PropTypes.string,
    platform: PropTypes.string,
    keyComponents: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
    result: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};