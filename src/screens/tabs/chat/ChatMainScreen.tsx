import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../../../styles/colors';

const ChatMainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBody}>THIS IS CHAT_MAIN SCREEN</Text>
    </View>
  );
};
export default ChatMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  textBody: {
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
  },
});
