import React, { useContext, useRef, useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  I18nManager,
  ScrollView
} from 'react-native';
import { FONTS } from '../../../constants/Fonts';

import { STRING, images } from '../../../constants';
import { COLORS } from '../../../constants/Colors';
import GlobalStyle from '../../../styles/GlobalStyle';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BodyRecomEditText from '../../../utils/EditText/BodyRecomEditText';
import BodyRecomCommBtn from '../../../utils/BodyRecomCommBtn';
import LoginHeader from '../../../global/LoginHeader';

const ForgotPassword = ({ navigation }) => {

  const [email, setEmail] = useState('');


  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };



  return (
    <SafeAreaView
      style={[
        GlobalStyle.mainContainer,
        {
        },
      ]}>

      <LoginHeader />

      <ScrollView

        style={[
          GlobalStyle?.marginHorizontal10,
          GlobalStyle?.marginTop15,
          {
          },
        ]}
      >
        <View style={{
          flexDirection: "row",
          alignItems: 'center'
        }}>
          <AntDesign
            name="arrowleft"
            color={COLORS.black}

            size={30}
            style={[
              GlobalStyle?.paddingHorizontal10,
              GlobalStyle?.marginVertical15,
              {
              },
            ]}
            onPress={() => {
              navigation.goBack();
              // ShowToastMessage('Coming Soon!');
            }}
          />

          <Text
            style={[
              GlobalStyle?.fontSize22,
              {
                fontSize: 28,
                fontFamily: FONTS?.regular,

              },
            ]}>
            Forgot password

          </Text>

        </View>


        <View
          style={[
            GlobalStyle.marginTop15,
            GlobalStyle?.marginHorizontal10,
            {

            },
          ]}>

          <BodyRecomEditText
            placeholder="Enter Your Email"
            label={STRING.email}
            iconPosition={'left'}
            style={{
              color: COLORS?.black,
            }}
            value={email}
            icon={
              <Fontisto name={"email"} size={20}
                color={COLORS?.black}
                style={{
                }} />
            }
            keyBoardType={'email-address'}
            onChangeText={v => setEmail(v)}
          />

          <BodyRecomCommBtn
            height={55}
            width={'100%'}
            borderRadius={10}
            textSize={16}
            fontWeight={'bold'}
            marginTop={'15%'}
            // marginTop={'80%'}

            text={"Continue"}
            textColor={COLORS?.white}
            onPress={() => {
              navigation.navigate('OtpScreen');
            }}
            textStyle={{
              fontFamily: FONTS?.semi_bold

            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  
});
