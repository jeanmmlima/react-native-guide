import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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

function questOnline5(){
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
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}>3</Text>
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

function Aula09_1A(){
  return(
  <View style={stylesAula09_1Amod.container}>
    <View style={stylesAula09_1Amod.box1}>
      <Text>.</Text>
    </View>
    <View style={stylesAula09_1Amod.box2}>
      <Text>.</Text>
    </View>
    <View style={stylesAula09_1Amod.box3}>
      <Text>.</Text>
    </View>
    <View style={stylesAula09_1Amod.box4}>
      <Text>.</Text>
    </View>
  </View>
  );
}

function Aula09_1B(){
  return(
  <View style={stylesAula09_1B.container}>
    <View style={stylesAula09_1B.linha}>
      <View style={stylesAula09_1B.box1}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box2}>
        <Text>.</Text>
      </View>
    </View>
    <View style={stylesAula09_1B.linha}>
      <View style={stylesAula09_1B.box3}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box4}>
        <Text>.</Text>
      </View>
    </View>
  </View>
  );
}

function Aula09_1C(){
  return(
  <View style={stylesAula09_1B.container}>
    <View style={stylesAula09_1B.linha}>
      <View style={stylesAula09_1B.box1}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box1}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box1}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box3}>
        <Text>.</Text>
      </View>
    </View>
    <View style={stylesAula09_1B.linha}>
      <View style={stylesAula09_1B.box1}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box1}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box4}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box2}>
        <Text>.</Text>
      </View>
    </View>
    <View style={stylesAula09_1B.linha}>
      <View style={stylesAula09_1B.box1}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box3}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box2}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box2}>
        <Text>.</Text>
      </View>
    </View>
    <View style={stylesAula09_1B.linha}>
      <View style={stylesAula09_1B.box4}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box2}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box2}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box2}>
        <Text>.</Text>
      </View>
    </View>
    <View style={stylesAula09_1B.linha}>
      <View style={stylesAula09_1B.box3}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box3}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box1}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box2}>
        <Text>.</Text>
      </View>
    </View>
    <View style={stylesAula09_1B.linha}>
      <View style={stylesAula09_1B.box3}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box3}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box3}>
        <Text>.</Text>
      </View>
      <View style={stylesAula09_1B.box4}>
        <Text>.</Text>
      </View>
    </View>
   
  </View>
  );
}

function Aula09_2(){
  return(
  <View style={stylesAula09_2.container}>
    <View style={stylesAula09_2.login}>
      <Text style={stylesAula09_2.texto}>Login</Text>
    </View>
    <View style={stylesAula09_2.corpo}>
      <View style={stylesAula09_2.form}>
        <TextInput style={stylesAula09_2.input} placeholder='email.com'/>
        <TextInput style={stylesAula09_2.input} placeholder='senha'/>
        <View style={stylesAula09_2.botao}>
         <Button title='SIGNIN' color={'blue'} />
        </View>
        <Text style={stylesAula09_2.link}>Dont have account? Click here to sign up!</Text>
      </View>
    </View>

  </View>

  );
}


export default function App() {
  //return Aula09_1A();
  //return Aula09_1B();
  //return Aula09_1C();
  return Aula09_2();
}


const stylesAula09_1A = StyleSheet.create({
  container:{
    paddingTop: 30,
    flexDirection:'row',
    flexWrap: 'wrap',
    width:'100%',
    height:'100%',
  },
  box1: {
    width: '100%',
    height: '25%',
    backgroundColor: 'red',
    justifyContent:'center', 
    alignItems:'center'
  },
  box2: {
    width: '100%',
    height: '25%',
    backgroundColor: 'yellow',
    justifyContent:'center', 
    alignItems:'center'
  },
  box3: {
    width: '100%',
    height: '25%',
    backgroundColor: 'green',
    justifyContent:'center', 
    alignItems:'center'
  },
  box4: {
    width: '100%',
    height: '25%',
    backgroundColor: 'blue',
    justifyContent:'center', 
    alignItems:'center'
  }

})

const stylesAula09_1Amod = StyleSheet.create({
  container:{
    paddingTop: 30,
    flexDirection:'column',
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    justifyContent:'center', 
    alignItems:'center',
    flex: 1,
  },
  box2: {
    backgroundColor: 'yellow',
    justifyContent:'center', 
    alignItems:'center',
    flex: 1,
  },
  box3: {
    backgroundColor: 'green',
    justifyContent:'center', 
    alignItems:'center',
    flex: 1,
  },
  box4: {
    backgroundColor: 'blue',
    justifyContent:'center', 
    alignItems:'center',
    flex: 1,
  }

});

const stylesAula09_1B = StyleSheet.create({
  container:{
    paddingTop: 30,
    flexDirection:'column',
    flex: 1,
  },
  linha: {
    flexDirection:'row',
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    justifyContent:'center', 
    alignItems:'center',
    flex: 1,
  },
  box2: {
    backgroundColor: 'yellow',
    justifyContent:'center', 
    alignItems:'center',
    flex: 1,
  },
  box3: {
    backgroundColor: 'green',
    justifyContent:'center', 
    alignItems:'center',
    flex: 1,
  },
  box4: {
    backgroundColor: 'blue',
    justifyContent:'center', 
    alignItems:'center',
    flex: 1,
  }

});

const stylesAula09_2 = StyleSheet.create({
  container:{
    paddingTop: 30,
    flexDirection:'column',
    flex: 1,
  },
  botao:{
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
    paddingBottom: 5,
  },
  texto:{
    color:'white',
    fontWeight: 'bold',
  },
  link: {
    color:'blue',
    textAlign: 'center',
  },
  login:{
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    margin: 10,
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    width: '70%',
  },
  corpo:{
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
});

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


