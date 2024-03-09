import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CustomHeader from '../../global/CustomHeader';
import { COLORS } from '../../constants';
import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Steps1Scrr from './Steps1Scrr';
import Steps2Scrr from './Steps2Scrr';
import Steps3Scr from './Steps3Scr';
import Steps4Scrr from './Steps4Scrr';
import Steps5Scr from './Steps5Scr';
import Steps6Scr from './Steps6Scr';
import Steps7Scr from './Steps7Scr';
import GlobalStyle from '../../styles/GlobalStyle';


const SliderScreens = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleContinue = () => {
        if (currentStep < 7) {
            setCurrentStep(currentStep + 1);
        }
        else {
            navigation.navigate('Steps7Scr')
            console.log("Navigation to next section");
        }
    };

    return (
        <View style={
           [
            GlobalStyle?.mainContainer
           ]
            }>
            <CustomHeader
                title="Step"
                headerTitle={{ currentStep }}
                onPressLeft={() => navigation.goBack(null)}

            />
            {/* <CustomHeader /> */}

            {/* <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: -20,
                marginHorizontal: 25,
                // borderWidth:0.2,
                borderRadius: 10
            }}>
                <View style={{ width: 14.28, height: 8, backgroundColor: COLORS.white, borderRadius: 10 }} />
                <View style={{ width: 40, height: 8, backgroundColor: currentStep >= 2 ? COLORS.white : COLORS.primary2, }} />
                <View style={{ width: 40, height: 8, backgroundColor: currentStep === 3 ? COLORS.white : COLORS.primary2, }} />
                <View style={{ width: 40, height: 8, backgroundColor: currentStep === 4 ? COLORS.white : COLORS.primary2, }} />
                <View style={{ width: 40, height: 8, backgroundColor: currentStep === 5 ? COLORS.white : COLORS.primary2, }} />
                <View style={{ width: 40, height: 8, backgroundColor: currentStep === 6 ? COLORS.white : COLORS.primary2, }} />
                <View style={{ width: 40, height: 8, backgroundColor: currentStep === 7 ? COLORS.white : COLORS.primary2, borderRadius: 10 }} />

            </View> */}

            <ScrollView>
                {currentStep === 1 && <Steps1Scrr />}
                {currentStep === 2 && <Steps2Scrr />}

                {currentStep === 3 && <Steps3Scr />}
                {currentStep === 4 && <Steps4Scrr />}
                {currentStep === 5 && <Steps5Scr />}
                {currentStep === 6 && <Steps6Scr />}
                {currentStep === 7 && <Steps7Scr />}





                {/* <Steps1Scrr />
                <Steps2Scrr /> */}

            </ScrollView>
            {currentStep < 7 && (

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: COLORS?.white,
                    paddingVertical: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingHorizontal: 20,
                    elevation: 15

                }}>
                    {currentStep > 1 && (
                        <TouchableOpacity onPress={() => setCurrentStep(currentStep - 1)}>
                            <AntDesign
                                name="arrowleft"
                                size={27}
                                color={COLORS.black}
                            />
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity onPress={handleContinue}>
                        <Text style={{
                            fontSize: 20,
                            color: COLORS?.black,
                            fontFamily: FONTS?.regular
                        }}>
                            {currentStep < 6 ? 'Continue' : 'Continue'}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    );
};

export default SliderScreens;
