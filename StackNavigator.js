import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import AppointmentScreen from "./screens/AppointmentScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CreateScreen from "./screens/CreateScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import PackagesScreen from "./screens/PackagesScreen";
import MyAppointmentsScreen from "./screens/MyAppointmentsScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import SavedPostsScreen from "./screens/SavedPostsScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  function Bottomtabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "#AB83A1",
          tabBarInactiveBackgroundColor: "#735D7F",
          tabBarStyle: { position: "absolute" },
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },

            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name='home' size={24} color='black' />
              ) : (
                <AntDesign name='home' size={24} color='black' />
              ),
          }}
        />
        <Tab.Screen
          name='Packages'
          component={PackagesScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Packages",
            tabBarLabelStyle: { color: "black" },

            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name='list-circle-sharp' size={24} color='black' />
              ) : (
                <Ionicons name='list-circle-outline' size={24} color='black' />
              ),
          }}
        />
        <Tab.Screen
          name='Appointment'
          component={AppointmentScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Appointment",
            tabBarLabelStyle: { color: "black" },

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name='calendar-cursor'
                  size={24}
                  color='black'
                />
              ) : (
                <MaterialCommunityIcons
                  name='calendar'
                  size={24}
                  color='black'
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function DrawerNavigator() {
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
            width: 250,
          },
        }}
      >
        <Drawer.Screen
          name='Home'
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name='My appointments'
          options={{
            drawerLabel: "My appointments",
            title: "My appointments",
          }}
          component={MyAppointmentsScreen}
        />
        <Drawer.Screen
          name='Feedbacks'
          options={{
            drawerLabel: "Feedbacks",
            title: "Feedbacks",
          }}
          component={FeedbackScreen}
        />
        <Drawer.Screen
          name='Saved Posts'
          options={{
            drawerLabel: "Saved Posts",
            title: "Saved Posts",
          }}
          component={SavedPostsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Main'
          component={Bottomtabs}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name='MyAppointments'
          component={MyAppointmentsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
