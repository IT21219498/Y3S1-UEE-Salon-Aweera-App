import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MyAppointmentsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <View>
        <Header title={"My Appointments"} />
        <Text>MyAppointmentsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyAppointmentsScreen;

const styles = StyleSheet.create({});
