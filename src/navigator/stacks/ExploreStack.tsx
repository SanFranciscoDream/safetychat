import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../consts/screens';
import ExploreMainScreen from '../../screens/tabs/explore/ExploreMainScreen';

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.EXPLORE_MAIN} component={ExploreMainScreen} />
    </Stack.Navigator>
  );
};
export default ExploreStack;
