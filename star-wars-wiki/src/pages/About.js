import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Audio } from 'expo-av';

export default function About() {
    const soundRef = useRef(null);

    useEffect(() => {
        const playSound = async () => {
          const { sound } = await Audio.Sound.createAsync(
            require('../../assets/audio/sw-maintheme.mp3')
          );

          soundRef.current = sound;
          await sound.playAsync();
        };
      
        playSound();

        return () => {
            if (soundRef.current) {
              soundRef.current.stopAsync();
              soundRef.current.unloadAsync();
            }
          };
      }, []);

    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={styles.imageBg}>
            <View style={styles.innerContainer}>
                <View style={styles.card}>
                    <Text style={styles.title}>
                        Pablo Henrique Strucker Sarturi
                    </Text>
                    <Text style={styles.text}>
                        RA 1136331
                    </Text>
                    <Text style={styles.text}>
                        pablosarturi1@gmail.com
                    </Text>
                    <Text style={styles.text}>
                        1136331@atitus.edu.br
                    </Text>
                </View>
            </View>
          </ImageBackground>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 45,
    },
    imageBg: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    card: {
      backgroundColor: 'blue',
      padding: 30,
      borderRadius: 16,
      gap: 15,
      shadowRadius: 6,
      elevation: 8,
    },
    title: {
      color: 'yellow',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
    },
  });
  
  
