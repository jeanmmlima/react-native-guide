import { View, StyleSheet, Text, ActivityIndicator, Button } from "react-native"
import { useState, useEffect } from 'react';
import { setStatusBarStyle } from "expo-status-bar";
import { useContext } from "react";
import AppContext from "../context/AppContext";


const Detail = ({ navigation, route }) => {

  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const [currentUser, setCurrentUser] = useState({});
  const { state, dispatch } = useContext(AppContext)

  const registerUser = async (name, passwd) => {
    try {
      setLoading(true)
      const uri = 'http://localhost:8080/api/usuarios/'
      const response = await fetch(uri, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: name,
          senha: passwd
        })
      });
      console.log("USUARIO CADASTRDO: ")
      console.log(response.status);
      const newUser = await response.json();
      console.log(newUser);
      setNewUser(newUser);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  const getUserNaAPI = async () => {
    try {
      setLoading(true)
      const uri = 'https://jsonplaceholder.typicode.com/users/' + route.params.id;
      const response = await fetch(uri);
      const user = await response.json()
      setUser(user)
    } catch (error) {
      setUser([])
      alert('Falha ao acessar servidor. Tente novamente mais tarde!')
    } finally {
      setLoading(false)
    }
  }

  const onClick = () => {
    navigation.navigate('ListClients');
  }

  const loadForm = () => {
    navigation.navigate('FormClient');
  }

  useEffect(() => {
    //setCurrentUser(route.params.credentials);
    setCurrentUser(state.credentials);
    console.log(state.credentials);
  }, []);

  return (
    <View style={styles.container}>

          <Text style={styles.text}> Login: {currentUser.login}</Text>
          <Button title="Ver lista de clientes" onPress={onClick}/>
          <Button title="Novo cliente" onPress={loadForm}/>
        
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20
  }
})


export { Detail }