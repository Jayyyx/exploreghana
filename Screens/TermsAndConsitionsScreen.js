import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const TermsAndConditionsScreen = ({ navigation }) => {
  // Sample terms and conditions topics
  const termsAndConditionsTopics = [
    'Acceptance of Terms',
    'Use License',
    'User Account',
    'User Content',
    'Prohibited Activities',
    'Intellectual Property Rights',
    'Third-Party Links',
    'Termination',
    'Governing Law',
    'Changes to Terms and Conditions',
    'Contact Us',
  ];

  const handleTopicPress = (topic) => {
    console.log('Topic pressed:', topic); // Replace this with your desired action
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Terms and Conditions</Text>
      </View>
      <View style={styles.content}>
        {termsAndConditionsTopics.map((topic, index) => (
          <TouchableOpacity
            key={index}
            style={styles.topicContainer}
            onPress={() => handleTopicPress(topic)}
          >
            <Text style={styles.topic}>{topic}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    padding: 20,
  },
  topicContainer: {
    marginBottom: 10,
  },
  topic: {
    fontSize: 16,
  },
});

export default TermsAndConditionsScreen;
