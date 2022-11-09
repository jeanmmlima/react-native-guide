import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";


const FormClient = ({ navigation, route }) => {
    console.warn(route.params);
    console.log(route.params);
    
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState(route.params ? (route.params.user ? route.params.user : {}) : {})

    const saveClient = async () => {
        try {
          setLoading(true)
          const uri = 'http://localhost:8080/api/clientes'
          const response = await fetch(uri, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+route.params.credentials.token, 
              
            },
            body:JSON.stringify({
                nome: user.nome,
                cpf: user.cpf
              })
          });
          console.log(response.status);
          const newClient = await response.json();
          console.log(newClient);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false)
          navigation.navigate('ListClients', { credentials: route.params.credentials});
        }
      }

      const updateClient = async () => {
        try {
          setLoading(true)
          const uri = 'http://localhost:8080/api/clientes/'+user.id
          const response = await fetch(uri, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+route.params.credentials.token, 
              
            },
            body:JSON.stringify({
                nome: user.nome,
                cpf: user.cpf
              })
          });
          console.log(response.status);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false)
        }
      }  
    
    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={nome => setUser({...user, nome})} //operador spreed para pegar todos os atributos do usuário
                placeholder="Informe o Nome"
                value={user.nome}
            />
            <Text>CPF</Text>
            <TextInput
                style={style.input}
                onChangeText={cpf => setUser({...user, cpf})}
                placeholder="Informe o CPF"
                value={user.cpf}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    if(user.id != null){
                        console.log("DEVE ATUALIZAR");
                       updateClient(); 
                       navigation.navigate('ListClients', { credentials: route.params.credentials});
                    } else {
                        saveClient();
                    }
                    
                   
                }}
            />
        </View>
    );

 

}
const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})


export { FormClient }