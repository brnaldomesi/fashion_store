import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';

type Props = {};
export default class CameraScreen extends Component<Props> {

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    const { containerStyle } = styles;
    return (
      <CameraKitCameraScreen
        style={containerStyle}
        cameraOptions={{
          ratioOverlayColor: '#00000077'
        }}
      />
    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white'
  }
});
