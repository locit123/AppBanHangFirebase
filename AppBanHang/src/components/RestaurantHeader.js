import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Ionicon2 from 'react-native-vector-icons/MaterialIcons';
import {resTauRatsDate} from '../global/Data';
import {COLORS} from '../global/styles';
const RestaurantHeader = ({id, navigation}) => {
  const [focusedIcon, setFocusedIcon] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri: resTauRatsDate[id].images}}
        imageStyle={styles.image}
        resizeMode="cover"
      />
      <View style={styles.viewContent}>
        <TouchableOpacity style={styles.view1} onPress={navigation}>
          <Ionicon name="arrow-back-outline" size={24} color={COLORS.gray1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.view1}
          onPress={() => setFocusedIcon(!focusedIcon)}>
          <Ionicon2
            name={focusedIcon ? 'favorite' : 'favorite-border'}
            size={24}
            color={focusedIcon ? 'red' : 'red'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantHeader;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: 'pink',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  viewContent: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },

  view1: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 50,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
