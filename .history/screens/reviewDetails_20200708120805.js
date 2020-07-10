import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles}  from '../styles/globalStyles'

export default function ReviewDetails({navigation}){  
 
      
return(
    <View style={globalStyles.container}>
        <Text>{navigation.getParam()}</Text>
    </View>
)
}

