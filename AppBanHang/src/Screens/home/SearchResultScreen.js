import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchResultCard from '../../components/SearchResultCard'
import { resTauRatsDate } from '../../global/Data';
import { COLORS } from '../../global/styles';


const SearchResultScreen = ({route}) => {
  
  return (
    <View style={{flex: 1}}>
      <Text style={styles.listHeader}>
       {resTauRatsDate.length}.Search Result for {route.params.item}
      </Text>
      <SearchResultCard />
      
    </View>
  );
}

export default SearchResultScreen

const styles = StyleSheet.create({
  listHeader:{
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:15,fontWeight:'bold',
    color:COLORS.gray1
  }
})