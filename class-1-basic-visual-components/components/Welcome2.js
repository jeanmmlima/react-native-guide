import {Text, View,StyleSheet } from 'react-native';
const WelcomeComponentProps = props => {
    return (
      <View style={style.screen} >
        <Text>{props.text}</Text>
  
      </View>
    );
  }
  const style = StyleSheet.create({

    screen: {
      paddingTop: 10,
      flexDirection: 'column',
      width: '100%',
      height: 100,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  })
  export default WelcomeComponentProps;