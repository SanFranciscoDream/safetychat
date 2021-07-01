import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../consts/screens';

import AuthAuthentificationScreen from '../../screens/auth/AuthAuthentificationScreen';
import AuthConfarmationScreen from '../../screens/auth/AuthConfarmationScreen';

const Stack = createStackNavigator();

export const AuthStack = (
  <>
    <Stack.Screen
      name={screens.AUTH_AUTHENTIFICATION}
      component={AuthAuthentificationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={screens.AUTH_CONFARMATION} component={AuthConfarmationScreen} />
  </>
);
