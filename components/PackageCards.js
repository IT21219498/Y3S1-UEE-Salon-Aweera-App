import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

const PackageCards = () => {
  const route = useRoute();
  const packages = route.params.packages;
  const navigation = useNavigation();

  return (
    <View>
      {packages.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate('SelectStylist')}
          key={key}
          style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}
        >
          <Image
            style={{
              width: '95%',
              height: 140,
              borderRadius: 7,
              borderWidth: 2,
              borderColor: '#AB83A1',
            }}
            source={{ uri: item.imageUrl }}
          />
          <Text
            style={{
              position: 'absolute',
              color: 'white',
              fontWeight: '800',
              fontSize: 20,
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default PackageCards;

const styles = StyleSheet.create({});
