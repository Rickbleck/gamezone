import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles}  from '../styles/globalStyles'

export default function ReviewDetails({navigation}){  
 
      
return(
    <View style={globalStyles.container}>
        <Text>{navigation.getParam('title','  ', 'body')}</Text>  
        //getparam iss used to get a specific parameter like title here
    </View>
)
}

