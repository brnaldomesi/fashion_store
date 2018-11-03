import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


type Props = {};
export default class ProductScreen extends Component<Props> {

  render() {
    const {
      containerStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <Text>OK</Text>
      </View>
    );
  }

}

const margin = 14;
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin
  }
});
