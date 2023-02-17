import type { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateNavigator } from './PrivateNavigator';
import { PublicNavigator } from './PublicNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigator: FC = () => {
  const user = null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Private" component={PrivateNavigator} />
        ) : (
          <Stack.Screen name="Public" component={PublicNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
