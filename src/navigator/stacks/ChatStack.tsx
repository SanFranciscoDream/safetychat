import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../consts/screens';

import ChatMainScreen from '../../screens/tabs/chat/ChatMainScreen';
import ChatDetailScreen from '../../screens/tabs/chat/ChatDetailScreen';

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.CHAT_MAIN} component={ChatMainScreen} />
      <Stack.Screen name={screens.CHAT_DETAIL} component={ChatDetailScreen} />
    </Stack.Navigator>
  );
};
export default ChatStack;
