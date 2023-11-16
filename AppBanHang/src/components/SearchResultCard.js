import {StyleSheet, Text, View, Dimensions,FlatList,TouchableOpacity} from 'react-native';
import React from 'react';

import {resTauRatsDate} from '../global/Data';
import {Image} from 'react-native-animatable';
const {width, height} = Dimensions.get('window');
import Ionicon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../global/styles';
const SearchResultCard = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={resTauRatsDate}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <Card2 />}
      />
    </View>
  );
};
const Card = props => {
  const {data} = props;
  return (
    <TouchableOpacity>
      <View
        style={{
          width: width,
          height: 180,
          borderTopRightRadius: 5,
          position: 'relative',
          borderTopLeftRadius: 5,
          padding: 10,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',

            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
          }}
          source={{uri: data.images}}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: 'rgba(52,52,52,0.3)',
          alignItems: 'center',
          borderRadius: 5,
          paddingHorizontal: 5,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
          {data.averageReview}
        </Text>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          {data.numberOfReviews} reviews
        </Text>
      </View>
      <View>
        <Text style={{fontWeight: 'bold', marginLeft: 17}}>
          {data.resTauRatsName}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: 20,
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 30}}>
          <Ionicon name="location" size={18} color={COLORS.gray1} />
          <Text>{data.farAway}</Text>
        </View>
        <View
          style={{
            width: width - 120,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 2,
              height: 20,
              backgroundColor: COLORS.gray5,
              marginRight: 10,
            }}></View>
          <Text numberOfLines={1}>{data.businessAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Card2 = () => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <Text>Loc</Text>
    </View>
  );
};
export default SearchResultCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
