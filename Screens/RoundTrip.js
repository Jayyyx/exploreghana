import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FromTo from './FromTo'

export default function RoundTrip() {
  return (
    <View>

        <View style={styles.toFrom}>
            <FromTo  where={'From'}/>
            <FromTo where={"To"} />
        </View>

        <View style={styles.datesContainer}>
      <TouchableOpacity style={styles.date}>
            <Text style={styles.dateText}>Departure date</Text>
            <Text style={styles.dateText}>Select Date</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.date}>
            <Text style={styles.dateText}>Departure date</Text>
            <Text style={styles.dateText}>Select Date</Text>
      </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    datesContainer: {
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop: 20,
        marginHorizontal: 20,
    },
    date: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 10,
    },
    dateText: {
        textAlign: 'center',
        opacity: 0.3,
    },
    toFrom: {
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },

})