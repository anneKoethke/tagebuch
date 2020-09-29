import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import moment from 'moment';

export default function EntryDetails({ route, navigation }) {
  
  const { title, mood, content, date, key } = route.params;

  return(
    <View style={globalStyles.container}>
      <ScrollView>
        <Card>
          <Text style={globalStyles.paragraph}>{moment.unix(key).format("LLL")}</Text>
          <Text style={globalStyles.titleText}>{title}</Text>      
          <Text style={[globalStyles.first, globalStyles.paragraph]}>{content}</Text>
          <View style={styles.mood}>
            <Text style={globalStyles.paragraph}>Today's mood: </Text>
            <Image source={ images.moods[mood] } />
          </View>
        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mood: {
    flexDirection: 'row', // Hauptachse horizontal
    justifyContent: 'flex-start', // horizontale Ausrichtung (Ausrichtung auf der Hauptachse)
    alignItems: 'center', // verikale Ausrichtung (Ausrichtung der lotrechten Achse zur Hauptachse)
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
});