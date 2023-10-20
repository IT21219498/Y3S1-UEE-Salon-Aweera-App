import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Appointment } from '../context/AppointmentContext';

const Header = ({ title, isBackNavigation }) => {
  const navigation = useNavigation();
  console.log(isBackNavigation);
  const { setAppointmentDetails } = useContext(Appointment);
  return (
    <View
      style={{
        backgroundColor: '#735D7F',
      }}
    >
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 45 }}
      >
        <View style={{ marginLeft: 10 }}>
          {isBackNavigation ? (
            <Ionicons
              onPress={() => {
                navigation.goBack();
                if (title === 'Make an Appointment') {
                  setAppointmentDetails((prevDetails) =>
                    prevDetails.slice(0, -1)
                  );
                }
              }}
              style={{ marginRight: 5 }}
              name="arrow-back-outline"
              size={34}
              color="Black"
            />
          ) : (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <FontAwesome name="user-circle" size={30} color="black" />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flex: 1, // Take up available space
            padding: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../assets/aweera.png')}
            style={styles.headerImage}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontFamily: 'Poppins_700Bold',
              marginBottom: 10,
            }}
          >
            {title}
          </Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyAppointments')}
          >
            <FontAwesome name="bell" size={30} color="black" marginRight="10" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerImage: {
    width: 130, // Adjust the image width as needed
    height: 25, // Adjust the image height as needed
    resizeMode: 'contain', // Makes sure the image doesn't get distorted
    marginBottom: 2, // Add spacing between image and text
    tintColor: 'black',
  },
});
