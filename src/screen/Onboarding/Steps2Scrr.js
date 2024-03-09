import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';
import images from '../../constants/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../constants';
import { LinearGradient } from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Steps2Scrr = ({ navigation }) => {
    const [selectedGoal, setSelectedGoal] = useState('lose');
    const [selectedItem, setSelectedItem] = useState('male');
    const [selectedOption, setSelectedOption] = useState('cm');
    const [selectedOptionlab1, setselectedOptionlab1] = useState('lab');
    const [selectedOptionlab11, setselectedOptionlab11] = useState('lab');



    return (
        <SafeAreaView style={[
            GlobalStyle.mainContainer,
            GlobalStyle.paddingHorizontal15, {
                flex: 1
            }]}>

            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15
                ]}
            >What is your gender?</Text>

            <View
                style={[
                    // GlobalStyle?.flexAlignJustifyCenter,
                    GlobalStyle?.flexRowJustifyBtwn,
                ]}
            >
                {selectedItem === 'male' ? (
                    <LinearGradient
                        colors={[COLORS.primary1, COLORS.primary2, COLORS.primary3]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                            GlobalStyle.paddingVertical15,
                            {
                                // borderWidth: 0.2,
                                width: '46%',
                                borderRadius: 10,
                                height: 160,
                            }
                        ]}
                    >
                        <TouchableOpacity
                            style={[
                                GlobalStyle.alignJustifyCenter,
                                GlobalStyle.paddingVertical15,
                            ]}
                            onPress={() => setSelectedItem('male')}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                    GlobalStyle.flexRowAlignCenter,
                                    {
                                        position: 'absolute',
                                        right: 10,
                                        top: -8,
                                    }
                                ]}
                                onPress={() => {
                                    setSelectedItem('male');
                                }}
                            >
                                <MaterialIcons
                                    name={selectedItem === 'male' ? 'check-circle' : 'radio-button-unchecked'}
                                    size={25}
                                    color={COLORS?.white}
                                />
                                {/* <MaterialCommunityIcons
                                    name={
                                        selectedItem ? 'checkbox-marked' : 'checkbox-blank-outline'
                                    }
                                    size={22}
                                    color={COLORS.white}
                                    style={{
                                        borderRadius: 10
                                    }}
                                /> */}
                            </TouchableOpacity>
                            <Image
                                source={images?.man}
                                style={{
                                    width: 80,
                                    height: 80,

                                }}
                            // style={GlobalStyle.ImageStyle} // Corrected style name
                            />
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    color: COLORS?.white
                                }
                            ]}>male</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                ) : (
                    <TouchableOpacity
                        style={[
                            GlobalStyle.alignJustifyCenter,
                            GlobalStyle.paddingVertical15,
                            {
                                borderWidth: 0.2,
                                width: '46%',
                                borderRadius: 8,
                                height: 160,
                            }
                        ]}
                        onPress={() => setSelectedItem('male')}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={[
                                GlobalStyle.flexRowAlignCenter,
                                {
                                    position: 'absolute',
                                    right: 10,
                                    top: 5,
                                }
                            ]}
                            onPress={() => {
                                setSelectedItem('male')
                            }}
                        >
                            <MaterialIcons
                                name={selectedItem === 'male' ? 'check-circle' : 'radio-button-unchecked'}
                                size={25}
                                color={COLORS?.customColor}
                            />
                        </TouchableOpacity>
                        <Image
                            source={images?.man}
                            style={{
                                width: 80,
                                height: 80,
                            }}
                        />
                        <Text style={[
                            GlobalStyle?.fontSize18, {
                            }
                        ]}>male</Text>
                    </TouchableOpacity>
                )}

                {selectedItem === 'female' ? (
                    <LinearGradient
                        colors={[COLORS.primary1, COLORS.primary2, COLORS.primary3]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                            // GlobalStyle.alignJustifyCenter,
                            GlobalStyle.paddingVertical15,
                            {
                                // borderWidth: 0.2,
                                width: '46%',
                                borderRadius: 10,
                                height: 160,
                            }
                        ]}
                    >
                        <TouchableOpacity
                            style={[
                                GlobalStyle.alignJustifyCenter,
                                GlobalStyle.paddingVertical15,
                            ]}
                            onPress={() => setSelectedItem('female')}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[
                                    GlobalStyle.flexRowAlignCenter,
                                    {
                                        position: 'absolute',
                                        right: 10,
                                        top: -8,
                                    }
                                ]}
                                onPress={() => {
                                    setSelectedItem('female');
                                }}
                            >

                                <MaterialIcons
                                    name={selectedItem === 'female' ? 'check-circle' : 'radio-button-unchecked'}
                                    size={25}
                                    color={COLORS?.white}
                                />
                            </TouchableOpacity>
                            <Image
                                source={images?.female}
                                style={{
                                    width: 65,
                                    height: 65,

                                }}
                            // style={GlobalStyle.ImageStyle} // Corrected style name
                            />
                            <Text style={[
                                GlobalStyle?.fontSize18, {
                                    color: COLORS?.white,
                                    marginTop: 10
                                }
                            ]}>Woman</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                ) : (
                    <TouchableOpacity
                        style={[
                            GlobalStyle.alignJustifyCenter,
                            GlobalStyle.paddingVertical15,
                            {
                                borderWidth: 0.2,
                                width: '46%',
                                borderRadius: 8,
                                height: 160,
                            }
                        ]}
                        onPress={() => setSelectedItem('female')}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={[
                                GlobalStyle.flexRowAlignCenter,
                                {
                                    position: 'absolute',
                                    right: 10,
                                    top: 5,
                                }
                            ]}
                            onPress={() => {
                                setSelectedItem('female')
                            }}
                        >
                            <MaterialIcons
                                name={selectedItem === 'female' ? 'check-circle' : 'radio-button-unchecked'}
                                size={25}
                                color={COLORS?.customColor}
                            />
                        </TouchableOpacity>
                        <Image
                            source={images?.female}
                            style={{
                                width: 65,
                                height: 65,
                            }}
                        />
                        <Text style={[
                            GlobalStyle?.fontSize18, {
                                marginTop: 10
                            }
                        ]}>Woman</Text>
                    </TouchableOpacity>
                )}
            </View>


            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15,
                    GlobalStyle?.marginTop15

                ]}
            >How old are you?</Text>
            <View
                style={[
                    GlobalStyle?.flexAlignJustifyCenter,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.borderRadius
                    , {
                        borderWidth: 0.2,
                        // backgroundColor:'light-white'
                    }]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn, {}
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize28,
                            {
                                fontSize: 40
                            }
                        ]}
                    >88</Text>
                    <View
                        style={[
                            GlobalStyle?.marginHorizontal15,
                            GlobalStyle?.borderRadius
                            , {
                                borderColor: COLORS?.gray,
                                height: 50,
                                // width:0
                            }]}
                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize14TextGray,
                            {
                            }
                        ]}
                    >years</Text>

                </View>
            </View>


            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15,
                    GlobalStyle?.marginTop15,
                    {
                        marginTop: 40
                    }

                ]}
            >How tall are you?</Text>
            <View
                style={[
                    GlobalStyle?.flexAlignJustifyCenter,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.borderRadius
                    , {
                        borderWidth: 0.2,
                    }]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize28,
                            {
                                fontSize: 40
                            }
                        ]}
                    >176</Text>
                    <View
                        style={[
                            GlobalStyle?.marginHorizontal15,
                            GlobalStyle?.borderRadius
                            , {
                                borderColor: COLORS?.gray,
                                height: 60,
                            }]}
                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize14TextGray,
                            {
                            }
                        ]}
                    >Cm</Text>

                </View>
            </View>


            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOption === 'cm' && GlobalStyle?.selectedButton
                        ]}
                        onPress={() => setSelectedOption('cm')}
                    >
                        <Text style={styles.buttonText}>cm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOption === 'fit' && styles.selectedButton
                        ]}
                        onPress={() => setSelectedOption('fit')}
                    >
                        <Text style={styles.buttonText}>ft</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15,
                    GlobalStyle?.marginTop15

                ]}
            >What current weight?</Text>
            <View
                style={[
                    GlobalStyle?.flexAlignJustifyCenter,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.borderRadius
                    , {
                        borderWidth: 0.2,
                    }]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize28,
                            {
                                fontSize: 40
                            }
                        ]}
                    >85</Text>
                    <View
                        style={[
                            GlobalStyle?.marginHorizontal15,
                            GlobalStyle?.borderRadius
                            , {
                                borderColor: COLORS?.gray,
                                height: 60,
                            }]}
                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize14TextGray,
                            {
                            }
                        ]}
                    >kg</Text>

                </View>
            </View>


            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOptionlab1 === 'lab' && styles.selectedButton
                        ]}
                        onPress={() => setselectedOptionlab1('lab')}
                    >
                        <Text style={styles.buttonText}>lab</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOptionlab1 === 'kg' && styles.selectedButton
                        ]}
                        onPress={() => setselectedOptionlab1('kg')}
                    >
                        <Text style={styles.buttonText}>k.g</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15,
                    GlobalStyle?.marginTop15

                ]}
            >What is your goal weight?</Text>
            <View
                style={[
                    GlobalStyle?.flexAlignJustifyCenter,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.borderRadius
                    , {
                        borderWidth: 0.2,
                    }]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowJustifyBtwn
                    ]}
                >
                    <Text
                        style={[
                            GlobalStyle?.fontSize28,
                            {
                                fontSize: 40
                            }
                        ]}
                    >88</Text>
                    <View
                        style={[
                            GlobalStyle?.marginHorizontal15,
                            GlobalStyle?.borderRadius
                            , {
                                borderColor: COLORS?.gray,
                                height: 60,
                            }]}
                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize14TextGray,
                            {
                            }
                        ]}
                    >years</Text>

                </View>
            </View>


            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOptionlab11 === 'lab' && styles.selectedButton
                        ]}
                        onPress={() => setselectedOptionlab11('lab')}
                    >
                        <Text style={styles.buttonText}>lab</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedOptionlab11 === 'kg' && styles.selectedButton
                        ]}
                        onPress={() => setselectedOptionlab11('kg')}
                    >
                        <Text style={styles.buttonText}>k.g</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                style={[
                    GlobalStyle?.onbordingButton, selectedGoal === 'lose' &&
                    GlobalStyle?.selectedButtonColor,
                    GlobalStyle?.flexRowJustifyBtwn,
                    GlobalStyle?.borderRadius,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.paddingVertical15,
                ]}
                onPress={() => setSelectedGoal('lose')}>
                <View style={[GlobalStyle?.flexRowAlignCenter]}>
                    <Image
                        style={[GlobalStyle?.ImgaeStyle]}

                        source={images.calories} />
                    <View style={GlobalStyle?.marginLeft15}>
                        <Text style={[GlobalStyle?.fontSize18]}>Do you want to look</Text>
                        <Text style={[GlobalStyle?.fontSize18]}>better?</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{}}
                >
                    <MaterialCommunityIcons
                        name={selectedGoal === 'lose' ? 'circle-slice-8' : 'circle-outline'}
                        size={22}
                        color={COLORS?.customColor}
                    />
                </TouchableOpacity>
            </TouchableOpacity>


            <TouchableOpacity
                style={[
                    GlobalStyle?.onbordingButton, selectedGoal === 'athletic' &&
                    GlobalStyle?.selectedButtonColor,
                    GlobalStyle?.flexRowJustifyBtwn,
                    GlobalStyle?.borderRadius,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.paddingVertical15
                ]}
                onPress={() => setSelectedGoal('athletic')}>
                <View style={[GlobalStyle?.flexRowAlignCenter]}>
                    <Image
                        style={[GlobalStyle?.ImgaeStyle]}

                        source={images.muscle} />
                    <View style={GlobalStyle?.marginLeft15}>
                        <Text style={[GlobalStyle?.fontSize18]}>Do you want to improve</Text>
                        <Text style={[GlobalStyle?.fontSize18]}>athletic performance?</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{}}
                >
                    <MaterialCommunityIcons
                        name={selectedGoal === 'athletic' ? 'circle-slice-8' : 'circle-outline'}
                        size={22}
                        color={COLORS?.customColor}
                    />
                </TouchableOpacity>
            </TouchableOpacity>



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
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({



    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        // backgroundColor: COLORS?.light_gray,
        borderRadius: 22,
        backgroundColor: "#E7E7E7",

        paddingVertical: 6,
        paddingHorizontal: 13,
        marginTop: 25
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        // borderWidth: 2,
        // marginRight: 10,
        borderRadius: 15,
    },
    selectedButton: {
        // borderColor: 'blue',
        backgroundColor: COLORS?.white
    },
    buttonText: {
        fontSize: 18,
        color: COLORS?.black
    },
    cmView: {
        backgroundColor: 'lightblue', // Example color for CM related view
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    fitView: {
        backgroundColor: 'lightgreen', // Example color for FIT related view
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default Steps2Scrr;
