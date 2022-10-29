import React, { useContext } from "react";
import { FlatList, Text, View, StyleSheet, Alert } from "react-native";
import { ListItem, Avatar, Button, Icon } from "react-native-elements"
import UsersContext from "../context/UsersContext";
//import users from '../data/users'

//componente funcional
export default props => {
    //console.warn(Object.keys(props))  dados que são passados como atributos para o componente

    
    /*
        ContextAPI --> quando a árvore de componentes é grande e
        você precisa compartilhar o estado/dados entre diversos componentes
        PROVEDOR de informações

        Além disso, usar os hooks para gerenciar o estado com useReducer
    */
   const { state } = useContext(UsersContext)
   


    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn("delete" + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    icon={<Icon name="edit" size={25} color="orange" />}
                    buttonStyle={{ minHeight: '100%', minWidth: '50%', backgroundColor: 'light-gray' }}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    icon={<Icon name="delete" size={25} color="red" />}
                    buttonStyle={{ minHeight: '100%', minWidth: '50%', backgroundColor: 'gray' }}
                />
            </>
        )
    }


    function getUserItem({ item: user }){
        return (
            <ListItem.Swipeable 
            key={user.id}
            bottomDivider
            rightContent={getActions(user)}
            rightStyle={style.buttonContainer}
            onPress={() => props.navigation.navigate('UserForm', user)}
                
            >
                <Avatar rounded source={{ uri: user.avatarUrl }} />    
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem.Swipeable>

        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />

            
        </View>
    );
}

const style = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row'
    },
})