import type { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateScreen } from '~screens';

const Stack = createNativeStackNavigator();

export const PrivateNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegisterScreen" component={PrivateScreen} />
    </Stack.Navigator>
  );
};
