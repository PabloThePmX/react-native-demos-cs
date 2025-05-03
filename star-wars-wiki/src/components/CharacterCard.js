import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { profileImages } from '../constants/profile-images';
import { loadFont } from '../utils';

export default function CharacterCard({ character }) {
  const navigation = useNavigation();

    useEffect(() => {
        loadFont();
    }, []);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CharacterDetails', { characterDetails: character })}
    >
      <Image
        source={{ uri: profileImages[character.url] }}
        style={styles.image}
      />
      <Text style={styles.text}>{character.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: 200,
    height: 165,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: 'yellow',
    borderWidth: 2,
    resizeMode: 'cover'
  },
  text: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    //TODO: CHECK WHY FONT ISNT WORKING
    fontFamily: 'StarJedi'
  }
});
