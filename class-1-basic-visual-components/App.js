import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View } from 'react-native';
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import WelcomeComponent from './components/Welcome';
import WelcomeComponentProps from './components/Welcome2';

export default function App() {

 /*  const [ligado, setLigado] = useState('false'); */
  const onClick = () => {
    console.log("clicou!");
    /* setLigado(!ligado); */
  }



  return (
    <View style={style.screen}>
      <Text>Olá, mundo!</Text>
      <Button title='Clique-me' onPress={onClick}/>
     {/*  <MyButton title='Click' onClick={onClick} />
      <Switch value={ligado} onValueChange={() => {setLigado(!ligado)}}/>
      <MyTextInput /> */}
    </View>
    

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
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  }
})
