import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';

import { colors } from '../../../styles/colors';

interface CodeConfirmProps {
  refer: any;
  props: any;
  value: string;
  setValue: (val: string) => void;
  CELL_COUNT: number;
  sendConfirmCode: () => void;
  getCellOnLayoutHandler: any;
}

const CodeConfirm = ({
  refer,
  props,
  value,
  setValue,
  CELL_COUNT,
  sendConfirmCode,
  getCellOnLayoutHandler,
}: CodeConfirmProps) => {
  return (
    <CodeField
      ref={refer}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      onEndEditing={sendConfirmCode}
      renderCell={({ index, symbol, isFocused }) => (
        <Text style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)} key={index}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default CodeConfirm;

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 10 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 49,
    fontSize: 24,
    borderWidth: 2,
    borderColor: colors.placeholder350,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  focusCell: {
    borderColor: colors.primary,
  },
});
