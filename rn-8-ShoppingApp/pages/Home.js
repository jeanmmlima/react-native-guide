import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {} from 'react'
import UserController from '../api/user_request';
import UsuarioController from '../api/user_request';



const Home = ({ navigation }) => {

  const [isLoading, setLoading] = useState(false)

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  var controller = new UsuarioController();

  const authUserMod = async () => {
    try {
      setLoading(true)
      credentials = controller.authUser(login,passwd);
      if(credentials != null){
        navigation.navigate('Detail', { credentials: credentials}) ;
      }
    } catch (error) {
      console.error(error);
    } finally {

    }
  }

  const authUser = async () => {
    try {
      setLoading(true)
      const uri = 'http://localhost:8080/api/usuarios/auth'
      const response = await fetch(uri, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:8080',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify({
          login: login,
          senha: passwd
        })
      });
      console.log("User Autenticado: ")
      console.log(response.status);
      const credentials = await response.json();
      console.log(credentials);
      if(credentials != null){
        navigation.navigate('Detail', { credentials: credentials}) ;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      {isLoading
        ? <ActivityIndicator />
        : <View style={styles.container}>
        <Text style={styles.labels}>Login</Text>
        <TextInput 
        placeholder='Informe o login'
        style={styles.input} 
        value={login} 
        onChangeText={(value) => {setLogin(value)}}/>
        <Text style={styles.labels}>Senha</Text>
        <TextInput 
        secureTextEntry={true}
        placeholder='Informe a senha'
        style={styles.input} 
        value={passwd} 
        onChangeText={(value) => {setPasswd(value)}}/>
        <TouchableOpacity onPress={authUser}>
          <View style={styles.botao}>
            <Text style={styles.labels}>Entrar</Text>
          </View>
        </TouchableOpacity>
        <Button title='Entrar' onPress={authUser}/>
        <StatusBar style="auto" />
        </View> 
      }
      
    </SafeAreaView>

  );
}




const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  item: {
    backgroundColor: '#0AE',
    padding: 20,
    margin: 8,
  },
  titulo: {
    color: 'white'
  },
  input:{
    padding: 10,
    margin: 10,
    borderolor: 'black',
    borderWidth: 1,
    width: '80%',
    fontSize: 28,
  },
  labels: {
    fontSize: 28,
  },
  botao: {
    width: 200,
    height: 80,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Home }