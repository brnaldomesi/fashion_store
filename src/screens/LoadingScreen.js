import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoadingView } from '../components';

type Props = {};
export default class LoadingScreen extends Component<Props> {

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <LoadingView />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
