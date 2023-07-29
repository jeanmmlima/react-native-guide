import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

/* export default function App() {
  return (
    <Text>Olá!</Text>
  );
}
 */
export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      
      <Welcome />
      <Input />
      <Botoes texto="clique aqui" />
    </SafeAreaView>
  );
}



function Welcome() {
  return (
    <View>
      <Text>Bem vindo</Text>
    </View>
  )
}

function Input() {

  const [text, setText] = useState('')

  return (
    <View>
      <TextInput style={{ height: 40 }} placeholder="Digite aqui seu nome" value={text} onChangeText={(text) => setText(text)}>
      </TextInput>
      <Text>{text}</Text>
    </View>
  )
}


function onPressButton() {
  alert('Você clicou!');
}

function Botoes(props) {

  const [ligado, setLigado] = useState(false)

  return (
    <View>
      <Button onPress={onPressButton} title={props.texto}></Button>
      <Switch onValueChange={() => setLigado(!ligado)} value={ligado}></Switch>
    </View>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  }
  
});