import React, { useRef, useState, useEffect } from 'react';
import { ImageBackground, TextInput, StyleSheet, View, Animated, Dimensions, TouchableOpacity, Text, ScrollView, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerContentScreen from './DrawerContentScreen';
import { Ionicons } from '@expo/vector-icons';
import Drawer from './Drawer';
import EnterDepartureModal from './EnterDepartureModal';
import EnterDestinationModal from './EnterDestinationModal';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const [isDepartureModalVisible, setDepartureModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);


  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    console.log('Menu Item Pressed!');
    navigation.navigate('Drawer')
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSaveDestination = (destination) => {
    setSelectedDestination(destination);
    closeModal();
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleOpenDepartureModal = () => {
    setDepartureModalVisible(true);
  };

  const handleSaveDeparture = (selectedDeparture) => {
    // Do something with the selected departure (e.g., save it in a state)
    console.log('Selected Departure:', selectedDeparture);
    // Close the modal after handling the selected departure
    setDepartureModalVisible(false);
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    scrollY.setValue(offsetY);
  };

  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [searchText, setSearchText] = useState('');

  
  const languages = [
    { name: 'English', acronym: 'EN' },
    { name: 'FranÃ§ais', acronym: 'FR' },
    { name: 'EspaÃ±ol', acronym: 'ES' },
    { name: 'Deutsch', acronym: 'DE' },
    { name: 'Italiano', acronym: 'IT' },
    { name: 'æ—¥æœ¬èªž', acronym: 'JA' },
    { name: 'PortuguÃªs', acronym: 'PT' },
    { name: 'Ø¹Ø±Ø¨Ù‰', acronym: 'AR' },
    { name: 'ä¸­æ–‡', acronym: 'ZH' },
    { name: 'áŠ áˆ›áˆ­áŠ›', acronym: 'AM' },
    { name: 'Oromo', acronym: 'OM' },
    { name: 'á‰µáŒáˆ­áŠ›', acronym: 'TI' },
    { name: 'Soomaali', acronym: 'SO' },
    { name: 'à¹„à¸—à¸¢', acronym: 'TH' },
    { name: 'í•œêµ­ì–´', acronym: 'KO' },
    { name: 'Ñ€ÑƒÑÑÐºÐ¸Ð¹', acronym: 'RU' },
  ];

  const filterLanguages = () => {
    return languages.filter((language) =>
      language.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const [filteredLanguages, setFilteredLanguages] = useState(filterLanguages());

  const handleSearch = (text) => {
    setSearchText(text);
    setFilteredLanguages(filterLanguages())
  };

  const showLanguageModal = () => {
    setLanguageModalVisible(true);
  };

  const hideLanguageModal = () => {
    setLanguageModalVisible(false);
  };

  const handleCancel = () => {
    hideLanguageModal();
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageModalVisible(false);
  };

  const handleSearchFlights = () => {
    navigation.navigate('Book');
  };

  const handleNotifications = () => {
    console.log('Notification icon pressed!');
    navigation.navigate('Notificationhandle');
  };

  const drawerHeight = '50%';
  const drawerHeight1 = '70%';


  return (
    <ImageBackground source={require('../assets/cloud.png')} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>

      <TouchableOpacity style={styles.hamburgerIcon} onPress={toggleDrawer}>
      <Ionicons name="menu-outline" size={25} color="black" />
    </TouchableOpacity>


    <Drawer isVisible={isDrawerVisible}/>

        <Image source={require('../assets/mainlogo.png')} style={styles.logo} />

      <TouchableOpacity style={styles.notificationIcon} onPress={handleNotifications}>
          <Ionicons name='notifications-outline' size={25} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.globeIcon} onPress={showLanguageModal}>
        <Ionicons name="globe-outline" size={25} color="black" />
        {/*<Text style={styles.selectedOptionText}>{selectedLanguage}</Text>*/}
         <Text style={styles.globeIconText}>EN</Text>
        </TouchableOpacity>
       
      </View>

      <Modal visible={isLanguageModalVisible} transparent>
        <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={hideLanguageModal}>
          <Animated.View style={[styles.drawer1, { height: drawerHeight1 }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.drawerTitle}>Select Language</Text>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <Ionicons name="close" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search language"
                value={searchText}
                onChangeText={handleSearch}
              />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {filteredLanguages.length === 0 ? (
                <Text style={styles.noResultsText}>No matching languages found.</Text>
              ) : (
                filteredLanguages.map((language, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionItem}
                    onPress={() => handleLanguageSelect(language.name)}
                  >
                    <View style={styles.optionContent}>
                      <Text style={styles.optionText}>{language.name}</Text>
                      <Text style={styles.optionAcronym}>{language.acronym}</Text>
                    </View>
                    {index < filteredLanguages.length - 1 && <View style={styles.separator} />}
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </Animated.View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Search Flights</Text>
        <View style={styles.textBoxContainer}>
                  <TouchableOpacity onPress={handleOpenDepartureModal}>
        <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>From</Text>
            <Text style={styles.cardText}>ACC</Text>
            <Text style={styles.cardSubText}>Accra, GH</Text>
          </View>
          </TouchableOpacity>

          <EnterDepartureModal
        isVisible={isDepartureModalVisible}
        onClose={() => setDepartureModalVisible(false)}
        onSave={handleSaveDeparture}
      />

          <TouchableOpacity style={styles.swapIcon} onPress={() => {}}>
          <Ionicons name="swap-horizontal-outline" size={25} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity onPress={openModal}>
        <View style={styles.cardContainer}>
            <Text style={styles.cardLabel}>To</Text>
            <Text style={styles.cardText}>ATL</Text>
            <Text style={styles.cardSubText}>Atlanta, US</Text>
          </View>
          </TouchableOpacity>

          <EnterDestinationModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSave={handleSaveDestination}
      />

      {/* Display the selected destination */}
      
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSearchFlights}>
          <Text style={styles.buttonText}>Search Flights</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.drawer, { height: drawerHeight }]}>
        <ScrollView
          contentContainerStyle={styles.drawerContent}
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={2}
        >
          {/* Show the DrawerContentScreen directly */}
          <DrawerContentScreen navigation={navigation}/>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  cardContainer: {
    alignItems: 'center',
    width: 160,
    marginTop: 110,
    height: 140,
    margin: 10,
    padding: 16,
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  cardLabel: {
    marginLeft: 8,
    marginBottom: 20,
    fontSize: 15,
  },
  cardText: {
    marginLeft: 8,
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 30,
  },
  cardSubText: {
    marginLeft: 8,
    fontSize: 15,
  },
  hamburgerDrawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'white',
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
  optionItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  optionAcronym: {
    fontSize: 16,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
    color: '#000',
  },
  searchInput: {
    flex: 1,
    height: 36,
    fontSize: 16,
    color: '#000',
  },
  noResultsText: {
    padding: 16,
    textAlign: 'center',
    color: '#000',
  },
  drawerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  cancelButton: {
    padding: 5,
    color:'black'
  },
  drawer1: {
    width: '100%',
    backgroundColor: '#FFF', // Changed to white (#FFF)
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  globeIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  globeIconText: {
    fontSize: 16,
    color: 'black',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },
  hamburgerIcon: {
    marginRight: 50,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -550,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: -20,
    marginBottom: 35,
  },
  swapIcon: {
    marginTop: 65,
  },
  textBox: {
    flex: 1,
    height: 120,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    paddingHorizontal: 5,
    marginRight: 10,
    marginTop: -90,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 1,
    marginTop: -15,
    marginLeft: -180,
  },
  textBoxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'stretch',

  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: -50,
    paddingHorizontal: 90,
    marginTop: -70,
    marginBottom: 500,
    
  },
 
  drawerToggleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  drawer: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  notificationIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingLeft: 50,
    marginRight: 20,
  },
  drawerContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  drawerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;