import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasswordScreen = ({ navigation }) => {
    const [dateOfBirth, setDateOfBirth] = useState('');
  const [activeTab, setActiveTab] = useState('password');
  const [passwordEmail, setPasswordEmail] = useState('');
  const [membershipId, setMembershipId] = useState('');

  const handlePasswordSubmit = () => {
    // Implement the logic for handling the password submission here
    console.log('Password submitted:', passwordEmail);
  };

  const handleMembershipIdSubmit = () => {
    // Implement the logic for handling the membership ID submission here
    console.log('Membership ID submitted:', membershipId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Forget Password</Text>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'password' ? styles.activeTab : null]}
          onPress={() => setActiveTab('password')}
        >
          <Text style={styles.tabText}>Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'membershipId' ? styles.activeTab : null]}
          onPress={() => setActiveTab('membershipId')}
        >
          <Text style={styles.tabText}>Membership ID</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'password' ? (
        <View style={styles.tabContent}>
        <TextInput
            style={styles.input}
            placeholder="Membership ID*"
            value={passwordEmail}
            onChangeText={(text) => setPasswordEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email*"
            value={passwordEmail}
            onChangeText={(text) => setPasswordEmail(text)}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handlePasswordSubmit}>
            <Text style={styles.submitButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.tabContent}>
        <TextInput
            style={styles.input}
            placeholder="First/Own Name*"
            value={membershipId}
            onChangeText={(text) => setMembershipId(text)}
          /><TextInput
            style={styles.input}
            placeholder="SurName*"
            value={membershipId}
            onChangeText={(text) => setMembershipId(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email*"
            value={membershipId}
            onChangeText={(text) => setMembershipId(text)}
          />
           
      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        keyboardType="numeric"
        maxLength={10}
      />
    
          <TouchableOpacity style={styles.submitButton} onPress={handleMembershipIdSubmit}>
            <Text style={styles.submitButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 12,
    marginRight: 210,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  header: {
    alignSelf: 'center',
    fontSize: 24,
  },
  backIcon: {
    position: 'absolute',
    top: 45,
    left: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 90,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
