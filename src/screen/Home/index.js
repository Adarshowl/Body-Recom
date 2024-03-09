import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Image

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'

import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import BodyRecomCommBtn from '../../utils/BodyRecomCommBtn';
import icons from '../../constants/icons';
import { useNavigation } from '@react-navigation/native';


const Home = ({ }) => {
  const navigation = useNavigation();


  const rgba1 = { r: 0, g: 143, b: 219 }; // #008FDB
  const rgba2 = { r: 1, g: 217, b: 190 }; // #01D9BE

  // Calculate the average of each color channel
  const avgR = Math.round((rgba1.r + rgba2.r) / 2);
  const avgG = Math.round((rgba1.g + rgba2.g) / 2);
  const avgB = Math.round((rgba1.b + rgba2.b) / 2);

  // Construct the new color string
  const blendedColor = `rgb(${avgR}, ${avgG}, ${avgB})`;
  return (
    <SafeAreaView
      style={[
        GlobalStyle?.mainContainer
      ]}
    >
      <View style={[
        GlobalStyle?.paddingHorizontal15,
        GlobalStyle?.paddingVertical15,
        GlobalStyle?.flexRowJustifyBtwn,
        {
          height: 130
        }
      ]}>
        <View
          style={[

          ]}
        >
          <Text
            style={[
              GlobalStyle?.fontSize18,

            ]}
          >Hello, Smith</Text>
          <Text
            style={[
              GlobalStyle?.fontSize22, {
                color: COLORS?.customColor
              }

            ]}>Stay Fit & Healthy</Text>
        </View>

        <TouchableOpacity
          // onPress={() => {
          //   navigation.openDrawer();
          // }}
        >
          <Image
            source={icons?.drawerIcon}
            style={{
              width: 50,
              height: 50
            }}
          // onPress={() => {
          //   navigation.openDrawer();
          // }}
          />
        </TouchableOpacity>
      </View>


      <ScrollView
      >
        <View
          style={[
            GlobalStyle?.marginHorizontal15,
            GlobalStyle?.marginTop15
          ]}
        >

<View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
    </View>

        </View>

        <View
          style={[
            GlobalStyle?.marginVertical10
          ]}
        />

      </ScrollView>


    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: 600,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
  },

});
