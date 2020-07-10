import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import {globalStyles} from '../styles/globalStyles'
import {formik, Formik} from 'formik'

export default function ReviewForm(){

    return(
     <View style={globalStyles.container}>
         <Formik 
            initialValues={{Title:'', Body:'', Rating:}}
         >

         </Formik>
     </View>  
    )
}