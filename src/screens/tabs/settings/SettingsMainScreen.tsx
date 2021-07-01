import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

import { useRootStore } from '../../../base/hooks/useRootStore';
import Container from '../../../components/ui/Container';

import { colors } from '../../../styles/colors';

const SettingsMainScreen = observer(() => {
  const { authStore } = useRootStore();

  const [displayName, setDisplayName] = useState(authStore?.user?.displayName || '');

  const changeUserInfo = () => {
    authStore.changeUserInfo(displayName);
  };

  return (
    <Container>
      <Text style={styles.textBody}>THIS IS SETTINGS_MAIN SCREEN</Text>
      <TextInput style={styles.input} value={displayName} onChangeText={setDisplayName} />
      <Text>{JSON.stringify(authStore.user)}</Text>

      <Button title="CHANGE" onPress={changeUserInfo} />
      <Button title="LOG OUT" onPress={authStore.logout} />
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
    fontFamily: 'NotoSansJP-Bold',
  },

  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#333',
    paddingHorizontal: 10,
    marginTop: 10,
    height: 45,
    width: '100%',
  },
});
