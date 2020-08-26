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

export const images = {
  moods: {
    '1': require('../assets/moods/angry.png'),
    '2': require('../assets/moods/sad.png'),
    '3': require('../assets/moods/neutral.png'),
    '4': require('../assets/moods/happy.png'),
    '5': require('../assets/moods/over_the_top.png')
  }
};