import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


export default function Header(){
    return(
        <View style={styles.header}>
            {   }
            <View>
                <Text style={styles.headerText}>GameZone</Text>
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
        fontSize:21,
        color:'#333',
        fontWeight:'bold'
    }
})