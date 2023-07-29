import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SectionList } from 'react-native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { Button, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

/* export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={{ margin: 16 }}>
        <Text style={{ fontSize: 28 }}>At that moment he had a thought that he'd never imagine he'd consider. "I could just cheat," he thought, "and that would solve the problem." He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to.</Text>
        <Text style={{ fontSize: 28 }}>At that moment he had a thought that he'd never imagine he'd consider. "I could just cheat," he thought, "and that would solve the problem." He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to.</Text>
        <Text style={{ fontSize: 28 }}>At that moment he had a thought that he'd never imagine he'd consider. "I could just cheat," he thought, "and that would solve the problem." He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
 */

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <FlatList
        data={DATA}
        renderItem={it => <Item title={it.item.title} />}
        keyExtractor={it => it.id}
      >

      </FlatList>
      <SectionList
        style={{ margin: 8 }}
        sections={DATA2}
        renderItem={it => <Item2 title={it.item} />}
        renderSectionHeader={(item) => <Text style={{ fontSize: 20 }}>{item.section.title}</Text>}
        keyExtractor={(item, index) => item + index}
      />
    </SafeAreaView>
  );
}

const DATA = [
  { id: 0, title: "Primeiro item" },
  { id: 1, title: "Segundo item" },
  { id: 2, title: "Terceiro item" }
]

const DATA2 = [
  { title: "Pratos principais", data: ["Pizza", "Burger", "Risoto"] },
  { title: "Entradas", data: ["Batata Frita", "Onion Rings"] },
  { title: "Sobremesas", data: ["Sorvete de Creme", "Petit Gateau"] }
]

function Item(props) {
  return (
    <View style={{ height: 30 }}>
      <Text>{props.title}</Text>
    </View>
  )
}

function Item2(props) {
  return (
    <View style={{ height: 30, backgroundColor: '#AFC', padding: 10, margin: 10 }}>
      <Text>{props.title}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  AndroidSafeArea:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  }
  
});