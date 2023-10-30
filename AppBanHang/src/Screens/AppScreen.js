import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react'
import { COLORS } from '../global/styles';
import RootNavigator from '../navigation/RootNavigator';
const AppScreens = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.statusBar}
      />
      <RootNavigator />
    </View>
  );
}

export default AppScreens

const styles = StyleSheet.create({ 
  container:{
    flex:1
  }
})