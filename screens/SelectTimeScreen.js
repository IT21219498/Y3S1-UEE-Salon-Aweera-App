import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Appointment } from '../context/AppointmentContext';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const SelectTimeScreen = () => {
  const navigation = useNavigation();
  const { appointmentDetails, setAppointmentDetails } = useContext(Appointment);
  const [date, setDate] = useState(new Date().getDate());
  const [time, setTime] = useState(new Date().getHours());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const isBackNavigation = true;
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    let tempDate = new Date(date);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setDate(fDate);
    console.warn('A date has been picked: ', fDate);
    hideDatePicker();
  };

  const handleTimeConfirm = (date) => {
    let tempDate = new Date(date);
    let fTime =
      tempDate.getHours() +
      ':' +
      tempDate.getMinutes().toString().padStart(2, '0');
    console.warn('A date has been picked: ', fTime);
    setTime(fTime);
    hideTimePicker();
  };
  const handleClickOnNext = () => {
    navigation.navigate('Booking');
    setAppointmentDetails([...appointmentDetails, { date: date, time: time }]);
  };
  return (
    <View style={{ backgroundColor: '#F7F0FC' }}>
      <Header
        title={'Make an Appointment'}
        isBackNavigation={isBackNavigation}
      />
      <View
        style={{
          alignItems: 'left',
          marginTop: 15,
          marginLeft: 15,
          flexDirection: 'row',
        }}
      >
        {/* <Ionicons
          onPress={() => {
            navigation.goBack();
            setAppointmentDetails((prevDetails) => prevDetails.slice(0, -1));
          }}
          style={{ marginRight: 5 }}
          name="arrow-back-outline"
          size={34}
          color="Black"
        /> */}
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'Poppins_600SemiBold',
          }}
        >
          Select a Date & Time
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

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 120,
          display: 'flex',
        }}
      >
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: 200,
            height: 60,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#AB83A1',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}
        >
          <Button title="Select Date" onPress={showDatePicker} color="black" />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
            isDarkModeEnabled={true}
            display="inline"
          />
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: 200,
            height: 60,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#AB83A1',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 30,
          }}
        >
          <Button title="Select Time" onPress={showTimePicker} color="black" />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
            isDarkModeEnabled={true}
          />
        </View>

        <Pressable
          onPress={handleClickOnNext}
          style={{
            backgroundColor: '#AB83A1',
            padding: 10,
            borderRadius: 10,
            height: 60,
            width: 200,
            marginTop: 150,
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 28,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SelectTimeScreen;

const styles = StyleSheet.create({});
