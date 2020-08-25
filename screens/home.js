import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Header from '../shared/header';
import Card from '../shared/card';
import moment from 'moment';

export default function Home({ navigation }) {

  const [entries, setEntries] = useState([
    {title: "Today was boring", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci optio sed numquam corrupti natus odit, earum repellat dicta consectetur rem maxime odio suscipit, id voluptatibus. Similique nemo sapiente aperiam, vel ad magni, eaque porro odit sit doloremque totam sed eligendi tempore placeat, repellendus officiis facilis quis explicabo vitae recusandae.", mood: "2", key: "2020-08-22T11:05:33.808Z"}, 
    {title: "Still boring as f...", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab non ad qui, ullam fuga? Tenetur harum assumenda numquam doloremque!", mood: "1", key: "2020-08-23T11:05:33.808Z"},
    {title: "got slightly better", content: "Similique nemo sapiente aperiam, vel ad magni, eaque porro odit sit doloremque totam sed eligendi tempore placeat, repellendus officiis facilis quis explicabo vitae recusandae.", mood: "3", key: "2020-08-24T11:05:33.808Z"}, 
    {title: "Now I feel so much better I could fly away with all the happiness", content: "Similique nemo sapiente aperiam, vel ad magni, eaque porro odit sit doloremque totam sed eligendi tempore placeat, repellendus officiis facilis quis explicabo vitae recusandae.", mood: "5", key: "2020-08-25T11:05:33.808Z"}
  ])

  /*
    failled to compile bla:
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
  */  

  return (
    <View style={globalStyles.container}>
      <FlatList 
        data={entries}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EntryDetails', item)}>
            <Card>
              <View style={styles.homeCard}>
                <Image 
                  source={ images.moods[item.mood] } 
                  style={styles.cardImage}
                />
                <View>
                  <Text style={globalStyles.titleText}>{ /*moment(item.time.toDate()).fromNow()*/ moment(item.key).format("DD.MM.YYYY HH:MM") }</Text>
                  <Text style={globalStyles.titleText}>{ moment(item.key).fromNow() }</Text>
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
  homeCard: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardImage: {
    margin: 5
  }
});