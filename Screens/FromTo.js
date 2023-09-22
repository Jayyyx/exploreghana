import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import EnterDepartureModal from './EnterDepartureModal'; 
import EnterDestinationModal from './EnterDestinationModal';

import { useRef, useCallback } from 'react';

const FromTo = (props) => {

    const [isDepartureModalVisible, setDepartureModalVisible] = useState(false);
  const [isDestinationModalVisible, setDestinationModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSaveDeparture = (selectedDeparture) => {
    // Do something with the selected departure (e.g., save it in a state)
    console.log('Selected Departure:', selectedDeparture);
    // Close the modal after handling the selected departure
    setDepartureModalVisible(false);
  };

  const handleSaveDestination = (destination) => {
    setSelectedDestination(destination);
    closeModal();
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // ... (existing code)

  // Function to show the departure modal
  const handleOpenDepartureModal = () => {
    setDepartureModalVisible(true);
  };

  // Function to show the destination modal
  const handleOpenDestinationModal = () => {
    setDestinationModalVisible(true);
  };


  return (
    <View>
        <View>
            <TouchableOpacity style={styles.container} onPress={handleOpenDepartureModal}>
            <Text style={styles.from}>{props.where}</Text>
            <Text style={styles.TownAbrv}>ACC</Text>
            <View style={styles.line} />
            <Text style={styles.TownCountry}>Accra , Gh</Text>
            </TouchableOpacity>

        </View>
        
        <EnterDepartureModal
          isVisible={isDepartureModalVisible}
          onClose={() => setDepartureModalVisible(false)}
            onSave={handleSaveDeparture}
        />

<EnterDestinationModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSave={handleSaveDestination}
      />
       
    </View>
    
  )
}

export default FromTo

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 160,
        borderRadius: 10,
        backgroundColor:'white',
    },
    from: {
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 4,
    },
    TownAbrv: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
    },
    line: {
        height: 1,
        marginTop: 3, 
        backgroundColor: 'grey',
        opacity: 0.4,
    },
    TownCountry: {
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 3
    }
})