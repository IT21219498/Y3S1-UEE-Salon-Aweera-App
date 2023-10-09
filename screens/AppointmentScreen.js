import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Header from '../components/Header';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CategoryCards from '../components/CategoryCards';
import { Appointment } from '../context/AppointmentContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppointmentScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
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
      <CategoryCards />
    </SafeAreaView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
