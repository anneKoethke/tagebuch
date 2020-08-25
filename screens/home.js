import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Header from '../shared/header';
import Card from '../shared/card';

export default function Home({ navigation }) {

  const [entries, setEntries] = useState([
    {title: "Today was boring", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci optio sed numquam corrupti natus odit, earum repellat dicta consectetur rem maxime odio suscipit, id voluptatibus. Similique nemo sapiente aperiam, vel ad magni, eaque porro odit sit doloremque totam sed eligendi tempore placeat, repellendus officiis facilis quis explicabo vitae recusandae.", mood: "2", key: "1598345947014"}, 
    {title: "Still boring as f...", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab non ad qui, ullam fuga? Tenetur harum assumenda numquam doloremque!", mood: "1", key: "1598345960221"},
    {title: "got slightly better", content: "Similique nemo sapiente aperiam, vel ad magni, eaque porro odit sit doloremque totam sed eligendi tempore placeat, repellendus officiis facilis quis explicabo vitae recusandae.", mood: "3", key: "1598346620183"}
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList 
        data={entries}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EntryDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
} 