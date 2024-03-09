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
import PreprationContent from '../../global/PreprationContent';


const RecipeDetails = ({ navigation }) => {





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


    ]);

    const [ingredient, setIngredients] = useState([
        {
            selected: true,
            image: '',
            name: "Harm",
            id: 1,
            weight: '67.2 kg'
        },
        {
            image: icons?.home,
            selected: false,
            name: "Broccoli",
            id: 5,
            weight: '90.2 kg'
        },
        {
            image: icons?.home,
            selected: false,
            name: "Onion",
            id: 5,
            weight: '90.2 kg'
        },
        {
            image: icons?.home,
            selected: false,
            name: "Garlic",
            id: 5,
            weight: '90.2 kg'
        }, {
            image: icons?.home,
            selected: false,
            name: "Oil",
            id: 5,
            weight: '90.2 kg'
        }, {
            image: icons?.home,
            selected: false,
            name: "Salt",
            id: 5,
            weight: '90.2 kg'
        }, {
            image: icons?.home,
            selected: false,
            name: "Egg",
            id: 5,
            weight: '90.2 kg'
        },


    ]);
    const renderIngredient = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RecipeDetails')
                }}
                style={[
                    // GlobalStyle?.mainContainer,
                    GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.paddingVertical10,
                    GlobalStyle?.marginVertical10,
                    GlobalStyle?.flexAlignJustifyCenter,

                    , {
                        flex: 1,
                        maxWidth: 80,
                        // height: 170,
                        borderRadius: 20,
                        // borderWidth: 0.2,
                        marginHorizontal: 5,
                        // paddingHorizontal: 20,
                        // borderColor: COLORS?.gray,
                        backgroundColor: COLORS?.bg

                    }]}
            >
                <View>
                    <Text
                        style={[
                            GlobalStyle?.fontSize13, {
                                fontFamily: FONTS?.semi_bold
                            }

                        ]}
                    >{item?.name}</Text>

                </View>
            </TouchableOpacity>
        )
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RecipeDetails')
                }}
                style={[
                    // GlobalStyle?.mainContainer,
                    GlobalStyle?.paddingHorizontal5,
                    GlobalStyle?.paddingVertical10,
                    GlobalStyle?.marginVertical10,
                    GlobalStyle?.flexAlignJustifyCenter,

                    , {
                        flex: 1,
                        width: 80,
                        // height: 170,
                        borderRadius: 10,
                        // borderWidth: 0.2,
                        marginHorizontal: 5,
                        // paddingHorizontal: 20,
                        // borderColor: COLORS?.gray,
                        backgroundColor: COLORS?.bg

                    }]}
            >
                <View>
                    <Text
                        style={[
                            GlobalStyle?.fontSize13,

                        ]}
                    >Kcal</Text>
                    <Text
                        style={[
                            GlobalStyle?.fontSize22,
                            GlobalStyle?.marginTop5
                        ]}
                    >52 g</Text>
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
                    GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.flexRowJustifyBtwn, {
                    }
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowAlignCenter
                    ]}
                >
                    <ToolBarIcon
                        title={MaterialIcons}
                        iconName={'arrow-back-ios-new'}
                        icSize={25}
                        icColor={COLORS?.black}
                        style={{
                            backgroundColor: COLORS?.white,
                            // borderRadius: 30,
                            // width: 25,
                            // height: 25,
                            elevation: 5

                        }}

                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize22,
                            GlobalStyle?.marginLeft15, {
                                fontFamily: FONTS?.bold
                            }
                        ]}
                    >
                        Keto
                    </Text>
                </View>
                <ToolBarIcon
                    title={Octicons}
                    iconName={fav ? 'heartl' : 'heart-fill'}
                    icSize={18}

                    icColor={fav ? COLORS?.gray : COLORS?.gray}
                    style={{
                        backgroundColor: COLORS?.white,
                        borderRadius: 30,
                        width: 35,
                        height: 35,
                        elevation: 5,
                        borderWidth: 0
                    }}
                />
            </View>


            <ScrollView
            >
                <View
                    style={[
                        GlobalStyle?.marginHorizontal5,
                        // GlobalStyle?.marginTop15
                    ]}
                >

                    <View style={[
                        GlobalStyle?.marginHorizontal10,
                        GlobalStyle?.marginTop15
                    ]}>
                        <Image
                            source={{
                                uri: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/21/0/fnd_pasta-istock.jpg.rend.hgtvcom.1280.720.suffix/1490188710731.jpeg"

                            }}
                            style={{
                                width: '100%',
                                height: 200,
                                borderRadius: 13,
                                resizeMode: 'contain'
                            }}
                        />

                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.marginTop15
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize22
                                ]}
                            >High Protein</Text>
                            <BodyRecomCommBtn
                                height={28}
                                width={70}
                                borderRadius={18}
                                // marginTop={30}
                                textSize={13}
                                borderColor={COLORS?.gray}

                                textColor={COLORS?.white}
                                text={('Keto')}
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
                                GlobalStyle?.flexRowAlignCenter,
                                GlobalStyle?.marginTop15
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16
                                ]}
                            >Servings</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.marginLeft

                                ]}
                            >2.18</Text>
                            <BodyRecomCommBtn
                                height={20}
                                width={20}
                                borderRadius={20}
                                // marginTop={30}
                                textSize={13}
                                borderColor={COLORS?.gray}

                                textColor={COLORS?.white}
                                text={('?')}
                                backgroundColor={COLORS?.white}
                                onPress={() => {
                                    navigation.navigate('NewPlan');
                                    // languageRestart();
                                }}
                                style={{
                                    marginHorizontal: 10
                                }}
                                textStyle={{
                                    fontFamily: FONTS?.semi_bold,
                                    color: COLORS.colorPrimary,
                                }}
                            />

                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                ]}
                            >Colories</Text>
                            <Text
                                style={[
                                    GlobalStyle?.fontSize16,
                                    GlobalStyle?.marginLeft

                                ]}
                            >234.0</Text>
                        </View>


                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.marginTop15
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Nutrition Serving</Text>

                        </View>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                // flex: 1,
                                paddingLeft: 10,
                                paddingRight: 10,
                                // paddingBottom: 10,
                                paddingTop: 15,
                            }}
                            data={

                                data
                            }
                            renderItem={renderItem}

                        />


                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.marginTop15
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Nutrition Serving</Text>

                        </View>
                        <FlatList
                            numColumns={4}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                // flex: 1,
                                paddingLeft: 10,
                                paddingRight: 10,
                                // paddingBottom: 10,
                                paddingTop: 15,
                            }}
                            data={

                                ingredient
                            }
                            renderItem={renderIngredient}

                        />
                        <View style={[
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

                                borderColor={COLORS?.customColor}

                                textColor={COLORS?.customColor}
                                text={('Add to grocery')}
                                backgroundColor={COLORS?.white}
                                onPress={() => {
                                    // navigation.navigate('NewPlan');
                                }}
                                textStyle={{
                                    fontFamily: FONTS?.semi_bold,
                                    color: COLORS.colorPrimary,
                                }}
                            />
                        </View>

                        <View
                            style={[
                                GlobalStyle?.flexRowJustifyBtwn,
                                GlobalStyle?.marginTop15
                            ]}
                        >
                            <Text
                                style={[
                                    GlobalStyle?.fontSize18
                                ]}
                            >Preparation</Text>

                        </View>

                        <PreprationContent />

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

export default RecipeDetails;
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
