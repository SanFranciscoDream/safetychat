import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { screens } from '../consts/screens';

import ChatStack from '../stacks/ChatStack';
import SettingsStack from '../stacks/SettingsStack';
import ExploreStack from '../stacks/ExploreStack';
import CallStack from '../stacks/CallStack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={screens.CHAT_TAB}>
      <Tab.Screen name={screens.CHAT_TAB} component={ChatStack} />
      <Tab.Screen name={screens.CALL_TAB} component={CallStack} />
      <Tab.Screen name={screens.EXPLORE_TAB} component={ExploreStack} />
      <Tab.Screen name={screens.SETTINGS_TAB} component={SettingsStack} />
    </Tab.Navigator>
  );
};

export default Tabs;
