import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../../colors';
import fonts from '../../fonts';


const Input = ({ style, title, onChangeText, value, keyboardType = 'default' }) => {
  const {
    containerStyle,
    textStyle,
    textInputStyle
  } = styles;

  return (
    <View style={[containerStyle, style]}>
      <Text style={textStyle}>{title}</Text>

      <TextInput
        style={textInputStyle}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        clearButtonMode={'always'}
      />
    </View>
  );
};

const margin = 7;
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin
  },
  textStyle: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.gray,
    marginBottom: margin
  },
  textInputStyle: {
    fontFamily: fonts.regular,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    height: 45
  }
});

export { Input };
