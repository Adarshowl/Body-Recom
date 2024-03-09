import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList
} from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONTS, SIZES, STRING } from '../../constants';
import icons from '../../constants/icons';
import BodyRecomEditText from '../../utils/EditText/BodyRecomEditText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import BodyRecomCommBtn from '../../utils/BodyRecomCommBtn';
import { useNavigation } from '@react-navigation/native';


const Steps7Scr = ({ }) => {
    const [showOtp, setShowOtp] = useState(false);
    const navigation = useNavigation();
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [checkbox, setCheckbox] = useState(false);

    const [data, setData] = useState([
        {
            image: icons.dumbbell,
            selected: true,
            name: "Little or no exercise"
        },
        {
            image: icons.back,
            selected: false,
            name: "Exercise 1-3 Day/Week"
        },
        {
            image: icons.weightlifting,
            selected: false,
            name: 'Moderate exercise (3-5 day per week)'
        },

        {
            image: icons.Exercise,
            selected: false,
            name: 'Heavy exercise (6-7 day per week)'
        },
        {
            image: icons.dumbbell,
            selected: false,
            name: "Continue"
        },
        {
            image: icons.dumbbell,
            selected: false,
            name: "Continue"
        },

    ]);

    const renderShopLove = ({ item }) => {
        return (
            <TouchableOpacity
                style={[
                    GlobalStyle?.mainContainer,
                    GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.marginVertical5,
                    , {
                        flex: 1,
                        width: '50%',
                        height: 120,
                        borderRadius: 8,
                        // borderWidth: 0.2,
                        marginVertical: 20,
                        // padding:25,
                        elevation: 2


                    }]}
            >
                <View
                    style={[
                        {
                            backgroundColor: COLORS?.white,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            borderRadius: 50,
                            width: 60,
                            height: 60,
                            alignItems: 'center',
                            marginTop: -22
                            // position: 'absolute'

                        },
                    ]}>
                    <Image source={item.image}
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'stretch'
                            // borderRadius: 10
                        }}
                    />

                </View>
                <Text
                    style={[
                        GlobalStyle?.fontSize18,
                        GlobalStyle?.marginTop15
                        , {
                            textAlign: 'center',
                            fontSize: 16,
                            fontFamily: FONTS?.medium
                        }
                    ]}
                >
                    {
                        item?.name
                    }
                </Text>

            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={[
            // GlobalStyle.mainContainer,
            GlobalStyle.paddingHorizontal15, {
            }]}>

            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15
                ]}
            >Personal Information</Text>

            <View style={{
                flex: 1
            }}>
                <BodyRecomEditText
                    placeholder="Enter your name"
                    label="Full Name"

                    keyBoardType={'email-address'}
                // onChangeText={v => setEmail(v)}
                />
                <BodyRecomEditText
                    placeholder="Enter your email"
                    label="Email"

                    keyBoardType={'email-address'}
                // onChangeText={v => setEmail(v)}
                />

                <BodyRecomEditText
                    placeholder="Enter your Phone Number"
                    label="Phone Number"
                    iconPosition={'left'}
                    style={{
                        marginHorizontal: 10,
                        marginLeft: 20

                    }}

                    // value={email}
                    icon={
                        <View style={[
                            GlobalStyle?.flexRowAlignCenter,
                            GlobalStyle?.marginLeft15
                        ]}>
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/128/321/321238.png'
                                }}
                                style={{
                                    width: 28,
                                    height: 32,
                                    borderRadius: 5
                                }}
                            />
                            <AntDesign
                                name='caretdown'
                                size={15}
                                color={COLORS?.black}
                                style={[GlobalStyle?.marginHorizontal5]}
                            />
                        </View>
                    }
                    keyBoardType={'number-pad'}
                // onChangeText={v => setEmail(v)}
                />
                <BodyRecomEditText
                    placeholder="Enter your Password"
                    label="Password"
                    iconPosition={'right'}
                    style={{
                    }}
                    secureTextEntry={true}
                    // value={email}
                    icon={
                        <Octicons
                            name={showOtp ? 'eye-closed' : 'eye'}
                            size={20}
                            onPress={() => setShowOtp(!showOtp)}
                            color={COLORS.gray}
                            style={{
                                marginHorizontal: 5,
                            }}
                        />
                    }
                    keyBoardType={'email-address'}
                // onChangeText={v => setEmail(v)}
                />

                <BodyRecomEditText
                    placeholder="Affiliate link"
                    label="Affiliate link"
                // onChangeText={v => setEmail(v)}
                />

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setCheckbox(!checkbox)}
                    style={[
                        GlobalStyle.flexRowAlignCenter,
                        {
                            marginTop: 15,
                        },
                    ]}>
                    <MaterialCommunityIcons
                        name={checkbox ? 'checkbox-outline' : 'checkbox-blank-outline'}
                        size={25}
                        borderRadius={10}
                        color={checkbox ? COLORS.customColor : COLORS.grey}
                        style={{
                            marginHorizontal: 5,
                        }}
                        onPress={() => setCheckbox(!checkbox)}
                    />

                    <View style={[
                        GlobalStyle?.flexRowAlignCenter,
                    ]}>
                        <Text
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.fontSize16,{
                                    fontFamily:FONTS?.light,
                                    fontSize:14
                                }
                            ]}
                            numberOfLines={2}>
                            I accept the
                        </Text>
                        <Text
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.fontSize16,
                                GlobalStyle?.textUnderLine,
                                , {
                                    marginLeft: 5,
                                    fontFamily:FONTS?.light,
                                    fontSize:14
                                }]}
                            numberOfLines={2}>
                            Terms & Conditions
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <BodyRecomCommBtn
                height={55}
                width={'100%'}
                borderRadius={30}
                marginTop={30}
                textSize={17}
                borderColor={COLORS?.gray}

                textColor={COLORS?.white}
                text={('Sign up')}
                backgroundColor={COLORS?.white}
                onPress={() => {
                    navigation.navigate('NewPlan');
                    // languageRestart();
                }}
                textStyle={{
                    fontFamily: FONTS?.semi_bold,
                    color: COLORS.colorPrimary,
                }}
            />
            <View
                style={[
                    GlobalStyle?.marginVertical10
                ]}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({



    selectedButton: {
        borderColor: 'red',
    },
    buttonText: {
        fontSize: 18,
    },
});

export default Steps7Scr;
