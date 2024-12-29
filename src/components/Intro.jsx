import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
export default function Intro() {
  const { language } = useLanguage();
  const t = translations[language].intro;
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
      {t.title} <strong>Iván Leiva</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
      {t.subtitle}
      </p>
      <img
        src="../images/portada.png"
        alt="a picture of Ivan Leiva in Bariloche, Argentina"
        className="intro__img"
      />
    </section>
  );
}
