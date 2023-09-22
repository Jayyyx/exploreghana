import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import FromTo from './FromTo'
import { TouchableOpacity } from 'react-native-gesture-handler'


const OneWay = () => {

  return (
    <View style={styles.container}>
      <View style={styles.toFrom}>
        <FromTo  where={'From'}/>
        <FromTo where={"To"} />
      </View>

      <TouchableOpacity style={styles.box}>
            <Text style={styles.dateText}>Departure date</Text>
            <Text style={styles.dateText}>Select Date</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OneWay

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  }, 
  toFrom: {
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },
  box: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  dateText: {
    textAlign: 'center',
    opacity: 0.4,
  },

})
