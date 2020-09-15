import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  screenHeaderText: {
    fontFamily: 'permanent-marker',
    fontSize: 30
  },
  titleText: {
    fontFamily: 'permanent-marker',
    fontSize: 20
  },
  first: {
    marginTop: 20
  },
  paragraph: {
    fontFamily: 'kalam-light',
    marginVertical: 8,
    fontSize: 18,
    lineHeight: 25
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6, 
    textAlign: 'center'
  }
});

// images for the moods
export const images = {
  moods: {
    '1': require('../assets/moods/angry.png'),
    '2': require('../assets/moods/sad.png'),
    '3': require('../assets/moods/neutral.png'),
    '4': require('../assets/moods/happy.png'),
    '5': require('../assets/moods/over_the_top.png')
  }
};

// locale DE for the CalendarView
export const localeDe = {
  monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
  monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
  dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
  dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
  today: 'Heute'
}; 

// color codes for the mood dots in calendarView
export const angryColor = { key:'angry', color: '#EA2027' }; // red
export const sadColor = { key:'sad', color: '#0652DD' }; // blue
export const neutralColor = { key:'neutral', color: 'gray' }; // gray 
export const happyColor = { key:'happy', color: '#FFC312' }; // yellow
export const overjoyedColor = { key:'overjoyed', color: '#FDA7DF' }; // orange 

// color code for marked dates in calendarView
export const androidGreen = '#A3CB38';
