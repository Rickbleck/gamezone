import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback,Keyboard, Modal} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import Card from '../shared/card'
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForms'

export default function Home({navigation}){  
    const[modalOpen, setModalOpen]=useState(false)
    const[reviews, setReviews] = useState([
        {title: 'zelda is an amazing character', rating: 5, body: 'lorem ipsum', key:'1'},
        {title: 'mario is an amazing character', rating: 3, body: 'lorem ipsum', key:'2'},
        {title: 'luigi is an amazing character', rating: 2, body: 'lorem ipsum', key:'3'},
    ])

    const addReview = (review) =>{
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        } )
        setModalOpen(false)
    }

    const pressHandler = (key) =>{
        setReviews((currentReviews) => {
          return currentReviews.filter(reviews => reviews.key != key);
        })
    }

return(
    <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <View style={styles.modalContent}>
              <MaterialIcons //we are not putting it like this'Keyboard.dismiss()' so that it doesnt automatically dismiss the keyboard
                name='close'
                size={24}
                style={{ ...styles.modalClose, ...styles.modalToggle}}
                onPress={()=> setModalOpen(false)}            
              />              
                <ReviewForm addReview={addReview}/>
            </View>
            </TouchableWithoutFeedback>
        </Modal>

            <MaterialIcons
            name='add'
            size={24}
            style={styles.modalToggle}
            onPress={()=> setModalOpen(true)}
            />
    
        <FlatList
        data={reviews}//here we pass the set of data we want to output and here it is reviews
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)} >
                <Card>
                    <View style={[{flexDirection:'row', alignItems:'center'}]}>
                        <View style={[{flex:1,flexDirection:'row'}]}>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </View>


                        <View style={styles.delete}>
                            <MaterialCommunityIcons name='delete-sweep' size={23} onPress={() => pressHandler(item.key)} />               
                        </View>
                    </View>
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
    },
    delete:{
        borderWidth:2, 
        borderRadius:8,
        borderStyle:'solid',
        borderColor:'white',
        color:''
    }
})
