import PropTypes from 'prop-types';
import '../css/index.css'; // Asegúrate de que la ruta sea correcta

const Modal = ({ project, closeModal }) => {
  const handleClickOutside = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;