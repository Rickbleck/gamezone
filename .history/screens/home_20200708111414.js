import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles'

export default function Home(){
const pressHandler=()=>{
    NavigationPreloadManager.navigate('ReviewDetails')
}

return(
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}> Home screen is here</Text>
        <Button title ='Go to review details' onPress={pressHandler}/>
    </View>
)
}
