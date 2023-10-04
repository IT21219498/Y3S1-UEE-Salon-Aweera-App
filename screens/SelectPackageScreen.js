import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import PackageCards from '../components/PackageCards';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SelectPackageScreen = () => {
  const navigation = useNavigation();
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
          onPress={() => navigation.goBack()}
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
      <PackageCards />
    </View>
  );
};

export default SelectPackageScreen;

const styles = StyleSheet.create({});
