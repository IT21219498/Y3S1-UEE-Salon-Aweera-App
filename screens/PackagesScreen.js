import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

const PackagesScreen = () => {
  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     title: "Explore Packages",
  //     headerTitleStyle: {
  //       fontSize: 20,
  //       fontWeight: "bold",
  //       color: "black",
  //     },
  //     headerStyle: {
  //       backgroundColor: "#735D7F",
  //       height: 80,
  //     },
  //     headerTitleAlign: "center", // Center-align the title
  //     headerTitleContainerStyle: {
  //       justifyContent: "center", // Center-align the title container
  //     },
  //     headerLeft: () => null, // Hide the left header component
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={{ marginRight: 15 }}
  //         onPress={() => handleImageClick()}
  //       >
  //         <FontAwesome name='bell' size={24} color='black' marginRight='10' />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);
  // const handleImageClick = () => {
  //   navigation.navigate("MyAppointments");
  // };
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <Header title={"Explore Packages"} />
      <Text>PackagesScreen</Text>
    </SafeAreaView>
  );
};

export default PackagesScreen;

const styles = StyleSheet.create({});
