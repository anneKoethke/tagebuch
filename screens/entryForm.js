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
  mood: yup.string()
    .required()
    .test('mood-selected', 'Mood must be selected', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

export default function EntryForm({ addEntry }) {

  const [currentMood, setCurrentMood] = useState([
    {name: 'angry',     key: '1'},
    {name: 'sad',       key: '2'},
    {name: 'neutral',   key: '3'},
    {name: 'happy',     key: '4'},
    {name: 'overjoyed', key: '5'}
  ]);
  const [showMood, setShowMood] = useState('(your mood)');

  return(
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', content: '', mood: '' }}
        validationSchema={entrySchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addEntry(values);
          console.log('logging in entryForm')
          console.log(values);
        }}
      >
        {props => (
          <ScrollView>
            <Text style={styles.innerHeading}>Choose your title and content</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='entry title'
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
              placeholder='entry content'
              onChangeText={props.handleChange('content')}
              value={props.values.content}
              onBlur={props.handleBlur('content')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.content && props.errors.content }</Text>

            <Text style={styles.innerHeading}>Choose your mood: 
              <Text style={styles.chosenMood}> {showMood}</Text>
            </Text>

            <View style={styles.moodImageContainer}>              
              <View style={styles.moodView}>
                <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { 
                    props.values.mood=currentMood[0].key; 
                    props.handleChange('mood'); 
                    setShowMood(currentMood[0].name) 
                  }}>
                  <Image source={images.moods[1]} />
                </TouchableOpacity>
                <Text style={globalStyles.paragraph}>{currentMood[0].name}</Text>
              </View>
              <View style={styles.moodView}>
                <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood=currentMood[1].key; props.handleChange('mood'); setShowMood(currentMood[1].name) }}>
                  <Image source={images.moods[2]} />
                </TouchableOpacity>
                <Text style={globalStyles.paragraph}>{currentMood[1].name}</Text>
              </View>
              <View style={styles.moodView}>
                <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood=currentMood[2].key; props.handleChange('mood'); setShowMood(currentMood[2].name) }}>
                  <Image source={images.moods[3]} />
                </TouchableOpacity>
                <Text style={globalStyles.paragraph}>{currentMood[2].name}</Text>
              </View>
              <View style={styles.moodView}>
              <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood=currentMood[3].key; props.handleChange('mood'); setShowMood(currentMood[3].name) }}>
                <Image source={images.moods[4]} />
              </TouchableOpacity>
                <Text style={globalStyles.paragraph}>{currentMood[3].name}</Text>
              </View>
              <View style={styles.moodView}>
                <TouchableOpacity 
                  style={[ styles.imageStyle ]}
                  onPress={() => { props.values.mood=currentMood[4].key; props.handleChange('mood'); setShowMood(currentMood[4].name) }}>
                  <Image source={images.moods[5]} />
                </TouchableOpacity>
                <Text style={globalStyles.paragraph}>{currentMood[4].name}</Text>
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
  chosenMood: {
    color: '#A3CB38' // Android green 
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