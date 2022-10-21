import { useState } from "react"
import { Text, TextInput, View,StyleSheet } from "react-native"



const MyTextInput = () => {
    const [text, setText] = useState('');
    return(
    <View style={style.text}>
        <TextInput style={style.textInput} placeholder="Digite aqui seu nome" value={text} onChangeText={(text) => setText(text)}>
        </TextInput>
        <Text>{text}</Text>
    </View>
    );
   
}

const style = StyleSheet.create({

    text: {
    flexDirection: 'column',
    flex: 1,
      
    },
    textInput:{
        borderBottomWidth: 1,
        height: 40,
        width: 100,
    }
  })

export default MyTextInput;