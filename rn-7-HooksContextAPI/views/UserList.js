import React from "react";
import { FlatList, Text, View } from "react-native";
import users from '../data/users'

//componente funcional
export default props => {
    //console.warn(Object.keys(props))  dados que são passados como atributos para o componente

    function getUserItem({ item: user }){
        return <Text>{user.name} - {user.email}</Text>
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />

            
        </View>
    );
}