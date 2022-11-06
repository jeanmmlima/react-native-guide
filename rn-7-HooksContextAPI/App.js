import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { Button, StyleSheet, Text } from "react-native";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { UsersProvider } from "./context/UsersContext";

const Stack = createStackNavigator();
//componente funcional
export default props => {
    return (
      //envolvendo toda a aplicação com UsersProvider
        <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="UserList"
              screenOptions={screenOptions}>
                <Stack.Screen 
                    name="UserList"
                    component={UserList}
                    options={({ navigation, route }) => ({
                      headerRight: () => (
                        <Button
                          onPress={() => navigation.navigate("UserForm")}
                          title="+"
                          color="#fff"
                        />
                      ),
                    })}
                />  
                <Stack.Screen 
                    name="UserForm"
                    component={UserForm}
                    options={{
                      title: "Formulário de Usuários"
                    }}
                />  
            </Stack.Navigator>
        </NavigationContainer>
        </UsersProvider>
    );
}

const screenOptions = {
  headerStyle:{
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle:{
    fontWeight: 'bold'
  },

}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
