import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';
const {width, height} = Dimensions.get('window');
const RenderItemSearch = props => {
  const {data,navigation} = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchResultScreen',{item:data.name})}
      style={{
        flex: 1,
        height: 200,
        margin: 10,
      }}>
      <View style={{flex: 1, position: 'relative'}}>
        <Image
          resizeMode="stretch"
          style={{width: '100%', height: '100%'}}
          source={data.image}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          position: 'absolute',
          justifyContent: 'center',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          {data.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItemSearch;

const styles = StyleSheet.create({});
