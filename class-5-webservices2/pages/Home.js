import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View, TouchableOpacity } from 'react-native';



const Home = ({ navigation }) => {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const Item = (props) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('Detail', { id: props.item.id }) }}>
        <View style={styles.item}>
          <Text style={styles.titulo}>{props.item.name}</Text>
          <Text style={styles.titulo}>{props.item.phone}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const getUsersNaAPI = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json()
      setUsers(users)
    } catch (error) {
      setUsers([])
      alert('Falha ao acessar servidor. Tente novamente mais tarde!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsersNaAPI()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading
        ? <ActivityIndicator />
        : <FlatList data={users} renderItem={Item} keyExtractor={item => item.id} />
      }
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}




const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#0AE',
    padding: 20,
    margin: 8,
  },
  titulo: {
    color: 'white'
  }
});

export { Home }