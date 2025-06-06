import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import hu from './locales/hu.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hu: { translation: hu }
    },
    lng: 'en', // Set default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;