import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { globalStyles, images } from '../styles/global';
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
    .test('mood-selected', 'Mood must be selected', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function EntryForm({ addEntry }) {

  //const [selectedValue, setSelectedValue] = useState('3');

  return(
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', content: '', mood: '' }}
        validationSchema={entrySchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addEntry(values);
          console.log(values);
        }}
      >
        {props => (
          <ScrollView>
            <Text style={styles.innerHeading}>Choose your Title and Content</Text>
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
            
            {/* <TextInput 
              style={globalStyles.input}
              placeholder='Mood (1 - 5)'
              onChangeText={props.handleChange('mood')}
              value={props.values.mood}
              keyboardType='numeric'
              onBlur={props.handleBlur('mood')} 
            />
            <Text style={globalStyles.errorText}>{ props.touched.mood && props.errors.mood }</Text>*/}
            
            {/* TODO: images with text to select */}

            <Text style={styles.innerHeading}>Choose your mood:</Text>

            <View style={styles.moodImageContainer}>
              <View style={styles.moodView}>
                <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood= '1'; props.handleChange('mood') }}>
                  <Image source={images.moods[1]} />
                </TouchableOpacity>
                <Text style={globalStyles.paragraph}>angry</Text>
              </View>
              <View style={styles.moodView}>
                <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood= '2'; props.handleChange('mood') }}>
                  <Image source={images.moods[2]} />
                </TouchableOpacity>
                <Text style={globalStyles.paragraph}>sad</Text>
              </View>
              <View style={styles.moodView}>
                <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood= '3'; props.handleChange('mood') }}>
                  <Image source={images.moods[3]} />
                </TouchableOpacity>
                <Text style={globalStyles.paragraph}>neutral</Text>
              </View>
              <View style={styles.moodView}>
              <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood= '4'; props.handleChange('mood') }}>
                <Image source={images.moods[4]} />
              </TouchableOpacity>
                <Text style={globalStyles.paragraph}>happy</Text>
              </View>
              <View style={styles.moodView}>
                <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood= '5'; props.handleChange('mood') }}>
                  <Image source={images.moods[5]} />
                </TouchableOpacity>
                <Text style={globalStyles.paragraph}>overjoyed</Text>
              </View>
            </View>
            <Text style={globalStyles.errorText}>{ props.touched.mood && props.errors.mood }</Text>
            
            <FlatButton text='submit' onPress={props.handleSubmit} /> 
          </ScrollView>
        )}

      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  innerHeading: {
    fontFamily: 'kalam-bold',
    fontSize: 25,
    lineHeight: 25,
    paddingVertical: 25,
  },
  moodImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
  }
})