import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    I18nManager,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { SIZES, STRING, COLORS, FONTS } from '../../../constants';
import images from '../../../constants/images';
import GlobalStyle from '../../../styles/GlobalStyle';
import BodyRecomCommBtn from '../../../utils/BodyRecomCommBtn';
import BodyRecomBorderWidthBtn from '../../../utils/BodyRecomBorderWidthBtn';


const Welcome = ({ navigation }) => {

    return (
        <SafeAreaView
            style={[
                GlobalStyle.mainContainer,
                {
                },
            ]}>
            <Image
                style={{
                    flex: 1,
                    // height: SIZES.height - 350,
                    height: 450,
                    width: SIZES.width,
                    alignSelf: 'center',
                }}
                source={images.welcome}
            />
            <ScrollView
            showsVerticalScrollIndicator={false}
                style={{
                    // flexGrow: 1,
                    flex: 1,
                    backgroundColor: COLORS?.white,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    marginTop: -20
                }}
            >

                <View
                    style={{
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>

                    <View>
                        <Text
                            style={[GlobalStyle.welcomeBelowText, {
                                fontFamily: FONTS?.regular
                            }]}
                        >
                            Welcome to
                        </Text>
                        <Text
                            style={[GlobalStyle.welcomeBelowText, {
                                fontSize: 35,
                                marginVertical: 20
                            }]}
                        >
                            BODYRECOMP
                        </Text>
                    </View>


                    <BodyRecomCommBtn
                        height={55}
                        width={'100%'}
                        borderRadius={30}
                        marginTop={5}
                        textSize={17}
                        borderColor={COLORS?.gray}

                        textColor={COLORS?.white}
                        text={('Sign up with email')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                            navigation.navigate('Onboarding');
                            // languageRestart();
                        }}
                        textStyle={{
                            fontFamily: FONTS?.semi_bold,
                            color: COLORS.colorPrimary,
                        }}
                    />
                    <BodyRecomBorderWidthBtn
                        height={55}
                        width={'100%'}
                        borderRadius={30}
                        borderWidth={0.5}
                        borderColor={COLORS?.gray}
                        marginTop={15}
                        textSize={16}
                        iconPosition={'left'}
                        icon={
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/128/281/281764.png'
                                }}
                                style={{
                                    width: 26,
                                    height: 26,
                                    marginRight: 20
                                }}
                            />
                        }
                        textColor={COLORS?.black}
                        text={('Sign in With Google')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                            navigation.navigate('Login');
                            // languageRestart();
                        }}
                        textStyle={{
                            fontFamily: FONTS?.regular,
                            color: COLORS.colorPrimary,
                        }}
                    />
                    <BodyRecomBorderWidthBtn
                        height={55}
                        width={'100%'}
                        borderRadius={30}
                        borderWidth={0.5}
                        marginTop={16}
                        borderColor={COLORS?.gray}
                        iconPosition={'left'}
                        icon={
                            <Image
                                source={{
                                    uri: "https://cdn-icons-png.flaticon.com/128/145/145802.png"
                                }}
                                style={{
                                    width: 26,
                                    height: 26,
                                    marginRight: 20
                                }}
                            />
                        }
                        textSize={16}
                        textColor={COLORS?.black}
                        text={('Sign in With Facebook')}
                        backgroundColor={COLORS?.white}
                        onPress={() => {
                            navigation.navigate('CheckInbox');
                            // languageRestart();
                        }}
                        textStyle={{
                            fontFamily: FONTS?.regular,
                            color: COLORS.colorPrimary,
                        }}
                    />
                </View>

                <View
                    style={{
                        marginBottom: 20,
                        flex: 1
                    }}
                />


            </ScrollView>



        </SafeAreaView>
    );
};

export default Welcome;

const styles = StyleSheet.create({
});