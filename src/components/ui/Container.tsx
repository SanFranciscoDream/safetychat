import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../styles/colors';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 15,
  },
});
