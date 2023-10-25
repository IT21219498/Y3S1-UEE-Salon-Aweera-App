import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import AppointmentScreen from './screens/AppointmentScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateScreen from './screens/CreateScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AppointmentSuccessScreen from './screens/AppointmentSuccessScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  function Bottomtabs() {
    return (
      <Tab.Navigator barStyle={{ backgroundColor: '#735D7F' }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: { color: 'black' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            tabBarLabel: 'Create',
            tabBarLabelStyle: { color: 'black' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="create" size={24} color="black" />
              ) : (
                <Ionicons name="create-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Appointment"
          component={AppointmentScreen}
          options={{
            tabBarLabel: 'Appointment',
            tabBarLabelStyle: { color: 'black' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="calendar-cursor"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: { color: 'black' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Bottomtabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Stack.Screen
        name="AppointmentSuccess"
        component={AppointmentSuccessScreen}
        options={{ headerShown: false }}
      />
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
