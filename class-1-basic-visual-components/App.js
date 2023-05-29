import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View } from 'react-native';
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import WelcomeComponent from './components/Welcome';
import WelcomeComponentProps from './components/Welcome2';
import Mega from './components/mega/Mega';
import Mega2 from './components/mega2/Mega2';

export default function App() {

  return (
    
    <SafeAreaView style={style.screen}>
      <Mega qtdeNumeros={10} limiteNumeros={15}/> 
    </SafeAreaView>
    

  );
}



const style = StyleSheet.create({

  screen: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
},
})
