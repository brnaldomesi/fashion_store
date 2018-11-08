import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CameraKitGalleryView } from 'react-native-camera-kit';
import { dismissModal } from './';
import colors from '../colors';
import imgAppClose from '../../assets/images/app-close.png';

const CLOSE_BUTTON_ID = 'close';
type Props = {};
export default class GalleryScreen extends Component<Props> {

  static navigatorButtons = {
    leftButtons: [{ id: CLOSE_BUTTON_ID, icon: imgAppClose }]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type !== 'NavBarButtonPress') {
      return;
    }

    if (event.id === CLOSE_BUTTON_ID) {
      dismissModal(this.props.navigator);
    }
  }

  render() {
    const { containerStyle } = styles;
    return (
      <CameraKitGalleryView
        style={containerStyle}
        minimumInteritemSpacing={1}
        minimumLineSpacing={1}
        columnCount={3}
        onTapImage={() => { dismissModal(this.props.navigator); }}
      />
    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
    margin: 0
  }
});
