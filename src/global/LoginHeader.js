import { StyleSheet, Text, View, Picker, Image } from 'react-native'
import React from 'react'
import { global } from './colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, SIZES, STRING } from '../constants';
import images from '../constants/images';


const LoginHeader = (props) => {


    const { headerTitle } = props;

    return (
        <LinearGradient
            colors={[COLORS.primary1, COLORS.primary2, COLORS.primary3]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
                paddingHorizontal: 20,
                paddingVertical: 20,

                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                height: 130
            }}>



            <View style={{
                // flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                flex: 1,
                marginHorizontal: 30
            }}>
                <Image
                    source={images?.logo}
                    style={{
                        width: '100%',
                        height: 70
                    }}
                />

            </View>
        </LinearGradient>

    )
}

export default LoginHeader

const styles = StyleSheet.create({
    cantainer: {

        backgroundColor: COLORS?.black,
        flexDirection: 'row',



    }
})