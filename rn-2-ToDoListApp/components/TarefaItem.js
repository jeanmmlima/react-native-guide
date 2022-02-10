import React from "react";
import { View, Text, StyleSheet } from "react-native";

//definicação do componente
const TarefaItem = props => {
    //o que o componente deve retornar
    return (
        <View style={styles.listaItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listaItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TarefaItem;