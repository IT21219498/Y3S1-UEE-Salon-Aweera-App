import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserType } from '../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';

const ProfileScreen = () => {
  const { loginUser, setLoginUser, userId, setUserId } = useContext(UserType);
  const { user, setUser } = useContext(UserType);
  const navigation = useNavigation();

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`http://192.168.1.25:5000/profile/${userId}`);
      const { user } = res.data;
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const editProfile = () => {
    setName(user?.name);
    const user = {
      name: name,
      ProfilePicture: image,
    };
    axios
      .put(`http://192.168.1.25:5000/update-user/${userId}`, user)
      .then((res) => {
        Alert.alert('User Updated Successfully');
        fetchProfile();
        setName('');
        setImage('');
      })
      .catch((err) => {
        Alert.alert('User update failed', 'Something went wrong');
        console.log('Error', err);
      });
  };

  const logout = () => {
    clearAuthToken();
  };

  const clearAuthToken = async () => {
    await AsyncStorage.removeItem('authToken');

    setLoginUser(false);

    console.log('token removed');

    navigation.replace('Login');
  };
  return (
    <View style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <Header title="Profile" />
      <View
        style={{
          marginTop: 10,
          padding: 15,
          margin: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#735D7F',
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          height: 400,
        }}
      >
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: 'Poppins_700Bold' }}>
              {user?.name}
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              alignItems: 'center',
              gap: 10,
            }}
          >
            <View
              style={{
                // flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {image && (
                <>
                  <View style={{ marginRight: 20 }}>
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        margin: 10,
                      }}
                    />

                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        borderRadius: 50,
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => setImage(null)}
                    >
                      <MaterialIcons name="cancel" size={30} color="red" />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
            {!image && (
              <View>
                <Pressable onPress={pickImage}>
                  <Image
                    source={{
                      uri: user?.profilePicture,
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      marginTop: 10,
                      alignSelf: 'center',
                    }}
                  />
                </Pressable>
              </View>
            )}
            <View style={{ marginLeft: -5 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'Poppins_300Light',
                }}
              >
                Diploma in Hairdressing & Beauty Culture
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'Poppins_300Light',
                }}
              >
                Full time stylist
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  fontFamily: 'Poppins_300Light',
                }}
              >
                Experience : 2 years
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}
        >
          <Pressable
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderColor: '#D0D0D0',
              backgroundColor: '#735D7F',
              borderWidth: 1,
              borderRadius: 5,
              width: '48%',
            }}
            onPress={editProfile}
          >
            <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 16 }}>
              Edit Profile
            </Text>
          </Pressable>
          <Pressable
            onPress={logout}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderColor: '#D0D0D0',
              backgroundColor: '#735D7F',
              borderWidth: 1,
              borderRadius: 5,
              width: '48%',
            }}
          >
            <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 16 }}>
              Logout
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
