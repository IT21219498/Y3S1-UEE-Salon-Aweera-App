import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import CategoryCards from '../components/CategoryCards';
import axios from 'axios';

const PackagesScreen = () => {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const isAppointment = false;
  const handleCreateCategory = () => {
    setOpenModal(true);
  };

  const handleSaveCategory = () => {
    setOpenModal(false);
    try {
      const response = axios.post('http://192.168.1.25:5000/category/create', {
        name: categoryName,
        imageUrl: imageUrl,
      });

      setCategoryName('');
      setImageUrl('');
    } catch (err) {}
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <Header title={'Explore Packages'} />
      <View
        style={{
          alignItems: 'left',
          marginTop: 15,
          marginLeft: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Categories</Text>
        <Pressable
          style={{
            marginRight: 15,
            backgroundColor: '#AB83A1',
            borderRadius: 10,
            padding: 6,
          }}
          onPress={handleCreateCategory}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            Create Category
          </Text>
        </Pressable>
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
              Create Category
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
              Category Name
            </Text>
            <TextInput
              placeholder="Category Name"
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
              value={categoryName}
              onChangeText={(text) => setCategoryName(text)}
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
              Image URL
            </Text>
            <TextInput
              placeholder="Category URL"
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
              onPress={handleSaveCategory}
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
                setCategoryName('');
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

      <CategoryCards isAppointment={isAppointment} />
    </SafeAreaView>
  );
};

export default PackagesScreen;

const styles = StyleSheet.create({});
