import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';

import { observer } from 'mobx-react-lite';

import Container from '../../components/ui/Container';
import { useRootStore } from '../../base/hooks/useRootStore';

import { colors } from '../../styles/colors';
import { useConfirmCode } from '../../hooks/useConfirmCode';

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
      {/* Refactor to Text global */}
      <Text>Conformation code field</Text>
      {/* Refactor to Text global */}

      {/* Refactor to Code global */}
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
      {/* Refactor to Code global */}
    </Container>
  );
});
export default AuthConfarmationScreen;

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

  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 10 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 49,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    alignItems: 'center',
  },

  focusCell: {
    borderColor: '#000',
  },
});
