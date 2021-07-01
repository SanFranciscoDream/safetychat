import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../styles/colors';

interface ButtonProps {
  title: string;
  onClick: () => void;
  extraStyle?: object;
}

const Button = ({ title, onClick, extraStyle }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.buttonWrapper, extraStyle]} onPress={onClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    marginTop: 15,
    borderColor: colors.primary350,
    borderWidth: 1,
  },

  buttonText: {
    color: colors.primary,
    fontSize: 17,
  },
});
