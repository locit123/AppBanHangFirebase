import {StyleSheet, Text, View, Dimensions,FlatList,TouchableOpacity} from 'react-native';
import React from 'react';


import {Image} from 'react-native-animatable';
const {width, height} = Dimensions.get('window');
import Ionicon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../global/styles';
import ProductCard from './ProductCard';
const SearchResultCard = ({
  images,
  averageReview,
  numberOfReviews,
  resTauRatsName,
  farAway,
  businessAddress,
  productData,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <View style={styles.view1}>
            <Image style={styles.view1Image} source={{uri: images}} />
          </View>
          <View style={styles.view2}>
            <Text style={styles.view2Text1}>{averageReview}</Text>
            <Text style={styles.view2Text2}>{numberOfReviews} reviews</Text>
          </View>
          <View>
            <Text style={styles.view2Text3}>{resTauRatsName}</Text>
          </View>
          <View style={styles.view3}>
            <View style={styles.view3View1}>
              <Ionicon name="location" size={18} color={COLORS.gray1} />
              <Text>{farAway}</Text>
            </View>
            <View style={styles.view3View2}>
              <View style={styles.view3View2View}></View>
              <Text numberOfLines={1}>{businessAddress}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 10}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={productData}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => (
            <ProductCard
              productName={item.name}
              productPrice={item.price}
              productImage={item.image}
            />
          )}
        />
      </View>
    </View>
  );
};


export default SearchResultCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  view1: {
    width: width,
    height: 180,
    borderTopRightRadius: 5,
    position: 'relative',
    borderTopLeftRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  view1Image: {
    width: '100%',
    height: '100%',

    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  view2: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(52,52,52,0.3)',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  view2Text1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  view2Text2: {
    color: 'white',
    fontWeight: 'bold',
  },
  view2Text3: {
    fontWeight: 'bold',
    marginLeft: 17,
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  view3View1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  view3View2: {
    width: width - 120,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view3View2View: {
    width: 2,
    height: 20,
    backgroundColor: COLORS.gray5,
    marginRight: 10,
  },
});
