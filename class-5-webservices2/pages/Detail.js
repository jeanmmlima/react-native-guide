import { View, StyleSheet, Text, ActivityIndicator } from "react-native"
import { useState, useEffect } from 'react';


const Detail = ({navigation, route}) => {

  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const getUserNaAPI = async () => {
    try {
      setLoading(true)
      const uri = 'https://jsonplaceholder.typicode.com/users/'+route.params.id;
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

  useEffect(() => {
    getUserNaAPI()
  }, []);

    return (
        <View style={styles.container}>
          {isLoading
        ? <ActivityIndicator />
        : <View>
            <Text style={styles.text}> Nome: {user.name}</Text>
            <Text style={styles.text}> Username: {user.username}</Text>
            <Text style={styles.text}> Email: {user.email}</Text>
            <Text style={styles.text}> Contato: {user.phone}</Text>
            <Text style={styles.text}> Website: {user.website}</Text>
            <Text style={styles.text}> Endereço </Text>
            <Text style={styles.text}> {user.address.street}, {user.address.city}, {user.address.zipcode} </Text>
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
    }
  })


export {Detail}