import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";


export default function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getPostsNaAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json()
      setPosts(posts)
    } catch (error) {
      setPosts([])
      alert('Falha ao acessar servidor. Tente novamente mais tarde!')
    }
  }

  useEffect(() => {
    getPostsNaAPI();
  }, []);

  return (
     <View style={styles.container}>
      <Text>{posts.length > 0 ? posts[0].title : 'Não possui postagens carregadas'}</Text>
      <StatusBar style="auto" />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
