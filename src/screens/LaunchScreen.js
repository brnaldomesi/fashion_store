import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { tryToSignInSilently } from '../actions';
import colors from '../colors';
import imgAppIcon from '../../assets/images/app-icon.png';

type Props = {};
class LaunchScreen extends Component<Props> {

  componentWillMount() {
    this.props.tryToSignInSilently();
  }

  render() {
    const {
      containerStyle,
      welcomeViewStyle,
      imageStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={welcomeViewStyle}>
          <Image style={imageStyle} source={imgAppIcon} />
        </View>
      </View>
    );
  }

}

const margin = 14;
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    margin
  },
  welcomeViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 100,
    width: 100,
    margin
  }
});

export default connect(null, { tryToSignInSilently })(LaunchScreen);
