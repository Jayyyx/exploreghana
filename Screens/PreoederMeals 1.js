import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();



const PreorderMeals = () => {
  const navigation = useNavigation();
  const [bookingRef, setBookingRef] = useState('');
  const [lastName, setLastName] = useState('');

  const onSearch = () => {
    // Add your search logic here
    console.log('Search button clicked');
    console.log('Booking Reference:', bookingRef);
    console.log('Last Name:', lastName);
  };

  const handleBack = () => {
    navigation.navigate('Home')
  };

  

  const onCancelPreorder = () => {
    Alert.alert(
      'Cancel pre-order meal',
      'Are you sure you want to cancel pre-order meal?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onCancelPreorder: () => {
            // Add cancel pre-order logic here
            console.log('Pre-order meal cancelled');
          },
        },
      ],
      { cancelable: false }
    );
  };



  return (
    <View style={styles.container}>
      <View style={styles.titleContainer} >
      <TouchableOpacity onPress={handleBack}>
        <AntDesign name="left" size={24} color="black"  /> 
        </TouchableOpacity> 
        <Text style ={styles.title}> Preorder Meal </Text>
        <TouchableOpacity onPress={handleBack}>
        <MaterialIcons name="home" size={24} color="black" style={styles.homeIcons} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Choose your in-flight meal!</Text>
      <Text>  Are you travelling on business class and want to maximize your pleasure with various meal options?
      </Text>
      <Text style={styles.name}>Enter your booking reference (reservation code) and last name to check if your booking is eligible.</Text>

      <Text>Please note that meals will be served if:</Text>
      <Text style={styles.value}> <Entypo name="dot-single" size={24} color="black" />
        Flight is operated and marketed by Ethiopian </Text>
      <Text>       Airlines. </Text>
      <Text> <Entypo name="dot-single" size={24} color="black" /> Pre-ordered between 6 months and 92 hours</Text>
      <Text>         Prior to the departure time. </Text>
      <Text style={styles.data}>  <Entypo name="dot-single" size={24} color="black" />
        Flight is a business class.</Text>
      
      <View style={styles.groupBox}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={bookingRef}
          onChangeText={setBookingRef}
          placeholder="Booking Reference"
        />
      </View>

      <View style={styles.borderLine} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last/Sur Name*"
        />
      </View>

      <View style={styles.borderLine}/>
      <View style={styles.borderLine}/>

      <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    paddingHorizontal: 10,
    paddingVertical: 60,
  },
  title: {
    fontSize: 20,
    backgroundColor: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'center',
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    marginHorizontal: -50,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
  },
  name: {
    marginBottom: 15,
  },
  data: {
    marginBottom: 15,
  },
  groupBox: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 15,
  },

  borderLine: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#ccc',
    borderRadius: 5,
    lineheight: 10,
    borderLeftWidth: 5,
    marginBottom: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 15,
    fontWeight: 'normal',
    paddingLeft: 0.5,
    height: 40,
    marginBottom: 1,
  },
  searchButton: {
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 18,
    paddingLeft: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 5,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#000',
  },
});

const TopTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Preorder Meal" component={PreorderMealScreen} />
      </Tab.Navigator>
    );
  };

export default PreorderMeals;