import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../global/styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import {filterData} from '../global/Data';
import {useNavigation} from '@react-navigation/native';
const SearchComponents = props => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocused] = useState(true);
  const textInput = useRef(0);
  console.log(textInput);
  const [data, setdata] = useState([...filterData]);
  console.log(data);

  // //lọc dữ liệu
  // const searchByName = searchTerm => {
  //   const searchResults = filterData.filter(item =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  //   );

  //   setdata([...searchResults]);
  // };

  // console.log(data);

  // //lọc dữ liệu = filter
  const handleSearch = text => {
    const locDuLieu = filterData.filter(locItem => {
      //chuyển tất cả thành chữ thường.includes để kiểm tra xem người dùng có nhập đúng kqua xảy ra hay ko nếu đúng(text.toLowerCase())=>text là value ngườid dùng nhập để đối xứng với kqua đã tìm thấy
      return locItem.name.toLowerCase().includes(text.toLowerCase());
    });
    setdata([...locDuLieu]);
  };
  console.log(data);
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.searchArea}>
          <Ionicon
            style={styles.searchIcon}
            name="search"
            size={32}
            color={COLORS.gray2}
          />
          <Text style={{fontSize: 15}}>What are you looking for ?</Text>
        </View>
      </TouchableOpacity>
      <Modal
        onRequestClose={() => setModalVisible(false)}
        animationType="fade"
        transparent={false}
        visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View
                duration={400}
                animation={textInputFocused ? 'fadeInLeft' : 'fadeInLeft'}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicon
                  name={textInputFocused ? 'arrow-back' : 'search'}
                  style={styles.icon2}
                  onPress={() => {
                    if (textInputFocused) setModalVisible(false);
                    setTextInputFocused(true);
                  }}
                />
              </Animatable.View>
              <TextInput
                style={{width: '82%'}}
                ref={textInput}
                autoFocus={false}
                onFocus={() => setTextInputFocused(true)}
                onBlur={() => setTextInputFocused(false)}
                onChangeText={handleSearch}
                
                
              />
              <Animatable.View
                duration={400}
                animation={textInputFocused ? 'fadeInLeft' : 'fadeInLeft'}>
                <Ionicon
                  name={textInputFocused ? 'close-circle' : null}
                  style={styles.icon2}
                  onPress={() => {
                   textInput.current.clear();
                  }}
                />
              </Animatable.View>
            </View>
          </View>
          {data.length > 0 ? (
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SearchResultScreen', {
                        item: item.name,
                      })
                    }>
                    <View style={styles.view2}>
                      <Text style={{color: COLORS.gray2, fontSize: 15}}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={{color:COLORS.gray1,fontWeight:'bold',fontSize:30,alignSelf:'center'}}>Không có dữ liệu</Text>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default SearchComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: COLORS.gray3,
    fontSize: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  searchArea: {
    marginTop: 10,
    height: 50,
    width: '100%',
    backgroundColor: COLORS.gray5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: COLORS.gray2,
  },
  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  view2: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: COLORS.gray2,
  },
  modal: {
    flex: 1,
  },
});
