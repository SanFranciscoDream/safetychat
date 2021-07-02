import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

import { observer } from 'mobx-react-lite';

import Container from '../../components/ui/Container';
import { useRootStore } from '../../base/hooks/useRootStore';
import { useConfirmCode } from '../../hooks/useConfirmCode';
import CodeConfirm from './components/CodeConfirm';

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

      <CodeConfirm
        refer={ref}
        props={props}
        value={value}
        setValue={setValue}
        CELL_COUNT={CELL_COUNT}
        getCellOnLayoutHandler={getCellOnLayoutHandler}
        sendConfirmCode={sendConfirmCode}
      />
    </Container>
  );
});
export default AuthConfarmationScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    lineHeight: 23,
    fontFamily: 'Roboto-Bold',
    color: colors.primary,
    alignSelf: 'center',
    marginTop: 5,
  },
});
