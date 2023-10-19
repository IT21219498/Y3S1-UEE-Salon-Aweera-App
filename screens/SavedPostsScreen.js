import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
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
