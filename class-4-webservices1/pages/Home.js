import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Switch, SwitchBase, Text, TextInput, View, TouchableOpacity } from 'react-native';



const Home = ({navigation}) => {

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
    <SafeAreaView style={style.screen}>


      <View style={style.container}>
      
      
          <TextInput placeholder='Nova Tarefa'
            onChangeText={tarefaInputHandler} //o parametro textoTarefa vai ser os caracteres digitados
            value={tarefa} style={style.input}/>

            <Button title='Adicionar Tarefa'
              onPress={addTarefaHandler} />

          <View style={style.list}>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={listaTarefas} 
            renderItem={task => 
              <TouchableOpacity onPress={() => { navigation.navigate('Detail', { tarefa: task.item.value }) }}>
              <View style={style.listItem}>
                
                  <Text style={style.textItem}>{task.item.value}</Text>
                
              </View></TouchableOpacity>} /> 
          </View>

        </View>
    </SafeAreaView>

  );
}




const style = StyleSheet.create({

  appBar:{
    width: '100%',
    height: 100,
    backgroundColor: 'pink',
  },
  

  screen: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
  },

  container:{
    flex: 1,padding: 10, margin: 10,
    alignItems: 'center'
  },

  input: {
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },

  button: {
    width: '60%', backgroundColor: '#f7287b', margin:10,
    borderBottomColor: 'black', borderWidth: 1, padding: 10, borderRadius: 5,
    
  },

  list:{
    margin: 10,
    width: '80%',
    flexDirection: 'column',
  },
  
  listItem:{
    padding: 10,
    margin: 10,
    width: '100%',
    backgroundColor: '#46d',
    alignItems: 'center',

  },

  textItem:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }




})

export { Home}