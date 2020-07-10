import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function FlatButton({text, onPress}){
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}></Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#f01d71'
    },

    buttonText:{

    }
})