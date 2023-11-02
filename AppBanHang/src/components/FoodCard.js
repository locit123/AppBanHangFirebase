import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../global/styles';
import {Image} from 'react-native-animatable';
import {buildWorkletsHash} from 'react-native-reanimated/lib/typescript/reanimated2/hook/utils';

const FoodCard = props => {
  const {
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    numberOfReviews,
    businessAddress,
    farAway,
    averageReview,
    images,
    width,
    width2,
    height
  } = props;
  return (
    <TouchableOpacity
      onPress={onPressFoodCard}
      style={[styles.cardView, {width: width}]}>
      <View style={{width: width}}>
        <Image
          source={{uri: images}}
          style={[styles.image, {width: width, position: 'relative',height:height}]}
        />
        <View style={styles.review}>
          <Text style={styles.average}>{averageReview}</Text>
          <Text style={{color:COLORS.cardBackground,fontWeight:'bold'}}>{numberOfReviews} Review</Text>
        </View>
      </View>
      <View style={{padding: 5, backgroundColor: COLORS.gray5}}>
        <View>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View style={[styles.distance, {flex: 3}]}>
            <Ionicon name="location" size={20} color={COLORS.gray1} />
            <Text style={styles.Min}>{farAway} Min</Text>
          </View>
          <View style={{flex: 8}}>
            <Text numberOfLines={1} style={[styles.address, {width: width2}]}>
              {businessAddress}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  cardView: {
    borderWidth: 1,
    borderColor: COLORS.gray4,
    borderRadius: 5,
    marginHorizontal:10,
    marginVertical:10
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.gray1,
    marginTop: 5,
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
  },
  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: COLORS.gray3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: COLORS.gray2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52,52,52,0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: COLORS.cardBackground,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
});
