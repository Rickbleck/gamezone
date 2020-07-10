import React from 'react';
import {StyleSheet, View, Text, Button, ImageStore} from 'react-native';
import {globalStyles}  from '../styles/globalStyles'
import Card from '../shared/card'

export default function ReviewDetails({navigation}){  
 
    const rating = navigation.getParam('rating')
      
return(
    <View style={globalStyles.container}>
        <Card>
            <Text>{navigation.getParam('title')}</Text>  
            <Text>{navigation.getParam('body')}</Text>  
            <Text>{navigation.getParam('rating')}</Text> 
            <View style={StyleSheet.rating}>
                <Text>Gamezone Rating:</Text>
                <Image source={ImageStore.ratings[rating]} />
            </View>
        </Card>
    </View>
    )//getparam iss used to get a specific parameter like title here
}


const styles= StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16;,
    }
})
