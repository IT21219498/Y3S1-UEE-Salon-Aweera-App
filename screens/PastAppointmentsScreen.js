import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const PastAppointmentsScreen = () => {
  const navigate = useNavigation();

  return (
    <View style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <View>
        <Header title={'My Appointments'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Pressable
          onPress={() => {
            navigate.navigate('MyAppointments');
          }}
          style={{
            width: '50%',
            backgroundColor: '#AB83A1',
            height: 60,
            flex: 1,
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#735D7F',
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
        </Pressable>
        <View
          style={{
            width: '50%',
            backgroundColor: '#c9b4d9',
            height: 60,
            flex: 1,
            justifyContent: 'center',
            borderColor: 'black',
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
        </View>
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
              2023/10/15
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
              17.00 PM
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
              #105
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
              Hair Cut
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
              Styist{' '}
            </Text>
            <Text
              style={{
                fontSize: 18,
                margin: 5,
                marginBottom: 0,
                fontWeight: 'bold',
              }}
            >
              Kamal Fernando
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PastAppointmentsScreen;

const styles = StyleSheet.create({});
