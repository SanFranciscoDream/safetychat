import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from '../base/Navigation';
import { AuthStack } from './stacks/AuthStack';
import MainStack from './stacks/MainStack';
import { colors } from '../styles/colors';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer ref={Navigation.navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'NotoSansJP-Medium',
            color: colors.secondary,
          },
        }}
      >
        {AuthStack}
        {MainStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
