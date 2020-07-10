import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {globalStyles, images}  from '../styles/globalStyles'
import Card from '../shared/card'

export default function ReviewDetails({navigation}){  
 
    const rating = navigation.getParam('rating')
      
return(
    <ImageBackground source={require('../assets/bg8.jpg')} style={styles.header}>
    <View style={globalStyles.container}>
        <Card>
            <Text>{navigation.getParam('title')}</Text>  
            <Text>{navigation.getParam('body')}</Text>  
             
            <View style={styles.rating}>
                <Text>Gamezone Rating:</Text>
                <Image source={images.ratings[rating]} />
            </View>
        </Card>
    </View>
    </ImageBackground>
    )//getparam iss used to get a specific parameter like title here
}


const styles= StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
})
const styles=StyleSheet.create({
  
    header:{
        width:'100%',
        height:'100%',
              
    },
  })