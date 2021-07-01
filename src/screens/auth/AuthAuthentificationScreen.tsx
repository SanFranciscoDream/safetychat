import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Navigation from '../../base/Navigation';
import Container from '../../components/ui/Container';
import { screens } from '../../navigator/consts/screens';

const AuthAuthentification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const authentification = () => {
    Navigation.navigate(screens.AUTH_CONFARMATION, { phoneNumber });
  };

  return (
    <Container>
      {/* Refactor to text global */}
      <Text>Login with Phone {phoneNumber}</Text>
      {/* Refactor to text global */}

      {/* Refactor to input global */}
      <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} />
      {/* Refactor to input global */}

      {/* Refactor to Button global */}
      <TouchableOpacity style={styles.buttonWrapper} onPress={authentification}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      {/* Refactor to Button global */}
    </Container>
  );
};
export default AuthAuthentification;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#333',
    paddingHorizontal: 10,
    marginTop: 10,
    height: 45,
  },

  buttonWrapper: {
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    height: 43,
    marginTop: 15,
    backgroundColor: 'red',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
