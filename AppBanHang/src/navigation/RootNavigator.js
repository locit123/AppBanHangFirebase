import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';



const RootNavigator = () => {
  return (
    <NavigationContainer>
        <AuthNavigation />
    </NavigationContainer>
  )
}

export default RootNavigator