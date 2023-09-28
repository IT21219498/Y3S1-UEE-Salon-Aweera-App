import { StyleSheet, Text, View } from "react-native";
import React from "react";

const User = ({ item }) => {
  return (
    <View>
      <View>
        <Image
          style={{
            width: 40,
            height: 40,
            borderradius: 20,
            resizeMode: "conatin",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/149/149071",
          }}
        />
        <Text styles={{ fontSize: 15, fontweight: "500" }}>{item?.name}</Text>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
