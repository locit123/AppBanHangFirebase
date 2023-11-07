import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Screens/home/HomeScreen';
import SearchScreen from '../Screens/home/SearchScreen';
import MyOrdersScreen from '../Screens/home/MyOrdersScreen';
import MyAccountScreen from '../Screens/home/MyAccountScreen';
import { COLORS } from '../global/styles';
import ClientStack from './ClientStack';
const ClientTab=createBottomTabNavigator();
const ClientTabs = () => {
  return (
    <ClientTab.Navigator screenOptions={({route})=>({tabBarIcon:({focused,size,color})=>{
        let icon;
        if (route.name === 'homeScreen') {
          icon = focused ? 'home-sharp' : 'home-outline';
        } else if (route.name === 'searchScreen') {
          icon = focused ? 'search-sharp' : 'search-outline';
        } else if (route.name === 'myOrdersScreen') {
          icon = focused ? 'list-circle' : 'list-circle-outline';
        } else if (route.name === 'myAccountScreen') {
          icon = focused ? 'person' : 'person-outline';
        }
        return <Ionicon name={icon} size={size} color={color}/>
    },
    tabBarInactiveTintColor:COLORS.gray1,
    tabBarActiveTintColor:COLORS.buttons,
    headerShown:false
    })}>
      <ClientTab.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <ClientTab.Screen
        name="searchScreen"
        component={ClientStack}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <ClientTab.Screen
        name="myOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: 'My Orders',
        }}
      />
      <ClientTab.Screen
        name="myAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
        }}
      />
    </ClientTab.Navigator>
  );
}

export default ClientTabs

const styles = StyleSheet.create({})