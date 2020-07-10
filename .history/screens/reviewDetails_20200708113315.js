import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles}  from '../styles/globalStyles'

export default function ReviewDetails(){
    const pressHandler=()=>
return(
    <View style={globalStyles.container}>
        <Text> Review Details Screen</Text>
        <Button title ='Back to home' onPress={pressHandler}/>
    </View>
)
}
