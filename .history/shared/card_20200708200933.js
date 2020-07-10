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
        backgroundColor:'coral',
        shadowOffset:{width:1, height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginVertical:7,
        marginHorizontal:4
    },
    cardContent:{
        marginVertical:20,
        marginHorizontal:4
    }
})