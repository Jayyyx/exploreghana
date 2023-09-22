import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RefundScreen = ({ navigation }) => {
  const handleBackIconPress = () => {
    // Navigate back to the home screen
    navigation.goBack();
  };

  const handleCancelTextPress = () => {
    // Navigate back to the home screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackIconPress}>
          <Ionicons name="arrow-back" size={25} color="#555" />
        </TouchableOpacity>
        <Text style={styles.header1}>Exchange/Refund</Text>
        <TouchableOpacity onPress={handleCancelTextPress}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text>This is the RefundScreen</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header1: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: 'red',
    fontSize: 18,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default RefundScreen;
