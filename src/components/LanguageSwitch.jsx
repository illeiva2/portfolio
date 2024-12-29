import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="language-switch">
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
}