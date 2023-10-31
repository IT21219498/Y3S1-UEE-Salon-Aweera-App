import { Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MyAppointmentsScreen = () => {
  const navigate = useNavigation();
  const isBackNavigation = true;
  return (
    <View style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <View>
        <Header title={'My Appointments'} isBackNavigation={isBackNavigation} />
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            width: '50%',
            backgroundColor: '#AB83A1',
            height: 60,
            flex: 1,
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: 'black',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '700',
              justifyContent: 'center',
            }}
          >
            Upcoming
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigate.navigate('PastAppointments');
          }}
          style={{
            width: '50%',
            backgroundColor: '#c9b4d9',
            height: 60,
            flex: 1,
            justifyContent: 'center',
            borderColor: '#735D7F',
            borderWidth: 2,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '700',
              justifyContent: 'center',
            }}
          >
            Past
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'black',
          marginTop: 2,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          backgroundColor: 'white',
          margin: 20,
          width: '90%',
          height: 200,
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: '#735D7F',
        }}
      >
        <View
          style={{
            height: 90,
            margin: 10,
            marginBottom: 0,
            flexDirection: 'row',
            paddingTop: 10,
          }}
        >
          <View style={{ width: '40%' }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',

                margin: 5,
                color: 'gray',
              }}
            >
              Date{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
                margin: 5,
                marginBottom: 0,
                fontWeight: 'bold',
              }}
            >
              2023/11/20
            </Text>
          </View>
          <View style={{ width: '40%' }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                margin: 5,
                color: 'gray',
              }}
            >
              Time{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
                margin: 5,
                marginBottom: 0,
                fontWeight: 'bold',
              }}
            >
              15.30 PM
            </Text>
          </View>
          <View style={{ width: '20%' }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                margin: 5,

                color: 'gray',
              }}
            >
              ID{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
                margin: 5,
                marginBottom: 0,
                fontWeight: 'bold',
              }}
            >
              #211
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'gray',
          }}
        />
        <View
          style={{
            height: 90,
            margin: 10,
            marginBottom: 0,
            flexDirection: 'row',
            paddingTop: 10,
          }}
        >
          <View style={{ width: '50%' }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                margin: 5,
                color: 'gray',
              }}
            >
              Appointment{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
                margin: 5,
                marginBottom: 0,
                fontWeight: 'bold',
              }}
            >
              Hair coloring
            </Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                margin: 5,
                color: 'gray',
              }}
            >
              Stylist{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
                margin: 5,
                marginBottom: 0,
                fontWeight: 'bold',
              }}
            >
              Ravini Perera
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyAppointmentsScreen;

const styles = StyleSheet.create({});
