import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Header from '../../components/Header';
import {COLORS, title, PARAMETERS} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SocialIcon} from '@rneui/base';
const {width, height} = Dimensions.get('window');
import {useNavigation,StackActions} from '@react-navigation/native'
const SignInScreen = (props) => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  const {navigation} =props ;
  return (
    <View style={styles.container}>
      <Header
        title="MY ACCOUNT"
        type="arrow-back-outline"
        navigation={navigation}
      />
      <View style={{marginTop: 10, marginLeft: 15}}>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}> registered with your account</Text>
      </View>
      <View>
        <View style={{marginTop: 20}}>
          <TextInput
            ref={textInput1}
            placeholder="Email"
            style={styles.TextInput1}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            // dùng để thay đổi trang thái
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            //thời gian 0.4s
            duration={400}>
            <Ionicon
              name="lock-closed"
              style={{color: COLORS.gray3}}
              size={20}
            />
          </Animatable.View>
          <TextInput
            onFocus={() => {
              setTextInput2Focused(false);
              console.log('1');
            }}
            onBlur={() => {
              setTextInput2Focused(true);
              console.log('2');
            }}
            ref={textInput2}
            style={{width: '80%'}}
            placeholder="Password"
          />

          <Animatable.View
            //dùng để thay đổi trang thái
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            //thời gian 0.4s
            duration={400}>
            <Ionicon
              name="eye-off-sharp"
              style={{color: COLORS.gray3}}
              size={20}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 15, marginVertical: 10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('drawerNavigator')}
          style={PARAMETERS.styledButton}>
          <Text style={PARAMETERS.buttonTitle}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 22, marginBottom: 15}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          OR
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <SocialIcon
          title="Sign In With Facebook"
          type="facebook"
          button
          style={styles.SocialIcon}
          onPress={() => console.log('Sign In With Facebook')}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <SocialIcon
          title="Sign In With Google"
          type="google"
          button
          style={styles.SocialIcon}
          onPress={() => console.log('Sign In With Facebook')}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 15, marginLeft: 15}}>
        <Text style={{...styles.text1, alignSelf: 'flex-start'}}>
          New on XpressFood ?
        </Text>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginEnd: 15,
          marginTop: 20,
        }}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonTitle}>Create on account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: COLORS.gray3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 15,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 15,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
    width: width - 32,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -3,
  },
});
