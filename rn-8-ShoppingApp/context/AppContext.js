
import React, { createContext } from 'react'
import { useReducer } from 'react'

const AppContext = createContext({})

/*
Retornar um Provider

1. com o UsersContext.Provider, vou envolver a aplicação para que possa prover
a lista de usuários para toda a aplicação 
*/


/* Estado Inicial*/
const initialState = { credentials: {
    login: "",
    token: "",
    }
}

export const Provider = props => {

    /*
    funcao reducer --> recebe o state - estado atual - e uma action, que é uma ação que,
    a partir do estado atual, define o que deve ser feito em seguida.
    O objeto da função reducer é evoluir o estado!
    Pega o estado atual e, baseado na ação disparada (por um dispatch), evolui o estado. 

    A função reducer deve retornar o estado evoluido (modificado). 
    Na primeira parte do exemplo, retorna o meesmo estado.

    */
    function reducer(state, action){
        
        if(action.type === 'authUser'){
            const credential = action.payload
            console.log("NOVOS CREDENCIAIS: "+credential)
            //retorna o estado atual, excluido o usuario que veio pelo payload
            return {
                //operador spread caso o estado tenha mais de um atributo
                //nesse caso é opcional pq só temos um atributo (users)
                ...state,
                credentials: credential
            }
        }
        return state
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
        <AppContext.Provider value={{
             state, dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext