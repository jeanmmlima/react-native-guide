import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View, TouchableOpacity } from 'react-native';
import UserController from '../controller/UserController';



const Home = ({ navigation }) => {

  const [isLoading, setLoading] = useState(false)

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  const authUser = async () => {
    try {
      setLoading(true)
      const uri = 'http://localhost:8080/api/usuarios/auth'
      const response = await fetch(uri, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
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
        <Text>Login</Text>
        <TextInput 
        placeholder='Informe o login'
        style={styles.input} 
        value={login} 
        onChangeText={(value) => {setLogin(value)}}/>
        <Text>Senha</Text>
        <TextInput 
        placeholder='Informe a senha'
        style={styles.input} 
        value={passwd} 
        onChangeText={(value) => {setPasswd(value)}}/>
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
  }
});

export { Home }