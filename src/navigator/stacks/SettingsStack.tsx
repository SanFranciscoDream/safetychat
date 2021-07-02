import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../consts/screens';
import SettingsMainScreen from '../../screens/tabs/settings/SettingsMainScreen';
import { stackOptions } from '../../helpers/NavigationHelper';

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name={screens.SETTINGS_MAIN} component={SettingsMainScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
};
export default SettingsStack;
