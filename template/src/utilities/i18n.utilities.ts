import i18n from 'i18next';
import { privateNavigatorMX, publicNavigatorMX } from '~locales/es-MX';

i18n.init({
  compatibilityJSON: 'v3',
  lng: 'esMX',
  debug: true,
  resources: {
    esMX: {
      publicNavigator: publicNavigatorMX,
      privateNavigator: privateNavigatorMX,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
