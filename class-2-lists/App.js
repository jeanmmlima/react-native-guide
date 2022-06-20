

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Detail } from './pages/Detail';
import {Home} from './pages/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tarefas" component={Home} options={{title: 'Lista de Tarefas'}}/>
        <Stack.Screen name="Detail" component={Detail} options={{title: 'Detalhe Tarefa'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const style = StyleSheet.create({

  screen: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
    flex: 1,
  },

  input:{
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },

  botao:{
    width: '40%',
    paddingVertical: 10,
  },

  listaItem: {
    width: 200,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'black',
  },

  textoItem: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})
