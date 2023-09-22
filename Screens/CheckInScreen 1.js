import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Modal, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const CheckInScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState('My Trips');
  const [frequentFlightProgram, setFrequentFlightProgram] = useState('');
  const [showFlightPrograms, setShowFlightPrograms] = useState(false);
  const [selectedFlightProgram, setSelectedFlightProgram] = useState('Frequent Flyer Program');
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const modalHeight = useRef(new Animated.Value(0)).current;
  const [filteredFlightPrograms, setFilteredFlightPrograms] = useState([]);

  const flightPrograms = [
    'ShebaMiles (ET)',
    'Aeroplan (AC)',
    'Airports (NZ)',
    'ANA Mileage Club (NH)',
    'Asiana Club (OZ)',
    'ASKY Club (KP)',
    'Connect Miles (CM)',
    'EgyptAir Plus (MS)',
    'EuroBonus (SK)',
    'FLying Returns (AI)',
    'Infinity MileageLands (BR)',
    'KrisFlyer (SQ)',
    'LifeMiles (AV)',
    'MileagePlus (UA)',
    'Miles & Bonus (A3)',
    'Miles & More (LH)',
    'Miles & Smiles (TK)',
    'PhoenixMiles (CA)',
    'Royal Orchid Plus (TG)',
    'TAP mILES&gO',
    'Voyager (SA)',
  ];

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearchFlights = () => {
    navigation.navigate('BookFlightScreen');
  };

  const handleMyTrips = () => {
    navigation.navigate('MyTrips');
  };

  const handleCheckIn = () => {
    navigation.navigate('CheckIn');
  };

  const handleHomeButton = () => {
    if (route.name !== 'Home') {
      navigation.navigate('Home');
    }
  };

  const handleFrequentFlightProgramPress = () => {
    setShowFlightPrograms(true);
    Animated.timing(modalHeight, {
      toValue: Dimensions.get('window').height * 0.6,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setFrequentFlightProgram('#000');
  };

  const handleFlightProgramSelect = (program) => {
    setSelectedFlightProgram(program);
    setShowFlightPrograms(false);
  };

  const closeModal = () => {
    Animated.timing(modalHeight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setShowFlightPrograms(false));
  };

  const handleRefresh = () => {
    setRefreshFlag(!refreshFlag);
  };

  useEffect(() => {
    // Perform data fetching or refreshing logic here
    // This effect will be triggered when the refreshFlag changes

    // Example: Fetch fresh data from an API or update the state
    // with new data to refresh the screen
  }, [refreshFlag]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    filterFlightPrograms(query);
  };

  const filterFlightPrograms = (query) => {
    const filteredPrograms = flightPrograms.filter((program) =>
      program.toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredFlightPrograms(filteredPrograms);
  };

  const handleCancel = () => {
    closeModal();
  };

  useEffect(() => {
    // Set the initial list of flight programs
    setFilteredFlightPrograms(flightPrograms);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Check-in</Text>
      </View>
      <View style={styles.pageContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'My Trips' ? styles.activeTabButton : null,
            ]}
            onPress={() => handleTabPress('My Trips')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'My Trips' && styles.activeTabText,
              ]}
            >
              My Trips
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Any Flight' ? styles.activeTabButton : null,
            ]}
            onPress={() => handleTabPress('Any Flight')}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Any Flight' && styles.activeTabText,
              ]}
            >
              Any Flight
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Frequent Flyer' ? styles.activeTabButton : null,
            ]}
            onPress={() => handleTabPress('Frequent Flyer')}
          >
            <Text
              style={[
                styles.tabButtonText,
                { top: 5 },
                activeTab === 'Frequent Flyer' && styles.activeTabText,
              ]}
            >
              {'Frequent \n Flyer'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabBarchecks}>
          <Text style={styles.checkInEligibilityText}>Check-in Eligibility</Text>
        </View>
        <View style={styles.tabBarchecks}>
          <Text style={styles.checkInInfoText}>
            Check-In starts 72 hours before departure and ends 2 hours before departure
          </Text>
        </View>
        {activeTab === 'My Trips' && (
          <View style={styles.refreshtab}>
            <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
              <Text style={styles.refreshButtonText}>
                Refresh
                <TouchableOpacity style={styles.cycleButton}>
                  <Text style={styles.cycleButtonText}>â†»</Text>
                </TouchableOpacity>
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {activeTab === 'My Trips' && (
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/aeroplane.jpeg')}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
        )}
        {activeTab === 'Any Flight' && (
          <>
            <View style={[styles.formContainer, { backgroundColor: 'white' }]}>
              <Text style={styles.formLabel}>
                Reference Number is the six-digit alphabet code on your booking confirmation
              </Text>
              <Text style={[styles.formLabel, styles.lineText]}>
                Your ticket number is a 13-digit number
              </Text>
              <View style={styles.formField}>
                
                <TextInput
                  style={styles.formFieldInput}
                  placeholder="Booking Reference or Ticket Number"
                  placeholderTextColor="#999"
                  multiline={false}
                />
                <View style={styles.formFieldLine} />
              </View>
              <View style={styles.formField}>
                
                <TextInput
                  style={styles.formFieldInput}
                  placeholder="Last/Sur Name"
                  placeholderTextColor="#999"
                  multiline={false}
                />
                <View style={styles.formFieldLine} />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {activeTab === 'Frequent Flyer' && (
          <>
            <View style={[styles.formContainer, { backgroundColor: 'white' }]}>
              <View style={styles.formField}>
                
                <TouchableOpacity
                  style={styles.frequentFlightProgramInput}
                  onPress={handleFrequentFlightProgramPress}
                >
                  <Text
                    style={[
                      styles.frequentFlightProgramText,
                      selectedFlightProgram ? { color: '#000' } : null,
                    ]}
                  >
                    {selectedFlightProgram || 'Select Flight Program'}
                  </Text>
                </TouchableOpacity>
                <View style={styles.formFieldLine} />
              </View>
              <View style={styles.formField}>
                
                <TextInput
                  style={styles.formFieldInput}
                  placeholder="Frequent Flyer Number"
                  placeholderTextColor="#999"
                  multiline={false}
                />
                <View style={styles.formFieldLine} />
              </View>
              <View style={styles.formField}>
               
                <TextInput
                  style={styles.formFieldInput}
                  placeholder="Enter Last/Sur Name"
                  placeholderTextColor="#999"
                  multiline={false}
                />
                <View style={styles.formFieldLine} />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <Modal visible={showFlightPrograms} transparent animationType="fade">
          <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={closeModal} />
          <Animated.View style={[styles.modalContainer, { height: modalHeight }]}>
            <View style={styles.flightProgramsContainer}>
              {/* Search Bar */}
              <View style={styles.modalHeader}>
                <Text style={styles.drawerTitle}>Loyalty Program</Text>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                  <Ionicons name="close" size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor="#999"
                  value={searchQuery}
                  onChangeText={handleSearchQueryChange}
                />
              </View>
              {/* Flight Program List */}
              <ScrollView showsVerticalScrollIndicator={false}>
                {filteredFlightPrograms.length === 0 && (
                  <Text style={styles.noMatchesText}>No matches found</Text>
                )}
                {filteredFlightPrograms.map((program) => (
                  <TouchableOpacity
                    key={program}
                    style={styles.flightProgramItem}
                    onPress={() => handleFlightProgramSelect(program)}
                  >
                    <Text style={styles.flightProgramItemText}>{program}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </Animated.View>
        </Modal>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  errorMessage: {
    color: 'red',
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
  cycleButton: {
    flexDirection: 'row',
    marginLeft: 5,
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
    justifyContent: 'space-between',
  },
  tabBarchecks: {
    flexDirection: 'row',

    backgroundColor: 'transparent',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: 'transparent', // Added style
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
  checkInEligibilityText: {
    fontWeight: 'bold',
    fontSize: 16,
    top: 10,
  },
  checkInInfoText: {
    fontSize: 14,
    top: -10,
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
    height: '100%',
  },
  formContainer: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  formLabel: {
    marginBottom: 5,
  },
  formField: {
    marginBottom: 10,
  },
  lineText: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 5,
  },
  formFieldLabel: {
    marginBottom: 5,
  },
  formFieldInput: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  formFieldLine: {
    height: 1,
    backgroundColor: '#ccc',
  },
  continueButton: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    height: 50,
    justifyContent:'center',
    bottom: 40
  },
  continueButtonText: {
    color: 'black',
  },
  frequentFlightProgramInput: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    justifyContent: 'center',
  },
  frequentFlightProgramText: {
    color: '#999',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  flightProgramsContainer: {
    paddingHorizontal: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  drawerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  cancelButton: {
    padding: 5,
    color: 'black',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  flightProgramItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  flightProgramItemText: {
    fontSize: 16,
    color: 'black',
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CheckInScreen;
