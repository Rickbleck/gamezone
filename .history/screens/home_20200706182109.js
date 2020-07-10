import React from 'react';
import {Stylesheet, View, Text} from 'react-native';

export default function Home(){
return(
    <View style={Stylesheet.container}>
        <Text> Home screen</Text>
    </View>
)
}

const styles = Stylesheet.create({
    container:{
        padding
    }
})