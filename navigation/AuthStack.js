import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MyAppointmentsScreen from '../screens/MyAppointmentsScreen';
import TabNavigator from './TabNavigator';
import AppStack from './AppStack';
import ProfileScreen from '../screens/ProfileScreen';
import SelectPackageScreen from '../screens/SelectPackageScreen';
import SelectStylistScreen from '../screens/SelectStylistScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Drawer" component={AppStack} />
      <Stack.Screen
        name="MyAppointments"
        component={MyAppointmentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectPackage"
        component={SelectPackageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectStylist"
        component={SelectStylistScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
