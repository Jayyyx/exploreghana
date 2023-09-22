import { StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BidToUpgradeScreen = () => {
    const navigation = useNavigation();
  const handleButtonPress = () => {
    console.log('Button pressed!');
  };

  const handleBack = () => {
    navigation.goBack(); // This will navigate back to the previous screen (home screen)
  };

  const [bookingRef, setBookingRef] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bid to upgrade</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Take a chance to upgrade to business class</Text>
        <Text style={styles.contentText1}>
          If you booked Ethiopian Airlines flight and would like to experience extra comfort services and hospitality
        </Text>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          onChangeText={setBookingRef}
          value={bookingRef}
          placeholder="Booking Reference"
        />
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
          placeholder="Last/Sur Name"
        />
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 35,
    paddingTop: 15,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 100,
  },
  contentText: {
    fontSize: 19,
    paddingTop: 20,
    marginLeft: 15,
  },
  contentText1: {
    fontSize: 15,
    marginLeft: 15,
    paddingTop: 10,
  },
  container2: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    paddingBottom: 30,
    marginHorizontal: 15,
  },
  input: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 25,
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#808080',
    marginTop: 25,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 20,
    borderRadius: 6,
    marginTop: 25,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
});

export default BidToUpgradeScreen;
