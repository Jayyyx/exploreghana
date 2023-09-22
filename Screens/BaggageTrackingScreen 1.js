import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BaggageTrackingScreen = () => {
    const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Recent');
  const [partnerAirlines, setPartnerAirlines] = useState('');
  const [bagTagNumber, setBagTagNumber] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleBaggageSearch = () => {
    if (bagTagNumber.length !== 10) {
      setErrorMessage('Bag Tag Number is required.');
    } else {
      setErrorMessage('');
      // Implement your baggage tracking logic here
      console.log('Searching for baggage with Bag Tag Number:', bagTagNumber);
    }
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleBack = () => {
    console.log('Back button pressed!')
    navigation.navigate('Home')
  };

  const handleHome = () => {
    console.log('Home button pressed!')
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={25} color="#555" />
        </TouchableOpacity>
        <Text style={styles.tabTitle}>Baggage Tracking</Text>
        <TouchableOpacity onPress={handleHome}>
          <Ionicons name="home-outline" size={25} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Recent' ? styles.activeTab : null]}
          onPress={() => handleTabPress('Recent')}
        >
          <Text style={[styles.tabText, activeTab === 'Recent' ? styles.activeTabText : null]}>Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Baggage Tracking' ? styles.activeTab : null]}
          onPress={() => handleTabPress('Baggage Tracking')}
        >
          <Text style={[styles.tabText, activeTab === 'Baggage Tracking' ? styles.activeTabText : null]}>
            Baggage Tracking
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        {/* Recent Tab */}
        {activeTab === 'Recent' ? (
          <View style={styles.recentTabContent}>
            <Text style={styles.recentText}>There is no available tracking information</Text>
          </View>
        ) : null}

        {/* Baggage Tracking Tab */}
        {activeTab === 'Baggage Tracking' ? (
          <View style={styles.baggageTrackingTabContent}>
          
            <TextInput
              style={styles.input}
              placeholder="Partner Airlines"
              onChangeText={setPartnerAirlines}
              value={partnerAirlines}
            />
            <TextInput
              style={[styles.input, errorMessage ? styles.errorInput : null]}
              placeholder="Bag Tag Number"
              onChangeText={setBagTagNumber}
              value={bagTagNumber}
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Flight Number"
              onChangeText={setFlightNumber}
              value={flightNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              onChangeText={setDate}
              value={date}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleBaggageSearch}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    borderBottomWidth: 2,
    borderBottomColor: '#555',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  activeTabText: {
    color: 'blue',
  },
  tabContent: {
    paddingHorizontal: 20,
  },
  recentTabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  recentText: {
    fontSize: 18,
    color: '#555',
  },
  baggageTrackingTabContent: {},
  tabTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#555',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BaggageTrackingScreen;
