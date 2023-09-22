import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StarAllianceLoungeScreen = ({ navigation }) => {
  const [airline, setAirline] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [cabinClass, setCabinClass] = useState('');
  const [loyaltyProgram, setLoyaltyProgram] = useState('');
  const [tierLevel, setTierLevel] = useState('');
  const [paidMembershipCard, setPaidMembershipCard] = useState('');

  const handleFindLounges = () => {
    // Implement your logic to find lounges based on the user input
    console.log('Finding lounges...');
    console.log('Airline:', airline);
    console.log('Arrival Airport:', arrivalAirport);
    console.log('Cabin Class:', cabinClass);
    console.log('Loyalty Program:', loyaltyProgram);
    console.log('Tier Level:', tierLevel);
    console.log('Paid Membership Card:', paidMembershipCard);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color="#555" />
        </TouchableOpacity>
        <Text style={styles.header1}>Star Alliance Lounges</Text>
      </View>

      {/* Inputs */}
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Airline"
          onChangeText={setAirline}
          value={airline}
        />
        <TextInput
          style={styles.input}
          placeholder="Arrival Airport"
          onChangeText={setArrivalAirport}
          value={arrivalAirport}
        />
        <TextInput
          style={styles.input}
          placeholder="Cabin Class"
          onChangeText={setCabinClass}
          value={cabinClass}
        />
        <TextInput
          style={styles.input}
          placeholder="Loyalty Program"
          onChangeText={setLoyaltyProgram}
          value={loyaltyProgram}
        />
        <TextInput
          style={styles.input}
          placeholder="Tier Level"
          onChangeText={setTierLevel}
          value={tierLevel}
        />
        <TextInput
          style={styles.input}
          placeholder="Paid Membership Card"
          onChangeText={setPaidMembershipCard}
          value={paidMembershipCard}
        />
      </View>

      {/* Find Lounges Button */}
      <TouchableOpacity style={styles.findButton} onPress={handleFindLounges}>
        <Text style={styles.findButtonText}>Find Lounges</Text>
      </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  header1: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputsContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 10,
    marginBottom: 10,
  },
  findButton: {
    backgroundColor: '#555',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  findButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StarAllianceLoungeScreen;
