import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Home(){
return(
    <View style={Styles.container}>
        <Text> Home screen</Text>
    </View>
)
}

const styles = Styleheet.create({
    container:{
        padding:24
    },
})