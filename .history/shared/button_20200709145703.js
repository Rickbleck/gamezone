import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function FlatButton({text, onPress}){
    return(
        <TouchableOpacity>
            <View style={styles.buton}>
                <Text style={styles.buttonText}></Text>
            </View>
        </TouchableOpacity>
    )
}