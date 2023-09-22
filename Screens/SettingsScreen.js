import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomDropdown = ({ options, selectedOption, onSelectOption }) => {
  return (
    <View style={styles.dropdownContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.dropdownOption,
            option === selectedOption && styles.selectedOption,
          ]}
          onPress={() => onSelectOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDone = () => {
    navigation.navigate('Home'); // Replace 'Home' with the name of your home screen
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={25} color="#555" />
        </TouchableOpacity>
        <Text style={styles.header}>Settings</Text>
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
      <CustomDropdown
        options={options}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F6F6F6', // Light ash color
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  header: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  doneText: {
    fontSize: 16,
    color: '#007BFF', // Blue color
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdownOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  selectedOption: {
    backgroundColor: '#007BFF', // Blue color
  },
  optionText: {
    fontSize: 16,
    color: '#555',
  },
});

export default SettingsScreen;
