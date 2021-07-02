import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import { useRootStore } from '../../base/hooks/useRootStore';
import Container from '../../components/ui/Container';
import Loader from '../../components/ui/Loader';
import Input, { InputType } from '../../components/ui/Input';
import Button from '../../components/ui/Button';

import Navigation from '../../base/Navigation';
import { screens } from '../../navigator/consts/screens';

import { colors } from '../../styles/colors';

const AuthAuthentification = observer(() => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const { authStore } = useRootStore();

  const authentification = () => {
    Navigation.navigate(screens.AUTH_CONFARMATION, { phoneNumber });
  };

  useEffect(() => {
    authStore.checkIsAuth();
  }, []);

  return authStore.loader ? (
    <Loader />
  ) : (
    <Container>
      <Text style={styles.headingText}>Enter your phone number</Text>
      <Text style={styles.bodyText}>
        <Text style={styles.bodyTextLogo}>SafetyChat</Text> will send an SMS to verify your phone number
      </Text>
      <Input type={InputType.PHONE} value={phoneNumber} setValue={setPhoneNumber} />
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require('../../assets/images/hellosmurph.png')} />
      </View>
      <Button extraStyle={styles.buttonExtra} title="Sign in" onClick={authentification} />
    </Container>
  );
});
export default AuthAuthentification;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    lineHeight: 23,
    fontFamily: 'Roboto-Bold',
    color: colors.primary,
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center',
  },

  bodyText: {
    fontSize: 19,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Roboto-Regular',
    marginBottom: 15,
  },

  bodyTextLogo: {
    color: colors.primary,
  },

  buttonExtra: {
    alignSelf: 'center',
    paddingHorizontal: 50,
    paddingVertical: 9,
    marginTop: 20,
  },

  imageWrapper: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginTop: 30,
  },

  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});
