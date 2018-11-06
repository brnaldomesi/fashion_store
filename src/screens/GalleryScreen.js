import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CameraKitGalleryView } from 'react-native-camera-kit';
import { dismissModal } from './';
import i18n from '../i18n';
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

  componentWillMount() {
    this.props.navigator.setTitle({ title: i18n.t('gallery.title') });
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
    margin: 0
  }
});
