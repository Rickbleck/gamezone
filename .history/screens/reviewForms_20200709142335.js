import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles.js';
import { Formik } from 'formik';
import * as yup from

const reviewSchema = yup.object({
    title: yup.string
})

export default function ReviewForm({addReview}) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput 
              style={globalStyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} style={globalStyles.submitButton} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}