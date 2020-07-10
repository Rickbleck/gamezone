import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'

export default function Home({navigation}){  
    const[modalOpen, setModal]=useState(false)
    const[reviews, setReviews] = useState([
        {title: 'zelda is an amazing character', rating: 5, body: 'lorem ipsum', key:'1'},
        {title: 'mario is an amazing character', rating: 3, body: 'lorem ipsum', key:'2'},
        {title: 'luigi is an amazing character', rating: 2, body: 'lorem ipsum', key:'3'},
    ])

return(
    <View style={globalStyles.container}>
        <Modal visible={modalOpen}>
            <View style={StyleSheet.modalContent}>
                <Text>modal.....................</Text>
            </View>
        </Modal>

<Mat

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
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalClose:{
        marginBottom:20,
        marginTop:20
    },
    modalContent:{
        flex:1
    }
})
