import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const JoinShebaMilesScreen = () => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const navigation = useNavigation(); // Get the navigation object

    const handleGoBack = () => {
      navigation.goBack(); // Navigate back to the previous screen
    };


  const handleFormSubmit = () => {
    // Handle form submission logic here
    // You can access the form values using the state variables    
  };

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.headerContainer}>
     <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={25} color="#555" />
        </TouchableOpacity>
        <Text style={styles.header}>Join ExploreGhana</Text>
      </View>
<ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionHeader}>Personal Details</Text>
      <View style={styles.groupBox}>
      <Text style={styles.instruction}>Please provide accurate details.</Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Title</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Title"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>Given Name (First Name)</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Given Name (First Name)"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>Last/Surname*</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last/Sur Name*"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>Date of Birth*</Text>
          <View style={styles.dateOfBirthContainer}>
            <TextInput
              style={styles.dateOfBirthInput}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              placeholder="Year"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.dateOfBirthInput}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              placeholder="Month"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.dateOfBirthInput}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              placeholder="Day"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>Nationality</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={nationality}
              onChangeText={setNationality}
              placeholder="Nationality"
              placeholderTextColor="#ccc"
            />
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Contact Details</Text>
      <View style={styles.groupBox}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#ccc"
            />
          </View>
<Text style={styles.label}>Country code Phone Number</Text>
          <View style={styles.phoneContainer}>
            <TextInput
              style={styles.phoneInput}
              value={phone}
              onChangeText={setPhone}
              placeholder="Country code"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.phoneInput}
              value={phone}
              onChangeText={setPhone}
              placeholder="Phone Number"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>Street Address*</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
              placeholder="Street Address*"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>Zip Code/Postal Code*</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={zipCode}
              onChangeText={setZipCode}
              placeholder="Zip Code/Postal Code*"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>Country*</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={country}
              onChangeText={setCountry}
              placeholder="Country*"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>City*</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
              placeholder="City*"
              placeholderTextColor="#ccc"
            />
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Set Password</Text>
      <View style={styles.groupBox}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#ccc"
            />
          </View>

          <Text style={styles.label}>Confirm Password*</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password*"
              placeholderTextColor="#ccc"
            />
          </View>
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        {/*<CheckBox style={styles.checkbox} value={agreed} onValueChange={setAgreed} />*/}
        <Text style={styles.checkboxLabel}>I agree to Privacy policy and Shebamiles TermsAndConditions</Text>
      </View>

      <Button title="Register" onPress={handleFormSubmit} color="#FFA500" />
      </ScrollView>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    textAlign: 'center',
  },
  groupBox: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    color: '#555',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  dateOfBirthContainer: {
    flexDirection: 'row',
  },
  dateOfBirthInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 8,
  },
  phoneContainer: {
    flexDirection: 'row',
  },
  phoneInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: '#E8FFE8', // Light green color
    padding: 8,
    borderRadius: 8,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#FFA500', // Deep green color
  },
});

export default JoinShebaMilesScreen;