import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
//import Card from '../shared/card';

export default function EntryDetails({ route, navigation }) {
  
  const { title, mood, body, key } = route.params;

  return(
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <View style={styles.mood}>
          <Text>GameZone Rating: </Text>
          <Image source={ images.ratings[rating] } />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  mood: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
});