import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { productData } from '../global/Data'
import { COLORS } from '../global/styles';

const ProductCard = () => {
    // const item = productData[0];
  return (
    <View style={styles.container}>
      <View style={{marginTop:10}}>
        <FlatList data={productData}
        horizontal={true}
            renderItem={({item,index})=> <CardProduct data={item}/>
        }
            keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}

        /> 
      </View>
    </View>
  )
}
const CardProduct=(props)=>{
    const {data} = props;
    return (
      <View
        style={styles.view1}>
        <View style={styles.view2}>
          <Text numberOfLines={1}>{data.name}</Text>
          <Text numberOfLines={1}>{data.price}</Text>
        </View>
        <View style={styles.view3}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: data.image}}
          />
        </View>
      </View>
    );
}
export default ProductCard

const styles = StyleSheet.create({
  container: {},
  view1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 10,
    borderLeftWidth: 1,
    marginLeft: 10,
    borderLeftColor: COLORS.gray5,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.gray5,
    marginRight: 10,
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