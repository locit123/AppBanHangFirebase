import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../Screens/home/SearchScreen';
import SearchResultScreen from '../Screens/home/SearchResultScreen';
import RestaurantHomeScreen from '../Screens/home/RestaurantHomeScreen';

const ClientSearch = createNativeStackNavigator();
const ClientStack = () => {
  return (
    <ClientSearch.Navigator screenOptions={{headerShown: false}}>
      <ClientSearch.Screen name="SearchScreen" component={SearchScreen} />
      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
      />
      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
      />
    </ClientSearch.Navigator>
  );
};

export default ClientStack;

const styles = StyleSheet.create({});
