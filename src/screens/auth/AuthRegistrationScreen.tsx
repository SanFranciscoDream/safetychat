import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../../styles/colors';

const AuthRegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBody}>THIS IS AUTH_REGISTRATION SCREEN</Text>
    </View>
  );
};
export default AuthRegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  textBody: {
    fontSize: 25,
    fontFamily: 'NotoSansJP-Bold',
  },
});
