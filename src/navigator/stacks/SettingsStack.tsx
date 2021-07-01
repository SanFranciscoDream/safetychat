import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../consts/screens';
import SettingsMainScreen from '../../screens/tabs/settings/SettingsMainScreen';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.SETTINGS_MAIN} component={SettingsMainScreen} />
    </Stack.Navigator>
  );
};
export default SettingsStack;
