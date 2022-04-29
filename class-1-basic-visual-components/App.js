import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View } from 'react-native';

export default function App() {

  const [texto, setTexto] = useState('');
  const [img,setImg] = useState('');
  const [statusSwitch, setStatusSwitch] = useState(false)

  function showMsg(){
    alert('Você digitou: '+texto)
  }

  

  return (
    <View style={style.screen}>
      <Text>Olá, mundo!</Text>
      <Form onChange={setTexto} 
      onSubmit={showMsg} 
      texto={texto} 
      textoPlaceHolder='digite algo aqui'
       textoBotao='clique aqui'/>
       <Switch value={statusSwitch} onChange={(value) => setStatusSwitch(value)}/>
    </View>

  );
}
function Form(props) {
  
  return (
    <View>
      <TextInput placeholder={props.textoPlaceHolder} value={props.texto} onChangeText={(texto) => { props.onChange(texto) }} />
      <Button onPress={props.onSubmit} title={props.textoBotao}></Button>
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



function Botoes(props) {

  //const [ligado, setLigado] = useState(false)

  return (
    <View>
      <Button onPress={props.onSubmit} title={props.texto}></Button>
    </View>
  )
}

function Entradas(props) {
  const [texto, setTexto] = useState('');
  return (
    <View>
      <TextInput value={texto} onChangeText={(texto) => { setTexto(texto) }} />
    </View>);
}

const style = StyleSheet.create({

  screen: {
    paddingTop: 50,
    flexDirection: 'column',
    width: '100%',
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
