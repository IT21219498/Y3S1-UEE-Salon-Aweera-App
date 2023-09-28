import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const [user, setUser] = useState("");
  const { userId, setUserId } = useContext(UserType);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://192.168.1.6:5000/profile/${userId}`
        );
        const { user } = res.data;
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  const logout = () => {
    clearAuthToken();
  };

  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");

    console.log("token removed");

    navigation.replace("Login");
  };
  return (
    <View style={{ marginTop: 55, padding: 15, backgroundColor: "white" }}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user?.name}</Text>
          <View
            style={{
              paddingHorizontal: 7,
              paddingVertical: 5,
              borderRadius: 8,
              backgroundColor: "#D0D0D0",
            }}
          >
            <Text>Aweera Salon</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            alignItems: "center",
            gap: 20,
          }}
        >
          <View>
            <Image
              style={{
                width: 40,
                height: 40,
                // borderradius: 20,
                resizeMode: "contain",
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Diploma in Hairdressing & Beauty Culture
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Full time stylist
            </Text>

            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Experience : 2 years
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "raw",
          alignItems: "center",
          gap: 10,
          marginTop: 20,
        }}
      >
        <Pressable
          style={{
            // flex: 10,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text>Edit Profile</Text>
        </Pressable>
        <Pressable
          onPress={logout}
          style={{
            // flex: 10,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
