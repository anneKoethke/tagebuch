import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Icons 
import { MaterialCommunityIcons } from '@expo/vector-icons';
// <MaterialCommunityIcons name="content-save" size={24} color="black" />
// <MaterialCommunityIcons name="delete" size={24} color="black" />
// <MaterialCommunityIcons name="typewriter" size={24} color="black" />
// <MaterialCommunityIcons name="format-list-bulleted-type" size={24} color="black" />

export default function Header ({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return(
    <View style={styles.header}>
      <MaterialCommunityIcons 
        name="format-list-bulleted-type" 
        size={24} 
        onPress={openMenu} 
        style={styles.menuIcon} />
      <View style={styles.headerTitle}>
        <MaterialCommunityIcons 
          name="typewriter" 
          size={24} 
          color="#fff" 
        />
        <Text style={styles.headerText}>{title}</Text>
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
    color: '#fff',
    letterSpacing: 1
  },
  menuIcon: {
    position: 'absolute',
    left: 10,
    color: '#fff'
  }
});