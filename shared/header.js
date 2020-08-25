import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//Icons 
import { MaterialCommunityIcons } from '@expo/vector-icons';
// <MaterialCommunityIcons name="content-save" size={24} color="black" />
// <MaterialCommunityIcons name="delete" size={24} color="black" />
// <MaterialCommunityIcons name="typewriter" size={24} color="black" />
// <MaterialCommunityIcons name="format-list-bulleted-type" size={24} color="black" />

export default function Header () {
  return(
    <View style={styles.header}>
      <MaterialCommunityIcons name="format-list-bulleted-type" size={24} color="black" />
      <View style={styles.headerTitle}>
        <MaterialCommunityIcons name="typewriter" size={24} color="black" />
        <Text style={styles.headerText}>Tagebuch App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 10,
    color: '#333'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  }
});