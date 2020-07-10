import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Header(){
    return(
        <View style={StyleSheet.header}>
            {   }
            <View>
                <Text style={StyleSheet.create}></Text>
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
        letterSpacing:1
        fontweight:'bold'
    }
})