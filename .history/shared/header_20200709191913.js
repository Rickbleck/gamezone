import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


export default function Header({navigation, title}){//title prop here is used for different title on dif screens

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')}  style={styles.header}>
            <MaterialIcons name='menu'  size={28} onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
         borderRadius:10,
         borderWidth:2,
         borderColor
    },
    headerText:{
        fontSize:25,
        color:'#00539CFF',
        fontWeight:'bold',
        
    },
    icon:{
        position:'absolute',
        left:16
    },
    headerImage:{
        width:26,
        height:26, 
        marginHorizontal:8,
        marginVertical:5,  
    },
    headerTitle:{
        flexDirection:'row',
        
    },
})