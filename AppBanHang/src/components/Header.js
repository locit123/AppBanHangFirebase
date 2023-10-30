import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, PARAMETERS} from '../global/styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {StackActions} from '@react-navigation/native'
const Header = props => {
  const {title, type, navigation} = props;
  return (
    <View style={styles.header}>
      <View style={{marginHorizontal: 20}}>
        <Ionicon
          onPress={() =>
            navigation.goBack()
          }
          name={type}
          size={24}
          color={COLORS.headerText}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.buttons,
    flexDirection: 'row',
    height: PARAMETERS.headerHeight,
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.headerText,
    fontSize: 22,
    fontWeight: 'bold',
  },
});


