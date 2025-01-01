import ProjectsAll from ".";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Project() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">{t.title}</h2>
      <p className="section__subtitle section__subtitle--work">
        {t.subtitle}
      </p>
      <div className="portfolio">
        <ProjectsAll />
      </div>
    </section>
  );
}