import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../../../styles/colors';

const SettingsMainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBody}>THIS IS SETTINGS_MAIN SCREEN</Text>
    </View>
  );
};
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
});
