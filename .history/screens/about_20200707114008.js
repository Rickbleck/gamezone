import React from 'react';
import {Stylesheet, View, Text} from 'react-native';

export default function About(){
return(
    <View style={Styles.container}>
        <Text> Home screen</Text>
    </View>
) 
}

const styles = Stylesheet.create({
    container:{
        padding:24
    },
})