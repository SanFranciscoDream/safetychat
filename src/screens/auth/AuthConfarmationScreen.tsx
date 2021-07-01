import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';

import { observer } from 'mobx-react-lite';

import Container from '../../components/ui/Container';
import { useRootStore } from '../../base/hooks/useRootStore';
import { useConfirmCode } from '../../hooks/useConfirmCode';

import { colors } from '../../styles/colors';

const AuthConfarmationScreen = observer(() => {
  const { phoneNumber } = useRoute<any>().params;

  const { authStore } = useRootStore();
  const { CELL_COUNT, value, setValue, ref, props, getCellOnLayoutHandler } = useConfirmCode();

  useEffect(() => {
    authStore.signInWithPhone(phoneNumber);
  }, []);

  const sendConfirmCode = () => {
    authStore.sendConfirmationCode(value);
  };

  return (
    <Container>
      <Text style={styles.headingText}>Conformation code field</Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        onEndEditing={sendConfirmCode}
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </Container>
  );
});
export default AuthConfarmationScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    lineHeight: 23,
    fontFamily: 'NotoSansJP-Bold',
    color: colors.primary,
    alignSelf: 'center',
    marginTop: 5,
  },

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
