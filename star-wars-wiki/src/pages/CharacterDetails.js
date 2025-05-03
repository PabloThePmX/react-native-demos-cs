import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { profileImages } from '../constants/profile-images';
import { loadFont } from '../utils';

export default function CharacterDetails({navigation}) {
  const route = useRoute()
  const { characterDetails } = route.params;

  useEffect(() => {
    loadFont();
  })

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={styles.imageBg}>
            <View style={styles.container}>
                <Text style={styles.title}>{characterDetails.name}</Text>
                <View style={styles.innerContainer}>
                    <Image
                        source={{ uri: profileImages[characterDetails.url] }}
                        style={styles.image}
                    />
                    <View style={styles.containerText}>
                        <Text style={styles.infoText}>Height: {characterDetails.height}</Text>
                        <Text style={styles.infoText}>Mass: {characterDetails.mass}</Text>
                        <Text style={styles.infoText}>Hair Color: {characterDetails.hair_color}</Text>
                        <Text style={styles.infoText}>Eye Color: {characterDetails.eye_color}</Text>
                        <Text style={styles.infoText}>Skin Color: {characterDetails.skin_color}</Text>
                        <Text style={styles.infoText}>Gender: {characterDetails.gender}</Text>
                    </View>
                </View>
                <View style={styles.groupButton}>
                    <Button title='Starships' onPress={() => navigation.navigate("Starships", {starshipsUrl: characterDetails.starships})}/>
                    <Button title='Movies' onPress={() => navigation.navigate("Movies", {moviesUrl: characterDetails.films})}/>
                </View>
            </View>
        </ImageBackground>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        gap: 30,
        paddingBottom: 45
    },
    innerContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    containerText: {
        justifyContent: 'center',
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 8,
        borderColor: 'yellow',
        borderWidth: 2,
        resizeMode: 'cover',
    },
    imageBg: {
        flex: 1
    },
    infoText: {
        color: 'white',
        elevation: 4, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    title: {
        fontSize: 30,
        color: 'yellow',
        textAlign: 'center',
        fontWeight: 'bold',
        elevation: 4, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    groupButton: {
        paddingHorizontal: 70,
        gap: 10
    }
})