import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ClientTabs from './ClientTabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../global/styles';
import BusinessConsoleScreen from '../Screens/drawer/BusinessConsoleScreen';

import HelpScreen from '../Screens/drawer/HelpScreen';
import SettingSreens from '../Screens/drawer/SettingScreens';
import SettingScreens from '../Screens/drawer/SettingScreens';
import PromotionSreen from '../Screens/drawer/PromotionScreen';
import PromotionScreen from '../Screens/drawer/PromotionScreen';
import PaymentSreen from '../Screens/drawer/PaymentScreen';
import PaymentScreen from '../Screens/drawer/PaymentScreen';
import DriverConsoleScreen from '../Screens/drawer/DriverConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    //bắt buột phải nhận props để truyền dữ liệu này sang bên kia
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="ClientTab"
        component={ClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({focused, size}) => (
            <Ionicon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? '#7cc' : COLORS.gray2}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business console',
          drawerIcon: ({focused, size}) => {
            return (
              <Ionicon
                name={focused ? 'business' : 'business-outline'}
                size={size}
                color={focused ? '#7cc' : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="DriverConsoleScreen"
        component={DriverConsoleScreen}
        options={{
          title: 'Driver Console',
          drawerIcon: ({focused, size}) => {
            return (
              <Ionicon
                name={focused ? 'boat' : 'boat-outline'}
                size={size}
                color={focused ? '#7cc' : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          title: 'Payments',
          drawerIcon: ({focused, size}) => {
            return (
              <Ionicon
                name={focused ? 'card' : 'card-outline'}
                size={size}
                color={focused ? '#7cc' : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="PromotionScreen"
        component={PromotionScreen}
        options={{
          title: 'Promotions',
          drawerIcon: ({focused, size}) => {
            return (
              <Ionicon
                name={focused ? 'pricetags' : 'pricetags-outline'}
                size={size}
                color={focused ? '#7cc' : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="SettingScreens"
        component={SettingScreens}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => {
            return (
              <Ionicon
                name={focused ? 'settings' : 'settings-outline'}
                size={size}
                color={focused ? '#7cc' : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: 'Help',
          drawerIcon: ({focused, size}) => {
            return (
              <Ionicon
                name={focused ? 'help-buoy' : 'help-buoy-outline'}
                size={size}
                color={focused ? '#7cc' : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
