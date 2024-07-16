import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import { useFonts } from 'expo-font';
import OnboardingScreen from './screens/OnboardingScreen';
import ForgetScreen from './screens/ForgetScreen';
import VerifyScreen from './screens/VerifyScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  const [loaded, error] = useFonts({
    'PowerGrotesk': require('./assets/fonts/power_grotesk/PowerGrotesk-Regular.ttf'),
    'Gilroy_ExtraBold': require('./assets/fonts/Gilroy-FREE/Gilroy-ExtraBold.otf'),
    'Gilroy_Medium': require('./assets/fonts/Gilroy-FREE/Gilroy-Medium.ttf'),
  })
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Onboard' component={OnboardingScreen} />
        <Stack.Screen name='Forget' component={ForgetScreen} />
        <Stack.Screen name='Verify' component={VerifyScreen} />
        <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})