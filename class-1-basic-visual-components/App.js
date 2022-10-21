import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View } from 'react-native';
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import WelcomeComponent from './components/Welcome';
import WelcomeComponentProps from './components/Welcome2';
import Mega from './components/mega/Mega';

export default function App() {

  const [ligado, setLigado] = useState('false');

  const onClick = () => {
    console.log("clicou!");
    setLigado(!ligado);
  }



  return (
    
    <SafeAreaView style={style.screen}>
      <Mega qtdeNumeros={10}/> 
    </SafeAreaView>
    

  );
}

function Welcome() {
  return (
    <View style={style.screen} >
      <Text>Seja bem-vindo!</Text>

    </View>
  );
}




const style = StyleSheet.create({

  screen: {
    paddingTop: 50,
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
