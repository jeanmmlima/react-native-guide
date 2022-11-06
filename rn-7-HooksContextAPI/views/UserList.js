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

        Como agora também temos o dispatch no contexto, podemos acesso-lo
    */
   const { state, dispatch } = useContext(UsersContext)
   


    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    //console.warn("delete" + user.id) - agora uso o dispatch
                    /* 
                        No dispatch é passado uma ACTION: um objeto
                        com TIPO e um PAYLOAD: dado que é passado junto com a ACTION.

                        A action é o parametro da função reducer que por usa vez é passada como parametro para hook useReducer.
                        
                        O dispatch dispara a ação, invocando a função reducer definida.
                    */
                    dispatch({
                        type: 'deleteUser', //especifica a ação
                        payload: user, //dado necessário para ação
                    })
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