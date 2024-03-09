import { StyleSheet, Text, View, Picker } from 'react-native'
import React from 'react'
import { global } from './colors'
import { COLORS } from '../constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { FONTS } from '../constants/Fonts'


const CustomHeader = (props) => {


    const { headerTitle } = props; // Destructure headerTitle from props
    const { currentStep } = headerTitle;
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
            {/* Add your header content here */}
            {/* <AntDesign
                name='arrowleft'
                size={30}
                color={COLORS?.white}
            /> */}


            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop:20
             }}>
                <Text style={{ fontSize: 25, color: "white", alignItems: 'center', 
                fontFamily: FONTS?.semi_bold,
                 marginLeft: 10 }}>

                    {props.title}
                </Text>
                <Text style={{
                    fontSize: 26,
                    color: "white",
                    fontFamily: FONTS.semi_bold,
                    marginLeft: 10
                }}>
                    {currentStep}/7 {/* Display currentStep out of total */}
                </Text>
            </View>
        </LinearGradient>

    )
}

export default CustomHeader

const styles = StyleSheet.create({
    cantainer: {

        backgroundColor: COLORS?.black,
        flexDirection: 'row',



    }
})