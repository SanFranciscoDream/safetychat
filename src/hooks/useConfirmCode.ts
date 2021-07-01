import { useState } from 'react';
import { useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

export const useConfirmCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return {
    CELL_COUNT,
    value,
    setValue,
    ref,
    props,
    getCellOnLayoutHandler,
  };
};
