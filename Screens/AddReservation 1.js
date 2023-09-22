import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddReservation = ({  }) => {
    const navigation = useNavigation();
  const [bookingReference, setBookingReference] = useState('');
  const [lastName, setLastName] = useState('');
  const [isBookingReferenceValid, setBookingReferenceValid] = useState(true);
  const [isLastNameValid, setLastNameValid] = useState(true);

  const handleCancel = () => {
    navigation.goBack()
  };

  const handleAddTrip = () => {
    // Perform trip addition logic here
    if (bookingReference && lastName) {
      // Trip addition logic when both fields are filled
      Alert.alert('Trip Added Successfully!');
    } else {
      // Set validation flags to display red borders on invalid fields
      setBookingReferenceValid(bookingReference !== '');
      setLastNameValid(lastName !== '');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Reservation</Text>
      <TextInput
        style={[styles.input, !isBookingReferenceValid && styles.invalidInput]}
        placeholder="Booking Reference"
        value={bookingReference}
        onChangeText={setBookingReference}
      />
      <TextInput
        style={[styles.input, !isLastNameValid && styles.invalidInput]}
        placeholder="Last/Sur Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TouchableOpacity onPress={handleAddTrip}>
        <Text style={styles.addTripButton}>Add Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCancel}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  invalidInput: {
    borderColor: 'red',
  },
  addTripButton: {
    backgroundColor: 'orange',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cancelText: {
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
});

export default AddReservation;
