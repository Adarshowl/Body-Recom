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


const Steps6Scr = ({ navigation }) => {
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [data, setData] = useState([
        {
            image: images.workOut2,
            selected: true,
            name: "At Home"
        },
        {
            image: images.workOut1,
            selected: false,
            name: "Bodybuilding"
        },

        {
            image: images.workOut1,
            selected: true,
            name: "Fat Blaster"
        },
        {
            image: images.workOut2,
            selected: false,
            name: "Fully Body"
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
                    // GlobalStyle?.marginTop
                    , {
                        width: '50%',
                        height: 200,
                        borderRadius: 8,
                        // borderWidth: 0.2,
                        marginVertical: 35,

                        // padding:25,
                        elevation: 2,
                        borderWidth: 0.5,
                        borderColor: COLORS?.gray


                    }]}
            >
                <View
                    style={[
                        {
                            // flex:1,
                            justifyContent: 'center',

                            alignItems: 'center',
                            marginTop: -50
                            // paddingTop:20


                        },
                    ]}>
                    <Image source={item.image}
                        style={{
                            width: 120,
                            height: 180,
                            // resizeMode: 'stretch',
                            // marginTop:-40
                            // borderRadius: 10
                        }}
                    />

                </View>
                <Text
                    style={[
                        GlobalStyle?.marginTop15,
                        GlobalStyle?.fontSize22
                        , {
                            textAlign: 'center',
                            // marginTop: 30,
                            fontFamily: FONTS?.medium
                            // fontSize:22
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
            GlobalStyle.paddingHorizontal15, {
            }]}>

            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15
                ]}
            >Select Your Workout
                program</Text>

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

                    source={images.Frame2} />



            </View>
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

export default Steps6Scr;
