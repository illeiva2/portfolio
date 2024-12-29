import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/index';
export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">{t.title}</h2>
      <p className="section__subtitle section__subtitle--about">
        {t.subtitle}
      </p>
      <div className="about-me__body">
        <p>
          {t.body.p1}
        </p>
        <p>
          {t.body.p2}
        </p>
        <p>
          {t.body.p3}
        </p>
      </div>
      <img
        src="images/wia.png"
        alt="Ivan Leiva in a winter morning"
        className="about-me__img"
      />
    </section>
  );
}
