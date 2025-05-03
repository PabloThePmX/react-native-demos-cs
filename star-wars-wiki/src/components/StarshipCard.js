import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function StarshipCard({ starship }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{starship.name}</Text>
        <Text style={styles.label}>Model:</Text>
        <Text style={styles.value}>{starship.model}</Text>
        <Text style={styles.label}>Passengers:</Text>
        <Text style={styles.value}>{starship.passengers}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    borderColor: 'yellow',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AAAAAA',
    marginTop: 6,
  },
  value: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});