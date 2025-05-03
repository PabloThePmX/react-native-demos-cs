import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Results from './src/pages/Results';

const StackApp = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Home" >
        <StackApp.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <StackApp.Screen name="Results" component={Results} options={{headerTitle: '', headerTitleAlign: "center", headerStyle: {backgroundColor: '#121212'}, headerTintColor: 'white'}}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}