// CustomBottomSheet.js

import React, { useState } from 'react';
import { Image, Modal, ScrollView } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants';
import GlobalStyle from '../styles/GlobalStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import icons from '../constants/icons';
import BodyRecomEditText from '../utils/EditText/BodyRecomEditText';
import BottomSheet from 'react-native-simple-bottom-sheet';
import BodyRecomCommBtn from '../utils/BodyRecomCommBtn';

const CustomBottomSheet = ({ isVisible, onClose, navigation }) => {

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const [selectedOptionlab11, setselectedOptionlab11] = useState('lab');
  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };
  if (!isVisible) {
    return null; // If the bottom sheet is not visible, return null to render nothing
  }

  return (
    <Modal
      isVisible={bottomSheetVisible}
      onBackdropPress={closeBottomSheet}
      transparent={true} // Set modal background to transparent

    >
      <View style={styles.modalContainer}>
        <View style={styles.container}>

          <View
            style={{
              width: 100,
              height: 7,
              backgroundColor: COLORS?.black,
              alignSelf: 'center',
              borderRadius: 5,
              marginVertical: 20
            }}
          />
          <View style={[
            GlobalStyle?.flexRowJustifyBtwn,
            GlobalStyle?.marginHorizontal10
          ]}>
            <Text
              style={[
                GlobalStyle?.fontSize22
              ]}
            >Add Weight</Text>

            <TouchableOpacity onPress={onClose}>
              <Entypo
                name='cross'
                size={35}
                color={COLORS?.black}
              />
            </TouchableOpacity>

          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View
              style={[
                GlobalStyle?.marginTop15
              ]}
            >
              <Text
                style={[
                  GlobalStyle.fontSize28,
                  GlobalStyle.marginTop15,
                  GlobalStyle?.marginVertical15,
                  GlobalStyle?.marginTop15, {
                    fontSize: 25
                  }
                ]}
              >Upload Photo</Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderColor: COLORS?.customColor,
                  paddingVertical: 40,
                  marginTop: 20,

                  borderRadius: 15,
                  borderStyle: 'dashed',
                  opacity: 6

                }}
              >
                <Image
                  source={icons?.uploadPhoto}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Text
                  style={[
                    GlobalStyle?.fontSize16,
                    GlobalStyle?.marginTop
                  ]}
                >
                  Upload photo here
                </Text>
              </TouchableOpacity>



              <Text
                style={[
                  GlobalStyle.fontSize28,
                  GlobalStyle.marginTop15,
                  GlobalStyle?.marginVertical15,
                  GlobalStyle?.marginTop15, {
                    fontSize: 25
                  }

                ]}
              >What current weight?</Text>
              <View
                style={[
                  GlobalStyle?.flexAlignJustifyCenter,
                  GlobalStyle?.paddingVertical15,
                  GlobalStyle?.borderRadius
                  , {
                    borderWidth: 0.2,
                    // flex:1,
                    paddingVertical: 50,
                    // height:70,
                    marginBottom: 10
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


              <View style={styles.container1}>
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

              <BodyRecomEditText
                placeholder="03/10/2024"

                // value={email}
                iconPosition={'right'}
                icon={
                  <Image
                    source={icons?.calender}
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />

                }
                style={{
                  alignItems: 'center'
                }}
                keyBoardType={'email-address'}
              // onChangeText={v => setEmail(v)}
              />
            </View>
            <View style={[
              GlobalStyle?.marginTop15
            ]}>
              <BodyRecomCommBtn
                height={55}
                width={'100%'}
                borderRadius={30}
                marginTop={30}
                textSize={17}
                borderColor={COLORS?.gray}

                textColor={COLORS?.white}
                text={('Save')}
                backgroundColor={COLORS?.white}
                onPress={() => {
                  // navigation.navigate('ChoosePlan');
                  onClose();
                }}
                textStyle={{
                  fontFamily: FONTS?.semi_bold,
                  color: COLORS.colorPrimary,
                }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flex: 1,
              // marginBottom: 10
            }}
          >

          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS?.white,
    padding: 20,
    // borderRadius:20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 40


    // Add more styles as needed
  },
  container1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    // backgroundColor: COLORS?.light_gray,
    borderRadius: 20,
    backgroundColor: "#E7E7E7",

    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 15
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
  },
};

export default CustomBottomSheet;
