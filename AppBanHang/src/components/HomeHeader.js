import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {COLORS, PARAMETERS} from '../global/styles';
const HomeHeader = (props) => {
    const {name,titleHeader,numberCart,name2}= props;
  return (
    <View style={styles.header}>
      <View>
        <Ionicon name={name} size={32} color={COLORS.cardBackground} />
      </View>
      <View>
        <Text style={{fontSize: 25, color: COLORS.cardBackground, fontWeight: 'bold'}}>
          {titleHeader}
        </Text>
      </View>
      <View>
        <Ionicon
          style={{position: 'relative'}}
          name={name2}
          size={32}
          color={COLORS.cardBackground}
        />
        <View
          style={{
            position: 'absolute',
            top: 7,
            right: -7,
            borderRadius: 20,
            width: 17,
            height: 17,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.cardBackground, fontSize: 10}}>
            {numberCart}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    height: PARAMETERS.headerHeight,
    backgroundColor: COLORS.buttons,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:15
  },
});
