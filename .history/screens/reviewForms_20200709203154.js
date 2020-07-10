import React from 'react';
import { StyleSheet, Button, TextInput, View, Text,ImageBackground } from 'react-native';
import { globalStyles } from '../styles/globalStyles.js';
import { Formik } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button'

const reviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(4),
    body: yup.string()
    .required()
    .min(8),
    rating:yup.string()
    .required()
    .test('isnum', 'Rating must be between 1 - 5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0; //parseint is used to convert the string from the input field to int
    })

})

export default function ReviewForm({addReview}) {

  return (
    <ImageBackground source={require('../assets/bg8.jpg')} style={styles.header}>
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {props => (
           
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title' placeholderTextColor='#FCF951FF'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
           <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review details' placeholderTextColor='#FCF951FF'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Rating (1 - 5)' placeholderTextColor='#FCF951FF'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

           <FlatButton text='submit' onPress={props.handleSubmit} />
          </View>
          
        )}
      </Formik>
    </View>
   </ImageBackground> 
  );
}

const styles=StyleSheet.create({
  
  header:{
      width:'100%',
      height:'100%',
            
  },
})
