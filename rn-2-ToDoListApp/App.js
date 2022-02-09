import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'; //utilizando react hooks

export default function App() {

  /*Usado para atualizar o estado do componente. 
  setTarefa é o método chamado (a partir de algum evento) para atualizar o falor do objeto tarefa*/
  const [tarefa,setTarefa] = useState('')

  /* */
  const [listaTarefas, setListaTarefas] = useState([]);

  /* função para chamar setTarefa 
  function tarefaInputHandler(textoTarefa){
    setTarefa(textoTarefa);
  }
  */

  /* função: const com arrow function para chamar setTarefa */
  const tarefaInputHandler = (textoTarefa) => {
    setTarefa(textoTarefa);
  };

  /* método chamado ao clicar no botão add */
  const addTarefa = () =>{
    console.log(tarefa);
    /* ao add uma terfa, atualizo a lista de tarefa. 
    Chamo uma função anonima para garantir (100%) que não haverá erro nos dados (lista de tarefas) na transição de estados
    A formatação [...listaTarefas] cria uma nova lista com as tarefas da lista atual + a nova tarefa*/
    setListaTarefas(novaLista => [...listaTarefas, tarefa]);
  };

  return (
    <View style={styles.screen /*{padding: 10}*/}>
      <View
        style={styles.inputContainer}>
        <TextInput placeholder='New Task'
          style={styles.input} 
          onChangeText={tarefaInputHandler} //o parametro textoTarefa vai ser os caracteres digitados
          value={tarefa}/>
        <Button title='Add' onPress={addTarefa}/>
      </View>
      <View>
        { /*map é uma função que mapeia objetos JS em componentes visuais RN
          A propriedade key é utilizada para especificar cada elemento. Sem ela, vai funcionar,mas
          para otimizar o funcionamento, adicionar um key*/
        listaTarefas.map((task) => <View key={task} style={styles.listaItem}><Text>{task}</Text></View>)}
      </View>
    </View>
  );
}

/*
Recomendado utilizar um StyleSheet para personalizar os componentes
valida as propriedades do estilo e melhora organização
*/
const styles = StyleSheet.create({
  screen: {
    padding: 10
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  input:{
    width: '80%', borderBottomColor: 'black', borderWidth: 1, padding: 10
  },
  listaItem:{
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
