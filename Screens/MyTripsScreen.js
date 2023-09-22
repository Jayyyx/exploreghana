import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AddReservation from './AddReservation'; // Import the AddReservation component


const MyTripsScreen = ({  }) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Past');
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };
  const handleAddReservation = () => {
    navigation.navigate('AddReservation'); // Navigate to the AddReservation screen
  };

  const handleBook = () => {
    navigation.navigate('Book')
  };

  const handleRefresh = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>My Trip</Text>
      </View>
      <View style={styles.pageContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Past' && styles.activeTabButton]}
            onPress={() => handleTabPress('Past')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'Past' && styles.activeTabText]}>
              Past
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Upcoming' && styles.activeTabButton]}
            onPress={() => handleTabPress('Upcoming')}
          >
            <Text style={[styles.tabButtonText, activeTab === 'Upcoming' && styles.activeTabText]}>
              Upcoming
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'Past' && (
          <View style={styles.refreshtab}>
            <Text>Refreshed just now</Text>
            <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
              <Text style={styles.refreshButtonText}>
                Refresh
                <Text style={styles.cycleButtonText}>↻</Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'Past' && (
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/aeroplane.jpeg')}
              style={styles.image}
              resizeMode="stretch"
            />
            <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'Upcoming' && (
          <View style={styles.refreshtab}>
            <Text>Refreshed just now</Text>
            <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
              <Text style={styles.refreshButtonText}>
                Refresh
                <Text style={styles.cycleButtonText}>↻</Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === 'Upcoming' && (
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/aeroplane.jpeg')}
              style={styles.image}
              resizeMode="stretch"
            />
             <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={handleAddReservation}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  refreshtab: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'lightgray',
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    alignContent: 'flex-end',
    height: 40,
    top: -10,
  },
  refreshButton: {
    marginLeft: 'auto',
    alignContent: 'flex-end',
    bottom: 1,
  },
  refreshButtonText: {
    color: 'lightgray',
    alignContent: 'flex-end',
  },
  cycleButtonText: {
    color: 'lightgray',
    fontSize: 18,
    marginRight: 5,
    top: 5,
  },
  topBarText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    top: 30,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: 'space-evenly',
  },
  tabButton: {
    backgroundColor: 'lightgrey', // Updated style
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  activeTabButton: {
    backgroundColor: 'white', // Updated style
    borderWidth: 1,
    height: 55,
    borderColor: 'lightgrey',
    alignContent: 'space-between',
  },
  tabButtonText: {
    top: 10,
    color: 'black',
  },
  activeTabText: {
    color: 'green',
  },
  pageContainer: {
    backgroundColor: '#EEEEEE',
    padding: 10,
    flex: 1,
    marginBottom: 20,
  },
  imageContainer: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderBottomColor: 'lightgrey',
    borderColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    flex: 1,
    bottom: 10,
    marginBottom: 40,
    height: Dimensions.get('window').height * 0.3,
  },
  image: {
    width: '100%',
    height: '125%',
    marginTop: -75,
  },
  bookButton: {
    backgroundColor: 'blue',
    padding: 15,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginTop: -215,
    marginLeft: -215,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 30,
    position: 'absolute',
    bottom: -60,
    right: 10,
  },
});

export default MyTripsScreen;
