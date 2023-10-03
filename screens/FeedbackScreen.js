import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const FeedbackScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <View>
        <Header title={"Feedback"} />
        <Text>FeedbackScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({});
