import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
  return (
    <View>
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
            {
              navigation.goBack();
            }
            setAppointmentDetails((prevDetails) => prevDetails.slice(0, -1));
          }}
          style={{ marginRight: 5 }}
          name="arrow-back-outline"
          size={34}
          color="Black"
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
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
      <PackageCards isAppointment={isAppointment} />
    </View>
  );
};

export default SelectPackageScreen;

const styles = StyleSheet.create({});
