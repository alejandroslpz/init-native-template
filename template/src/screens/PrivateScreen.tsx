import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PrivateScreen = () => {
  const { t } = useTranslation('publicNavigator');

  return (
    <Container>
      <Text>{t('title')}</Text>
    </Container>
  );
};
