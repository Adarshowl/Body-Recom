import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
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


const ChoosePlan = ({ navigation }) => {
    const [data, setData] = useState([
        {
            selected: true,
            name: "$45",
            id: 1
        },
        {
            image: images.workOut1,
            selected: false,
            name: "$100",
            id: 5

        },

        {
            image: images.workOut1,
            selected: true,
            name: "$75",
            id: 3

        },
        {
            image: images.workOut2,
            selected: false,
            name: "$124",
            id: 1

        }


    ]);

    const renderShopLove = ({ item }) => {
        return (
            <TouchableOpacity
                style={[
                    GlobalStyle?.mainContainer,
                    // GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.marginVertical5,

                    // GlobalStyle?.marginTop
                    , {
                        width: '100%',
                        // height: 170,
                        borderRadius: 8,
                        borderWidth: 1,
                        marginVertical: 5,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderColor: COLORS?.customColor,

                        // padding:25,
                        elevation: 2


                    }]}
            >
                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginHorizontal5,
                        GlobalStyle?.marginVertical10,

                    ]}>
                    <View
                        style={[
                            GlobalStyle?.flexRowAlignCenter
                        ]}
                    >
                        <Text style={[
                            GlobalStyle?.fontSize30
                        ]}>{item?.id}</Text>
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                {
                                    marginLeft: 5
                                }
                            ]}
                        >months</Text>

                    </View>
                    <View>
                        <Text
                            style={[
                                GlobalStyle?.fontSize30,
                                GlobalStyle?.marginRight,
                                {
                                }
                            ]}>{item?.name}00</Text>
                    </View>
                </View>

                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn,
                        GlobalStyle?.marginHorizontal5,
                        GlobalStyle?.marginVertical10,

                    ]}>
                    <View style={[
                        // GlobalStyle?.marginHorizontal10,
                        // GlobalStyle?.marginTop15,
                        {
                            flex: 1
                        }
                    ]}>
                        <BodyRecomCommBtn
                            height={30}
                            width={80}
                            borderRadius={15}
                            // marginTop={30}
                            textSize={14}
                            borderColor={COLORS?.gray}

                            textColor={COLORS?.white}
                            text={('Save 5%')}
                            backgroundColor={COLORS?.white}
                            onPress={() => {
                                navigation.navigate('ChoosePlan');
                                // languageRestart();
                            }}
                            textStyle={{
                                fontFamily: FONTS?.semi_bold,
                                color: COLORS.colorPrimary,
                            }}
                        />
                    </View>
                    <View>
                        <Text
                            style={[
                                GlobalStyle?.fontSize16,
                                GlobalStyle?.marginRight,
                                {
                                }
                            ]}>$100/ month</Text>
                    </View>


                </View>



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
                    GlobalStyle?.marginHorizontal15,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.marginTop15
                ]}
            >
                <Text
                    style={[
                        GlobalStyle?.fontSize28
                    ]}
                >
                    Choose Your Subscription
                    Plan
                </Text>
            </View>


            <ScrollView
            >
                <View
                    style={[
                        GlobalStyle?.marginHorizontal5,
                        GlobalStyle?.marginTop15
                    ]}
                >

                    <FlatList
                        // horizontal
                        showsHorizontalScrollIndicator={false}
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

                <View style={[
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.marginTop15
                ]}>
                    <BodyRecomCommBtn
                        height={55}
                        width={'100%'}
                        borderRadius={30}
                        marginTop={30}
                        textSize={17}
                        borderColor={COLORS?.gray}

                        textColor={COLORS?.white}
                        text={('Continue')}
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

export default ChoosePlan;
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
});
