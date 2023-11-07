import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchComponents from '../../components/SearchComponents'
import { useNavigation } from '@react-navigation/native'
const SearchScreen = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <SearchComponents/>
    </View>
  );
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    marginHorizontal:10
  }
})