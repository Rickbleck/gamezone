import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles}  from '../styles/globalStyles'

export default function ReviewDetails({navigation}){
    const pressHandler=()=>{
       navigation.goBack();// method used to pop a screen from the stack
    }
return(
    <View style={globalStyles.container}>
        <Text> Review Details Screen</Text>
        <Button title ='Back to home' onPress={pressHandler}/>
    </View>
)
}

