import { Button, View, StyleSheet } from "react-native"

const MyButton = props => { 

    return(
        <View style={style.button}>
        <Button title={props.title} onPress={props.onClick}/>
    </View>
    );
    
}

const style = StyleSheet.create({
    button:{
        padding: 10,
        margin: 5,
        color: 'red',
        backgroundColor: '#ccc'
        
    }
  });

  export default MyButton;
  