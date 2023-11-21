import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import RestaurantHeader from '../../components/RestaurantHeader';
const RestaurantHomeScreen = props => {
  const {route, navigation} = props;
  const {id} = route.params;
  return (
    <View>
      <RestaurantHeader id={id} navigation={() => navigation.goBack()} />
    </View>
  );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({});
