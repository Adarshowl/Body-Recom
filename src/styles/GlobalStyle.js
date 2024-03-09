import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';
import { SIZES } from '../constants';
import { FONTS } from '../constants/Fonts';


export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  projectNotExist: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    lineHeight: 24,
    paddingHorizontal: 20,
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  flexAlignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowJustifyBtwn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  fontSize16: {
    fontSize: 16,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize30: {
    fontSize: 28,
    fontFamily: FONTS?.semi_bold,
    color: COLORS?.black
  },
  textUnderLine: {
    textDecorationLine: 'underline'
  },
  welcomeText: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: 'OpenSans-Medium',
    textAlign: 'center',
  },
  welcomeBelowText: {
    color: COLORS.black,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: FONTS?.semi_bold,
  },
  mainHeader: {
    minHeight: Platform.OS === 'android' ? 55 : 100,
    width: '100%',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 0 : 50,
  },
  mainHeaderDrawer: {
    minHeight: Platform.OS === 'android' ? 0 : 50,
    width: '100%',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    paddingTop: Platform.OS === 'android' ? 0 : 50,
  },
  mainHeaderText: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    lineHeight: 24,
    fontWeight: 600,
    flex: 1,
  },
  userNameText: {
    color: COLORS.grey,
    fontSize: 20,
    fontFamily: 'OpenSans-Medium',
  },
  appLogoImage: {
    height: 100,
    width: 150,
    // resizeMode: 'stretch',
    resizeMode: 'center',
    margin: 30,
    padding: 15,
    alignSelf: 'center',
  },
  // basic margin
  allSideMargin5: {
    margin: 5,
  },
  allSideMargin10: {
    margin: 10,
  },
  marginHorizontal5: {
    marginHorizontal: 5,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  marginVertical5: {
    marginVertical: 5,
  },

  marginVertical10: {
    marginVertical: 10,
  },
  marginHorizontal15: {
    marginHorizontal: 15,
  },
  marginVertical15: {
    marginVertical: 15,
  },
  marginLeft: {
    marginLeft: 10,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  marginRight: {
    marginRight: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  marginTop15: {
    marginTop: 15,
  },
  marginBottom: {
    marginBottom: 10,
  },
  // basic padding
  allSidePadding5: {
    margin: 5,
  },
  allSidePadding10: {
    margin: 10,
  },
  toolbarIconBg: {
    width: 30,
    height: 30,
    marginStart: 15,
    borderRadius: 5,
    backgroundColor: COLORS.light_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarLastIconBg: {
    width: 40,
    height: 40,
    marginStart: 15,
    marginEnd: 10,
    borderRadius: 5,
    backgroundColor: COLORS?.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2
  },
  toolbarAppIcon: {
    width: 30,
    height: 30,
    marginEnd: 5,
    marginStart: 15,
    borderRadius: 5,
  },
  elevation: {
    elevation: 10
  },
  paddingHorizontal5: {
    paddingHorizontal: 5,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  paddingVertical5: {
    paddingVertical: 5,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  paddingHorizontal15: {
    paddingHorizontal: 15,
  },
  paddingVertical15: {
    paddingVertical: 15,
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  paddingRight: {
    paddingRight: 10,
  },
  paddingTop: {
    paddingTop: 10,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  commonToolbarBG: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    minHeight: 56,
    elevation: 10,
  },
  emptyListText: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.black,
    flex: 1,
    marginTop: SIZES.width / 1.5,
  },
  workOutText1: {
    fontSize: 33,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS?.semi_bold
  },
  workOutText2: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.grey,
    textAlign: 'center'
  },
  borderRadius10: {
    borderRadius: 10
  },
  fontSize28: {
    // flex: 1,
    fontSize: 28,
    fontFamily: FONTS?.regular,
    color: COLORS?.black
  },
  fontSize22: {
    fontSize: 22,
    fontFamily: FONTS?.semi_bold,
    color: COLORS?.black
  },
  marginTop3: {
    marginTop: 3
  },
  marginTop5: {
    marginTop: 5
  },
  fontSize13: {
    fontSize: 13,
    fontFamily: FONTS?.light
  },
  colorWhite: {
    color: COLORS?.white
  },
  fontSize18: {
    fontSize: 18,
    fontFamily: FONTS?.semi_bold,
    color: COLORS?.black
  },
  label: {
    fontSize: 19,
    color: COLORS.black,
    fontFamily: FONTS.medium,
  },
  onbordingButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
    // borderWidth: 0.2,
    borderColor: COLORS?.gray,
  },
  selectedButtonColor: {
    borderColor: COLORS?.customColor,
    borderWidth: 2
  },
  borderRadius: {
    borderRadius: 12,
    borderWidth: 0.8
  },
  ImgaeStyle: {
    width: 50,
    height: 50,
    margin: 5
  },
  fontSize14TextGray: {
    fontSize: 15.5,
    color: COLORS?.grey,
    fontFamily: FONTS?.regular
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: "#E7E7E7",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 15
  },
  selectedButton: {
    backgroundColor: COLORS?.white
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    // borderWidth: 2,
    // marginRight: 10,
    borderRadius: 15,
  },
  line: {
    // width:1,
    borderWidth: 0.5,
    borderColor: COLORS?.gray,
    height: 150
  },
  activityIndicatorWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    // alignItems: 'center',
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    height: 60,
    width: 60,
    // flex: 1,
    marginHorizontal: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
