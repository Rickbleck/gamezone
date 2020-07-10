import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles'

export default function Home({navigation}){ //navigation object is an object used to navigate to a screen

    const pressHandler=()=>{
    //navigation.navigate('ReviewDetails');//ReviewDetails is the name of our scrreen in home stack.js
    navigation.push('ReviewD')
}

return(
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}> Home screen is here</Text>
        <Button title ='Go to review details' onPress={pressHandler}/>
    </View>
)
}
