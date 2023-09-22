import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import Modal from 'react-native-modal';

const EnterDepartureModal = ({ isVisible, onClose, onSave }) => {
  const [departure, setDeparture] = useState('');
  const [departureError, setDepartureError] = useState(false);
  const [departures, setDepartures] = useState([]);

  // Sample list of departures for demonstration
  const allDepartures = [
    'New York',
    'Los Angeles',
    'London',
    'Tokyo',
    'Paris',
    'Beijing',
    'Sydney',
    'Rome',
    'Berlin',
    'Cairo',
    'Moscow',
    'Toronto',
    'Amsterdam',
  ];

  useEffect(() => {
    // Set the initial list of departures to show all departures
    setDepartures(allDepartures);
  }, []);

  const handleSave = () => {
    // Perform validation here before saving
    if (departure.trim() === '') {
      setDepartureError(true);
    } else {
      setDepartureError(false);
      // Call the onSave function with the selected departure
      onSave(departure);
  
      // Show the saved alert
      Alert.alert('Saved', 'Departure has been saved successfully!', [{ text: 'OK' }]);
    }
  };

  const handleSearch = (text) => {
    // Filter the list of departures based on the search text
    const filteredDepartures = allDepartures.filter((dep) =>
      dep.toLowerCase().includes(text.toLowerCase())
    );
    setDepartures(filteredDepartures);
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Enter Your Departure</Text>
        <TextInput
          style={[styles.input, departureError && styles.inputError]}
          placeholder="Search for a Departure*"
          value={departure}
          onChangeText={(text) => {
            setDeparture(text);
            handleSearch(text);
          }}
        />
        {departureError && <Text style={styles.errorText}>Departure is required</Text>}
        <FlatList
          data={departures}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.departureItem}
              onPress={() => setDeparture(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>No matching departures found.</Text>
          )}
          keyboardShouldPersistTaps="handled"
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red', // Change the border color to red when there's an error
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  saveButton: {
    backgroundColor: '#FFA500',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  departureItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  emptyListText: {
    paddingVertical: 10,
    textAlign: 'center',
  },
});

export default EnterDepartureModal;
