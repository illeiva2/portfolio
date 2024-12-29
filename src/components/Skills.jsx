import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
export default function Skils() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const p = translations[language].projects;
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">{t.title}</h2>
      <div className="services">
        <div className="service">
          <h3>{t.body.subtitle1}</h3>
          <p>
            {t.body.p1}
          </p>
        </div>{" "}
        {/* / service */}
        <div className="service">
          <h3>{t.body.subtitle2}</h3>
          <p>
            {t.body.p2}
          </p>
        </div>{" "}
        {/* / service */}
        <div className="service">
          <h3>{t.body.subtitle3}</h3>
          <p>
            {t.body.p3}
          </p>
        </div>{" "}
        {/* / service */}
        <div className="service">
          <h3>{t.body.subtitle4}</h3>
          <p>
            {t.body.p4}
          </p>
        </div>{" "}
        {/* / service */}
      </div>{" "}
      {/* / services */}
      <a href="#work" className="btn">
        {p.title}
      </a>
    </section>
  );
}
