import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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
  