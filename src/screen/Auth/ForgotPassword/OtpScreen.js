import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../../../constants/Colors';
import GlobalStyle from '../../../styles/GlobalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OtpInputs from 'react-native-otp-inputs';
import themeContext from '../../../constants/themeContext';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';
import { FONTS } from '../../../constants/Fonts';
import BodyRecomCommBtn from '../../../utils/BodyRecomCommBtn';
import LoginHeader from '../../../global/LoginHeader';

const OtpScreen = ({ navigation }) => {
    const route = useRoute();
    const userEmail = route.params?.userEmail || '';

    const theme = useContext(themeContext);
    const { t, i18n } = useTranslation();
    const [focused, setFocused] = React.useState(false);
    const [show, setShow] = useState(false);
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(30);
    const [isTimerActive, setIsTimerActive] = useState(true);

    const formatEmail = userEmail => {
        if (userEmail.length <= 3) {
            return userEmail;
        }
        const firstThree = userEmail.substring(0, 3);
        const dotDots = '*****';
        const atIndex = userEmail.indexOf('@');
        const domain = userEmail.substring(atIndex);
        return `${firstThree}${dotDots}${domain}`;
    };
    const error = '';
    const [code, setCode] = useState('');



    const getBorderWidth = () => {
        if (error) {
            return 1;
        }
        if (focused) {
            return 1;
        } else {
            return 0.5;
        }
    };

    const getBorderColor = () => {
        if (error) {
            return COLORS.red;
        }

        if (focused) {
            return COLORS?.customColor;
        } else {
            return COLORS?.gray;
        }
    };

    const getBgColor = () => {
        if (error) {
            return COLORS.red;
        }
        if (focused) {
            return COLORS?.colorSecondary;
        } else {

            return COLORS?.colorSecondary;
        }
    };



    const handleOTPpassword = () => {
        if (validateFieldNotEmpty(code)) {
            ShowToastMessage('OTP is required');
        } else {
            navigation.navigate('PasswordConform');
        }
    };


    const startTimer = () => {
        setIsTimerActive(true);
        setTimer(30);
    };



    // Function to handle OTP resend
    const handleResendOTP = () => {
        // Add your logic to resend OTP here
        // You can stop the timer, send a new OTP, and start the timer again
        startTimer();
    };

    useEffect(() => {
        let interval;
        if (isTimerActive) {
            interval = setInterval(() => {
                if (timer > 0) {
                    setTimer(timer - 1);
                } else {
                    setIsTimerActive(false);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer, isTimerActive]);

    // const startTimer = () => {
    //   setTimerActive(true);
    //   setTimer(60);

    //   const interval = setInterval(() => {
    //     if (timer > 0) {
    //       setTimer(timer - 1);
    //     } else {
    //       setTimerActive(false);
    //       clearInterval(interval);
    //     }
    //   }, 1000);
    // };

    // useEffect(() => {
    //   if (timerActive) {
    //     startTimer();
    //   }
    // }, [timerActive]);

    // const handleResendCode = () => {
    //   // Add logic to resend the code here
    //   // You can also add a condition to prevent resending if the timer is still active
    //   if (timerActive) {
    //     // Resend the code
    //     startTimer(); // Restart the timer
    //   }
    // };
    // const inputFromChildComponent = (combinedValueArray, currentValue, refForTheCurrentValue) => {
    //   console.log(combinedValueArray, currentValue, refForTheCurrentValue)
    // }


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
                ]}>

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
                        Verification

                    </Text>

                </View>


                <View
                    style={[
                        GlobalStyle.marginHorizontal15,
                        {

                        },
                    ]}>
                    <View
                        style={{
                        }}>

                        <View
                            style={{

                            }}>

                            <Text
                                numberOfLines={1}
                                style={[
                                    GlobalStyle?.fontSize16,
                                    {
                                        fontFamily: FONTS?.light

                                    },
                                ]}>
                                We sent you a verification code to
                            </Text>
                            <View
                                style={[
                                    GlobalStyle?.flexRowAlignCenter
                                ]}
                            >
                                <Text
                                    numberOfLines={1}
                                    style={[
                                        GlobalStyle?.fontSize16,
                                        {
                                            fontFamily: FONTS?.light
                                        },
                                    ]}>
                                    your email
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        {
                                            marginLeft: 5
                                        },
                                    ]}>
                                    bodyrecom@gmailo.com
                                </Text>
                            </View>
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.txt,
                                    {

                                    },
                                ]}>
                                {show ? '' : ` ${formatEmail(userEmail)}`}
                            </Text>
                        </View>

                        <OtpInputs
                            // code={otp}
                            // handleChange={handleOTPChange}

                            handleChange={code => setCode(code)}
                            numberOfInputs={4}
                            inputContainerStyles={{
                                // borderWidth: 0.5,
                                // borderColor: focused ? COLORS.gray : COLORS.bg_color,
                                marginHorizontal: 3,
                                height: 65,
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                borderColor: getBorderColor(),

                                backgroundColor: getBgColor(),
                                borderWidth: getBorderWidth(),

                                // backgroundColor: focused ? COLORS.gray : COLORS.bg_color,
                                // elevation: 5,
                                color: theme?.colors?.text,
                                marginTop: 30
                            }}
                            selectTextOnFocus={() => {
                                setFocused(true);
                            }}
                            onBlur={() => {
                                setFocused(false);
                            }}
                            onFocus={() => {
                                setFocused(true);
                            }}

                            inputStyles={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: theme?.colors?.text,
                            }}
                        />

                        {isTimerActive ? (
                            <View style={[
                                GlobalStyle?.marginTop15
                            ]}>
                                <Text
                                    style={[
                                        styles.resend,
                                        {
                                            color: theme?.colors?.textColor,
                                            fontSize: 16,
                                        },
                                    ]}>
                                    Resend OTP in
                                    <Text
                                        style={{
                                            color: theme?.colors?.textColor,
                                            fontWeight: 'bold',
                                            fontSize: 18,
                                        }}>
                                        {' '}
                                        {timer}{' '}
                                    </Text>{' '}
                                    seconds
                                </Text>
                            </View>
                        ) : (
                            <TouchableOpacity
                                style={[
                                    GlobalStyle?.marginTop15
                                ]}
                                onPress={handleResendOTP}>
                                <Text
                                    style={[
                                        styles.resend,
                                        {
                                            color: theme?.colors?.textColor,
                                            fontSize: 18,
                                        },
                                    ]}>
                                    Resend Code
                                </Text>
                            </TouchableOpacity>
                        )}
                        {/* <TouchableOpacity
                   onPress={handleResendCode}

         >
         <Text
            style={[
              styles.resend,
              {
                color: theme?.colors?.textColor,
                fontSize:18
              },
            ]}>
            {!show ? t('Resend Code') : ''}
          </Text>
         </TouchableOpacity> */}
                    </View>
                    <BodyRecomCommBtn
                        height={55}
                        width={'100%'}
                        borderRadius={30}
                        textSize={16}
                        fontWeight={'bold'}
                        marginTop={'20%'}
                        text={t('Next')}
                        justifyContent={'flex-end'}
                        alignItems={'flex-end'}
                        textColor={COLORS?.white}
                        // backgroundColor={theme.colors?.text}
                        onPress={() => {
                            navigation.navigate('ChangePassword');

                            // if (otp.length === 4 && /^\d{4}$/.test(otp)) {
                            //     navigation.navigate('MainContainer');
                            //     // closeSignUpModal();
                            // } else {
                            //     ShowToastMessage('Please enter a valid 4-digit OTP');
                            // }
                        }}

                        // onPress={onSubmitClick}
                        textStyle={{

                            fontFamily: FONTS?.semi_old

                        }}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default OtpScreen;

const styles = StyleSheet.create({

});
