import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutUsScreen = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack(); 
      };

      const handlePrivacyPolicyClick = () => {
        console.log('Privacy Policy')
        navigation.navigate('SubPrivacyPolicyScreen')
      };

      const handleTerms = () => {
        console.log('Terms and Conditions')
        navigation.navigate('TermsAndConditionsScreen')
      };

  const appVersion = '1.0.0';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>About Us</Text>
      </View>
      <View style={styles.aboutText}>
      <Text>THIS IS EXPLORE GHANA</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.appVersionText}>App Version: {appVersion}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePrivacyPolicyClick}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTerms}>
          <Text style={styles.buttonText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFA500',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  aboutText: {
    fontSize: 24,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appVersionText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AboutUsScreen;
