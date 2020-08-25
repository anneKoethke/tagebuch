import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  screenHeaderText: {
    fontFamily: 'permanent-marker',
    fontSize: 30,
    color: '#000'
  },
  titleText: {
    fontFamily: 'permanent-marker',
    fontSize: 20,
    color: '#333'
  },
  paragraph: {
    fontFamily: 'kalam-light',
    //fontFamily: 'kalam-regular',
    marginVertical: 8,
    fontSize: 18,
    lineHeight: 25
  },
});

export const images = {
  ratings: {
    'angry': require('../assets/moods/angry.png'),
    'sad': require('../assets/moods/sad.png'),
    'neutral': require('../assets/moods/neutral.png'),
    'happy': require('../assets/moods/happy.png'),
    'over_the_top': require('../assets/moods/over_the_top.png')
  }
};