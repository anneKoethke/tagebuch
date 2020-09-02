import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

export default function CalendarView() {

  // change the names to German
  LocaleConfig.locales['de'] = {
    monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
    dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
    dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
    today: 'Heute'
  };
  LocaleConfig.defaultLocale = 'de';

  // for the Dates with moods/entries 
  const [markedDates, setMarkedDates] = useState([

  ]);
  // mood dots
  const angry = { key:'angry', color: '#EA2027'}; //red -> flat ui colors nl
  const sad = { key:'sad', color: '#0652DD' }; // blue
  const neutral = { key:'neutral', color: 'gray' }; // 
  const happy = { key:'happy', color: '#FFC312' }; // yellow
  const overjoyed = { key:'overjoyed', color: '#FDA7DF' }; // rose 

  return(
    <ScrollView style={globalStyles.container}>
      
      <Text style={globalStyles.titleText}>Calendar:</Text>
      <Text style={[globalStyles.first, globalStyles.paragraph]}>See your mood swings on a monthly basis. </Text>

      <Calendar 
        style={{ marginTop: 10 }}
        theme={{
          calendarBackground: '#fff',
          textSectionTitleColor: '#b6c1cd', // mo di mi ...
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          // change today
          todayTextColor: '#A3CB38', // android green 
          todayBackgroundColor: '#E8E8E8', // lightest white

          dayTextColor: '#2d4150',
          arrowColor: '#A3CB38',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#000',
          textDayFontFamily: 'kalam-light',
          textDayHeaderFontFamily: 'permanent-marker',
          textDayFontWeight: '300',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textDayHeaderFontSize: 18,
          'stylesheet.calendar.header': {
            monthText: {
                fontSize: 25,
                fontFamily: 'permanent-marker',
                fontWeight: '300', // default is 300
                color: '#2d4150',
                margin: 10 // default
            }
          }
        }}
        current={ new Date() } // set specific {'2020-09-02'} or {'yyyy-mm-dd'}
        maxDate={ new Date() }
        onDayPress={(day) => {console.log('selected day', day)}}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideExtraDays//={true}
        firstDay={1}
        showWeekNumbers
        enableSwipeMonths={true}
        // selected must be true, to show selectedColor = color around the number
        // TODO: combine the entries' dates and moods to this markedDates object
        markedDates={{
          '2020-08-13': { dots: [happy], selected: true, selectedColor: '#A3CB38'  },
          '2020-08-18': { dots: [sad, neutral], selected: true, selectedColor: '#A3CB38' },
          '2020-08-22': { dots: [angry, overjoyed], selected: true, selectedColor: '#A3CB38' },
          '2020-08-27': { dots: [angry, sad, neutral], selected: true, selectedColor: '#A3CB38' },
          '2020-08-28': { dots: [happy, overjoyed], selected: true, selectedColor: '#A3CB38' },
          '2020-09-01': { dots: [happy, overjoyed], selected: true, selectedColor: '#A3CB38' }
        }}
        markingType={'multi-dot'}
      />

      {/* instead of scrollView and a lot of text: (i) info-button with the info (modal?) */}
      <Text style={[globalStyles.first, globalStyles.paragraph]}>Swipe left or right on the calendar or use the green arrows to change the month. Days, on which you've entered a mood/entry, will be highlighted in green.</Text>
      <Text style={[globalStyles.paragraph]}>The differently colored little dots specify the mood(s) of that day: <Text style={{color:'#EA2027'}}> angry red</Text>,
      <Text style={{color:'#0652DD'}}> sad blue</Text>,
      <Text style={{color:'gray'}}> neutral gray</Text>,
      <Text style={{color:'#FFC312'}}> happy yellow</Text> and 
      <Text style={{color:'#FDA7DF'}}> overjoyed rosé</Text>.</Text>
      <Text style={[globalStyles.paragraph, { marginBottom: 35 }]}>Click on a specific day for more information on the mood(s) and entries of that day. You can only select days that have passed - no future mood prediction in this app...</Text>

    </ScrollView>

  );
}

