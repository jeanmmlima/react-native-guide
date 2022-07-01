import { View, StyleSheet, Text, ActivityIndicator } from "react-native"
import { useState, useEffect } from 'react';


const Detail = ({navigation, route}) => {

  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true)

  const getPostNaAPI = async () => {
    try {
      setLoading(true)
      const uri = 'https://jsonplaceholder.typicode.com/posts/'+route.params.id;
      const response = await fetch(uri);
      const post = await response.json()
      setPost(post)
    } catch (error) {
      setPost([])
      alert('Falha ao acessar servidor. Tente novamente mais tarde!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPostNaAPI()
  }, []);

    return (
        <View style={styles.container}>
          {isLoading
        ? <ActivityIndicator />
        : <View>
            <Text style={styles.text}> ID: {post.id}</Text>
            <Text style={styles.text}>Titulo: {post.title}</Text>
            <Text style={styles.text}>Corpo: {post.body}</Text>
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