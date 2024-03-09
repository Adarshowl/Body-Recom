import React, { useState, useRef } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image

} from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import BottomSheet from 'react-native-simple-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons'
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import BodyRecomCommBtn from '../../utils/BodyRecomCommBtn';
import icons from '../../constants/icons';
import BodyRecomBorderWidthBtn from '../../utils/BodyRecomBorderWidthBtn';
import CustomBottomSheet from '../../global/CustomBottomSheet';
import ToolBarIcon from '../../utils/ToolBarIcon';


const Recipes = ({ navigation }) => {

  const [fav, setFva] = useState(false)
 
  const [data, setData] = useState([
    {
      selected: true,
      image: '',
      name: "Fish",
      id: 1,
      weight: '67.2 kg'
    },
    {
      image: icons?.home,
      selected: false,
      name: "Egg dish",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: icons?.home,
      selected: false,
      name: "Berries",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: icons?.home,
      selected: false,
      name: "Egg dish",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: icons?.home,
      selected: false,
      name: "Berries",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: icons?.home,
      selected: false,
      name: "Organic",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: icons?.home,
      selected: false,
      name: "Beans",
      id: 5,
      weight: '90.2 kg'
    },
    {
      image: icons?.home,
      selected: false,
      name: "Nuts and Seeds",
      id: 5,
      weight: '90.2 kg'
    },

  ]);

  const renderShopLove = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RecipeDetails')
        }}
        style={[
          // GlobalStyle?.mainContainer,
          // GlobalStyle?.paddingHorizontal5,
          // GlobalStyle?.paddingVertical10,
          GlobalStyle?.marginVertical10,
          GlobalStyle?.borderRadius,
          , {
            flex: 1,
            width: '40%',
            // height: 170,
            borderRadius: 10,
            // borderWidth: 0.2,
            marginHorizontal: 5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            // paddingHorizontal: 20,

            borderColor: COLORS?.gray,
            // flexDirection: 'row',
            // elevation: 5
          }]}
      >

        <ImageBackground
          source={{
            uri: 'data:image/jpeg;base64,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'
          }}
          style={{
            width: '100%', // Specify the width here
            height: 140,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10            // resizeMode: 'contain'
          }}
        >
          <ToolBarIcon
            title={Octicons}
            iconName={fav ? 'heartl' : 'heart-fill'}
            icSize={15}
            icColor={fav ? COLORS?.gray : COLORS?.white}
            style={{
              backgroundColor: '#00000080',
              borderRadius: 30,
              width: 25,
              height: 25,
              marginTop: 10,
              right: 0,
              position: 'absolute',
            }}

          />
        </ImageBackground>
        <LinearGradient
          colors={['#00000070', '#00000080', '#00000090']}
          style={{
            flex: 1,
            width: '100%',
            height: 50,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            paddingHorizontal: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10

          }}>
          <Text
            style={[
              GlobalStyle?.fontSize16,
              GlobalStyle?.colorWhite,
              GlobalStyle?.marginTop5
            ]}>
            {item?.name}
          </Text>
          <View
            style={[
              GlobalStyle?.flexRowJustifyBtwn,
              GlobalStyle?.marginTop3

            ]}
          >
            <Text
              style={[
                GlobalStyle?.fontSize13,
                GlobalStyle?.colorWhite
              ]}
            >
              All-food diet
            </Text>
            <Text
              style={[
                GlobalStyle?.fontSize13,
                GlobalStyle?.colorWhite,
              ]}
            >
              400 Kcal
            </Text>
          </View>

        </LinearGradient>

      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[
        GlobalStyle?.mainContainer
      ]}
    >
      <View
        style={[
          // GlobalStyle?.marginHorizontal15,
          // GlobalStyle?.paddingVertical15,
          // GlobalStyle?.marginTop15,
          GlobalStyle?.flexRowJustifyBtwn, {
          }
        ]}
      >
        <Text
          style={[
            GlobalStyle?.fontSize22,
            GlobalStyle?.marginLeft15, {
              fontFamily: FONTS?.bold
            }
          ]}
        >
          Recipes
        </Text>
        <TouchableOpacity
          style={[
            GlobalStyle?.marginTop, {
              alignSelf: 'center',
              justifyContent: 'center'
            }
          ]}
        >
          <Image
            source={icons?.heart}
            style={{
              width: 80,
              height: 80
            }}
          />
        </TouchableOpacity>

      </View>


      <ScrollView
      >
        <View
          style={[
            GlobalStyle?.marginHorizontal5,
            // GlobalStyle?.marginTop15
          ]}
        >

          <FlatList
            // horizontal
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              flex: 1,
              paddingLeft: 10,
              paddingRight: 10,
              // paddingBottom: 10,
              paddingTop: 15,
            }}
            data={

              data
            }
            renderItem={renderShopLove}

          />

        </View>

        {/* <View style={[
          GlobalStyle?.marginHorizontal10,
          GlobalStyle?.marginTop15
        ]}>
          <BodyRecomBorderWidthBtn
            height={55}
            width={'100%'}
            borderRadius={30}
            marginTop={30}
            textSize={17}
            borderWidth={2}
            iconPosition={'left'}
            icon={
              <AntDesign
                name='plus'
                size={25}
                color={COLORS?.customColor}
                style={{
                  marginRight: 15
                }}
              />
            }
            borderColor={COLORS?.customColor}

            textColor={COLORS?.customColor}
            text={('Add Goal')}
            backgroundColor={COLORS?.white}
            onPress={() => {
              // navigation.navigate('NewPlan');
              openBottomSheet();
            }}
            textStyle={{
              fontFamily: FONTS?.semi_bold,
              color: COLORS.colorPrimary,
            }}
          />
        </View> */}
        <View
          style={[
            GlobalStyle?.marginVertical10
          ]}
        />

      </ScrollView>

     

    </SafeAreaView>
  );
};

export default Recipes;
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: 600,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(80, 190, 180, 0)', // Adjust opacity as needed
  },
  name: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 15,
    fontFamily: 'Montserrat-Medium',
  },
  email: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: 'Montserrat-Medium',
  },
});
