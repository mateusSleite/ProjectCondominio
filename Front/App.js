import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './Login';
import TelaInicial from './TelaInicial';
import Bloco from './Bloco';
import Cadastro from './Cadastro';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="TelaInicial" options={{ headerShown: false }} component={TelaInicial} />
        <Stack.Screen name="Bloco" options={{ headerShown: false }} component={Bloco} />
        <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};
