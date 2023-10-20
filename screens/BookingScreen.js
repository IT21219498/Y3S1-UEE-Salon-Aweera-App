import { Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Appointment } from '../context/AppointmentContext';
import { Card } from '@rneui/themed';
import axios from 'axios';
import { UserType } from '../context/UserContext';

const BookingScreen = () => {
  const navigation = useNavigation();
  const { appointmentDetails, setAppointmentDetails } = useContext(Appointment);
  const category = appointmentDetails[0].category;
  const packageName = appointmentDetails[1].package;
  const stylist = appointmentDetails[2].stylist;
  const date = appointmentDetails[3].date;
  const time = appointmentDetails[3].time;
  const { userId } = useContext(UserType);
  console.log(userId);
  const handleClickOnNext = async () => {
    try {
      await axios
        .post('http://192.168.1.25:5000/appointment/create', {
          userId: userId,
          category: category,
          package: packageName,
          stylist: stylist,
          date: date,
          time: time,
        })
        .then((res) => {
          navigation.navigate('Home');
          setAppointmentDetails([]);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ backgroundColor: '#F7F0FC' }}>
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
          Appointment Summary
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
          backgroundColor: 'white',
          width: '90%',
          borderColor: '#AB83A1',
          borderWidth: 2,
          minHeight: 400,
          marginTop: 15,
          margin: 5,
          alignSelf: 'center',
          borderRadius: 15,
        }}
      >
        <Card.Divider color="#AB83A1">
          <Card.Title style={{ fontSize: 25, color: 'black', marginTop: 10 }}>
            Summary
          </Card.Title>
        </Card.Divider>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 5 }}>
            Category :{' '}
          </Text>
          <Text style={{ fontSize: 18, margin: 5 }}>{category} </Text>
        </View>
        <View style={{ margin: 10, flexDirection: 'row', marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 5 }}>
            Package :{' '}
          </Text>
          <Text style={{ fontSize: 18, margin: 5 }}>{packageName} </Text>
        </View>
        <View style={{ margin: 10, flexDirection: 'row', marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 5 }}>
            Stylist :{' '}
          </Text>
          <Text style={{ fontSize: 18, margin: 5 }}>{stylist} </Text>
        </View>
        <View style={{ margin: 10, flexDirection: 'row', marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 5 }}>
            Date :{' '}
          </Text>
          <Text style={{ fontSize: 18, margin: 5 }}>{date} </Text>
        </View>
        <View style={{ margin: 10, flexDirection: 'row', marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 5 }}>
            Time :{' '}
          </Text>
          <Text style={{ fontSize: 18, margin: 5 }}>{time} </Text>
        </View>
      </View>

      <View>
        <Pressable
          onPress={handleClickOnNext}
          style={{
            margin: 25,
            backgroundColor: '#735D7F',
            borderRadius: 10,
            padding: 6,
            width: 250,
            alignSelf: 'center',
            marginTop: 50,
            borderWidth: 2,
            borderColor: '#AB83A1',
          }}
        >
          <Text
            style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}
          >
            Make Appointment
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
