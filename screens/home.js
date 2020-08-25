import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../shared/global';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenHeaderText}>Tagebuch App</Text>
      <Text style={globalStyles.titleText}>Montag</Text>
      <Text style={globalStyles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci optio sed numquam corrupti natus odit, earum repellat dicta consectetur rem maxime odio suscipit, id voluptatibus. Similique nemo sapiente aperiam, vel ad magni, eaque porro odit sit doloremque totam sed eligendi tempore placeat, repellendus officiis facilis quis explicabo vitae recusandae.</Text>
      <Text style={globalStyles.titleText}>Dienstag</Text>
      <Text style={globalStyles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab non ad qui, ullam fuga? Tenetur harum assumenda numquam doloremque!</Text>
      <Text style={globalStyles.titleText}>Mittwoch</Text>
      <Text style={globalStyles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab non ad qui, ullam fuga? Tenetur harum assumenda numquam doloremque!</Text>
    </View>
  );
} 