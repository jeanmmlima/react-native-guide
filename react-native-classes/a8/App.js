import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //<Home />
    //<Dimensao />
    <Flex />
  );
}

function Home(){
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text style={[styles.red, styles.grande]}>Hello From React</Text>
      <Text style={{ fontSize: 50 }}>Inline Style</Text>
    </SafeAreaView>
  );
}

function Dimensao(){
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
     <View style={[stylesDimensions.blue, stylesDimensions.pequeno]}></View>
      <View style={[stylesDimensions.red, stylesDimensions.medio]}></View>
      <View style={[stylesDimensions.blue, stylesDimensions.grande]}></View>
    </SafeAreaView>
  );
}

function Flex(){
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
     <View style={[stylesFlex.blue, stylesFlex.pequeno]}></View>
      <View style={[stylesFlex.red, stylesFlex.medio]}></View>
      <View style={[stylesFlex.blue, stylesFlex.grande]}></View>
    </SafeAreaView>
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
  }
  
});

const stylesDimensions = StyleSheet.create({
  container: {
    backgroundColor: '#0F0'
  },
  red: {
    backgroundColor: '#F00'
  },
  pequeno: {
    width: 100,
    height: 100
  },
  medio: {
    width: 200,
    height: 200
  },
  grande: {
    width: '50%',
    height: '20%'
  },
  blue: {
    backgroundColor: 'powderblue'
  }
});

const stylesFlex = StyleSheet.create({
  container: {
    backgroundColor: '#0F0',
    flex: 1
  },
  red: {
    backgroundColor: '#F00'
  },
  pequeno: {
    flex: 1
  },
  medio: {
    flex: 2
  },
  grande: {
    flex: 3
  },
  blue: {
    backgroundColor: 'powderblue'
  }
});
