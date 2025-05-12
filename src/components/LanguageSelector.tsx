import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' }
  ];

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300"
      >
        <span className="text-sm">{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
      </motion.button>
      
      <div className="absolute right-0 mt-2 py-2 w-48 bg-black/90 rounded-lg border border-primary-glow/20 backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-primary-glow/10 transition-colors duration-200 ${
              i18n.language === lang.code ? 'text-primary-glow' : 'text-white/70'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};