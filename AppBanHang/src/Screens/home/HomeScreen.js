import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import HomeHeader from '../../components/HomeHeader';
import {COLORS} from '../../global/styles';
import {filterData, resTauRatsDate} from '../../global/Data';
import CategoriesView from '../../components/CategoriesView';
import FoodCard from '../../components/FoodCard';
import CountDown from 'react-native-countdown-component'
const {width, height} = Dimensions.get('window');
console.log('=>>>>>>', width);
const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState(1);
  console.log(indexCheck);
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
        <View
          style={{backgroundColor: COLORS.cardBackground, paddingBottom: 10}}>
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
        </View>
        {/* HẾT */}
        {/* Phần 2 */}
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
        {/* PHẦN 3 */}
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            data={filterData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <CategoriesView
                data={item}
                indexCheck={indexCheck}
                setIndexCheck={setIndexCheck}
              />
            )}
            keyExtractor={item => item.id}
            extraData={indexCheck}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free delivery now</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                marginRight: 5,
                marginLeft: 15,
                marginTop:8,
                fontWeight: 'bold',
              }}>
              Options changing in
            </Text>
            <CountDown
              //Số giây đếm ngược
              until={3600}
              //kích thước
              size={14}
              //background
              digitStyle={{backgroundColor: COLORS.lightgreen}}
              //colorText
              digitTxtStyle={{color: COLORS.cardBackground}}
              //Chỉnh chỉ hiện M:Phút,S: giây
              timeToShow={['M', 'S']}
              //chử ở dưới time
              timeLabels={{m: 'Min', s: 'Sec'}}
              //hiển thị dấu phân cách ở giữa
              // showSeparator={true}
            />
          </View>
          <FlatList
            data={resTauRatsDate}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <FoodCard
                restaurantName={item.resTauRatsName}
                numberOfReviews={item.numberOfReviews}
                businessAddress={item.businessAddress}
                farAway={item.farAway}
                averageReview={item.averageReview}
                images={item.images}
                width={width * 0.95}
                height={150}
                width2={width * 0.95 - 100}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your area</Text>
        </View>
        <View>
          {resTauRatsDate.map(item => {
            return (
              <View key={item.id}>
                <FoodCard
                  restaurantName={item.resTauRatsName}
                  numberOfReviews={item.numberOfReviews}
                  businessAddress={item.businessAddress}
                  farAway={item.farAway}
                  averageReview={item.averageReview}
                  images={item.images}
                  width={width * 0.95}
                  height={200}
                  width2={width * 0.95 - 100}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
