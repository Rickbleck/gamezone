import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles}  from '../styles/globalStyles'
import Card from '../shared/card'

export default function ReviewDetails({navigation}){  
 
      
return(
    <View style={globalStyles.container}>
        <Card>
            <Text>{navigation.getParam('title')}</Text>  
            <Text>{navigation.getParam('body')}</Text>  
            <Text>{navigation.getParam('rating')}</Text> 
        </Card>
    </View>
    )//getparam iss used to get a specific parameter like title here
}

