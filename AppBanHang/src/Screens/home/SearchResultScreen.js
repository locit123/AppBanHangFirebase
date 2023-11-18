import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import SearchResultCard from '../../components/SearchResultCard';
import {resTauRatsDate} from '../../global/Data';
import {COLORS} from '../../global/styles';

const SearchResultScreen = ({route}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.listHeader}>
        {resTauRatsDate.length}.Search Result for {route.params.item}
      </Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={resTauRatsDate}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          
            <SearchResultCard
            images={item.images}
            averageReview={item.averageReview}
            numberOfReviews={item.numberOfReviews}
            farAway={item.farAway}
            resTauRatsName={item.resTauRatsName}
            businessAddress={item.businessAddress}
            productData={item.productData}
          />
          
          
          
        )}
      />
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  listHeader: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontWeight: 'bold',
    color: COLORS.gray1,
  },
});
