import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles}  from '../styles/globalStyles'

export default function ReviewDetails(){
return(
    <View style={globalStyles.container}>
        <Text> Review Details Screen</Text>
        <Button title ='Go to review details' onPress={pressHandler}/>
    </View>
)
}

