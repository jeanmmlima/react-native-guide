import { Component } from "react";

class UsuarioController {

    
    authUser = async (login,passwd) => {
      
        try {

            const uri = 'http://localhost:8080/api/usuarios/auth'
            const response = await fetch(uri, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    senha: passwd
                })
            });
            console.log("User Autenticado: ")
            console.log(response.status);
            if (response.status == 200) {
                const credentials = await response.json();
                console.log(credentials);
                return credentials;
            } else {
                return null;
            }

        } catch (error) {
            console.error(error);
        }
        
    }
}

export default UsuarioController;


    