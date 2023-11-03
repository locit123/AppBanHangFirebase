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
import { filterData } from '../global/Data';
const SearchComponents = props => {
  const {} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocused] = useState(true);
  const textInput=useRef(0)
  const [data, setdata] = useState([...filterData]);
  console.log(data)
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
                animation={textInputFocused ? '' : 'fadeInLeft'}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicon
                  name={textInputFocused ? 'arrow-back' : 'search'}
                  style={styles.icon2}
                  onPress={() => {
                    if (textInputFocused) setModalVisible(false);
                    setTextInputFocused(false);
                  }}
                />
              </Animatable.View>
              <TextInput
                style={{width: '82%'}}
                ref={textInput}
                autoFocus={false}
              />
              <Animatable.View
                duration={400}
                animation={textInputFocused ? '' : 'fadeInLeft'}>
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

          <FlatList data={data}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity>
                    <View style={styles.view2}>

                        <Text style={{color:COLORS.gray2,fontSize:15}}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                )
            }}
            keyExtractor={item=> item.id}
          />
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
