import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

import { useRootStore } from '../../../base/hooks/useRootStore';
import Container from '../../../components/ui/Container';
import Input, { InputType } from '../../../components/ui/Input';

import { colors } from '../../../styles/colors';

const SettingsMainScreen = observer(() => {
  const { authStore } = useRootStore();

  const [displayName, setDisplayName] = useState(authStore?.user?.displayName || '');

  const changeUserInfo = () => {
    authStore.changeUserInfo(displayName);
  };

  return (
    <Container>
      <Text style={styles.headingText}>Please fill in your profile</Text>
      <Input type={InputType.DEFAULT} value={displayName} setValue={setDisplayName} label="Display name" />

      {/* <Button title="CHANGE" onPress={changeUserInfo} />
      <Button title="LOG OUT" onPress={authStore.logout} /> */}
    </Container>
  );
});
export default SettingsMainScreen;

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

  headingText: {
    fontSize: 25,
    lineHeight: 29,
    fontFamily: 'Roboto-Bold',
    color: colors.primary,
    marginTop: 5,
    marginBottom: 20,
  },
});
