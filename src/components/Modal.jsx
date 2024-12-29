import PropTypes from 'prop-types';
import '../css/index.css'; // Asegúrate de que la ruta sea correcta

export default function Modal({ project, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
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
    image: PropTypes.string.isRequired,
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