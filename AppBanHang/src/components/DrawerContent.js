import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import {Avatar} from '@rneui/base';
import {COLORS} from '../global/styles';
import Ionicon from 'react-native-vector-icons/Fontisto';
import Ionicon2 from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
const DrawerContent = props => {
    const [toggle, setToggle] = useState(false);
console.log(toggle);
  return (
    <View style={styles.container}>
    {/* //dùng để cuộn view khi quá dài */}
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: COLORS.buttons}}>
          <View
            style={{
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 15,
            }}>
            <Avatar
              rounded
              size={75}
              avatarStyle={styles.avatar}
              source={{
                uri: 'https://static.kfcvietnam.com.vn/images/items/lg/happy_meal.jpg?v=3r2kb3',
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.cardBackground,
                  fontSize: 18,
                }}>
                Phung Loc
              </Text>
              <Text
                style={{
                  color: COLORS.cardBackground,
                  fontSize: 14,
                }}>
                loc@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.cardBackground,
                }}>
                1
              </Text>
              <Text style={{fontSize: 14, color: COLORS.cardBackground}}>
                My Favorites
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: COLORS.cardBackground,
                }}>
                0
              </Text>
              <Text style={{fontSize: 14, color: COLORS.cardBackground}}>
                My Cart
              </Text>
            </View>
          </View>
        </View>
        {/* //dùng để hiển thị tất cả các Screen */}
        <DrawerItemList {...props} />
        <View>
          <View
            style={{
              borderTopWidth: 2,
              borderTopColor: COLORS.gray5,
              marginHorizontal: 20,
            }}>
            <Text style={styles.preferences}>Preferences</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.preferences, {paddingTop: 10}]}>
                Dark Theme
              </Text>
              {/* toggle-on */}
              <TouchableOpacity onPress={() => setToggle(!toggle)}>
                <Ionicon name={toggle ? 'toggle-on' : 'toggle-off'} size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label={'SignOut'}
        icon={({focused, size}) => (
          <Ionicon2 name="log-in-outline" size={size} />
        )}
      />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: COLORS.cardBackground,
  },
  preferences: {
    fontSize: 16,
    color: COLORS.gray2,
    paddingTop: 10,
  },
});
