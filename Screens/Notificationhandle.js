import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

// Home screen (Replace this with your HomeScreen component)
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Notificationhandle = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Notifications header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Back icon on the left */}
          <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      {/* Custom Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => handleTabPress('All')}
          style={[styles.tabItem, activeTab === 'All' && styles.activeTab]}
        >
          <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('Flight')}
          style={[styles.tabItem, activeTab === 'Flight' && styles.activeTab]}
        >
          <Text style={[styles.tabText, activeTab === 'Flight' && styles.activeTabText]}>Flight</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('Promotion')}
          style={[styles.tabItem, activeTab === 'Promotion' && styles.activeTab]}
        >
          <Text style={[styles.tabText, activeTab === 'Promotion' && styles.activeTabText]}>Promotion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress('SsheebaMiles')}
          style={[styles.tabItem, activeTab === 'SsheebaMiles' && styles.activeTab]}
        >
          <Text style={[styles.tabText, activeTab === 'SsheebaMiles' && styles.activeTabText]}>SsheebaMiles</Text>
        </TouchableOpacity>
      </View>

      {/* Show the Home screen or any other content here */}
      <Image
                source={require('../assets/notificationimage.jpg')} // Replace with your image file path
                style={{
                    height: 700,
                    width: 400,
                    marginTop: 1,
                }}
            />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  backIcon: {
    fontSize: 24,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 1,
  },
  tabText: {
    fontSize: 15,
    color: 'black',
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
  activeTabText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Notificationhandle;
