import React, { useContext, useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  I18nManager,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import themeContext from '../constants/themeContext';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../constants/Colors';
import { SIZES, STRING } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { Switch } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BodyRecomCommBtn from '../utils/BodyRecomCommBtn';
import { ShowToastMessage } from '../utils/Utility';

const DrawerContent = ({ navigation }) => {
  const theme = useContext(themeContext);



  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS?.white,
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLORS?.white,

          flexGrow: 1,
        }}>
        <View
          style={{
            paddingVertical: 35,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 60,
              marginHorizontal: 15,
            }}
          />
          <View style={{}}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 17,
                fontFamily: 'OpenSans-SemiBold',
                alignSelf: 'flex-start',
              }}>
              Hi, Angela Jones
            </Text>
            <Text
              style={{
                color: theme.colors.textColor,
                fontSize: 14,
                fontFamily: 'OpenSans-Regular',
                alignSelf: 'flex-start',
              }}>
              angela@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 1,
            backgroundColor: COLORS.light_gray,
            marginBottom: 10,
            marginHorizontal: 8
          }}
        />
        <ItemView
          onPress={() => {
            navigation.replace('MainContainer');
          }}
          title={STRING.home}


          icon={<Ionicons name={'home'} size={20} color={theme?.colors?.grey} />}
        />
        <ItemView
          title={STRING.cart}
          onPress={() => {
            navigation.navigate('Carts');
          }}
          icon={
            <MaterialCommunityIcons
              name={'cart'}
              size={20}
              color={COLORS.grey}
            />
          }
        />
        <ItemView
          title={STRING.your_orders}
          onPress={() => {
            navigation.navigate('TrackOrder');
          }}
          icon={
            <AntDesign
              name={'shoppingcart'} size={20} color={theme?.colors?.grey} />
          }
        />
        <ItemView
          title={STRING.scan_and_pay}
          onPress={() => {
            navigation.navigate('ScanPay');
          }}
          icon={<FontAwesome name={'qrcode'} size={20} color={theme?.colors?.grey} />}
        />
        <ItemView
          title={STRING.customer_reviews}
          onPress={() => {
            navigation.navigate('Review');
          }}
          icon={<Entypo name={'star-outlined'} size={20} color={theme?.colors?.grey} />}
        />

        <ItemView
          onPress={() => {
            navigation.navigate('About');
          }}
          title={STRING.about}
          icon={<Feather name={'info'} size={20} color={theme?.colors?.grey} />}
        />
        <ItemView
          title={STRING.rate}
          onPress={() => {
            ShowToastMessage('Coming Soon!');
          }}
          icon={<Entypo name={'star-outlined'} size={20}
            color={theme?.colors?.grey}
          />}
        />
        <ItemView
          title={STRING.currency}
          onPress={() => {
            closeCurrencyModal();
          }}
          icon={
            <MaterialCommunityIcons
              name={'currency-usd'}
              size={20}
              color={theme?.colors?.grey}
            />
          }
        />
        <ItemView
          title={STRING.language}
          onPress={() => {
            closeConfirmModal();
          }}
          icon={<FontAwesome name={'language'} size={20}
            color={theme?.colors?.grey}
          />}
        />

        <TouchableOpacity activeOpacity={0.8} style={styles.itemWrapper}>
          <View
            style={[
              styles.itemIcon,
              {
                marginEnd: 10,
              },
            ]}>
            <Octicons name={'arrow-switch'} size={20}
              color={theme?.colors?.grey}
            />
          </View>
          <Text
            // style={[styles.itemText,

            // ]}>
            style={[
              styles.itemText,
              {
                color: theme?.colors?.textColor
              },
            ]}>
            RTL Feature</Text>
          <View
            style={{
              flex: 1,
            }}
          />
          <Switch
            style={{
              // transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
              marginHorizontal: 10,
              alignSelf: 'center',
              color: theme?.colors?.textColor
            }}
            value={I18nManager.isRTL}
            onValueChange={value => {
              // languageRestart();
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.itemWrapper}>
          <View
            style={[
              styles.itemIcon,
              {
                marginEnd: 10,
              },
            ]}>
            <MaterialCommunityIcons
              name={'theme-light-dark'}
              size={20}
              color={theme?.colors?.grey}
            />
          </View>
          <Text
            style={[
              styles.itemText,
              {
                color: theme?.colors?.textColor
              },
            ]}>
            Dark Mode</Text>
          <View
            style={{
              flex: 1,
            }}
          />
          <Switch
            style={{
              alignSelf: 'center',
              // transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
              marginHorizontal: 10,
            }}
          // value={lightMode}
          // onValueChange={value => {
          //   setLightMode(prev => !prev);
          //   EventRegister.emit(STRING.app_theme, lightMode ? false : true);
          //   AsyncStorage.setItem(
          //     STRING.app_theme,
          //     lightMode ? false + '' : true + '',
          //   );
          // }}
          />

          {/*<CustomSwitch*/}
          {/*  selectionMode={1}*/}
          {/*  roundCorner={true}*/}
          {/*  option1={I18nManager.isRTL ? '🌙' : '⚪'}*/}
          {/*  option2={I18nManager.isRTL ? '⚪' : '🌙'}*/}
          {/*  onSelectSwitch={onSelectSwitch => {*/}
          {/*    setLightMode(prev => !prev);*/}
          {/*    EventRegister.emit(STRING.app_theme, lightMode ? false : true);*/}
          {/*    AsyncStorage.setItem(*/}
          {/*      STRING.app_theme,*/}
          {/*      lightMode ? false + '' : true + '',*/}
          {/*    );*/}
          {/*  }}*/}
          {/*  bgColor={theme.colors.bg_color_onBoard}*/}
          {/*  icon1={*/}
          {/*    I18nManager.isRTL ? (*/}
          {/*      <Entypo name={'moon'} size={20} color={COLORS.colorPrimary} />*/}
          {/*    ) : (*/}
          {/*      <FontAwesome*/}
          {/*        name={'circle'}*/}
          {/*        size={20}*/}
          {/*        color={COLORS.colorPrimary}*/}
          {/*      />*/}
          {/*    )*/}
          {/*  }*/}
          {/*  icon2={*/}
          {/*    I18nManager.isRTL ? (*/}
          {/*      <FontAwesome*/}
          {/*        name={'circle'}*/}
          {/*        size={20}*/}
          {/*        color={COLORS.colorPrimary}*/}
          {/*      />*/}
          {/*    ) : (*/}
          {/*      <Entypo name={'moon'} size={20} color={COLORS.colorPrimary} />*/}
          {/*    )*/}
          {/*  }*/}
          {/*/>*/}

          {/*<CustomSwitch*/}
          {/*  switchLeftText={I18nManager.isRTL ? '🌙' : '☀️'}*/}
          {/*  switchRightText={I18nManager.isRTL ? '☀️' : '🌙'}*/}
          {/*  style={{*/}
          {/*    marginHorizontal: 10,*/}
          {/*  }}*/}
          {/*  animationSpeed={300}*/}
          {/*  onSwitch={() => ShowConsoleLogMessage('switch mode')}*/}
          {/*/>*/}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Logout',
              'Are you sure want to logout',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    navigation.replace('Auth');
                  },
                },
              ],
              { cancelable: false },
            );
          }}
          activeOpacity={0.8}
          style={[
            styles.itemWrapper,
            {
              backgroundColor: theme.colors.bg_color,

              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 15,
              marginHorizontal: 15,
              marginVertical: 5,
            },
          ]}>
          <View
            style={[
              styles.itemIcon,
              {
                marginEnd: 10,
              },
            ]}>
            <Feather name={'log-out'} size={20} color={theme.colors.grey} />
          </View>
          <Text
            style={[
              [
                styles.itemText,
                {
                  color: theme.colors.white,
                },
              ],
            ]}>
            Logout
          </Text>
          <View
            style={{
              flex: 1,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.itemWrapper,
            {
              backgroundColor: theme.colors.bg_color,
              paddingHorizontal: 15,
              paddingVertical: 15,
              borderRadius: 15,
              marginHorizontal: 15,
              marginVertical: 25,
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
          ]}>
          <Text
            style={[
              [
                styles.itemText,
                {
                  color: theme.colors.white,
                  fontSize: 16,
                  fontFamily: 'OpenSans-SemiBold',
                },
              ],
            ]}>
            {STRING.contact_support}
          </Text>
          <Text
            style={[
              [
                styles.itemText,
                {
                  color: theme.colors.textColor,
                  fontSize: 14,
                  fontFamily: 'OpenSans-Regular',
                },
              ],
            ]}>
            If you have any problem, queries or questions feel free to reach out
          </Text>
          <BodyRecomCommBtn

            height={45}
            width={120}
            borderRadius={5}
            marginTop={10}
            textSize={14}
            textColor={theme?.colors?.btnTextColor}
            text={STRING.contact}
            backgroundColor={theme?.colors?.colorPrimary}
            onPress={() => {
              navigation.navigate('Contact');
            }}
            textStyle={{
              fontFamily: 'OpenSans-Medium',
              textTransform: 'uppercase',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            marginBottom: 25,
          }}
        />
      </ScrollView>

    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#00000080',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: SIZES.width,
    paddingHorizontal: 10,
    // alignSelf: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 75,
  },
  wrapper: {
    padding: 10,
    marginTop: 10,
    backgroundColor: COLORS.colorPrimaryLight,
    // backgroundColor: COLORS.red,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
  },
  profileImage: {
    height: 75,
    width: 75,
    borderRadius: 5,
  },
  divLine: {
    borderWidth: 0.2,
    backgroundColor: COLORS.light_gray,
    marginBottom: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 30,
    marginBottom: 10,
    paddingVertical: 5,
  },
  itemIcon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: COLORS.black,
    // flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    alignItems: 'flex-start',
  },
});

const ItemView = ({ icon, title, onPress, show }) => {
  const theme = useContext(themeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.itemWrapper}>
      <View
        style={[
          styles.itemIcon,
          {
            marginEnd: 10,
          },
        ]}>
        {icon}
      </View>
      <Text
        //  style={[styles.itemText,    ]}>
        style={[
          {
            color: theme.colors.textColor,
            fontSize: 18,
            fontFamily: 'OpenSans-Regular',
            // marginTop: 15,
            // marginHorizontal: 10,
            // marginBottom: 10,

          },
        ]}>
        {title || 'Home'}</Text>
      <View
        style={{
          flex: 1,
        }}
      />
      {show ? null : (
        <View
          style={[
            styles.itemIcon,
            {
              marginStart: 10,
            },
          ]}>
          <Ionicons
            name={'chevron-forward'}
            size={18}
            color={theme?.colors?.grey}
            style={{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};
