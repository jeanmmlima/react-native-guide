import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View } from 'react-native';

export default function App() {

  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const tarefaInputHandler = (textoTarefa) => {
    setTarefa(textoTarefa);
  };

  const addTarefaHandler = () => {
    console.log(tarefa)
    setListaTarefas(novaLista => [...listaTarefas,
    { id: Math.random().toString(), value: tarefa }
    ]);
  }

  

  return (
    <View style={style.screen}>
     
        <TextInput placeholder='Nova Tarefa'
          onChangeText={tarefaInputHandler} //o parametro textoTarefa vai ser os caracteres digitados
          value={tarefa} />
        <View>
          <Button title='Adicionar Tarefa'
            onPress={addTarefaHandler} />
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={listaTarefas} 
          renderItem={task => 
            <View>
              <Text>{task.item.value}</Text>
             </View>} /> 
    </View>

  );
}


const style = StyleSheet.create({

  screen: {
    paddingTop: 50,
    flexDirection: 'column',
    width: '100%',
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
