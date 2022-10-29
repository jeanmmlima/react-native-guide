import React, { createContext, useReducer } from 'react'
import users from '../data/users' 

//queremos compartilhar dados a partir do contexto da aplicação
const UsersContext = createContext({})

/*
Retornar um Provider

1. com o UsersContext.Provider, vou envolver a aplicação para que possa prover
a lista de usuários para toda a aplicação 
*/
export const UsersProvider = props => {

    return (
        <UsersContext.Provider value={{
             state:{
                users
             } 
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext