// i18n/server.js

import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';

export async function getTranslation(locale) {
  const instance = i18next.createInstance();

  await instance
    .use(Backend)
    .init({
      lng: locale,
      fallbackLng: 'en',
      backend: {
        loadPath: path.resolve('./public/locales/{{lng}}/{{ns}}.json'),
      },
      ns: ['common'],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
    });

  return {
    t: instance.t.bind(instance),
  };
}
