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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Steps1Scrr = ({ navigation }) => {
    const [selectedGoal, setSelectedGoal] = useState('build');

    return (
        <SafeAreaView style={[
            // GlobalStyle.mainContainer,
            GlobalStyle.paddingHorizontal15, {
                flex: 1,
                backgroundColor: '#F7F7F7'
            }]}>

            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15
                ]}
            >What is your goal?</Text>
            <View style={[
                , {
                    flex: 1,
                },
                GlobalStyle?.elevation

            ]}>
                <TouchableOpacity
                    style={[
                        GlobalStyle?.onbordingButton, selectedGoal === 'lose' &&
                        styles?.selectedButtonColor,
                        GlobalStyle?.flexRowJustifyBtwn,
                        // GlobalStyle?.borderRadius,
                        GlobalStyle?.marginTop15,
                        GlobalStyle?.paddingVertical15,
                        {
                            backgroundColor: COLORS?.white,
                            elevation: 3
                        }
                    ]}
                    onPress={() => setSelectedGoal('lose')}>
                    <View style={[GlobalStyle?.flexRowAlignCenter]}>
                        <Image
                            style={[GlobalStyle?.ImgaeStyle]}

                            source={images.calories} />
                        <View style={GlobalStyle?.marginLeft15}>
                            <Text style={[GlobalStyle?.fontSize18]}>Lose Fat</Text>
                            <Text style={[GlobalStyle?.fontSize14TextGray]}>Lose fat and keep muscle</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{}}
                    >
                        <MaterialIcons
                            name={selectedGoal === 'lose' ? 'check-circle' : 'radio-button-unchecked'}
                            size={25}
                            color={COLORS?.customColor}
                        />

                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[
                    GlobalStyle?.onbordingButton, selectedGoal === 'build' &&
                    styles?.selectedButtonColor,

                    GlobalStyle?.flexRowJustifyBtwn,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.paddingVertical15,
                    {
                        backgroundColor: COLORS?.white,
                        elevation: 3

                    }
                ]}
                onPress={() => setSelectedGoal('build')}>
                <View style={[GlobalStyle?.flexRowAlignCenter]}>
                    <Image
                        style={[GlobalStyle?.ImgaeStyle]}

                        source={images.muscle} />
                    <View style={GlobalStyle?.marginLeft15}>
                        <Text style={[GlobalStyle?.fontSize18]}>Build Muscle</Text>
                        <Text style={[GlobalStyle?.fontSize14TextGray]}>Build mass and Strength</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{}}
                >
                    <MaterialIcons
                        name={selectedGoal === 'build' ? 'check-circle' : 'radio-button-unchecked'}
                        size={25}
                        color={COLORS?.customColor}
                    />

                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    GlobalStyle?.onbordingButton,
                    selectedGoal === 'recomp' &&
                    styles?.selectedButtonColor,
                    GlobalStyle?.flexRowJustifyBtwn,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.paddingVertical15,
                    {
                        backgroundColor: COLORS?.white,
                        elevation: 3

                    }
                ]}
                onPress={() => setSelectedGoal('recomp')}>
                <View style={[GlobalStyle?.flexRowAlignCenter]}>
                    <Image
                        style={[GlobalStyle?.ImgaeStyle]}
                        source={images.dumbbell} />
                    <View style={[GlobalStyle?.marginLeft15, {
                        flex: 1
                    }]}>
                        <Text style={[GlobalStyle?.fontSize18]}>Recomp</Text>
                        <Text style={[GlobalStyle?.fontSize14TextGray]}>Build mass and lose fat
                            (best for beginners)</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{}}
                >
                    <MaterialIcons
                        name={selectedGoal === 'recomp' ? 'check-circle' : 'radio-button-unchecked'}
                        size={25}
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({



    selectedButtonColor: {
        borderColor: COLORS?.customColor,
        borderWidth: 0.5
    },
    buttonText: {
        fontSize: 18,
    },
});

export default Steps1Scrr;
