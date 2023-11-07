import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchResultScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View>
      <Text>{route.params.item}</Text>
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({})