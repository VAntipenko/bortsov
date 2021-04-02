import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uk from 'locales/uk/translation.json';
import ru from 'locales/ru/translation.json';

const resources = {
    uk: {
        translation: uk,
    },
    ru: {
        translation: ru,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'uk',
    fallbackLng: 'uk',
    interpolation: {
        escapeValue: true,
    },
});

export default i18n;
