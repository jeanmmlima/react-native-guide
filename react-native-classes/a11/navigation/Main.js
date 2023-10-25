import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

const Stack = createNativeStackNavigator()

export default function ExampleNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bem vindo" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}