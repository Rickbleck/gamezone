import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles'

export default function Home({navigation}){  
    const[reviews, setReviews] = useState([
        {title: 'zelda is an amazing character', rating: 5, body: 'lorem ipsum', key:'1'},
        {title: 'mario is an amazing character', rating: 5, body: 'lorem ipsum', key:'2'},
        {title: 'luigi is an amazing character', rating: 5, body: 'lorem ipsum', key:'3'},
    ])

return(
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}> Home screen is here</Text>
    </View>
)
}
