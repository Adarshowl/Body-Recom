import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
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
import { COLORS, FONTS, SIZES } from '../../constants';
import icons from '../../constants/icons';


const Steps3Scr = ({ navigation }) => {
    const [selectedGoal, setSelectedGoal] = useState(null);
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
                    GlobalStyle?.marginHorizontal10,
                    GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.marginVertical5,
                    // GlobalStyle?.paddingVertical5
                    , {
                        // flex: 1,
                        width: '50%',
                        height: 95,
                        borderRadius: 8,
                        // borderWidth: 0.2,
                        marginVertical: 20,
                        // padding:25,
                        elevation: 2,
                        borderColor: COLORS?.gray,
                        borderWidth: 0.4
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
                            marginTop: -35,
                            elevation: 3

                            // position: 'absolute'

                        },
                    ]}>
                    <Image source={item.image}
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'contain'
                            // borderRadius: 10
                        }}
                    />

                </View>
                <Text
                    numberOfLines={2}
                    style={[
                        GlobalStyle?.fontSize18,
                        GlobalStyle?.marginTop15,
                        GlobalStyle?.paddingHorizontal10
                        , {
                            textAlign: 'center',
                            fontSize: 14,
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
            GlobalStyle.mainContainer,
            // GlobalStyle.paddingHorizontal15,
            {
                // flex: 1,

            }]}>
            <ScrollView
                style={[

                ]
               }
            >
                <Text
                    style={[
                        GlobalStyle.fontSize28,
                        GlobalStyle.marginTop15,
                        GlobalStyle?.marginVertical15,
                        GlobalStyle?.marginHorizontal15

                    ]}
                >What’s your current
                    Activity level?</Text>

                <View
                    style={{
                        flex: 1,
                        // width: SIZES.width,
                    }}>
                    <FlatList
                        // horizontal
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        contentContainerStyle={{
                            // flex: 1,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingBottom: 10,
                            paddingTop: 10,

                        }}
                        data={
                            data
                        }
                        renderItem={renderShopLove}

                    />
                </View>
            </ScrollView>
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

export default Steps3Scr;
