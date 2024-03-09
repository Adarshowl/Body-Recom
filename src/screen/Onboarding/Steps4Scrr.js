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
import { COLORS, FONTS, SIZES } from '../../constants';
import icons from '../../constants/icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Steps4Scrr = ({ navigation }) => {
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const [data, setData] = useState([
        {
            image: icons.group1,
            selected: false,
            name: "No Exercise",
            id: 1
        },
        {
            image: icons.group2,
            selected: false,
            name: "Beginner",
            id: 2

        },
        {
            image: icons.group2,
            selected: false,
            name: 'Intermediate',
            id: 3

        },

        {
            image: icons.group3,
            selected: false,
            name: 'Advanced',
            id: 4

        },

    ]);

    const handlePress = (itemId) => {
        const updatedData = data.map(item => {
            if (item.id === itemId) {
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setData(updatedData);
    };
    const renderShopLove = ({ item }) => {
        return (
            <TouchableOpacity

                onPress={() => handlePress(item.id)}

                style={[
                    GlobalStyle?.mainContainer,
                    // GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.marginVertical5,
                    GlobalStyle?.flexRowAlignCenter,
                    GlobalStyle?.marginVertical10,
                    GlobalStyle?.borderRadius10
                    , {
                        flex: 1,
                        width: '100%',
                        // height: 90,
                        borderRadius: 12,
                        // borderWidth: 0.2,
                        // padding:25,
                        elevation: 5
                    }]}
            >
                <View
                    style={[
                        {
                            // backgroundColor: COLORS?.light_gray,

                            backgroundColor: item?.selected ? COLORS?.customColor : COLORS?.light_gray,

                            justifyContent: 'center',
                            // alignSelf: 'center',
                            // borderRadius: 50,
                            width: 70,
                            height: 80,
                            alignItems: 'center',
                            borderTopRightRadius: 50,
                            borderBottomRightRadius: 50
                            // marginTop: -22
                            // position: 'absolute'

                        },
                    ]}>
                    <Image source={item.image}
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'stretch',
                            tintColor: item?.selected ? COLORS?.white : COLORS?.light,
                            // borderRadius: 10
                        }}
                    />

                </View>
                <View
                    style={
                        [
                            GlobalStyle?.flexRowJustifyBtwn,
                            GlobalStyle?.marginHorizontal10,
                            {

                                flex: 1
                            }
                        ]
                    }
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize18,
                            // GlobalStyle?.marginTop15,
                            GlobalStyle?.marginLeft
                            , {
                                // textAlign: 'center',
                                fontSize: 18,
                                fontFamily: FONTS?.medium
                            }
                        ]}
                    >
                        {
                            item?.name
                        }
                    </Text>

                    <TouchableOpacity
                        style={{}}
                    >
                        <MaterialIcons
                            name={item?.selected ? 'check-circle' : 'radio-button-unchecked'}
                            size={25}
                            color={COLORS?.customColor}
                        />

                    </TouchableOpacity>
                </View>

            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={[
            GlobalStyle.mainContainer,
            GlobalStyle.paddingHorizontal10, {
            }]}>

            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15
                ]}
            >What’s your current
                Exercise level?</Text>

            <View
                style={{
                    flex: 1,
                    // width: SIZES.width,
                }}>
                <FlatList
                    // horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        flex: 1,
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
            <View style={[
                // GlobalStyle?.marginHorizontal5
            ]}>
                <Image
                    style={{
                        flex: 1,
                        width: '100%',
                        height: 180,
                        borderRadius: 10,
                        resizeMode: 'contain'
                    }}

                    source={images.Frame1} />
            </View>
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

export default Steps4Scrr;
