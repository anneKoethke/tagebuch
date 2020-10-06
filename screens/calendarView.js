import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles, localeDe, androidGreen, angryColor, sadColor, neutralColor, happyColor, overjoyedColor } from '../styles/global';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import CalendarInfo from './infoscreens/calendarInfo';
import { data } from '../shared/data';

export default function CalendarView({ navigation }) {

  // change the names for moths and days to German
  LocaleConfig.locales['de'] = localeDe;
  LocaleConfig.defaultLocale = 'de';

  // info in Modal
  const [modalOpen, setModalOpen] = useState(false);

  /* BUILD A DATES ARRAY that can be used by calendar: date with more than one mood,   */
  // 

  const moodList= [
    {name: 'angry',     key: '1'},
    {name: 'sad',       key: '2'},
    {name: 'neutral',   key: '3'},
    {name: 'happy',     key: '4'},
    {name: 'overjoyed', key: '5'}
  ];

  // TODO: get Dates from HomeScreen (Prop)
  // TODO: for the Dates with moods/entries 
  const [dates, setDates] = useState({
    '2020-08-13': { dots: [happyColor], selected: true, selectedColor: androidGreen  },
    '2020-08-18': { dots: [sadColor, neutralColor], selected: true, selectedColor: androidGreen },
    '2020-08-22': { dots: [angryColor, overjoyedColor], selected: true, selectedColor: androidGreen },
    // a date can have all mood balls, but only once of each category (sad, happy, ...) 
    '2020-08-27': { dots: [angryColor, sadColor, happyColor, overjoyedColor], selected: true, selectedColor: androidGreen },
    '2020-08-28': { dots: [happyColor, overjoyedColor], selected: true, selectedColor: androidGreen },
    '2020-09-01': { dots: [happyColor, overjoyedColor], selected: true, selectedColor: androidGreen }
  });

  return(
    <View style={globalStyles.container}>

      <Calendar 
        style={ styles.calendarStyle }
        theme={{
          calendarBackground: '#fff',
          textSectionTitleColor: '#b6c1cd', // mo di mi ...
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          // change today
          todayTextColor: androidGreen, // android green 
          todayBackgroundColor: '#E8E8E8', // lightest white
          dayTextColor: '#2d4150',
          arrowColor: androidGreen,
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
        onDayPress={
          (day) => {console.log('selected day', day)}
          // (dayOrItem) => navigation.navigate('EntryDetails', dayOrItem)
        }
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideExtraDays//={true}
        firstDay={1}
        showWeekNumbers
        enableSwipeMonths={true}
        // selected must be true, to show selectedColor = color around the number
        markedDates={dates}
        markingType={'multi-dot'}
      />
      <Text style={[globalStyles.first, globalStyles.paragraph]}>See your mood swings on a monthly basis. For more informaton, click the info button:</Text>
      
      <Modal visible={modalOpen} animationType='slide'>
        <View>
          <MaterialCommunityIcons 
            name="close" 
            size={24} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          <CalendarInfo />
        </View>
      </Modal>

      <MaterialCommunityIcons 
        name="information-outline" 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  calendarStyle: {
    marginTop: 10
  }
});
