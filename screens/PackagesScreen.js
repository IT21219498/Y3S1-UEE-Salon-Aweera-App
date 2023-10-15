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
  const [categories, setCategories] = useState([]);

  const handleCreateCategory = () => {
    setOpenModal(true);
  };

  const handleSaveCategory = () => {
    setOpenModal(false);
  };

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://192.168.1.25:5000/category');
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPackages();
    }, [])
  );

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
              padding: 20,
              borderRadius: 10,
              width: '80%',
            }}
          >
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              Create Category
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                padding: 10,
                marginBottom: 10,
                borderRadius: 5,
              }}
              placeholder="Category Name"
              // value={categoryName}
              // onChangeText={(text) => setCategoryName(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#AB83A1',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={handleSaveCategory}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginTop: 10, alignItems: 'center' }}
              onPress={() => setOpenModal(!openModal)}
            >
              <Text style={{ color: '#AB83A1' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'black',
          marginTop: 15,
          marginBottom: 10,
        }}
      />
      <CategoryCards />
    </SafeAreaView>
  );
};

export default PackagesScreen;

const styles = StyleSheet.create({});
