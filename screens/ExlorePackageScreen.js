import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import PackageCards from '../components/PackageCards';
import axios from 'axios';

const ExlorePackageScreen = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  const [packageName, setPackageName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const route = useRoute();
  const id = route.params.id;
  const isAppointment = false;
  const handleCreatePackage = () => {
    setOpenModal(true);
  };

  const handleSavePackage = () => {
    setOpenModal(false);
    try {
      const response = axios.put(
        `http://192.168.1.25:5000/category/add-package/${id}`,
        {
          name: packageName,
          imageUrl: imageUrl,
        }
      );

      setPackageName('');
      setImageUrl('');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{ backgroundColor: '#F7F0FC' }}>
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
          size={30}
          color="Black"
        />
        <View
          style={{
            flex: 1,
            marginLeft: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Packages</Text>
          <Pressable
            style={{
              marginRight: 15,
              backgroundColor: '#AB83A1',
              borderRadius: 10,
              padding: 6,
            }}
            onPress={handleCreatePackage}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              Create Package
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'black',
          marginTop: 15,
          marginBottom: 10,
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: '#AB83A1',
              padding: 20,
              borderRadius: 10,
              width: '80%',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginBottom: 20,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Create Package
            </Text>
            <Text
              style={{
                marginBottom: 10,
                padding: 5,
                paddingTop: 0,
                paddingBottom: 0,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              Package Name
            </Text>
            <TextInput
              placeholder="Package Name"
              placeholderTextColor="#999999"
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                padding: 10,
                marginBottom: 10,
                borderRadius: 5,
                color: 'black',
                textAlignVertical: 'top',
              }}
              value={packageName}
              onChangeText={(text) => setPackageName(text)}
            />
            <Text
              style={{
                marginBottom: 10,
                marginTop: 10,
                padding: 5,
                paddingTop: 0,
                paddingBottom: 0,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              Package Image URL
            </Text>
            <TextInput
              placeholder="Package URL"
              placeholderTextColor="#999999"
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                padding: 10,
                marginBottom: 10,
                borderRadius: 5,
                color: 'black',
                textAlignVertical: 'top',
              }}
              value={imageUrl}
              onChangeText={(text) => setImageUrl(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#735D7F',
                padding: 10,
                marginTop: 10,
                borderRadius: 5,
                alignItems: 'center',
                alignSelf: 'center',
                width: 180,
              }}
              onPress={handleSavePackage}
            >
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}
              >
                Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                alignItems: 'center',
                alignSelf: 'center',
                width: 180,
                borderWidth: 1,
                borderColor: 'black',
                padding: 8,
                borderRadius: 5,
              }}
              onPress={() => {
                setOpenModal(!openModal);
                setPackageName('');
                setImageUrl('');
              }}
            >
              <Text
                style={{ color: '#AB83A1', fontWeight: 'bold', fontSize: 18 }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <PackageCards isAppointment={isAppointment} />
    </View>
  );
};

export default ExlorePackageScreen;

const styles = StyleSheet.create({});
