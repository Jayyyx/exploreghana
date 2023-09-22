import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
  const handleAllowNotifications = () => {
    // Navigate to the home screen
    navigation.navigate('BottomNavigation');
  };

  return (
    <View style={styles.container}>
    <Image source={require('../assets/notifications.jpg')} style={styles.image} />
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.message}>Allow Ethiopian Airlines To Send You Personalised Notification.
      You can turn off this function anytime in the menu.</Text>
      <TouchableOpacity style={styles.button} onPress={handleAllowNotifications}>
        <Text style={styles.buttonText}>Allow Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAllowNotifications}>
        <Text style={styles.dontAllowText}>Don't Allow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 8,
    marginBottom: 40,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  dontAllowText: {
    fontSize: 16,
    color: '#3CB043',
    
  },
});

export default NotificationsScreen;