import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const entrySchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  content: yup.string()
    .required()
    .min(8),
  // TODO: mood input und Regel
  mood: yup.string()
    .required()
    .test('is-num-1-5', 'Mood must be a number from 1 to 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function EntryForm({ addEntry }) {
  return(
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', content: '', mood: '' }}
        validationSchema={entrySchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addEntry(values);
          //console.log(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Entry Title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')} // yup: error shown, when put of focus
            /> 
            <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title /* yup: when focus, get error */ }</Text>

            <TextInput
              style={globalStyles.input}
              multiline 
              minHeight={60}
              maxHeight={250}
              placeholder='Entry Content'
              onChangeText={props.handleChange('content')}
              value={props.values.content}
              onBlur={props.handleBlur('content')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.content && props.errors.content }</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Mood (1 - 5)'
              onChangeText={props.handleChange('mood')}
              value={props.values.mood}
              keyboardType='numeric'
              onBlur={props.handleBlur('mood')} 
            />
            <Text style={globalStyles.errorText}>{ props.touched.mood && props.errors.mood }</Text>
            
            <FlatButton text='submit' onPress={props.handleSubmit} /> 
          </View>
        )}

      </Formik>

    </View>
  );
}