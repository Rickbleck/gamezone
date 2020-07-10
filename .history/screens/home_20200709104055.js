import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import Card from '../shared/card'

export default function Home({navigation}){  
    const[reviews, setReviews] = useState([
        {title: 'zelda is an amazing character', rating: 5, body: 'lorem ipsum', key:'1'},
        {title: 'mario is an amazing character', rating: 3, body: 'lorem ipsum', key:'2'},
        {title: 'luigi is an amazing character', rating: 2, body: 'lorem ipsum', key:'3'},
    ])

return(
    <View style={globalStyles.container}>
        <FlatList
        data={reviews}//here we pass the set of data we want to output and here it is reviews
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                <Card>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                </Card>
            </TouchableOpacity>
        )}
        />
    </View>
)
}

const styles=StyleSheet.create({
    
})