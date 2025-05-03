import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, View } from 'react-native';
import Home from './src/pages/Home';
import CharacterDetails from './src/pages/CharacterDetails';
import Starships from './src/pages/Starships';
import Movies from './src/pages/Movies';
import About from './src/pages/About';

const StackApp = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Characters" >
        <StackApp.Screen
          name="Characters"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: "",
            headerStyle: {
              backgroundColor: "black",
            },
            //TODO: CHECK WHY HEADERRIGHT WASNT WORKING AT ALL
            headerLeft: () => (
              <View style={{ marginTop: 10 }}>
                <Button
                  onPress={() => navigation.navigate("About")}
                  title="About"
                />
              </View>
            ),
          })}
        />
        <StackApp.Screen name="CharacterDetails" component={CharacterDetails} options={{headerShown: false}}/>
        <StackApp.Screen name="Starships" component={Starships} options={{headerShown: false}}/>
        <StackApp.Screen name="Movies" component={Movies} options={{headerShown: false}}/>
        <StackApp.Screen name="About" component={About} options={{headerShown: false}}/>
      </StackApp.Navigator>
    </NavigationContainer>
  ); 
}