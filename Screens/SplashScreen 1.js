import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('WelcomeScreen'); // Navigate to the next page after a given time (e.g., 5 seconds)
    }, 5000);

    // Zoom out animation
    Animated.timing(scaleValue, {
      toValue: 0.8,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    return () => {
      clearTimeout(timer); // Clean up the timer when the component unmounts
      scaleValue.stopAnimation(); // Stop the animation when the component unmounts
    };
  }, [navigation, scaleValue]);

  return (
    <View style={styles.container}>
      <Text></Text>
      <Animated.Image
        source={require('../assets/mainlogo.png')}
        style={[styles.image, { transform: [{ scale: scaleValue }] }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8,
  },
});

export default SplashScreen;
