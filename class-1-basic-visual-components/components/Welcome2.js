import {Text, View,StyleSheet } from 'react-native';
const WelcomeComponentProps = props => {
    return (
      <View style={style.screen} >
        <Text>{props.text} Componente 2</Text>
  
      </View>
    );
  }
  const style = StyleSheet.create({

    screen: {
      paddingTop: 20,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  })
  export default WelcomeComponentProps;