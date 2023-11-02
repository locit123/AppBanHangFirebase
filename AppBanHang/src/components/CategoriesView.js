import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../global/styles';
const {width, height} = Dimensions.get('window');
const CategoriesView = props => {
  const {data, indexCheck, setIndexCheck} = props;
  return (
    <TouchableOpacity style={{marginBottom:25}} onPress={()=> {setIndexCheck(data.id)}}>
      <View
        style={[
          indexCheck === data.id ? styles.container : styles.container2,
        ]}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
            backgroundColor: 'white',
            padding: 5,
          }}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 50}}
            source={data.image}
          />
        </View>
        <View>
          <Text style={[indexCheck === data.id ? styles.title : styles.title2]}>{data.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.buttons,
    // width: 85,
    width: width - 325,
    height: 110,
    marginRight: 5,
    marginLeft: 9,
    marginRight: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  container2: {
    backgroundColor: COLORS.gray5,
    // width: 85,
    width: width - 325,
    height: 110,
    marginRight: 5,
    marginRight: 9,
    marginLeft: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  title: {
    color: COLORS.cardBackground,
    fontWeight: 'bold',
  },
  title2: {
    color: COLORS.gray2,
    fontWeight: 'bold',
  },
});
