import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    title: 'Link 1',
    isDownload: false,
  },
  {
    id: '2',
    title: 'Link 2',
    isDownload: false,
  },
  {
    id: '3',
    title: 'Link 3',
    isDownload: true,
  },
  {
    id: '4',
    title: 'Link 4',
    isDownload: true,
  },
  {
    id: '5',
    title: 'Link 5',
    isDownload: false,
  },
  {
    id: '6',
    title: 'Link 6',
    isDownload: false,
  },

  // Add more links as needed
];

const ImportantLinks = ({ navigation }) => {
  const handleBackIconPress = () => {
    // Navigate back
    navigation.goBack();
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        {item.isDownload && <Ionicons name="download-outline" size={25} color="black" />}
        {!item.isDownload && <Ionicons name="chevron-forward" size={25} color="black" />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackIconPress}>
          <Ionicons name="arrow-back" size={25} color="#555" />
        </TouchableOpacity>
        <Text style={styles.header1}>Important Links</Text>
      </View>

      {/* Content */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header1: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ImportantLinks;
