import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en', // default, will be overridden by I18nProvider
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar', 'fr'],
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
