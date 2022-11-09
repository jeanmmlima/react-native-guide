
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Detail } from './pages/Detail';
import {Home} from './pages/Home';
import { ListClients} from './pages/ListClients';
import { FormClient } from './pages/FormClient';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Users" component={Home} options={{title: 'Login'}}/>
        <Stack.Screen name="Detail" component={Detail} options={{title: 'Detalhes do usuário'}}/>
        <Stack.Screen name="ListClients" component={ListClients} options={{title: 'Clients'}}/>
        <Stack.Screen name="FormClient" component={FormClient} options={{title: 'New Client'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

