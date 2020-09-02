import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function CalendarInfo() {
  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Informations on how to use the calender:</Text>
      <Text style={[globalStyles.first, globalStyles.paragraph]}>Swipe left or right on the calendar or use the green arrows to change the month. Days, on which you've entered a mood/entry, will be highlighted in<Text style={{color: '#A3CB38'}}> green</Text>.</Text>
      <Text style={[globalStyles.paragraph]}>The differently colored little dots specify the mood(s) of that day: <Text style={{color:'#EA2027'}}> angry red</Text>,
      <Text style={{color:'#0652DD'}}> sad blue</Text>,
      <Text style={{color:'gray'}}> neutral gray</Text>,
      <Text style={{color:'#FFC312'}}> happy yellow</Text> and 
      <Text style={{color:'#FDA7DF'}}> overjoyed rosé</Text>.</Text>
      <Text style={[globalStyles.paragraph]}>Click on a specific day for more information on the mood and entry of that day. This will open a list of the day's entries or the entry directly, if there is only one.</Text>
      <Text style={[globalStyles.paragraph, { marginBottom: 35 }]}>Attention: You can only select days that have already passed - no future mood prediction in this app...</Text>
    </View>
  );
}