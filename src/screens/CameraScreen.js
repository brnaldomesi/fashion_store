import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { dismissModal } from './';
import i18n from '../i18n';
import colors from '../colors';
import imgCameraCapture from '../../assets/images/camera-capture.png';
import imgCameraFlashAuto from '../../assets/images/camera-flash-auto.png';
import imgCameraFlashOff from '../../assets/images/camera-flash-off.png';
import imgCameraFlashOn from '../../assets/images/camera-flash-on.png';
import imgCameraFlip from '../../assets/images/camera-flip.png';

type Props = {};
export default class CameraScreen extends Component<Props> {

  static navigatorStyle = {
    navBarHidden: true,
    // iOS only
    statusBarTextColorSchemeSingleScreen: 'light'
  };

  componentDidMount() {

  }

  onButtonPressed(event) {
    if (event.type === 'left') {
      dismissModal(this.props.navigator);
      return;
    }

    if (event.type === 'right') {
      return;
    }

    //const captureImages = JSON.stringify(event.captureImages);
  }

  render() {
    const { containerStyle } = styles;
    return (
      <CameraKitCameraScreen
        style={containerStyle}
        cameraOptions={{
          ratioOverlayColor: colors.black
        }}
        actions={{
          rightButtonText: i18n.t('app.done'),
          leftButtonText: i18n.t('app.cancel')
        }}
        flashImages={{
          auto: imgCameraFlashAuto,
          off: imgCameraFlashOff,
          on: imgCameraFlashOn
        }}
        cameraFlipImage={imgCameraFlip}
        captureButtonImage={imgCameraCapture}
        onBottomButtonPressed={(event) => this.onButtonPressed(event)}
      />
    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.black
  }
});
