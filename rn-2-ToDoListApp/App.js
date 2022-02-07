import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  //Por padrão, a flexDirection é em columna, mas pode ser alterado.
  //justifyContet como space-between vai usar o espaço util para seprar componentes
  //alignItems alinha os items dentro da mesma view
  return (
    <View style={{padding: 10}}>
      <View 
      style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder='New Task' 
        style={{width:'80%',borderBottomColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title='Add' />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
