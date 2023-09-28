import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Image,
} from "react-native";
import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import { UserType } from "../context/UserContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { useNavigation } from "@react-navigation/native";

const CreateScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [content, setContent] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      // title: "Explore Salon Feed",
      // headerTitleStyle: {
      //   fontSize: 20,
      //   fontWeight: "bold",
      //   color: "black",
      // },
      // headerStyle: {
      //   backgroundColor: "black",
      //   height: 200,
      // },
    });
  }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };
    fetchUsers();
  }, []);
  const handlePostSubmit = () => {
    const postData = {
      userId,
    };
    if (content) {
      postData.content = content;
    }

    axios
      .post("http://192.168.1.6:5000/create-post", postData)
      .then((response) => {
        setContent("");
      })
      .catch((err) => {
        console.log("error creating post", err);
      });
  };
  return (
    <SafeAreaView
      style={{ padding: 10, backgroundColor: "#F7F0FC", height: 1000 }}
    >
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Image
          style={{
            width: 200,
            height: 100,
            resizeMode: "contain",
            tintColor: "black",
          }}
          source={require("../assets/aweera.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Create Post
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", marginLeft: 10, borderColor: "#D0D0D0" }}
      >
        <TextInput
          style={{
            color: "grey",
            marginVertical: 10,
            width: 300,
          }}
          value={content}
          onChangeText={(text) => setContent(text)}
          placeholderTextColor={"black"}
          placeholder='Type your message...'
          multiline
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Button onPress={handlePostSubmit} title='Share Post' />
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
