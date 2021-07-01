import React from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { colors } from '../../styles/colors';

export enum InputType {
  PHONE = 'phone',
  DEFAULT = 'default',
}

interface InputProps {
  type: InputType;
  value: string;
  setValue: (val: string) => void;
  label?: string;
}

const Input = ({ type, value, setValue, label }: InputProps) => {
  const renderInput = () => {
    switch (type) {
      case InputType.PHONE:
        return (
          <TextInputMask
            style={styles.input}
            type={'custom'}
            placeholder="+30 694 0265350"
            placeholderTextColor={colors.placeholder}
            options={{
              mask: '+30 999 9999999',
            }}
            value={value}
            onChangeText={setValue}
          />
        );

      default:
        return <TextInput style={styles.input} value={value} onChangeText={setValue} />;
    }
  };

  return (
    <>
      {label && <Text>{label}</Text>}
      {renderInput()}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.primary350,
    paddingHorizontal: 10,
    marginTop: 10,
    height: 45,
    fontSize: 17,
  },
});
