import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchComponents from '../../components/SearchComponents'

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchComponents />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    marginHorizontal:10
  }
})