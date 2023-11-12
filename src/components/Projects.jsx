import ProjectsAll from ".";

export default function Project() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        <ProjectsAll />
      </div>
    </section>
  );
}
