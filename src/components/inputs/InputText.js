import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Input from './Input';

import colors from '../../colors';
import fonts from '../../fonts';


const InputText = ({ style, title, onChangeText, value }) => {
  const {
    containerStyle
  } = styles;

  return (
    <Input style={style} title={title}>
      <TextInput
        style={containerStyle}
        onChangeText={onChangeText}
        value={value}
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

export { InputText };
