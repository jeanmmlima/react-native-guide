import { View, StyleSheet, Text, ActivityIndicator, FlatList, Alert } from "react-native"
import { useState, useEffect } from 'react';
import { setStatusBarStyle } from "expo-status-bar";
import {ListItem, Icon, Button} from 'react-native-elements'
import { useIsFocused } from "@react-navigation/native";


const ListClients = ({ navigation, route }) => {

  const isFocused = useIsFocused();

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

  const removeClient = async (user) => {
    try {
      setLoading(true)
      const uri = 'http://localhost:8080/api/clientes/'+user.id
      const response = await fetch(uri, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+route.params.credentials.token, 
          
        }
      });
      console.log(response.status);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
      getClients();
    }
  } 


  useEffect(() => {
    setCurrentUser(route.params.credentials);
    isFocused && getClients();
    
  }, [isFocused]);

  const confirmUserDeletion = async (user) => {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
        {
            text: 'Sim',
            onPress() {
              removeClient(user);
              
            }
        },
        {
            text: 'Não'
        }
    ])
}

 

  function getActions(user) {
    return (
        <>
            <Button
                onPress={() => loadForm(user)}
                icon={<Icon name="edit" size={25} color="orange" />}
                buttonStyle={{ minHeight: '100%', minWidth: '50%', backgroundColor: 'light-gray' }}
            />
            <Button
                onPress={() => confirmUserDeletion(user)}
                icon={<Icon name="delete" size={25} color="red" />}
                buttonStyle={{ minHeight: '100%', minWidth: '50%', backgroundColor: 'gray' }}
            />
        </>
    )
  }

  const loadForm = (user) => {
    navigation.navigate('FormClient',{ user, credentials: route.params.credentials});
  }

  function getUserItem({ item: user }){
    return (
        <ListItem.Swipeable 
        key={user.id}
        bottomDivider
        rightContent={getActions(user)}
        rightStyle={styles.buttonContainer}
        onPress={() => loadForm(user)}
            
        > 
            <ListItem.Content>
                <ListItem.Title>nome: {user.nome}</ListItem.Title>
                <ListItem.Subtitle>cpf: {user.cpf}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem.Swipeable>

    )
}



  return (
    <View style={styles.container}>
      {isLoading
        ? <ActivityIndicator />
        : <View style={styles.container2}>
          <Text style={styles.text}> Login: {currentUser.login}</Text>
          <View style={styles.container}>

<FlatList data={clients} renderItem={getUserItem} keyExtractor={item => item.id} />
</View>
        </View>

      }
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 10,
    alignItems: 'flex-start',
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
  },
  buttonContainer: {
    flexDirection: 'row'
},

})


export { ListClients }