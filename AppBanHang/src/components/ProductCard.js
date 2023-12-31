import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {resTauRatsDate} from '../global/Data';
import {COLORS} from '../global/styles';

const ProductCard = ({productName, productPrice, productImage}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.view1}>
        <View style={styles.view2}>
          <Text>{productName}</Text>
          <Text>{productPrice}</Text>
        </View>
        <View style={styles.view3}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: productImage}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  view1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 10,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.gray5,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.gray5,
  },
  view2: {
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginRight: 10,
    marginLeft: 8,
  },
  view3: {
    width: 90,
    height: 70,
    marginRight: 8,
    marginVertical: 5,
  },
});
