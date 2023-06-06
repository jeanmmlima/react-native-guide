import { View, StyleSheet, Text, ActivityIndicator, Button, TouchableOpacity } from "react-native"
import { useState, useEffect } from 'react';
import { setStatusBarStyle } from "expo-status-bar";


const Detail = ({ navigation, route }) => {

  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const [currentUser, setCurrentUser] = useState({});

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

  const onClick = () => {
    navigation.navigate('ListClients', { credentials: route.params.credentials});
  }

  const loadForm = () => {
    navigation.navigate('FormClient',{ credentials: route.params.credentials});
  }

  useEffect(() => {
    setCurrentUser(route.params.credentials);
    console.log(route.params.credentials);
    console.log(currentUser);
  }, []);

  return (
    <View style={styles.container}>

          <Text style={styles.text}> Login: {currentUser.login}</Text>
          <TouchableOpacity onPress={onClick}>
          <View style={styles.botao}>
            <Text style={styles.labels}>Ver lista de clientes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={loadForm}>
          <View style={styles.botao}>
            <Text style={styles.labels}>Novo cliente</Text>
          </View>
        </TouchableOpacity>
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
    fontSize: 28
  },
  labels: {
    fontSize: 28,
  },
  botao: {
    margin: 10,
    width: 250,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export { Detail }