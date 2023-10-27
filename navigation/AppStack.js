import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import AboutUsScreen from "../screens/AboutUsScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import MyAppointmentsScreen from "../screens/MyAppointmentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedPostsScreen from "../screens/SavedPostsScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import TabNavigator from "./TabNavigator";
import { UserContext, UserType } from "../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const navigation = useNavigation();

  const { userId, setUserId } = useContext(UserType);
  const { user, setUser } = useContext(UserType);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://192.168.1.25:5000/profile/${userId}`
        );
        const { user } = res.data;
        console.log(user);
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, [userId]);

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#735D7F",
                // borderTopColor: "#735D7F",
                // borderTopWidth: 1,
                borderBottomWidth: 1,
                backgroundColor: "#F7F0FC",
              }}
            >
              <Image
                source={{
                  uri: user?.profilePicture,
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  marginTop: 20,
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: "bold",
                }}
              >
                {user?.name}
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "#F7F0FC",
        drawerStyle: {
          backgroundColor: "white",
          width: 250,
        },
      }}
    >
      <Drawer.Screen
        name='HomeNav'
        options={{
          headerShown: false,
          drawerLabel: "Home",
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name='My appointments'
        options={{
          headerShown: false,
          drawerLabel: "My appointments",
        }}
        component={MyAppointmentsScreen}
      />
      <Drawer.Screen
        name='Feedbacks'
        options={{
          headerShown: false,
          drawerLabel: "Feedbacks",
        }}
        component={FeedbackScreen}
      />
      <Drawer.Screen
        name='Saved Posts'
        options={{
          headerShown: false,
          drawerLabel: "Saved Posts",
        }}
        component={SavedPostsScreen}
      />
      <Drawer.Screen
        name='About Us'
        options={{
          headerShown: false,
          drawerLabel: "About Us",
        }}
        component={AboutUsScreen}
      />
      <Drawer.Screen
        name='Contact Us'
        options={{
          headerShown: false,
          drawerLabel: "Contact Us",
        }}
        component={ContactUsScreen}
      />
      <Drawer.Screen
        name='Profile'
        options={{
          headerShown: false,
          drawerLabel: "Profile",
        }}
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
