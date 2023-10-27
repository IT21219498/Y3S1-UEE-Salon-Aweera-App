import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import categories from "../data/category";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Appointment } from "../context/AppointmentContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useCallback } from "react";

const CategoryCards = (props) => {
  const isAppointment = props.isAppointment;
  const catData = categories;
  const navigation = useNavigation();
  const { appointmentDetails, setAppointmentDetails } = useContext(Appointment);
  const [categories, setCategories] = useState([]);
  console.log(appointmentDetails);
  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://192.168.1.6:5000/category");
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPackages();
    }, [])
  );

  const handleNavigation = (isAppointment, item) => {
    if (isAppointment) {
      navigation.navigate("SelectPackage", {
        packages: item.packages,
      });
      setAppointmentDetails([...appointmentDetails, { category: item.name }]);
    } else {
      navigation.navigate("ExplorePackages", {
        packages: item.packages,
        id: item._id,
      });
    }
  };

  return (
    <SafeAreaView>
      {categories.map((item, key) => (
        <Pressable
          onPress={() => {
            handleNavigation(isAppointment, item);
          }}
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={key}
        >
          <Image
            style={{
              width: "95%",
              height: 140,
              borderRadius: 7,
              borderWidth: 2,
              borderColor: "#AB83A1",
            }}
            source={{ uri: item.imageUrl }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontWeight: "800",
              fontSize: 20,
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default CategoryCards;

const styles = StyleSheet.create({});
