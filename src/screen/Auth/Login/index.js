import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyle from '../../../styles/GlobalStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, FONTS, STRING } from '../../../constants';
import Octicons from 'react-native-vector-icons/Octicons';

import { useDispatch } from 'react-redux';
import icons from '../../../constants/icons';
import BodyRecomEditText from '../../../utils/EditText/BodyRecomEditText';
import BodyRecomCommBtn from '../../../utils/BodyRecomCommBtn';
import LoginHeader from '../../../global/LoginHeader';
import BodyRecomBorderWidthBtn from '../../../utils/BodyRecomBorderWidthBtn';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(true);
  const dispatch = useDispatch();




  return (
    <SafeAreaView
      style={[GlobalStyle.mainContainer,
        // GlobalStyle.paddingHorizontal5
      ]}>

      <LoginHeader />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={GlobalStyle.paddingHorizontal15}>

          <View
            style={{
              paddingTop: 15,
            }}
          />
          <Text
            style={[
              GlobalStyle?.fontSize22,
              GlobalStyle?.paddingHorizontal5,

              {
                fontFamily: FONTS?.regular,
                fontSize: 25
              }
            ]}
          >
            Sign In
          </Text>
          <BodyRecomEditText
            placeholder="Enter Your email"
            label={STRING.email}
            value={email}

            keyBoardType={'email-address'}
            onChangeText={v => setEmail(v)}
          />
          <BodyRecomEditText
            placeholder="Enter Your password"
            label={STRING.password}
            iconPosition={'right'}
            secureTextEntry={showOtp}
            value={password}
            icon={
              <Octicons
                name={showOtp ? 'eye-closed' : 'eye'}
                size={20}
                onPress={() => setShowOtp(!showOtp)}
                color={COLORS.primary}
                style={{
                  marginHorizontal: 5,
                }}
              />
            }
            onChangeText={v => setPassword(v)}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword')
            }}
          >
            <Text
              style={styles.forgotPass}
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              {/* {STRING.forgotPassQues} */}
              Forgot Password
            </Text>

          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: 8
            }}
          >
            <BodyRecomCommBtn
              height={50}
              borderRadius={30}
              width={'100%'}
              // marginHorizontal={5}
              marginTop={25}
              text="Sign In"
              backgroundColor={COLORS.primary}
              textStyle={{
                fontFamily: FONTS.medium,
              }}
              onPress={() => {
                navigation.navigate('MainContainer');
                // handleLoginBtnClick();
              }}
              textColor={COLORS.white}
              textSize={17}
            />
          </View>


          <Text style={[styles.newUser]} numberOfLines={2}>
            Don't have an account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={[
                GlobalStyle?.fontSize16,
                {
                  fontFamily: FONTS?.semi_bold
                }
              ]}
              numberOfLines={2}>
              Sign Up
            </Text>
          </Text>

          <BodyRecomBorderWidthBtn
            height={55}
            width={'100%'}
            borderRadius={30}
            borderWidth={0.5}
            borderColor={COLORS?.gray}
            marginTop={15}
            textSize={16}
            iconPosition={'left'}
            icon={
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/281/281764.png'
                }}
                style={{
                  width: 26,
                  height: 26,
                  marginRight: 20
                }}
              />
            }
            textColor={COLORS?.black}
            text={('Sign in With Google')}
            backgroundColor={COLORS?.white}
            onPress={() => {
              // navigation.navigate('MainContainer');
              // languageRestart();
            }}
            textStyle={{
              fontFamily: FONTS?.regular,
              color: COLORS.colorPrimary,
            }}
          />
          <BodyRecomBorderWidthBtn
            height={55}
            width={'100%'}
            borderRadius={30}
            borderWidth={0.5}
            marginTop={16}
            borderColor={COLORS?.gray}
            iconPosition={'left'}
            icon={
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/145/145802.png"
                }}
                style={{
                  width: 26,
                  height: 26,
                  marginRight: 20
                }}
              />
            }
            textSize={16}
            textColor={COLORS?.black}
            text={('Sign in With Facebook')}
            backgroundColor={COLORS?.white}
            onPress={() => {
              // navigation.navigate('MainContainer');
              // languageRestart();
            }}
            textStyle={{
              fontFamily: FONTS?.regular,
              color: COLORS.colorPrimary,
            }}
          />

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  socialBtnRight: {
    borderRadius: 5,
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    marginStart: 5,
    height: 40,
    justifyContent: 'center',
    borderWidth: 0.5,
    paddingVertical: 15,
    borderColor: 'rgba(42, 55, 98, 0.5)',
  },

  socialBtnLeft: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
    height: 40,
    borderRadius: 5,
    marginEnd: 5,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(42, 55, 98, 0.5)',
  },
  loginLogo: {
    // height: 160,
    // width: 160,
    // alignSelf: 'center',
    // resizeMode: 'cover',
    // marginTop: 40,
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
  welcomeBack: {
    fontSize: 22,
    fontFamily: FONTS.semi_bold,
    color: COLORS.primary,
    marginTop: 25,
  },
  welcomeBelow: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    marginTop: 5,
    color: COLORS.grey,
  },
  forgotPass: {
    fontSize: 15,
    marginStart: 5,
    marginTop: 10,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginRight: 8
  },
  orLogin: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 15,
    fontFamily: FONTS.regular,
    textAlign: 'center',
  },
  socialBtnIcon: {
    height: 24,
    width: 24,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  newUser: {
    fontSize: 15,
    marginVertical: 25,
    fontFamily: FONTS.regular,
    textAlign: 'center',
    color: COLORS.grey,
  },
  signUp: {
    fontSize: 15,
    marginTop: 15,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    color: COLORS.primary,
  },
});
