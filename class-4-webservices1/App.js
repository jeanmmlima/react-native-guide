

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


