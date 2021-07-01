import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../consts/screens';

import AuthAuthentificationScreen from '../../screens/auth/AuthAuthentificationScreen';
import AuthLoginScreen from '../../screens/auth/AuthLoginScreen';
import AuthRegistrationScreen from '../../screens/auth/AuthRegistrationScreen';
import AuthConfarmationScreen from '../../screens/auth/AuthConfarmationScreen';

const Stack = createStackNavigator();

export const AuthStack = (
  <>
    <Stack.Screen name={screens.AUTH_AUTHENTIFICATION} component={AuthAuthentificationScreen} />
    <Stack.Screen name={screens.AUTH_CONFARMATION} component={AuthConfarmationScreen} />
    <Stack.Screen name={screens.AUTH_LOGIN} component={AuthLoginScreen} />
    <Stack.Screen name={screens.AUTH_REGISTRATION} component={AuthRegistrationScreen} />
  </>
);
