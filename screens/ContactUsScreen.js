import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../components/Header';

const ContactUsScreen = () => {
  return (
    <View style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <View>
        <Header title={'Contact Us'} />
        <View
          style={{
            alignItems: 'center',
            margin: 10,
            backgroundColor: '#FFFFFF',
            height: 350,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#AB83A1',
            padding: 10,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins_700Bold',
              fontSize: 20,
              marginTop: 10,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            AWEERA - Bridal, Hair & Beauty
          </Text>

          <Text
            style={{
              fontFamily: 'Poppins_700Bold',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Address
          </Text>

          <Text style={{ fontFamily: 'Poppins_300Light', textAlign: 'left' }}>
            Hair Care & Beauty Treatments & Dressing by AWEERA No. 220/1-1/1,
            Solomon Peiris Avenue, Mount Lavinia
          </Text>

          <Text
            style={{
              fontFamily: 'Poppins_700Bold',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Contact No:
          </Text>

          <Text style={{ fontFamily: 'Poppins_300Light', textAlign: 'center' }}>
            0112727285
          </Text>

          <Text
            style={{
              fontFamily: 'Poppins_700Bold',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Email:
          </Text>

          <Text style={{ fontFamily: 'Poppins_300Light', textAlign: 'center' }}>
            hairbyaweera@yahoo.com
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins_700Bold',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Open Hours:
          </Text>

          <Text style={{ fontFamily: 'Poppins_300Light', textAlign: 'center' }}>
            Monday - Saturday: 9:00 AM to 7:00 PM
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({});
