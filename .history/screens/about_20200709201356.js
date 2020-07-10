import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function About(){
return(
    <ImageBackground source={require('../assets/bg6.jpg')} style={styles.header}>
    <View style={globalStyles.container}>
        <Text>About screen</Text>
    </View>
    </ImageBackground>
) 
}


const styles=StyleSheet.create({
  
    header:{
        width:'100%',
        height:'100%',
              
    },
  })
