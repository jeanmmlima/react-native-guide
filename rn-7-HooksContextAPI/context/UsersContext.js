import React, { createContext, useReducer } from 'react'
import users from '../data/users' 

//queremos compartilhar dados a partir do contexto da aplicação
const UsersContext = createContext({})

/* Estado Inicial*/
const initialState = { users }

/* 
    actions 
*/
const actions = {
    createUser(state,action){
        const user = action.payload
        user.id = Math.random()
        return{
            ...state,
            users: [...state.users, user],
        }
    },
    updateUser(state,action){
        const updated = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === updated.id ? updated : u)
        }

    },
    deleteUser(state,action){
        const user = action.payload
            return {
                ...state,
                users: state.users.filter(u => u.id !== user.id)
            }
    }
}

/*
Retornar um Provider

1. com o UsersContext.Provider, vou envolver a aplicação para que possa prover
a lista de usuários para toda a aplicação 

*/
export const UsersProvider = props => {


    /*
    funcao reducer --> recebe o state - estado atual - e uma action, que é uma ação que,
    a partir do estado atual, define o que deve ser feito em seguida.
    O objeto da função reducer é evoluir o estado!
    Pega o estado atual e, baseado na ação disparada (por um dispatch), evolui o estado. 

    A função reducer deve retornar o estado evoluido (modificado). 
    Na primeira parte do exemplo, retorna o meesmo estado.

    */
    function reducer(state, action){
        
        const fn = actions[action.type] //verifica a ação
        return fn ? fn(state,action) : state //retorna a função ou o estado atual caso não seja função
    }   

    /*
    Integrar o Contexto com o UseReducer

    UseReducer() --> recebe uma função que implica na sua operação e um estado inicial 

    A partir do UseReducer, duas informações são recebidas: 
    1. state: estado após ação
    2. dispatch: dispara um determinado evento para todos aos reducers, nesse caso temos 1

    O interessante é passar o state e o dispatch no contexto, para que estejam disponíveis 
    para toda a aplicação 
    */
    
    const [state, dispatch]= useReducer(reducer,initialState)


    return (
         //agora só é necessario o state (ja iniciado com users)
         /* dispatch: forma de invocar um evento
         quando o usuário chamar o dispatch, a função reducer é chamada!
         */
        <UsersContext.Provider value={{
             state, dispatch
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext