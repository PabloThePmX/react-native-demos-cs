import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

export default function FuelCard({fullResults, avg}) {
    const {color, classification} = fullResults
    return (
        <Card style={{backgroundColor: color}}>
            <Card.Content style={styles.cardContainer}>
                <Text style={styles.textClassification}>{classification}</Text>
                <Text style={styles.textAvg}>|</Text>
                <Text style={styles.textAvg}>{avg} Km/l</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        gap: 25,
        paddingHorizontal: 30
    },
    textClassification: {
        fontWeight: 'bold',
        fontSize: 75,
    },
    textAvg:{
        fontWeight: 'bold',
        fontSize: 35,
    }
})