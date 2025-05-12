import { useTranslation } from 'react-i18next';

export const usePageTranslation = (page: string) => {
  const { t, i18n } = useTranslation();

  const translate = (key: string, options = {}) => {
    const fullKey = `${page}.${key}`;
    const translation = t(fullKey, options);
    return translation === fullKey ? t(key, options) : translation;
  };

  return {
    t: translate,
    i18n,
    currentLanguage: i18n.language
  };
};