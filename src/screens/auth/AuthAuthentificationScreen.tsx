import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

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
      <Button extraStyle={styles.buttonExtra} title="Sign in" onClick={authentification} />
    </Container>
  );
});
export default AuthAuthentification;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    lineHeight: 23,
    fontFamily: 'NotoSansJP-Bold',
    color: colors.primary,
    alignSelf: 'center',
    marginTop: 5,
  },

  bodyText: {
    fontSize: 17,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'NotoSansJP-Regular',
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
});
