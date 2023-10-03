import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const AppointmentScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <Header title={"Make an Appointment"} />
      <Text>AppointmentScreen</Text>
    </SafeAreaView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
