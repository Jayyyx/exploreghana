import React, { useState } from 'react';
import { Image, TouchableOpacity, Modal, StyleSheet, Text, View, Animated, Dimensions, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WelcomeScreen = ({ navigation }) => {
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [searchText, setSearchText] = useState('');
  const { height: windowHeight } = Dimensions.get('window');
  const drawerHeight = windowHeight * 0.8; // Adjust the percentage as desired

  const handleConfirm = () => {
    if (selectedLanguage) {
      // Language selected, navigate to Home screen
      navigation.reset({ routes: [{ name: 'TouchButtons' }] });
    } else {
      // No language selected, show error or prompt the user to select a language
    }
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageModalVisible(false);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filterLanguages = () => {
    return languages.filter((language) =>
      language.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

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

  const filteredLanguages = filterLanguages();

  const showLanguageModal = () => {
    setLanguageModalVisible(true);
  };

  const hideLanguageModal = () => {
    setLanguageModalVisible(false);
  };

  const handleCancel = () => {
    hideLanguageModal();
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.imageContainer}>
        <Image source={require('../assets/mainlogo.png')} style={styles.image} />
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>
        We need to confirm some details in order to provide you the best experience!
      </Text>
      <TouchableOpacity style={styles.dropdownButton} onPress={showLanguageModal}>
        <Ionicons name="globe-outline" size={20} color="#000" style={styles.globeIcon} />
        <Text style={styles.selectedOptionText}>{selectedLanguage}</Text>
        <Ionicons name="chevron-down" size={20} color="#000" style={styles.arrowIcon} />
      </TouchableOpacity>

      <Modal visible={isLanguageModalVisible} transparent>
        <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={hideLanguageModal}>
          <Animated.View style={[styles.drawer, { height: drawerHeight }]}>
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

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  dropdownButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
    width: 250, // Adjust the width as desired
  },
  selectedOptionText: {
    fontSize: 16,
    marginRight: 10,
    flex: 1,
    color: '#000',
  },
  arrowIcon: {
    marginLeft: 'auto',
    color: '#000',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    width: '100%',
    backgroundColor: '#FFF', // Changed to white (#FFF)
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    overflow: 'hidden',
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
    color:'black'
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
  globeIcon: {
    marginRight: 10,
    color: '#000',
  },
});

export default WelcomeScreen;
