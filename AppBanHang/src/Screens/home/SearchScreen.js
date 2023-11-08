import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import SearchComponents from '../../components/SearchComponents';
import {useNavigation} from '@react-navigation/native';
import {filterData2} from '../../global/Data';
import RenderItemSearch from '../../components/RenderItemSearch';
import {COLORS} from '../../global/styles';
const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SearchComponents />
      <View style={{flex: 1}}>
        <FlatList
          // style={{margin: 10}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={'2'}
          data={filterData2}
          renderItem={({item}) => <RenderItemSearch data={item} />}
          keyExtractor={item => item.id}
          ListFooterComponent={<Footer />}
          ListHeaderComponent={
            <Text
              style={{
                marginStart: 10,
                marginVertical: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: COLORS.gray1,
              }}>
              Top Categories
            </Text>
          }
        />
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        // style={{margin: 10}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={'2'}
        data={filterData2}
        renderItem={({item}) => <RenderItemSearch data={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Text
            style={{
              marginStart: 10,
              marginVertical: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: COLORS.gray1,
            }}>
            More Categories
          </Text>
        }
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
});
