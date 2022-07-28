import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LOCALES_EN } from '../locales/en';
import { LOCALES_IT } from '../locales/it';
// "Inline" English and Italian translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: LOCALES_EN,
  },
  it: {
    translation: LOCALES_IT,
  },
};
i18next.use(initReactI18next).init({
  debug: true,
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function getCurrentLanguage() {
  return i18next.language;
}

function changeLanguage(language) {
  return i18next.changeLanguage(language);
}

// eslint-disable-next-line no-unused-vars
function onLanguageChanged(callback) {
  return i18next.on('languageChanged', callback);
}

export { getCurrentLanguage, changeLanguage, onLanguageChanged };

export default i18next;
