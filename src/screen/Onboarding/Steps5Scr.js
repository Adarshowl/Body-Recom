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


const Steps5Scr = ({ navigation }) => {
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

  
    return (
        <SafeAreaView style={[
            // GlobalStyle.mainContainer,
            GlobalStyle.paddingHorizontal15, {
                flex:1
            }]}>

            <Text
                style={[
                    GlobalStyle.fontSize28,
                    GlobalStyle.marginTop15,
                    GlobalStyle?.marginVertical15
                ]}
            >Select Your Meal Plan</Text>

            <View style={[

                // GlobalStyle?.mainContainer
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


                <Image
                    style={{
                        flex: 1,
                        width: '100%',
                        // height: 180,
                        borderRadius: 10,
                        // resizeMode: 'contain'
                    }}

                    source={images.group444} />
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

export default Steps5Scr;
