import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from '@sentry/react-native';

import './src/base/adapters/KeyboardManagerAdapter';
import Navigator from './src/navigator/Navigator';

import { colors } from './src/styles/colors';

if (!__DEV__) {
  // Sentry.init({
  // dsn: 'https://dsn',
  // });
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Navigator />
      <FlashMessage position="bottom" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
