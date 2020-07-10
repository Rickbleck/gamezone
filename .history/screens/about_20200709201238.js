import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function About(){
return(
    <ImageBackground source={require('../assets/bg7.jpg')} style={styles.header}>
    <View style={globalStyles.container}>
        <Text>About screen</Text>
    </View>
) 
}

