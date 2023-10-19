import {
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const FeedbackScreen = () => {
  const [name, onChangeName] = useState('');
  const [number, onChangeNumber] = useState('');
  const [feedback, onChangefeedback] = useState('');
  const navigate = useNavigation();

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        'http://192.168.1.25:5000/feedback/create',
        {
          customerName: name,
          contactNo: number,
          feedback: feedback,
        }
      );
      const fid = data.feedback.feedbackId;
      console.log(fid);
      navigate.navigate('FeedbackSummary', {
        feedbackId: fid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <ScrollView style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
        <View>
          <Header title={'Feedback'} />
          <View
            style={{
              margin: 15,
              borderWidth: 3,
              borderColor: '#735D7F',
              width: '90%',
              height: 500,
              alignSelf: 'center',
              marginTop: 25,
              borderRadius: 10,
              backgroundColor: 'white',
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 15,
              }}
            >
              Add New Feedback
            </Text>
            <View
              style={{
                marginTop: 30,
                marginLeft: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                }}
              >
                Customer Name :
              </Text>
              <TextInput
                editable
                onChangeText={(text) => onChangeName(text)}
                value={name}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginTop: 10,
                  marginRight: 25,
                  borderColor: '#AB83A1',
                  borderRadius: 10,
                  height: 50,
                  fontSize: 18,
                }}
                placeholder="Input your name..."
                placeholderTextColor="#999999"
              />
            </View>
            <View
              style={{
                marginTop: 30,
                marginLeft: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                }}
              >
                Contact Number :
              </Text>
              <TextInput
                editable
                onChangeText={(text) => onChangeNumber(text)}
                value={number}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginTop: 10,
                  marginRight: 25,
                  borderColor: '#AB83A1',
                  borderRadius: 10,
                  height: 50,
                  fontSize: 18,
                }}
                placeholder="Input contact number..."
                placeholderTextColor="#999999"
                keyboardType="number-pad"
              />
            </View>
            <View
              style={{
                marginTop: 30,
                marginLeft: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                }}
              >
                Feedback :
              </Text>
              <TextInput
                editable
                multiline
                numberOfLines={6}
                onChangeText={(text) => onChangefeedback(text)}
                value={feedback}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  marginTop: 10,
                  marginRight: 25,
                  borderColor: '#AB83A1',
                  borderRadius: 10,
                  height: 50,
                  fontSize: 18,
                }}
                placeholder="Input your feedback..."
                placeholderTextColor="#999999"
                keyboardType="default"
              />
            </View>
          </View>
          <Pressable
            onPress={handleSubmit}
            style={{
              margin: 25,
              backgroundColor: '#735D7F',
              borderRadius: 10,
              padding: 6,
              width: 250,
              alignSelf: 'center',
              marginTop: 50,
              borderWidth: 1,
              borderColor: '#AB83A1',
            }}
          >
            <Text
              style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}
            >
              Submit Feedback
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({});
