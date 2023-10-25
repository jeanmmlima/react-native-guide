import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import ExampleNavigation from './navigation/Main';

export default function App() {
 /*  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
       <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red')} underlayColor='white' onPress={() => { alert('Clicou aqui!') }}>
        <View style={styles.button}>
          <Text style={styles.text}>Clique aqui!</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={() => { alert('Clicou aqui!') }}>
        <View style={styles.button}>
          <Text style={styles.text}>Clique aqui!</Text>
        </View>
      </TouchableWithoutFeedback>
      <Button title="Clique aqui!" />
    </SafeAreaView>
  ); */
  return(
    <ExampleNavigation />
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  container: {
    backgroundColor: '#0F0'
  },
  red: {
    color: '#F00'
  },
  grande: {
    fontSize: 30
  },
  button: {
    backgroundColor: 'powderblue',
    color: 'white',
    margin: 20
  },
  text: {
    color: '#000',
    padding: 15
  }
  
});
