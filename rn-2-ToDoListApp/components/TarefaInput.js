import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const TarefaInput = props => {
    /*Usado para atualizar o estado do componente. 
  setTarefa é o método chamado (a partir de algum evento) para atualizar o falor do objeto tarefa*/
    const [tarefa, setTarefa] = useState('');
    /* função: const com arrow function para chamar setTarefa */
    const tarefaInputHandler = (textoTarefa) => {
        setTarefa(textoTarefa);
    };
    return (
        <View
            style={styles.inputContainer}>
            <TextInput placeholder='New Task'
                style={styles.input}
                onChangeText={tarefaInputHandler} //o parametro textoTarefa vai ser os caracteres digitados
                value={tarefa} />
            <Button title='Add'
                onPress={props.onAddTarefa.bind(this, tarefa)} />
        </View>
    );

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    input: {
        width: '80%', borderBottomColor: 'black', borderWidth: 1, padding: 10
    }
})

export default TarefaInput;