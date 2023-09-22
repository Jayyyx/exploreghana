import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const FlightPassScreen = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [tierLevel, setTierLevel] = useState('');
  const [tripType, setTripType] = useState('earnMiles'); // Default: earnMiles

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack(); // This will navigate back to the previous screen (home screen)
  };

  const handleHome = () => {
    navigation.navigate('Home'); // This will navigate back to the previous screen (home screen)
  };

  const calculateMiles = () => {
    const distance = 852; 
    const farePaid = 500; 
    const milesPerDollar = 2; 

    const totalMiles = distance * milesPerDollar * farePaid;
    
    alert(`Total Miles Earned: ${totalMiles}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <TouchableOpacity onPress={handleBack}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Flight Status</Text>
        <TouchableOpacity onPress={handleHome}>
          <MaterialIcons name="home" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Earn Miles / Spend Miles Box */}
      <View style={styles.buttonsBox}>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, tripType === 'earnMiles' && styles.selectedButton]}
              onPress={() => setTripType('earnMiles')}
            >
              <Text style={[styles.buttonText, tripType === 'FLIGHT' && styles.selectedButtonText]}>
                FLIGHT NUMBER
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, tripType === 'Route' && styles.selectedButton]}
              onPress={() => setTripType('Route')}
            >
              <Text style={[styles.buttonText, tripType === 'Route' && styles.selectedButtonText]}>
                ROUTE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* End of Earn Miles / Spend Miles Box */}

      <View style={styles.infoContainer}>
        {tripType === 'earnMiles' ? (
          <Text style={styles.infoText}>
            Flight Status us not available for flights operated by our partner airlines.
            <Text style={styles.infoText}>Flight Schedule show the local time of each departure city/airport.</Text>
          </Text>
          
          
        ) : (
          <Text style={styles.infoText}>
          Flight Status us not available for flights operated by our partner airlines.
            <Text style={styles.infoText}>Flight Schedule show the local time of each departure city/airport.</Text>
       
          </Text>
        )}
      </View>

      {/* Form Container */}
      <View style={styles.formContainer}>
        {tripType === 'earnMiles' ? (
          <View>
            <View style={styles.inputContainer}>
              
             
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Flight Number"
                  value={tierLevel}
                  onChangeText={(text) => setTierLevel(text)}
                />
              </View>
            </View>
            
            <View style={styles.continueButtonContainer}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={calculateMiles}
              >
                <Text style={styles.continueButtonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="From"
                  value={fromLocation}
                  onChangeText={(text) => setFromLocation(text)}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="To"
                  value={toLocation}
                  onChangeText={(text) => setToLocation(text)}
                />
              </View>
            </View>
            
            <View style={styles.continueButtonContainer}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={calculateMiles}
              >
                <Text style={styles.continueButtonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      {/* End of Form Container */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF', // Ghost White
    padding: 20,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#59CE8F',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: '#F5F5F5',
  },
  selectedButtonText: {
    color: '#fff',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  input: {
    height: 40,
    padding: 10,
  },
  tripButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tripButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  tripButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  tripButtonActive: {
    backgroundColor: '#007BFF',
  },
  tripButtonTextActive: {
    color: '#fff',
  },
  continueButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  continueButton: {
    backgroundColor: '#FFA41B',
    paddingVertical: 15,
    borderRadius: 5,
    flex: 1,
    marginTop: 20,
  },
  continueButtonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
  },
  formContainer: {
    backgroundColor: '#FFF', // White
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonsBox: {
    backgroundColor: '#F0F0F0', // Light Ash gray
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default FlightPassScreen;
