import { View, Text, FlatList, StyleSheet, Button, ImageBackground, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'

export default function Home() {
  const[data, setData] = useState([]);
  const mainCharacters = [1, 4, 14, 20, 3];

  useEffect(() => {
    // Promise.all(
    //   mainCharacters.map((x) =>
    //     axios.get(`https://swapi.info/api/people/${x}`).then((res) => res.data)
    //   )
    // ).then((result) => {
    //     setData(result);
    // }).catch((err) => {
    //     alert(err);
    // });

    const getCharacters = async () => {
      const requests = mainCharacters.map(id => {
          return axios.get(`https://swapi.info/api/people/${id}`).then((res) => res.data)
      });
      
      const results = await Promise.all(requests);
      setData(results);
  }

    getCharacters();
  }, [])

  return (
    //TODO: FIX THE NAVIGATION TOOLBARS SIZES
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={styles.imageBg}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.url}
          renderItem={({item}) => {
            return <CharacterCard character={item}/>;
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 45,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
  },
  imageBg: {
    flex: 1
  },
});