import { View, Text, FlatList, ImageBackground, StyleSheet  } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import { loadFont } from '../utils';
import MovieCard from '../components/MovieCard';

export default function Movies() {
    const route = useRoute()
    const { moviesUrl } = route.params;

    const[data, setData] = useState([]);

    useEffect(() => {
        //TODO: CREATE A GENERIC FUNCTION FOR MOVIES AND STARSHIPS
        const getMovies = async () => {
            const urls = Array.isArray(moviesUrl) ? moviesUrl : [];

            if(urls == [])
                return alert("Oh well, seems like there's nothing here!");

            const requests = urls.map(url => {
                return axios.get(url).then((res) => res.data)
            });
            
            const results = await Promise.all(requests);
            setData(results);
        }

        loadFont();
        getMovies();
    }, [])

    return (
      <View style={styles.container}>
          <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={styles.imageBg}>
          <FlatList
              data={data}
              keyExtractor={(item) => item.url}
              renderItem={({item}) => {
                  return <MovieCard movie={item}/>;
              }}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              showsVerticalScrollIndicator={false}
          />
          </ImageBackground>
      </View>
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