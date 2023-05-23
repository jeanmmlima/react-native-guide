import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const FlexDirection = () => {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            flexDirection: 'row',
          },
        ]}>
        <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
        <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
        <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    box: {
        width: 100,
        height: 100
    }
  });
  
  export default FlexDirection;