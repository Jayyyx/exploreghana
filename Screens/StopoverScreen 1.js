import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const StopoverScreen = () => {
    const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('My Trips');
  const [partnerAirlines, setPartnerAirlines] = useState('');
  const [bagTagNumber, setBagTagNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    if (bagTagNumber.length !== 10) {
      setErrorMessage('Booking Reference is required.');
    } else {
      setErrorMessage('');
      // Implement your search logic here
     
    }
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleBack = () => {
    console.log('Back button pressed!')
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={25} color="#555" />
        </TouchableOpacity>
        <Text style={styles.tabTitle}>Stopover@Addis</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'My Trips' ? styles.activeTab : null]}
          onPress={() => handleTabPress('My Trips')}
        >
          <Text style={[styles.tabText, activeTab === 'My Trips' ? styles.activeTabText : null]}>My Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Stopover' ? styles.activeTab : null]}
          onPress={() => handleTabPress('Stopover')}
        >
          <Text style={[styles.tabText, activeTab === 'Stopover' ? styles.activeTabText : null]}>Stopover</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        {/* My Trips Tab */}
        {activeTab === 'My Trips' ? (
          <View style={styles.myTripsTabContent}>
            <Text style={styles.myTripsText1}>Stopover@Addis program will benefit you from an exceptional travel experience.
          You will have an opportunity to Visit Addis Ababa in convenient and affordable ways.</Text>
            <Image source={require('../assets/aeroplane.jpeg')} style={styles.tripImage} />
          </View>
        ) : null}

        {/* Stopover Tab */}
        {activeTab === 'Stopover' ? (
          <View style={styles.stopoverTabContent}>
           <Text style={styles.myTripsText}>Stopover@Addis program will benefit you from an exceptional travel experience.
          You will have an opportunity to Visit Addis Ababa in convenient and affordable ways.</Text>
           
            <TextInput
              style={[styles.input, errorMessage ? styles.errorInput : null]}
              placeholder="Booking Reference*"
              onChangeText={setPartnerAirlines}
              value={partnerAirlines}
            />
            <TextInput
              style={[styles.input, errorMessage ? styles.errorInput : null]}
              placeholder="Last/Sure Name*"
              onChangeText={setBagTagNumber}
              value={bagTagNumber}
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
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
    justifyContent: 'flex-start',
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
  myTripsTabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  myTripsText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  myTripsText1: {
    fontSize: 18,
    color: '#555',
    //marginBottom: 60,
    marginTop: -190
  },
  tripImage: {
    width: 450,
    height: 250,
   marginBottom: -310,
  },
  stopoverTabContent: {},
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
    backgroundColor: '#FFA500',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'black',
    fontSize: 18,
    //fontWeight: 'bold',
  },
});

export default StopoverScreen;
