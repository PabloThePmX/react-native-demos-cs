import { View, StyleSheet, Text, Alert, TextInput, Button, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { loadFont } from '../utils';

export default function Home({navigation}) {
    const [km, setKm] = useState(0);
    const [liters, setLiters] = useState(0);

    useEffect(() => {
        loadFont();
    }, []);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>HOW EFFICIENT IS YOUR RIDE?</Text>
        </View> 
        <View style={styles.containerInputs}>
            <TextInput style={styles.input} placeholder="Distance Traveled (km)" keyboardType='numeric' maxLength={5} onChangeText={k => setKm(k)}/>
            <TextInput style={styles.input} placeholder="Fuel Used (liters)" keyboardType='numeric' maxLength={6} onChangeText={l => setLiters(l)}/>
            <Button title='Check Efficiency' color={'red'} style={styles.button} onPress={() => {
                if(calculateValues(km, liters) == null) 
                    return Alert.alert("Error", "All values need to be above 0!")
                
                navigation.navigate('Results', {result: calculateValues(km, liters)})
            }}/>
        </View>
      </SafeAreaView>
    )
}

function calculateValues(km, liters){
    if(km <= 0 || liters <= 0)
        return null;

    return (km/liters).toFixed(2);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  containerInputs: {
    gap: 15,
    justifyContent: 'center',
    paddingHorizontal: '25%'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    paddingHorizontal: 30
  },
  title:{
    fontFamily: 'Electrolize',
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'white',
    fontFamily: 'Electrolize'
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Electrolize',
    color: 'white',
    fontSize: 16
  }
});