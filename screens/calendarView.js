import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles, images } from '../styles/global';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import CalendarInfo from './infoscreens/calendarInfo';

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

  // info in Modal
  const [modalOpen, setModalOpen] = useState(false);
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
    <View style={globalStyles.container}>

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
      <Text style={[globalStyles.first, globalStyles.paragraph]}>See your mood swings on a monthly basis. For more infromaton:</Text>
      
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
  }
});
