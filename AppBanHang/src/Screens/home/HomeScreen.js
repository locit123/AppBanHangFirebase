import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import HomeHeader from '../../components/HomeHeader';
import {COLORS} from '../../global/styles';
const {width, height} = Dimensions.get('window');
console.log(width);
const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader
        name="menu"
        titleHeader="XpressFood"
        numberCart="0"
        name2="cart"
      />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        {/* dùng thuộc tính stickyHeaderIndices để đính View này lại */}
        <View>
          <View style={styles.tabView}>
            <TouchableOpacity onPress={() => setDelivery(true)}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? COLORS.buttons : COLORS.gray5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDelivery(false)}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? COLORS.gray5 : COLORS.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick-up</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.filterView}>
            <View style={styles.flexView}>
              <View style={styles.ItemView}>
                <Ionicon name="location" size={26} color={COLORS.gray1} />
                <Text style={{color: COLORS.gray1}}>22 HaNoi Stress</Text>
              </View>
              <View style={styles.ItemView2}>
                <Ionicon name="time-sharp" size={26} color={COLORS.gray1} />
                <Text style={{color: COLORS.gray1}}>Now</Text>
              </View>
            </View>
            <View>
              <Ionicon name="options" size={26} color={COLORS.gray1} />
            </View>
          </View>
        </View>
        {/* HẾT */}

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  deliveryButton: {
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  deliveryText: {
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 20,
  },
  flexView: {
    backgroundColor: COLORS.gray5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 80,
  },
  ItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  ItemView2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 8,
    marginVertical: 5,
  },
  headerTextView: {
    backgroundColor: COLORS.gray5,
    paddingLeft: 5,
  },
  headerText: {
    fontSize: 24,
    color: COLORS.gray2,
    fontWeight: 'bold',
  },
});
