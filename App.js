import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal" component={TelaPrincipal} />
        <Stack.Screen
          name="Detalhes" component={TelaDescricao} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function TelaPrincipal({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0AF'
    }}>
      <Text style={{
        color: '#FFF',
        fontSize: 30,
      }}>Primeira Tela - azul</Text>
      <Button title='Segunda Tela - Verde.'
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  )
}

function TelaDescricao({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F9'
      }}>
      <Text
        style={{
          color: '#000',
          fontSize: 25
        }}>Tela dos botões para navegação</Text>
      <Button
        title='Voltar para a tela verde'
        onPress={() => navigation.push('Detalhes')} />
      <Button
        title='Tela Principal - tela azul'
        onPress={() => navigation.push('Principal')} />
      <Button
        title='Voltar para a principal'
        onPress={() => navigation.goBack()} />
      <Button
        title='Voltar para a primeira tela'
        onPress={() => navigation.popToTop()} />
    </View>
  )
}
export default App

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */