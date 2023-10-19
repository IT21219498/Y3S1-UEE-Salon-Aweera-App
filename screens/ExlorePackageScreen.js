import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import PackageCards from '../components/PackageCards';

const ExlorePackageScreen = () => {
  const route = useRoute();
  const packages = route.params.packages;
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Header title={'Explore Packages'} />
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
          }}
          style={{ marginRight: 5 }}
          name="arrow-back-outline"
          size={34}
          color="Black"
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Packages</Text>
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
    </SafeAreaView>
  );
};

export default ExlorePackageScreen;

const styles = StyleSheet.create({});
