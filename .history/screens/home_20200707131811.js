import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles'

export default function Home(){
return(
    <View style={globalStyles.container}>
        <Text style={styles.titleText}> Home screen</Text>
    </View>
)
}
