import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaViewBase, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function TouchablesClass() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>Clique aqui!</Text>
      </View>
      <Button title="Clique aqui!" />
      <TouchableHighlight underlayColor='white' onPress={() => { alert('Clicou aqui!') }}>
        <View style={styles.button}>
          <Text style={styles.text}>Clique aqui Highlight!</Text>
        </View>
      </TouchableHighlight>
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red')} underlayColor='white' onPress={() => { alert('Clicou aqui!') }}>
        <View style={styles.button}>
          <Text style={styles.text}>Clique aqui NativeFeedback!</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableOpacity onPress={() => { alert('Clicou aqui!') }}>
        <View style={styles.button}>
          <Text style={styles.text}>Clique aqui Opacity!</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => { alert('Clicou aqui!') }}>
        <View style={styles.button}>
          <Text style={styles.text}>Clique aqui!</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
})
