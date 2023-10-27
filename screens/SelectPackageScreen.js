import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Header from '../components/Header';
import PackageCards from '../components/PackageCards';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Appointment } from '../context/AppointmentContext';

const SelectPackageScreen = () => {
  const navigation = useNavigation();
  const { appointmentDetails, setAppointmentDetails } = useContext(Appointment);
  const isAppointment = true;
  const isBackNavigation = true;
  return (
    <View style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
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
            {
              navigation.goBack();
            }
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
          Select a Hair Style Package
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
      <ScrollView>
        <PackageCards isAppointment={isAppointment} />
      </ScrollView>
    </View>
  );
};

export default SelectPackageScreen;

const styles = StyleSheet.create({});
