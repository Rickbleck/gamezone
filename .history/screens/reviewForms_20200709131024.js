import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import {formik, Formik} from 'formik'
import { TextInput } from 'react-native-gesture-handler';

export default function ReviewForm(){

    return(
     <View style={globalStyles.container}>
         <Formik 
            initialValues={{Title:'', Body:'', Rating:''}}
            onSubmit={(values)=>{
                console.log(values)
            } }
         >
            {(formikprops)=> (
                <View>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Review title'
                        onChangeText={formikprops.handleChange('Title')}
                        value={props.values.title}
                    />

                    <TextInput
                        style={globalStyles.input}
                        placeholder=' Body'
                        onChangeText={formikprops.handleChange('Body')}
                        value={props.values.title}
                    />

                    <TextInput
                        style={globalStyles.input}
                        placeholder='RRating'
                        onChangeText={formikprops.handleChange('Rating')}
                        value={props.values.title}
                        keyboardType='numeric'
                    />
                </View>
            )}
         </Formik>
         <Button title='submit' color='pink' />
     </View>  
    )
}