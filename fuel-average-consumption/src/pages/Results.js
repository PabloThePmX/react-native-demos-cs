import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import FuelCard from '../components/FuelCard';
import { loadFont } from '../utils';

export default function Results() {
  const route = useRoute()
  const { result } = route.params;

    useEffect(() => {
        loadFont();
    }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>THAT'S WHAT YOUR RIDE IS DOING</Text>
      <FuelCard fullResults={handleResults(result)} avg={result}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#121212',
        paddingHorizontal: 30,
        paddingBottom: 140,
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Electrolize'
    }
})

function handleResults(result){
    if(result <= 4)
        return { classification: "E", color: "red" };

    if(result <= 8)
        return { classification: "D", color: "orange" };

    if(result <= 10)
        return { classification: "C", color: "yellow" };

    if(result <= 12)
        return { classification: "B", color: "lime" };
    
    if(result > 12)
        return { classification: "A", color: "green" };
}