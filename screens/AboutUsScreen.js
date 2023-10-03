import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <View>
        <Header title={"Make an Appointment"} />
        <Text>AboutUsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({});
