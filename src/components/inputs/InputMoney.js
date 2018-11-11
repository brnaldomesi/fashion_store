import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Input from './Input';

import i18n from '../../i18n';
import colors from '../../colors';
import fonts from '../../fonts';


const InputMoney = ({ style, title, onChangeText, value }) => {
  const {
    containerStyle
  } = styles;

  return (
    <Input style={style} title={title}>
      <TextInputMask
        style={containerStyle}
        type={'money'}
        options={{
          separator: i18n.t('app.formatter.numberSeparator'),
          delimiter: i18n.t('app.formatter.numberDelimiter'),
          unit: i18n.t('app.formatter.unit')
        }}
        onChangeText={onChangeText}
        value={value}
        keyboardType={'numeric'}
        clearButtonMode={'always'}
      />
    </Input>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    fontFamily: fonts.regular,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    height: 45
  }
});

export { InputMoney };
