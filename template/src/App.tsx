import type { FC } from 'react';
import i18n from './utilities/i18n.utilities';
import { I18nextProvider } from 'react-i18next';
import { RootNavigator } from './navigators/RootNavigator';

export const App: FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <RootNavigator />
    </I18nextProvider>
  );
};
