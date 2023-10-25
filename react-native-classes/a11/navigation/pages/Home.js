import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo a tela inicial</Text>
      <Button title="Profile" onPress={() => { navigation.navigate('Profile', { name: 'Profile' }) }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  }
})

export { Home }