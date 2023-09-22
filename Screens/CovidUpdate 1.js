import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CovidUpdate = () => {
    const navigation = useNavigation();
    const handleNavigationBack = () => {
        navigation.goBack(); // This will navigate back to the previous screen (home screen)
      };

  const [isCardExpanded, setCardExpanded] = useState(false);

  const handleCardPress = () => {
    setCardExpanded(!isCardExpanded);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={handleNavigationBack}>
            <Ionicons name="arrow-back" size={24} color="black" style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.title}>COVID-19 UPDATE</Text>
          <TouchableOpacity>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navigationBar}>
          {/* Go Back Button */}
        </View>
        <View style={styles.customsBar}>
          <View style={styles.customsBarIcon}>
            <Ionicons name="information-circle-outline" size={20} color="black" style={styles.customsBarIcon} />
          </View>
          <Text style={styles.customsText}>Ethiopian Customs Regulation</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/mainlogo.png')} style={styles.logo} />
            <TouchableOpacity>
              <Ionicons name="search" size={28} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="notifications" size={28} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="earth-outline" size={28} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="people" size={28} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="menu" size={28} color="black" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/mainlogo.png')} style={styles.photo} />
          <Text style={styles.boldTitle}>The safety, security, and good health of our passengers and employees are our highest priority.</Text>
          <Text style={styles.infoText}>
            Prioritizing the safety and wellbeing of our passengers and employees as we usually do, we have unveiled a newly designed airport terminal with biosafety and biosecurity in mind.
            Guests are well taken care of onboard and at the terminal with the latest aviation infrastructure.
          </Text>
          <TouchableOpacity onPress={handleCardPress} style={[styles.card, isCardExpanded && styles.cardExpanded]}>
            <Text style={styles.cardHeader}>Travel Alert</Text>
            {isCardExpanded && (
              <Text style={styles.cardText}>Immigration and entry restrictions operational flight</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    marginRight: 10,
    fontSize: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  cancelButton: {
    fontSize: 18,
    color: 'black',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  customsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  customsBarIcon: {
    marginRight: 8,
  },
  customsText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  icon: {
    marginLeft: 10,
  },
  photo: {
    width: 500,
    height: 70,
    resizeMode: 'cover',
    marginTop: 20,
  },
  boldTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  infoText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
    width: '100%',
    borderWidth: 2,
    borderColor: 'green',
  },
  cardExpanded: {
    paddingBottom: 20,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
  },
});

export default CovidUpdate;
