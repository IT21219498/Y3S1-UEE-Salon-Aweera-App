import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://192.168.1.6:5000/register", user)
      .then((res) => {
        console.log(res);
        Alert.alert("User Registered Successfully");
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        Alert.alert("Registration failed", "Something went wrong");
        console.log("Error", err);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F7F0FC", alignItems: "center" }}
    >
      <View style={{ marginTop: 50, marginBottom: 100 }}>
        <Image
          style={{
            width: 200,
            height: 100,
            resizeMode: "contain",
            tintColor: "black",
          }}
          source={require("../assets/aweera.png")}
          //   source={{
          //     uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
          //   }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 20 }}>
            Register to Your Account
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Ionicons
              style={{ marginLeft: 8 }}
              name='person'
              size={24}
              color='grey'
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor={"gray"}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder='Enter your name'
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name='email'
              size={24}
              color='gray'
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={"gray"}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder='Enter your email'
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name='lock'
              size={24}
              color='gray'
            />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor={"gray"}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder='Enter your password'
            />
          </View>
        </View>

        <View style={{ marginTop: 45 }}>
          <Pressable
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              marginTop: 40,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
              }}
            >
              Register
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 10 }}
          >
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              Already have an account?{" "}
              <Text style={{ color: "#007FFF", marginLeft: 10 }}>Sign In</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
