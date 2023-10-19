import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert } from "react-native";

const ProfileScreen = () => {
  const { loginUser, setLoginUser, userId, setUserId } = useContext(UserType);
  const { user, setUser } = useContext(UserType);
  const navigation = useNavigation();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const editProfile = () => {
    setName(user?.name);
    const user = {
      name: name,
      ProfilePicture: image,
    };
    axios
      .put(`http://192.168.1.25:5000/update-user/${userId}`, user)
      .then((res) => {
        Alert.alert("User Updated Successfully");
        setName("");
        setImage("");
      })
      .catch((err) => {
        Alert.alert("User update failed", "Something went wrong");
        console.log("Error", err);
      });
  };

  const logout = () => {
    clearAuthToken();
  };

  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");

    setLoginUser(null);

    console.log("token removed");

    navigation.replace("Login");
  };
  return (
    <View style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <Header title='Profile' />
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {user?.name}
            </Text>
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
            <View
              style={{
                // flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={pickImage}>
                <MaterialIcons
                  name='add-photo-alternate'
                  size={35}
                  color='black'
                />
              </TouchableOpacity>
              {image && (
                <>
                  <View style={{ marginRight: 20 }}>
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        margin: 10,
                      }}
                    />

                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onPress={() => setImage(null)}
                    >
                      <MaterialIcons name='cancel' size={30} color='red' />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
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
            onPress={editProfile}
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
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
