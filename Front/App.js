import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './Login';
import TelaInicial from './TelaInicial';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="TelaInicial" options={{ headerShown: false }} component={TelaInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};
