import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Appointment } from '../context/AppointmentContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

const SelectTimeScreen = () => {
  const navigation = useNavigation();
  const { appointmentDetails, setAppointmentDetails } = useContext(Appointment);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    //setText(currentDate.toString());
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);

    console.log(fDate + '(' + fTime + ')');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <SafeAreaView>
      <Header title={'Make an Appointment'} />
      <View
        style={{
          alignItems: 'left',
          marginTop: 15,
          marginLeft: 5,
          flexDirection: 'row',
        }}
      >
        <Ionicons
          onPress={() => {
            navigation.goBack();
            setAppointmentDetails((prevDetails) => prevDetails.slice(0, -1));
          }}
          style={{ marginRight: 5 }}
          name="arrow-back-outline"
          size={34}
          color="Black"
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
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
      <View style={{ margin: 20 }}>
        <Button title="DatePicker" onPress={() => showMode('date')} />
      </View>
      <View style={{ margin: 20 }}>
        <Button title="TimePicker" onPress={() => showMode('time')} />
      </View>

      {show && (
        <DateTimePicker
          testID="datetimepicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};

export default SelectTimeScreen;

const styles = StyleSheet.create({});
