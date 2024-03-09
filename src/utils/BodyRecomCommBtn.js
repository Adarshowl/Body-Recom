import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const BodyRecomCommBtn = ({
  height,
  width,
  borderRadius,
  textSize,
  textColor,
  text,
  marginTop,

  image,
  onPress,
  paddingHorizontal,
  marginHorizontal,
  textStyle,

  style,
  icon,
  backgroundColor

}) => {


  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onPress();
      }}>
      <LinearGradient
        colors={[COLORS.primary1,  COLORS.primary3]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: width,
          height: height,
          borderRadius: borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: marginTop || 0,
          flexDirection: 'row',
          paddingHorizontal: paddingHorizontal,
          marginHorizontal: marginHorizontal,
          flexDirection: getFlexDirection(),
          backgroundColor: backgroundColor,

          ...style,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            onPress();
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {image && (
            <Image
              source={image}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 10,
                alignSelf: 'center',
              }}
            />
          )}
          <Text
            style={[
              textStyle,
              {
                color: textColor,
                fontSize: textSize || 16,
                // marginStart: -10,
              },
            ]}>
            {text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BodyRecomCommBtn;

const styles = StyleSheet.create({});
