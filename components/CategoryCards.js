import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import categories from '../data/category';
import { useNavigation } from '@react-navigation/native';
import { Appointment } from '../context/AppointmentContext';

const CategoryCards = () => {
  const catData = categories;
  const navigation = useNavigation();
  const { appointmentDetails, setAppointmentDetails } = useContext(Appointment);

  return (
    <View>
      {catData.map((item, key) => (
        <Pressable
          onPress={() => {
            navigation.navigate('SelectPackage', {
              packages: item.packages,
            });
            setAppointmentDetails([
              ...appointmentDetails,
              { category: item.name },
            ]);
          }}
          style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}
          key={key}
        >
          <Image
            style={{
              width: '95%',
              height: 140,
              borderRadius: 7,
              borderWidth: 2,
              borderColor: '#AB83A1',
            }}
            source={{ uri: item.imageUrl }}
          />
          <Text
            style={{
              position: 'absolute',
              color: 'white',
              fontWeight: '800',
              fontSize: 20,
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default CategoryCards;

const styles = StyleSheet.create({});
