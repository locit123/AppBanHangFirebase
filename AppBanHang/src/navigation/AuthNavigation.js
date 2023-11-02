import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../Screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../Screens/authScreens/SignInScreen';
import HomeScreen from '../Screens/home/HomeScreen';
import ClientTabs from './ClientTabs';
import RestaurantsMapScreen from '../Screens/home/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
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
        name="drawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Auth.Navigator>
  );
};
export default AuthNavigation;

