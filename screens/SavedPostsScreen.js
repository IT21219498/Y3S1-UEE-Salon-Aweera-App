import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../components/Header';

const SavedPostsScreen = () => {
  return (
    <View style={{ backgroundColor: '#F7F0FC', height: 1000 }}>
      <View>
        <Header title={'Saved Posts'} />
        <Text>SavedPostsScreen</Text>
      </View>
    </View>
  );
};

export default SavedPostsScreen;

const styles = StyleSheet.create({});
