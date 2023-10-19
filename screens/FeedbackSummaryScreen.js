import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
const FeedbackSummaryScreen = () => {
  const navigation = useNavigation();
  const date = new Date();
  const fDate =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const fTime = date.getHours() + ':' + date.getMinutes();
  const route = useRoute();
  const feedbackId = route.params.feedbackId;
  return (
    <SafeAreaView style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <Header title={'FeedBack'} />
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
            navigation.goBack();
          }}
          style={{ marginRight: 5 }}
          name="arrow-back-outline"
          size={34}
          color="Black"
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
          FeedBack Summary
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
          width: '90%',
          height: 480,
          alignSelf: 'center',
          borderRadius: 10,
          borderWidth: 3,
          borderColor: '#735D7F',
          marginTop: 25,
        }}
      >
        <Image
          style={{
            width: 90,
            height: 90,
            alignSelf: 'center',
            marginTop: 60,
            marginBottom: 50,
          }}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          FeedBack Successfully Submitted!
        </Text>
        <View
          style={{ alignSelf: 'center', marginTop: 40, flexDirection: 'row' }}
        >
          <Text style={{ fontSize: 20, fontWeight: '400' }}>
            FeedBack Id :{' '}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: '400' }}>{feedbackId}</Text>
        </View>
        <View
          style={{ alignSelf: 'center', marginTop: 10, flexDirection: 'row' }}
        >
          <Text style={{ fontSize: 20, fontWeight: '400' }}>Date : </Text>
          <Text style={{ fontSize: 20, fontWeight: '400' }}>{fDate}</Text>
        </View>
        <View
          style={{ alignSelf: 'center', marginTop: 10, flexDirection: 'row' }}
        >
          <Text style={{ fontSize: 20, fontWeight: '400' }}>Time : </Text>
          <Text style={{ fontSize: 20, fontWeight: '400' }}>{fTime}</Text>
        </View>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          alignSelf: 'center',
          marginTop: 60,
          margin: 20,
          backgroundColor: '#735D7F',
          borderWidth: 1,
          borderRadius: 10,
          padding: 8,
          width: 160,
          borderColor: '#AB83A1',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            fontWeight: '700',
          }}
        >
          Go To Home
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default FeedbackSummaryScreen;

const styles = StyleSheet.create({});
