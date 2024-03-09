import React, { useState, useRef, useEffect } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
    PermissionsAndroid,
    Platform,
    Modal


} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import CustomHeader from '../../global/CustomHeader';
import Foundation from 'react-native-vector-icons/Foundation'
import BottomSheet from 'react-native-simple-bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons'
import { COLORS, SIZES } from '../../constants';
import { requestExternalWritePermission } from '../../utils/RequestUserPermission';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { FONTS } from '../../constants/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GlobalStyle from '../../styles/GlobalStyle';
import CommHeader from '../../global/CommHeader';
import images from '../../constants/images';
import BodyRecomCommBtn from '../../utils/BodyRecomCommBtn';
import icons from '../../constants/icons';
import BodyRecomBorderWidthBtn from '../../utils/BodyRecomBorderWidthBtn';
import CustomBottomSheet from '../../global/CustomBottomSheet';
import ToolBarIcon from '../../utils/ToolBarIcon';
import PreprationContent from '../../global/PreprationContent';
import BodyRecomEditText from '../../utils/EditText/BodyRecomEditText';


const EditProfile = ({ navigation }) => {





    const [showCameraModal, setShowCameraModal] = useState(false);

    const openImageCamera = () => {
        ImagePicker.openCamera({
            multiple: false,
            cropping: true,
            includeBase64: true,
        }).then(images => {
            // const updatedUserData = { ...userData, profile_img: images.path };
            // setUserData(updatedUserData);

            setImage('data:image/jpeg;base64,' + images?.data);

            setShowCameraModal(false);
        });
    };
    const [loading, setLoading] = useState(false);

    // const dispatch = useDispatch()
    // const userData = useSelector(state => state.state?.userData);

    useEffect(() => {
        let permission = requestExternalWritePermission();
        setHavePermission(permission);
        // setImage(icons.img_place)

        const requestCameraPermission = async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'Camera Permission',
                            message: 'App needs camera permission',
                        },
                    );
                    // If WRITE_EXTERNAL_STORAGE Permission is granted
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                } catch (err) {
                    console.warn(err);
                    alert('Write permission err', err);
                }
                return false;
            } else {
                return true;
            }
        };
        requestCameraPermission();
    }, []);

    useEffect(() => {
        // getUserFromStorage();
        // setTimeout(async () => {
        //   await getUserFromStorage();
        // }, 0);
    }, []);
    // const [userData, setUserData] = useState({});
    const [havePermission, setHavePermission] = useState(false);

    const openImagePicker = () => {
        try {
            ImagePicker.openPicker({
                multiple: false,
                cropping: true,
                includeBase64: true,
            }).then(images => {
                setImage('data:image/jpeg;base64,' + images?.data);
            });
        } catch (error) {
            ShowConsoleLogMessage('Image picker error => ' + JSON.stringify(error));
        }
    };
    const [image, setImage] = useState(null);
    const renderCameraModal = () => {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={showCameraModal}
                onRequestClose={() => {
                    setShowCameraModal(false);
                }}
                style={{
                    flexGrow: 1,
                }}>
                <View
                    style={{
                        backgroundColor: '#00000090',
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                        // alignItems:'center'
                    }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            setShowCameraModal(false);
                        }}
                        style={{
                            // flexGrow: 1,
                            // justifyContent: 'flex-end',
                            // alignItems: 'center',
                        }}
                    />
                    <View
                        style={{
                            maxHeight: SIZES.height * 0.7,
                            backgroundColor: COLORS.white,
                        }}>
                        <View style={[
                            GlobalStyle.activityIndicatorWrapper
                        ]}>
                            <View
                                style={[
                                    GlobalStyle.flexRowJustifyBtwn,
                                    GlobalStyle.paddingVertical15,
                                    GlobalStyle.paddingHorizontal15,
                                    GlobalStyle?.marginHorizontal15
                                ]}>
                                <Text
                                    style={[
                                        GlobalStyle?.fontSize18,
                                        {
                                            marginTop: 0,
                                            // flex: 1,
                                        },
                                    ]}>
                                    Choose file
                                </Text>
                                <Ionicons
                                    name={'close'}
                                    color={COLORS.black}
                                    size={25}
                                    onPress={() => setShowCameraModal(false)}
                                />
                            </View>
                            <View
                                style={{
                                    height: 0.5,
                                    width: '100%',
                                    backgroundColor: COLORS?.gray,
                                }}
                            />

                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    flexDirection: 'row',
                                    marginVertical: 25,
                                    marginHorizontal: 30
                                }}>
                                <TouchableOpacity
                                    style={[
                                        GlobalStyle.pickerStyle,
                                        {
                                            borderColor: COLORS?.customColor,
                                        },
                                    ]}
                                    onPress={() => {
                                        setShowCameraModal(false);
                                        if (havePermission) {
                                            openImageCamera();
                                        } else {
                                            ShowToastMessage('Please provide camera permission');
                                        }
                                    }}>
                                    <Ionicons name={'camera'} color={COLORS.black} size={30} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        GlobalStyle.pickerStyle,
                                        {
                                            borderColor: COLORS.customColor,
                                        },
                                    ]}
                                    onPress={() => {
                                        // setShowCameraModal(false);
                                        openImagePicker();
                                        setShowCameraModal(false);
                                    }}>
                                    <Foundation name={'photo'} color={COLORS.black} size={30} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    };



    return (
        <SafeAreaView
            style={[
                GlobalStyle?.mainContainer
            ]}
        >
            <View
                style={[
                    GlobalStyle?.marginHorizontal5,
                    GlobalStyle?.paddingVertical15,
                    GlobalStyle?.marginTop15,
                    GlobalStyle?.flexRowJustifyBtwn, {
                    }
                ]}
            >

                <View
                    style={[
                        GlobalStyle?.flexRowAlignCenter
                    ]}
                >
                    <ToolBarIcon
                        title={MaterialIcons}
                        iconName={'arrow-back-ios-new'}
                        icSize={25}
                        icColor={COLORS?.black}
                        style={{
                            backgroundColor: COLORS?.white,
                            // borderRadius: 30,
                            // width: 25,
                            // height: 25,
                            elevation: 5

                        }}

                    />
                    <Text
                        style={[
                            GlobalStyle?.fontSize22,
                            GlobalStyle?.marginLeft15, {
                                fontFamily: FONTS?.bold
                            }
                        ]}
                    >
                        Edit Profile
                    </Text>
                </View>

            </View>


            <ScrollView
            >


                <View
                    style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        // flexDirection: 'row',
                        width: 120,
                        marginVertical: 10,
                    }}>
                    {image ? (
                        <ImageBackground
                            style={{
                                height: 140,
                                width: 140,
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                alignItems: 'center',
                            }}
                        // source={icons.profile_placeholder}
                        >
                            <Image
                                source={{ uri: image }}
                                style={{
                                    height: 120,
                                    width: 120,
                                    // resizeMode: 'center',
                                    borderRadius: 100,
                                    alignSelf: 'center',
                                }}
                                PlaceholderContent={
                                    <ActivityIndicator color={COLORS.primary} size={'small'} />
                                }
                            />
                        </ImageBackground>
                    ) : (
                        <ImageBackground
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                alignItems: 'center',
                                borderWidth: 0.2,
                                borderColor: COLORS?.gray,
                                // backgroundColor: theme?.colors?.bg
                            }}
                        // source={icons.profile_placeholder}
                        >
                            <Image
                                source={images.profile}
                                // source={{
                                //     uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU',
                                // }}
                                style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 100,
                                    alignSelf: 'center',
                                    // backgroundColor:COLORS?.bg
                                }}
                            />
                        </ImageBackground>
                    )}

                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            bottom: 3,
                            right: 2,
                            padding: -6,
                            borderRadius: 50,
                            backgroundColor: COLORS?.white,
                            width: 35,
                            height: 35,
                            justifyContent: 'center',
                            alignItems: 'center',
                            elevation: 5
                        }}
                        onPress={() => {
                            setShowCameraModal(true);
                        }}>
                        <Image
                            source={icons?.edit}
                            style={{
                                height: 20,
                                width: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={[
                        GlobalStyle?.marginTop15,

                        GlobalStyle?.marginHorizontal5, {
                            marginHorizontal: 20,

                        }
                    ]}
                >



                    <BodyRecomEditText
                        placeholder="Enter your name"
                        label="Full Name"

                        keyBoardType={'email-address'}
                    // onChangeText={v => setEmail(v)}
                    />
                    <BodyRecomEditText
                        placeholder="Enter your email"
                        label="Email"

                        keyBoardType={'email-address'}
                    // onChangeText={v => setEmail(v)}
                    />

                    <BodyRecomEditText
                        placeholder="Enter your Phone Number"
                        label="Phone Number"
                        iconPosition={'left'}
                        style={{
                            marginHorizontal: 10,
                            marginLeft: 20

                        }}

                        // value={email}
                        icon={
                            <View style={[
                                GlobalStyle?.flexRowAlignCenter,
                                GlobalStyle?.marginLeft15
                            ]}>
                                <Image
                                    source={{
                                        uri: 'https://cdn-icons-png.flaticon.com/128/321/321238.png'
                                    }}
                                    style={{
                                        width: 28,
                                        height: 32,
                                        borderRadius: 5
                                    }}
                                />
                                <MaterialIcons
                                    name='keyboard-arrow-down'
                                    size={25}
                                    color={COLORS?.black}
                                    style={{
                                        marginLeft: 3
                                    }}
                                // style={[GlobalStyle?.marginHorizontal5]}
                                />
                            </View>
                        }
                        keyBoardType={'number-pad'}
                    // onChangeText={v => setEmail(v)}
                    />





                </View>




                <View
                    style={[
                        GlobalStyle?.marginVertical10
                    ]}
                />

            </ScrollView>


            {renderCameraModal()}


        </SafeAreaView>
    );
};

export default EditProfile;
const styles = StyleSheet.create({
    activityIndicatorWrapper: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        alignItems: 'center',
    },

});
