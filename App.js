import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import AppStack from "./navigation/AppStack";
import { UserContext, UserType } from "./context/UserContext";
import "react-native-gesture-handler";
import React, { useCallback, useContext, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import CheckuserLogin from "./screens/CheckuserLogin";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigation/AuthStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppointmentContext } from "./context/AppointmentContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const getAuthToken = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      return token; // Return the token or null if it doesn't exist
    } catch (err) {
      console.log("Error", err);
      return null;
    }
  };

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await getAuthToken();
  //       if (token) {
  //         setIsAuthenticated(false); // Set login status to true if token exists
  //       }
  //     } catch (err) {
  //       console.log("Error", err);
  //     }
  //   };
  //   console.log("isAuthenticated", isAuthenticated);

  //   checkLoginStatus();
  // }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <UserContext>
          <AppointmentContext>
            {/* <AppStack /> */}
            {/* <AuthStack /> */}
            <CheckuserLogin />
          </AppointmentContext>
        </UserContext>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
