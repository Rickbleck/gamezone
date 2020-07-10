import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TextInput, Modal, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import { Formik} from 'formik'


export default function ReviewForm(){

    return(
     <View style={globalStyles.container}>
         <Formik 
            initialValues={{Title:'', Body:'', Rating:''}}
            onSubmit={(values)=>{
                console.log(values)
            } }
         >
            {(props)=> (
                <View>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Review title'
                        onChangeText={props.handleChange('Title')}
                        value={props.values.Title}
                    />

                    <TextInput
                        style={globalStyles.input}
                        placeholder='Body'
                        onChangeText={props.handleChange('Body')}
                        value={props.values.Body}
                    />

                    <TextInput
                        style={globalStyles.input}
                        placeholder='Rating'
                        onChangeText={props.handleChange('Rating')}
                        value={props.values.title}
                        keyboardType='numeric'
                    />
                </View>
            )}
         </Formik>
         <Button title='submit' color='pink' onPress={props.handleSubmit} />
     </View>  
    )
}