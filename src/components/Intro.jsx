export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Iván Leiva</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        full-stack dev
      </p>
      <img
        src="../images/portada.png"
        alt="a picture of Ivan Leiva in Bariloche, Argentina"
        className="intro__img"
      />
    </section>
  );
}
