import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrivacyPolicyScreen = ({ navigation }) => {
  // handle click event for Privacy Policy link
  const handlePrivacyPolicyClick = () => {
    navigation.navigate('SubPrivacyPolicyScreen');
  };

  // handle click event for Terms and Conditions link
  const handleTermsAndConditionsClick = () => {
    navigation.navigate('TermsAndConditionsScreen');
  };

  // handle click event for Accept button
  const handleAcceptClick = () => {
    navigation.navigate('NotificationsScreen');
  };

  return (
   
    <ImageBackground source={require('../assets/privacypolicy.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
        <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.subtitle}>We use cookies to access and store information in order to give you personalized
          contents and services. This information is used to improve the functionality of our app, provide safer experience
           and better serve you. By clicking accept, you acknowledge that you have read, comprehended, and agreed to Ethiopian
           Airlines privacy policies
          </Text>
        </View>
        <View style={styles.poltextcontainer}>
          <TouchableOpacity onPress={handlePrivacyPolicyClick}>
            <Text style={styles.link}>Privacy Policy &gt;</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTermsAndConditionsClick}> 
            <Text style={styles.link}>Terms and Conditions &gt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleAcceptClick}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
   
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:25,
    top:195
    
  },
  subtitle: {
    color: 'black',
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'justify',
    top:185,
    padding:20
    
  },
  link: {
    color: 'green',
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    height: '6.5%',
    bottom: 9
  },
  poltextcontainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    bottom: 25
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default PrivacyPolicyScreen;
