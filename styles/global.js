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