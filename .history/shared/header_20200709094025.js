import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


export default function Header({navigation, title}){//title prop here is used for different title on dif screens

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu'  size={28} onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerImage}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontSize:25
        ,
        color:'#333',
        fontWeight:'bold'
    },
    icon:{
        position:'absolute',
        left:16
    },
    he
})