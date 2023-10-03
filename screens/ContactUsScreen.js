import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <View>
        <Header title={"Make an Appointment"} />
        <Text>ContactUsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({});
