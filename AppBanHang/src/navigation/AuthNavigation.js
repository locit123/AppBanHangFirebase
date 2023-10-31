import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../Screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../Screens/authScreens/SignInScreen';
import HomeScreen from '../Screens/home/HomeScreen';
const Auth = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="signInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="signInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Auth.Navigator>
  );
};
export default AuthNavigation;

