import React from 'react'
import {StyleSheet, View} from 'react-native'

export default function Card(props){
    return(
        <View style={style.card}>
            <View style={style.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        borderRadius: 6 ,
        elevation:3,
        backgroundColor
    }
})