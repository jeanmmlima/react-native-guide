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
     
        <TextInput style={style.input} placeholder='Nova Tarefa'
          onChangeText={tarefaInputHandler} //o parametro textoTarefa vai ser os caracteres digitados
          value={tarefa} />
        <View style={style.botao}>
          <Button title='Adicionar Tarefa'
            onPress={addTarefaHandler} color={'black'}/>
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={listaTarefas} 
          renderItem={task => 
            <View style={style.listaItem}>
              <Text style={style.textoItem}>{task.item.value}</Text>
             </View>} /> 
    </View>

  );
}


const style = StyleSheet.create({

  screen: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
    flex: 1,
  },

  input:{
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },

  botao:{
    width: '40%',
    paddingVertical: 10,
  },

  listaItem: {
    width: 200,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'black',
  },

  textoItem: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})
