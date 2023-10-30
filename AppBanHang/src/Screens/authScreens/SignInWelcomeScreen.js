import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import Ionicon from 'react-native-vector-icons/Ionicons';
//thư viện hiệu ứng hoạt hình
import * as Animatable from 'react-native-animatable';

//thư viện trượt Indicator Image
import Swiper from 'react-native-swiper';
import { COLORS,PARAMETERS,title } from '../../global/styles';
const SignInWelcomeScreen = () => {
  const navigation=useNavigation();
  const handleSignIn=()=>{
    navigation.navigate('signInScreen');
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: COLORS.buttons,
            fontWeight: 'bold',
          }}>
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: COLORS.buttons,
            fontWeight: 'bold',
          }}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        {/* //trượt img */}
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://img5.thuthuatphanmem.vn/uploads/2021/11/09/anh-do-an-doc-dao-dep-nhat_095145309.jpg',
              }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://img5.thuthuatphanmem.vn/uploads/2021/11/09/do-an-cute_095146414.jpg',
              }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://www.chapter3d.com/wp-content/uploads/2020/06/anh-do-an.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://img5.thuthuatphanmem.vn/uploads/2021/11/09/anh-do-an-de-thuong_095144583.jpg',
              }}
            />
          </View>
          <View>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri: 'https://img5.thuthuatphanmem.vn/uploads/2021/11/09/anh-do-an-cute-dang-yeu_095143787.jpg',
              }}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 15, marginVertical: 10}}>
          <TouchableOpacity onPress={handleSignIn} style={PARAMETERS.styledButton}>
            <Text style={PARAMETERS.buttonTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal:15,
            marginTop: 20,
          }}>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonTitle}>Create on account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.gray1,
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: COLORS.gray1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -3,
  },
});
