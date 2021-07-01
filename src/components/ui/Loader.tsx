import React from 'react';
import { StyleSheet, ActivityIndicator, View, ActivityIndicatorProps } from 'react-native';

import { colors } from '../../styles/colors';

const Loader = ({ size = 'large', color = colors.primary }: ActivityIndicatorProps) => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
