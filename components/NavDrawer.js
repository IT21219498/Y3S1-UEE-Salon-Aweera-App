import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AboutUsScreen from "../screens/AboutUsScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import MyAppointmentsScreen from "../screens/MyAppointmentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedPostsScreen from "../screens/SavedPostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const NavDrawer = () => {
  return (
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
    </NavigationContainer>
  );
};

export default NavDrawer;

const styles = StyleSheet.create({});
