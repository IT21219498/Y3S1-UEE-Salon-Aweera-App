import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import PackagesScreen from "../screens/PackagesScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const TabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#735D7F", height: 75 }}>
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
              <MaterialCommunityIcons name='calendar' size={24} color='black' />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
