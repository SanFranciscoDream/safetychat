import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../../../styles/colors';

const ExploreMainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBody}>THIS IS EXPLORE_MAIN SCREEN</Text>
    </View>
  );
};
export default ExploreMainScreen;

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
