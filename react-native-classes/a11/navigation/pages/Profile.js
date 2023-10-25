import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Está é a página {route.params.name}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  }
})

export { Profile }