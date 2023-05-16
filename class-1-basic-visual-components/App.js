import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View } from 'react-native';
import WelcomeComponent from './components/Welcome';
import WelcomeComponentProps from './components/Welcome2';

export default function App() {



  return (
    <SafeAreaView>
      <View style={style.screen}>
        <Text>Olá, mundo!</Text>
        <Welcome />
        <WelcomeComponent />
        <WelcomeComponentProps text='Bem-vindo! Mensagem passada por propriedade.' />
      </View>
    </SafeAreaView>


  );
}

function Welcome() {
  return (
    <View style={style.screen} >
      <Text style={style.textStyle}>Seja bem-vindo!</Text>

    </View>
  );
}




const style = StyleSheet.create({

  screen: {
    paddingTop: 50,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 28,
  }
})
