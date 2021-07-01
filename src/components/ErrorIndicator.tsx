import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../styles/colors';

const ErrorIndicator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorWarning}></Text>
    </View>
  );
};

export default ErrorIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  errorWarning: {
    fontSize: 20,
    fontFamily: 'NotoSansJP-Medium',
  },
});
