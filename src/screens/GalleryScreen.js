import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CameraKitGalleryView } from 'react-native-camera-kit';
import colors from '../colors';

type Props = {};
export default class GalleryScreen extends Component<Props> {

  render() {
    const { containerStyle } = styles;
    return (
      <CameraKitGalleryView
        style={containerStyle}
        minimumInteritemSpacing={1}
        minimumLineSpacing={1}
        columnCount={3}
        onTapImage={() => { }}
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
