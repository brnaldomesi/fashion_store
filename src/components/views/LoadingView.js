import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import colors from '../../colors';

const LoadingView = () => (
  <View style={styles.containerStyle}>
    <ActivityIndicator size="large" color={colors.gray} />
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export { LoadingView };
