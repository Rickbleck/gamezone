import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
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
                        onc
                    />
                </View>
            )}
         </Formik>
     </View>  
    )
}