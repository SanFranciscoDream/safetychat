import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Navigation from '../../base/Navigation';
import { screens } from '../../navigator/consts/screens';

import { colors } from '../../styles/colors';

const AuthAuthentification = () => {
  const goToLogin = () => {
    Navigation.navigate(screens.AUTH_LOGIN);
  };

  const goToRegistration = () => {
    Navigation.navigate(screens.AUTH_REGISTRATION);
  };

  const goToApp = () => {
    Navigation.navigate(screens.MAIN_APP);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBody}>THIS IS AUTH_AUTHENTIFICATION SCREEN</Text>
      <Button title="GO TO LOGIN" onPress={goToLogin} />
      <Button title="GO TO REGISTRATION" onPress={goToRegistration} />
      <Button title="GO TO APP" onPress={goToApp} />
    </View>
  );
};
export default AuthAuthentification;

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
