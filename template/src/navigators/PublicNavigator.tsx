import type { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PublicScreen } from '~screens';

const Stack = createNativeStackNavigator();

const Header: FC = () => <SafeAreaView />;

export const PublicNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ header: Header }}>
      <Stack.Screen name="LoginScreen" component={PublicScreen} />
    </Stack.Navigator>
  );
};
