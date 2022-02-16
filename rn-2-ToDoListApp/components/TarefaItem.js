import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//definicação do componente
const TarefaItem = props => {
    //o que o componente deve retornar
    return (
        //wrap a touchable para lidar melhor com o "tempo" que um elemento foi pressionado
        <TouchableOpacity activeOpacity={0.8} onLongPress={props.onDelete}>
            <View style={styles.listaItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>

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