import React, { Suspense, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox, PermissionsAndroid, Platform, Text, View } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import Splash from './src/screen/Auth/Splash';

// import Login from './src/screens/Auth/Login';
// import Signup from './src/screens/Auth/Signup';
import { COLORS } from './src/constants';
// import Type from './src/screens/Auth/Type';
// import OTP from './src/screens/Auth/OTP';
import configureStore from './src/redux/store/configureStore';
import { Provider } from 'react-redux';
import walkAway from './src/screen/Auth/walkAway/Index';
import Welcome from './src/screen/Auth/Welcome/Index';
import Onboarding from './src/screen/Onboarding/Index';
import Steps1Scrr from './src/screen/Onboarding/Steps1Scrr';
import Steps2Scrr from './src/screen/Onboarding/Steps2Scrr';
import Steps3Scr from './src/screen/Onboarding/Steps3Scr';
import Steps7Scr from './src/screen/Onboarding/Steps7Scr';
import NewPlan from './src/screen/NewPlan/NewPlan';
import ChoosePlan from './src/screen/NewPlan/ChoosePlan';
import Login from './src/screen/Auth/Login';
import ForgotPassword from './src/screen/Auth/ForgotPassword';
import OtpScreen from './src/screen/Auth/ForgotPassword/OtpScreen';
import ChangePassword from './src/screen/Auth/ForgotPassword/ChangePassword';
import BottomTabNav from './src/navigation/bottom_tab_nav';
import RecipeDetails from './src/screen/Recipes/RecipeDetails';
import EditProfile from './src/screen/Profile/EditProfile';
// import DrawerNav from './src/navigation/DrawerNav';
// import { requestUserPermission } from './src/firebase/notificationService';
// import { ShowConsoleLogMessage } from './src/utils/Utility';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();
const store = configureStore();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainContainer" component={BottomTabNav} />

      <Stack.Screen name="walkAway" component={walkAway} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />

      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Steps7Scr" component={Steps7Scr} />
      <Stack.Screen name="NewPlan" component={NewPlan} />
      <Stack.Screen name="ChoosePlan" component={ChoosePlan} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditProfile" component={EditProfile} />



    </Stack.Navigator>
  );
};
const App = () => {
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        await requestUserPermission();
      }
      await requestNotiPermission();
    })();
  });

  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <View>
            <Text>Loading...</Text>
          </View>
        }>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_right',
              statusBarAnimation: 'slide',
              statusBarColor: COLORS.primary,
              statusBarStyle: 'light',
            }}>
            <Stack.Screen name="Auth" component={Auth} />
            {/* <Stack.Screen name="MainContainer" component={DrawerNav} /> */}
            {/* <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> */}
            {/* <Stack.Screen name="AboutUs" component={AboutUs} /> */}
            {/* <Stack.Screen name="TermsConditions" component={TermsConditions} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </Provider>
  );
};
export default App;
