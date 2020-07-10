import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles}  from '../styles/globalStyles'

export default function ReviewDetails({navigation}){  
 
      
return(
    <View style={globalStyles.container}>
        <Text>{navigation.getParam('title')}</Text>  
        <Text>{navigation.getParam('body')}</Text>  
        <Text>{navigation.getParam('rating')}</Text> 
    </View>
)//getparam iss used to get a specific parameter like title here
}

