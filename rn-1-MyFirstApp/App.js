import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react'; //state Hook -- permite gerenciar estado em um componente funcional

export default function App() {
  //1. outText elemento instantaneo do estado atual
  //2. setOutTex Função que muda o estado: muda o  texto padrão do componente, recebendo novo texto como parametro
  //2.1 chamar essa função renderiza TODO componente 
  //3. useState --> valor padrão
  const [outText, setOutText] = useState('Olá, Mundo!')
  return (
    <View style={styles.container}>
      <Text>{outText}</Text>
      <Button title="Clique-me" 
      onPress={() => setOutText("Esse é meu primeiro app React-Native!")}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
