import { View, StyleSheet, Text, Button } from "react-native"




const Detail = ({navigation, route}) => {


   return (
       <View style={styles.container}>
         <Text style={styles.text}>Tarefa: {route.params.tarefa}</Text>
         <Button title="Voltar..." onPress={() => navigation.goBack()}></Button>
       </View>
     );


}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 10,
     alignItems: 'center',
     justifyContent: 'flex-start',
   },
   text: {
     fontSize: 20
   }
 })




export {Detail}