import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const Flex = () => {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'darkorange'}} />
        <View style={{flex: 1, backgroundColor: 'green'}} />
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'darkorange'}} />
        <View style={{flex: 1, backgroundColor: 'green'}} />
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'darkorange'}} />
        <View style={{flex: 1, backgroundColor: 'green'}} />
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'darkorange'}} />
        <View style={{flex: 1, backgroundColor: 'green'}} />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });
  
  export default Flex;