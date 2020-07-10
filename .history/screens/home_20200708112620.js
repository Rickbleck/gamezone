import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles'

export default function Home({navigation}){ //navigation object is an object used to navigate to a screen

    const pressHandler=()=>{
    navigation.navigate('ReviewDetails');
}

return(
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}> Home screen is here</Text>
        <Button title ='Go to review details' onPress={pressHandler}/>
    </View>
)
}
