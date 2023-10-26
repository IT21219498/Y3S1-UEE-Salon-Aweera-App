import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import Header from '../components/Header';
import { useContext } from 'react';
import { UserType } from '../context/UserContext';
import { Appointment } from '../context/AppointmentContext';

const AppointmentSuccessScreen = () => {
  const navigation = useNavigation();
  const isNavigation = true;
  const route = useRoute();
  const appointmentId = route.params.appointmentId;
  const date = new Date();
  const fDate =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const fTime = date.getHours() + ':' + date.getMinutes();
  const { setLoginUser } = useContext(UserType);
  const { appointmentDetails, setAppointmentDetails } = useContext(Appointment);
  setLoginUser(null);
  return (
    <View style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <Header title={'Make an Appointment'} isNavigation={isNavigation} />
      <View
        style={{
          alignItems: 'left',
          marginTop: 15,
          marginLeft: 5,
          flexDirection: 'row',
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
          Appointment Success
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
          width: '90%',
          height: 480,
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 3,
          borderColor: '#735D7F',
          marginTop: 25,
        }}
      >
        <Image
          style={{
            width: 90,
            height: 90,
            alignSelf: 'center',
            marginTop: 60,
            marginBottom: 50,
          }}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Appointment Placed Successfully!
        </Text>
        <View
          style={{ alignSelf: 'center', marginTop: 40, flexDirection: 'row' }}
        >
          <Text style={{ fontSize: 20, fontWeight: '400' }}>
            Appointment Id :{' '}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: '400' }}>
            {appointmentId}
          </Text>
        </View>
        <View
          style={{ alignSelf: 'center', marginTop: 10, flexDirection: 'row' }}
        >
          <Text style={{ fontSize: 20, fontWeight: '400' }}>Date : </Text>
          <Text style={{ fontSize: 20, fontWeight: '400' }}>{fDate}</Text>
        </View>
        <View
          style={{ alignSelf: 'center', marginTop: 10, flexDirection: 'row' }}
        >
          <Text style={{ fontSize: 20, fontWeight: '400' }}>Time : </Text>
          <Text style={{ fontSize: 20, fontWeight: '400' }}>{fTime}</Text>
        </View>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          alignSelf: 'center',
          marginTop: 60,
          margin: 20,
          backgroundColor: '#735D7F',
          borderWidth: 1,
          borderRadius: 10,
          padding: 8,
          width: 160,
          borderColor: '#AB83A1',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            fontWeight: '700',
          }}
        >
          Go To Home
        </Text>
      </Pressable>
    </View>
  );
};

export default AppointmentSuccessScreen;

const styles = StyleSheet.create({});
