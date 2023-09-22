import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Switch} from 'react-native'
import OneWay from './OneWay'
import RoundTrip from './RoundTrip'
import MultiCity from './MultiCity'

function Booking() {
    const [isOneWay, setIsOneWay] = useState(true)
    const [isRoundTrip, setIsRoundTrip] = useState(false)
    const [isMultiCity, setIsMultiCity] = useState(false)

    const [isEnabled, setIsEnabled] =useState(false)

    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState)
    }

    const oneWayFunc = () => {
      setIsOneWay(true)
      setIsRoundTrip(false)
      setIsMultiCity(false)
    }

    const roundTripFunc = () => {
      setIsOneWay(false)
      setIsRoundTrip(true)
      setIsMultiCity(false)
    }

    const multiCityFunc = () => {
      setIsOneWay(false)
      setIsRoundTrip(false)
      setIsMultiCity(true)
    }
  return (
    <View>
          <View style={styles.header}>
          <Text style={styles.headerText}>Book a Flight</Text>
    </View>
        <View style={styles.tripType}>
          <TouchableOpacity 
            style={[styles.tripBtn, isOneWay && styles.activeBtn]}
            onPress={oneWayFunc}>
            <Text style={styles.tripText}>One Way</Text> 
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tripBtn, isRoundTrip && styles.activeBtn]}
            onPress={roundTripFunc}>
            <Text style={styles.tripText}>Round Trip</Text> 
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tripBtn, isMultiCity && styles.activeBtn]}
            onPress={multiCityFunc}>
            <Text style={styles.tripText}>Multi City</Text> 
          </TouchableOpacity>

        </View>
        {isOneWay && <OneWay />}
        {isRoundTrip && <RoundTrip />}
        {isMultiCity && <MultiCity />}

        <View style={styles.contain}>

          

          <TouchableOpacity style={styles.box}>
            <Text style={styles.passengerText}>1 passenger in</Text>
            <Text style={styles.passengerText}>Economy/Business</Text>
          </TouchableOpacity>

          <View style={styles.boxPayMiles}>
            <Text style={styles.milesText}>Pay with miles</Text>
            <Switch 
            trackColor={{false: '#767577', true: 'green'}} 
            thumbColor={'white'} 
            onValueChange={toggleSwitch}
            value={isEnabled}/>
          </View>
        </View>

        <TouchableOpacity style={styles.search}>
          <Text style={styles.searchText}>Search Flights</Text>
        </TouchableOpacity>
    </View>

)
}

export default Booking

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        backgroundColor: 'white',
        borderBottomColor: 'black',
      },
      headerText: {
        fontSize: 24,
        paddingLeft: 10,
        fontWeight: 600, 
        paddingBottom: 10, 
      },
      tripType:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        marginVertical: 20, 
      },
      tripBtn: {
        padding: 14,
        borderRadius: 10,
        backgroundColor: 'white',
      },
      tripText: {
        fontSize: 19,
        fontWeight: 500,
      },
      activeBtn: {
        elevation: 15,
      },
      contain: {
        marginTop: 20,
        marginHorizontal: 20,
      },
      boxPayMiles: {
        backgroundColor: 'white',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
      },
      box: {
        backgroundColor: 'white',
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      
      passengerText: {
        textAlign: 'center',
        fontSize: 18,
      },
      search: {
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: 'orange',
        marginHorizontal: 20,
        marginTop: 20,
      },
      searchText: {
        fontWeight: 600,
        textAlign: 'center',
      }
}) 