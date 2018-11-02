import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import i18n from '../i18n';

type Props = {};
class LoginScreen extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('title')}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 10,
    paddingVertical: 30
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default LoginScreen;
