import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useContext } from 'react';
import stylist from '../data/stylist';
import { useNavigation } from '@react-navigation/core';
import { Appointment } from '../context/AppointmentContext';

const StylistCard = () => {
  const stylistData = stylist;
  const navigation = useNavigation();
  const { appointmentDetails, setAppointmentDetails } = useContext(Appointment);

  return (
    <SafeAreaView>
      {stylistData.map((item, key) => (
        <Pressable
          onPress={() => {
            navigation.navigate('SelectTime');
            setAppointmentDetails([
              ...appointmentDetails,
              { stylist: item.name },
            ]);
          }}
          key={key}
          style={{
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#AB83A1',
          }}
        >
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: 'gray',
              margin: 10,
              marginRight: 20,
            }}
          />
          <Text
            style={{
              color: 'Black',
              fontWeight: 'Bold',
              fontSize: 24,
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default StylistCard;

const styles = StyleSheet.create({});
