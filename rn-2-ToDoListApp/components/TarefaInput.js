import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal, ShadowPropTypesIOS } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Colors } from "react-native/Libraries/NewAppScreen";

const TarefaInput = props => {
    /*Usado para atualizar o estado do componente. 
  setTarefa é o método chamado (a partir de algum evento) para atualizar o falor do objeto tarefa*/
    const [tarefa, setTarefa] = useState('');
    /* função: const com arrow function para chamar setTarefa */
    const tarefaInputHandler = (textoTarefa) => {
        setTarefa(textoTarefa);
    };

    const addTarefaHandler = () => {
        props.onAddTarefa(tarefa);
        setTarefa('');
    }

    return (
        //inserindo modal
        <Modal visible={props.visible} animationType="slide">
            <View
                style={styles.inputContainer}>
                <TextInput placeholder='New Task'
                    style={styles.input}
                    onChangeText={tarefaInputHandler} //o parametro textoTarefa vai ser os caracteres digitados
                    value={tarefa} />
                <View style={styles.buttons}>
                    <Button title="Cancel" color="red" onPress={props.onCancel} />
                    <Button title='Add'
                        onPress={/* props.onAddTarefa.bind(this, tarefa) */addTarefaHandler} />
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({
    inputContainer: {
        //flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
        //flex permite controlar o espaço utlizado. inputContainer com flex 1 vai ocupar todo o espaço disponível
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    input: {
        width: '80%', borderBottomColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10
    },
    buttons: {
        flexDirection: 'row', justifyContent:'space-between', width: '40%'
    }
})

export default TarefaInput;