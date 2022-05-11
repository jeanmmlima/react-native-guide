import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
Flex Box - react native

Todos os componentes View do RN implementam FlexBox para estruturar seu layout.
Ajustando 

Padrão: alinha componentes em coluna
flexDirection: propriedade para mudar o alinhamento.
justifyContent: elementos são alinhados no eixo principal de direção (se o padrão for linha: esquerda para direita)
alignItems: elementos são alinhados no eixo transversal ao principal. Ex: (se o padrão for linha, vai alinhar na vertical)

Nas Views Filhas:

Propriedade flex: atribui a proporção/peso do tamanho do componente dentro do espaço útil disponível
*/


export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
      <Text>2</Text>
      </View>
      <View style={styles.box3}>
      <Text>3</Text>
      </View>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
      <Text>2</Text>
      </View>
      <View style={styles.box3}>
      <Text>3</Text>
      </View>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
      <Text>2</Text>
      </View>
      <View style={styles.box3}>
      <Text>3</Text>
      </View>
    </View>
    <View style={styles.container2}>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
      <Text>2</Text>
      </View>
      <View style={styles.box3}>
      <Text>3</Text>
      </View>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
      <Text>2</Text>
      </View>
      <View style={styles.box3}>
      <Text>3</Text>
      </View>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
      <Text>2</Text>
      </View>
      <View style={styles.box3}>
      <Text>3</Text>
      </View>
    </View>
    
    </View>
    
  );
}


/*
import { useState } from 'react';
import {View, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {

  const [valorA,setValorA] = useState(0)
  const [valorB,setValorB] = useState(0)

  const somaHandler = () => {
    const soma = parseInt(valorA) + parseInt(valorB)
    console.log(soma)
    alert('Soma: '+soma)
  }

  return (
    <View style={styles.container}>
     <TextInput value={valorA} onChangeText={(valor) => setValorA(valor)} />
     <TextInput value={valorB} onChangeText={(valor) => setValorB(valor)} />
     <Button onPress={somaHandler} title={'Somar'} />
    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    padding: 100, 
    flexDirection:'row-reverse',
    flexWrap: 'wrap',
    width:'100%', 
    justifyContent:'space-evenly',
    alignItems:'flex-start',
    backgroundColor: '#fff',
  },
  container2: {
    padding: 100, 
    flexDirection:'column-reverse',
    flexWrap: 'wrap',
    width:'100%', 
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor: '#fff',
  },
  box1: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    justifyContent:'center', 
    alignItems:'center'
  },
  box2: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    justifyContent:'flex-end', 
    alignItems:'center'
  },
  box3: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    justifyContent:'center', 
    alignItems:'center'
  }
});


