import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import { data } from '../shared/data';
import Header from '../shared/header';
import Card from '../shared/card';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EntryForm from './entryForm';

export default function Home({ navigation }) {

  // Modal for new entries
  const [modalOpen, setModalOpen] = useState(false);

  // TODO: only entries of the last day (if more than one) OR the last n=10? entries of several days OR the last entries of the current week? (all entries via Calendar)
  // if the last entries of the current week: need for a no-entry-last-week-screen
  const [entries, setEntries] = useState(data);

  const addEntry = (entry) => {
    let now = moment().unix();
    entry.key = now.toString(); // timestamp as a String like "1601372375"
    entry.date = moment.unix(now).format("YYYY-MM-DD"); // string like "2020-09-12"
    setEntries((currEntries) => {
      return [ entry, ...currEntries]
    });
    setModalOpen(false);
  }
  /*
    failled to compile bla:
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
  */   

  return (
    <View style={globalStyles.container}>
      {/* Modal for new Entries: loads EntryForm */}
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialCommunityIcons 
              name="close" 
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <EntryForm addEntry={addEntry} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* 'button (icon) to open the Modal */}
      <MaterialCommunityIcons 
        name="playlist-edit" 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList 
        data={entries}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EntryDetails', item)}>
            <Card>
              <View style={styles.homeCard}>
                <Image 
                  source={images.moods[item.mood]} 
                  style={styles.cardImage}
                />
                <View style={styles.homeCardInner}>
                  <Text style={globalStyles.titleText}>{ moment.unix(item.key).fromNow() }</Text>
                  <Text style={globalStyles.paragraph}>{ item.title }</Text>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        )}
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
  homeCard: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  homeCardInner: {
    flexDirection: 'column',
    marginRight: 25,
    paddingRight: 25 
  }
});