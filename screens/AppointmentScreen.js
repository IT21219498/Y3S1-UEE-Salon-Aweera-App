import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Header from '../components/Header';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CategoryCards from '../components/CategoryCards';
import { Appointment } from '../context/AppointmentContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppointmentScreen = () => {
  const isAppointment = true;
  return (
    <View style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <Header title={'Make an Appointment'} />
      <View style={{ alignItems: 'left', marginTop: 15, marginLeft: 15 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
          Select a category
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'black',
          marginTop: 15,
          marginBottom: 10,
        }}
      />
      <CategoryCards isAppointment={isAppointment} />
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
