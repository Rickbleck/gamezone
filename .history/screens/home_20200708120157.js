import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/globalStyles'


export default function Home({navigation}){  
    const[reviews, setReviews] = useState([
        {title: 'zelda is an amazing character', rating: 5, body: 'lorem ipsum', key:'1'},
        {title: 'mario is an amazing character', rating: 5, body: 'lorem ipsum', key:'2'},
        {title: 'luigi is an amazing character', rating: 5, body: 'lorem ipsum', key:'3'},
    ])

return(
    <View style={globalStyles.container}>
        <FlatList
        
        />
    </View>
)
}
