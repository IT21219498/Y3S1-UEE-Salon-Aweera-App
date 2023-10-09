import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import CategoryCards from '../components/CategoryCards';

const PackagesScreen = () => {
  const navigation = useNavigation();

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
      <CategoryCards />
    </SafeAreaView>
  );
};

export default PackagesScreen;

const styles = StyleSheet.create({});
