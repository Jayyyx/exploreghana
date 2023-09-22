import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';

const FeedbackScreen = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleRateUsPress = () => {
    // Open the device's play store for rating the app
    Linking.openURL('market://details?id=YOUR_APP_PACKAGE_NAME')
      .catch(() => {
        // Handle the case when the play store is not available
        console.log('Unable to open the play store.');
      });
  };

  // Error state to track invalid inputs
  const [errors, setErrors] = useState({
    category: false,
    fullName: false,
    email: false,
    feedback: false,
  });

  const handleBackIconPress = () => {
    // Navigate back
    navigation.goBack();
  };

  const handleFeedbackSubmit = () => {
    // Validate the inputs
    const newErrors = {
      category: category.trim() === '',
      fullName: fullName.trim() === '',
      email: email.trim() === '',
      feedback: feedback.trim() === '',
    };

    if (Object.values(newErrors).some((error) => error)) {
      // At least one field is empty, set errors and show alert
      setErrors(newErrors);
      showAlert('Error', 'Please fill in all required fields.');
      return;
    }

    // Implement your feedback submission logic here
    console.log('Submitting feedback:', {
      category,
      fullName,
      email,
      feedback,
    });

    // Show a success message after submission
    showAlert('Success', 'Feedback submitted successfully!');
  };


  const showAlert = (title, message) => {
    Alert.alert(title, message, [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackIconPress}>
          <Ionicons name="arrow-back" size={25} color="#555" />
        </TouchableOpacity>
        <Text style={styles.header1}>Feedback</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <TextInput
          style={[styles.input, errors.category && styles.inputError]}
          placeholder="Select category*"
          onChangeText={setCategory}
          value={category}
        />
        <TextInput
          style={[styles.input, errors.fullName && styles.inputError]}
          placeholder="Full Name*"
          onChangeText={setFullName}
          value={fullName}
        />
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Email*"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.feedbackInput, errors.feedback && styles.inputError]}
          placeholder="Leave your feedback here*"
          onChangeText={setFeedback}
          value={feedback}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleFeedbackSubmit}>
          <Text style={styles.submitButtonText}>Submit Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rateButton} onPress={handleRateUsPress}>
          <Text style={styles.rateButtonText}>Rate Us</Text>
        </TouchableOpacity>
      </View>
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
    textAlign: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    height: 150, // Adjust the height as needed
    textAlignVertical: 'top', // Start the text from the top
  },
  inputError: {
    borderColor: 'red',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rateButton: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  rateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
