import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


export default function Header(){
    return(
        <View style={StyleSheet.header}>
            {   }
            <View>
                <Text style={style.headerText}>GameZone</Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width:100,
        height:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontSize:20,
        color:'skyblue',
        letterSpacing:1,
        fontweight:'bold'
    }
})