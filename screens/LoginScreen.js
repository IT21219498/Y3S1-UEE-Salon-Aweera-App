import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { UserContext, UserType } from "../context/UserContext";

const LoginScreen = () => {
  const { loginUser, setLoginUser } = useContext(UserType);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          setTimeout(() => {
            navigation.replace("Main" && "Drawer");
          }, 400);
        }
      } catch (err) {
        console.log("Error", err);
      }
    };

    checkLoginStatus();
  }, []);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const token = await AsyncStorage.getItem("authToken");

  //     if (token) {
  //       axios({
  //         method: "get",
  //         url: `http://192.168.1.6:5000/me`,
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //         .then((res) => {
  //           setUserData(res.data);
  //           if (!res.error) {
  //             setTimeout(() => {
  //               navigation.replace("Main" && "Drawer");
  //             }, 400);
  //           }
  //         })
  //         .catch((err) => {
  //           console.log("Error", err);
  //         });
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios({
      method: "post",
      url: "http://192.168.1.6:5000/login",
      data: user,
    })
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        setLoginUser(true);
        // console.log(res);

        AsyncStorage.setItem("authToken", token);
        navigation.navigate("Main");
      })
      .catch((err) => {
        Alert.alert("Login failed", "Something went wrong");
        console.log("Error", err);
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F7F0FC", alignItems: "center" }}
    >
      {/* Add the two circles at the top */}
      <View style={styles.circleContainer}>
        <View style={styles.circleContainer2}>
          <View style={styles.circle2} />
        </View>
        <View style={styles.circleContainer1}>
          <View style={styles.circle1} />
        </View>
      </View>

      <View style={{ marginTop: 90, marginBottom: 100 }}>
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
            Login to Your Account
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
              // placeholderFontFamily={"Poppins_400Regular"}
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              color: "#007FFF",
              fontFamily: "Poppins_300Light",
              marginLeft: 220,
            }}
          >
            Forgot Password?
          </Text>
        </View>
        <View style={{ marginTop: 45 }}>
          <Pressable
            onPress={handleLogin}
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
              Login
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 10 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Poppins_300Light",
              }}
            >
              Don't have an account?{" "}
              <Text style={{ color: "#007FFF", marginLeft: 10 }}>Sign up</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  circleContainer1: {
    position: "absolute",
    flexDirection: "row",
  },
  circleContainer1: {
    position: "absolute",
    top: -70,
    left: -140,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleContainer2: {
    position: "absolute",
    top: -12,
    left: -250,
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
