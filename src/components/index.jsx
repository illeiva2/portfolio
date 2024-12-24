import { useState } from 'react';
import { projects } from "./data";
import Modal from './Modal';

export default function ProjectsAll() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  const projectItems = projects.map((project, index) => (
    <a key={index} className="portfolio__item" onClick={() => openModal(project)}>
      <img src={project.image} alt={project.title} className="portfolio__img" />
    </a>
  ));

  return (
    <div>
      <div className="portfolio">
        {projectItems}
      </div>
      {modalOpen && currentProject && (
        <Modal project={currentProject} closeModal={closeModal} />
      )}
    </div>
  );
}
