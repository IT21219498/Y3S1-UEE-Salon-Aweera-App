import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const SavedPostsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <View>
        <Header title={"Saved Posts"} />
        <Text>SavedPostsScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SavedPostsScreen;

const styles = StyleSheet.create({});
