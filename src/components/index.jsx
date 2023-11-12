import { projects } from "./data";
export default function ProjectsAll() {
  const projectItems = [];

  projects.forEach((project) => {
    projectItems.push(
      <a href="#" className="portfolio__item">
        <img src={project.image} alt="" className="portfolio__img" />
      </a>
    );
  });

  return projectItems;
}
