import { View, StyleSheet, Text, ActivityIndicator, Button, FlatList } from "react-native"
import { useState, useEffect } from 'react';
import { setStatusBarStyle } from "expo-status-bar";


const ListClients = ({ navigation, route }) => {

  const [clients, setClients] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const [currentUser, setCurrentUser] = useState({});

  const Item = (props) => {
    return (
      
        <View style={styles.item}>
          <Text style={styles.titulo}>{props.item.id}</Text>  
          <Text style={styles.titulo}>{props.item.nome}</Text>
          <Text style={styles.titulo}>{props.item.cpf}</Text>
        </View>
    )
  }

  const getClients = async () => {
    try {
      setLoading(true)
      const uri = 'http://localhost:8080/api/clientes'
      const response = await fetch(uri, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+route.params.credentials.token, 
          
        },
      });
      console.log(response.status);
      const clients = await response.json();
      setClients(clients);
      console.log(clients);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    setCurrentUser(route.params.credentials);
    getClients();
    
  }, []);

  return (
    <View style={styles.container}>
      {isLoading
        ? <ActivityIndicator />
        : <View>
          <Text style={styles.text}> Login: {currentUser.login}</Text>
          <FlatList data={clients} renderItem={Item} keyExtractor={item => item.id} />
        </View>

      }
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
  },
  item: {
    backgroundColor: '#0AE',
    padding: 20,
    margin: 8,
  },
  titulo: {
    color: 'white'
  }

})


export { ListClients }