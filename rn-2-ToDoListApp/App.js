import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react'; //utilizando react hooks

//importante componente criado localmente
import TarefaItem from './components/TarefaItem';
import TarefaInput from './components/TarefaInput';

export default function App() {

  /*Usado para atualizar o estado do componente. 
  setTarefa é o método chamado (a partir de algum evento) para atualizar o falor do objeto tarefa*/
 // const [tarefa, setTarefa] = useState('')

  /* */
  const [listaTarefas, setListaTarefas] = useState([]);

  //para o modal
  const [isAddMode, setIsAddMode] = useState(false)

  /* função para chamar setTarefa 
  function tarefaInputHandler(textoTarefa){
    setTarefa(textoTarefa);
  }
  */

  /* função: const com arrow function para chamar setTarefa */
  //### DEFINIDA NO COMPONENTE
  /*
  const tarefaInputHandler = (textoTarefa) => {
    setTarefa(textoTarefa);
  };*/

  /* método chamado ao clicar no botão add */
  /* ###### SEM COMPONENTE EXTERNO ##### */
  const addTarefa = () => {
    console.log(tarefa);
    /* ao add uma terfa, atualizo a lista de tarefa. 
    Chamo uma função anonima para garantir (100%) que não haverá erro nos dados (lista de tarefas) na transição de estados
    A formatação [...listaTarefas] cria uma nova lista com as tarefas da lista atual + a nova tarefa*/

    /* Comentada pois precisa ser alterada para usar o FlatList.
    setListaTarefas(novaLista => [...listaTarefas, tarefa]);
    */

    /*
      FlatList insere um objeto na lista. Objeto deve ter uma chave e o dados
    */
    setListaTarefas(novaLista => [...listaTarefas,
    { id: Math.random().toString(), value: tarefa }
    ]);
  };

  //##### COM COMPONENTE EXTERNO ######
  const addTarefaCE = descricao => {
    console.log(descricao);
    setListaTarefas(novaLista => [...listaTarefas,
    { id: Math.random().toString(), value: descricao }
    ]);
    setIsAddMode(false);
  };

  const removeTarefa = taskId => {
    setListaTarefas(listaTarefas => {
      //filter retorna um novo array baseado no array qe o chama com um critério assado nos parametros
      return listaTarefas.filter((task) => task.id !== taskId);
    });
  }
  const closeAddTarefa = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen /*{padding: 10}*/}>
      {/* 
      SEM COMPONENTE EXTERNO
      <View
        style={styles.inputContainer}>
        <TextInput placeholder='New Task'
          style={styles.input}
          onChangeText={tarefaInputHandler} //o parametro textoTarefa vai ser os caracteres digitados
          value={tarefa} />
        <Button title='Add' onPress={addTarefa} />
      </View>
      */}
      {/* 
      COM Ccomponente externo
      */}
      <Button title='Add Nova Tarefa' onPress={() => setIsAddMode(true)}/>
      <TarefaInput onAddTarefa={addTarefaCE} visible={isAddMode} onCancel={closeAddTarefa}/>
      <View>
        {/* ScrollView: desliza a tela (vertical e horizontal) para navegar no app
          Não é eficiente quando se tem muitos dados. Para isso, utilzia-se a FlatList
        
        <ScrollView> 
           map é uma função que mapeia objetos JS em componentes visuais RN
          A propriedade key é utilizada para especificar cada elemento. Sem ela, vai funcionar,mas
          para otimizar o funcionamento, adicionar um key
          listaTarefas.map(task =>
            (<View key={task} style={styles.listaItem}>
              <Text>{task}</Text>
            </View>))}
        </ScrollView> */

          /* 
            Flatlist: performance melhor que o scrollview
          */

        }
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={listaTarefas} 
          renderItem={task => 
            /* sem componente externo
            <View style={//styles.listaItem}>
              <Text>{task.item.value}</Text>
             </View>)} /> 
            */
           //com componente criado externamente
           <TarefaItem onDelete={removeTarefa.bind(this,task.item.id)} title={task.item.value}/>
          } />

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
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  input: {
    width: '80%', borderBottomColor: 'black', borderWidth: 1, padding: 10
  },
  listaItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
