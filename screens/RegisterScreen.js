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
  ScrollView,
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
      .post("http://192.168.1.25:5000/register", user)
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
    <View style={{ flex: 1, backgroundColor: "#F7F0FC", alignItems: "center" }}>
      {/* Add the two circles at the top */}
      <View style={styles.circleContainer}>
        <View style={styles.circleContainer2}>
          <View style={styles.circle2} />
        </View>
        <View style={styles.circleContainer1}>
          <View style={styles.circle1} />
        </View>
      </View>
      <View style={{ marginTop: 90, marginBottom: 70 }}>
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

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 17,
              marginTop: 20,
              fontFamily: "Poppins_700Bold",
            }}
          >
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
              backgroundColor: "white",
            }}
          >
            <Ionicons
              style={{ marginLeft: 8 }}
              name='person'
              size={24}
              color='black'
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
              backgroundColor: "white",
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name='email'
              size={24}
              color='black'
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
              backgroundColor: "white",
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name='lock'
              size={24}
              color='black'
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

        <View style={{ marginTop: 20 }}>
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
                fontSize: 16,
                color: "white",
                fontFamily: "Poppins_700Bold",
              }}
            >
              Register
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 10 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Poppins_300Light",
              }}
            >
              Already have an account?{" "}
              <Text style={{ color: "#007FFF", marginLeft: 10 }}>Sign In</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  circleContainer1: {
    position: "absolute",
    // top: -12,
    // left: 0,
    // // right: 0,
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  circleContainer1: {
    position: "absolute",
    top: -70,
    left: -140,
    // right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleContainer2: {
    position: "absolute",
    top: -12,
    left: -250,
    // right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle1: {
    width: 175,
    height: 175,
    borderRadius: 100,
    backgroundColor: "#735D7F", // You can change the color
  },
  circle2: {
    width: 175,
    height: 175,
    borderRadius: 100,
    backgroundColor: "#AB83A1", // You can change the color
  },
});
