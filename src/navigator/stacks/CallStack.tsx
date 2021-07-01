import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../consts/screens';
import CallMainScreen from '../../screens/tabs/call/CallMainScreen';

const Stack = createStackNavigator();

const CallStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.CALL_MAIN} component={CallMainScreen} />
    </Stack.Navigator>
  );
};
export default CallStack;
