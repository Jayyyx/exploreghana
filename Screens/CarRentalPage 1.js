import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CarRentalPage = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const navigation = useNavigation();

  const handleFormSubmit = () => {
    // Handle form submission logic here
    // You can access the form values using the state variables
  };

  const handleClose = () => {
    navigation.navigate('Home')
  };

  const handleSettings = () => {
    navigation.navigate('SettingsScreen')
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleClose}>
        <Ionicons name="ios-close" size={24} color="#555" style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Car Rental</Text>
        <TouchableOpacity onPress={handleSettings}>
        <Ionicons name="ios-settings" size={24} color="#555" style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.mainText}>Compare car rental deals from 1,600 suppliers worldwide.</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="ios-search" size={24} color="#" style={styles.searchIcon} />
        <TextInput
  style={[styles.searchInput, { height: 90,  width: 100 }]}
  value={pickupLocation}
  onChangeText={setPickupLocation}
  placeholder="Where are you going?"
  placeholderTextColor="#ccc"
/>

      </View>

      <View style={styles.underlineContainer}>
        <View style={styles.underline} />
        <View style={styles.underline} />
        <View style={styles.underline} />
        <View style={styles.underline} />
        <View style={styles.underline} />
      </View>

      <View style={styles.groupBox}>
        <Text style={styles.groupBoxHeader}>Why book with us?</Text>
        <View style={styles.bulletPointContainer}>
             <Ionicons name="md-checkmark" size={26} color="#555" style={styles.bulletPoint} />
          <Text style={styles.bulletPointText}>Reserve a car with free cancelation up to 48 hours before pick-up</Text>
        </View>
        <View style={styles.bulletPointContainer}>
           <Ionicons name="md-checkmark" size={26} color="#555" style={styles.bulletPoint} />
          <Text style={styles.bulletPointText}>Be safe and confident on your trip with enhanced cleaning measures</Text>
        </View>
        <View style={styles.bulletPointContainer}>
          <Ionicons name="md-checkmark" size={26} color="#555" style={styles.bulletPoint} />
          <Text style={styles.bulletPointText}>Our team is here to help you with any queries related to your reservation</Text>
        </View>
        <View style={styles.bulletPointContainer}>
           <Ionicons name="md-checkmark" size={26} color="#555" style={styles.bulletPoint} />
          <Text style={styles.bulletPointText}>We'll explain any additional costs before you book your car rental</Text>
        </View>
      </View>
    </View>
  );                      
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F6F6F6',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#FFA500',
    marginVertical: 30, 
  },
  settingsIcon: {
    marginTop: 30,
    marginRight: 4,
  },
  closeIcon: {
    marginTop: 30,
    marginLeft: 4,
  },
  header: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
  },
  mainText: {
    marginTop: 25,
    fontSize: 24,
    marginBottom: 12,
    color: '#555',
    fontWeight: 'bold',
  },
searchContainer: {
  marginTop: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'left',
  marginBottom: 24,
  borderWidth: 1,
  borderColor: '#FFFFFF',
  borderRadius: 8,
  paddingHorizontal: 12,
  width: '90%', 
  alignSelf: 'center',
  backgroundColor: '#FFA500', 
},

// Remaining code...

  searchIcon: {
    marginRight: 8,
    backgroundColor: '#FFFFFF', // Set the background color to white
  },
  searchInput: {
    flex: 1,
    height: 90,
    fontSize: 16,
    color: '#',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF', // Set the background color to white
  },
  underlineContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center align the contents horizontally
    marginBottom: 16,
  },
  underline: {
    marginTop: 4,
    height:17,
    width: 50,
    backgroundColor: '#FFA500',
    marginHorizontal: 4,
  },
  groupBox: {
  marginTop: 25, // Add margin to move the group box down
  borderWidth: 21,
  borderColor: 'white', // Update the border color to white
  padding: 16,
  borderRadius: 8,
  backgroundColor: 'white',
},
  groupBoxHeader: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bulletPointContainer: {
    flexDirection: 'row',
     alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    marginRight: 8,
    fontWeight: 'bold',
  },
  bulletPointText: {
    fontSize: 15,
    color: '#FFA500',
    fontWeight: 'bold',
    maxWidth: '90%', // Set a maximum width for the text container
  },
});

export default CarRentalPage;