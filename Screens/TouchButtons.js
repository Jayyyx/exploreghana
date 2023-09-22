import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const pics = [
  require('../assets/introPic1.jpeg'),
  require('../assets/introPic2.jpeg'),
  require('../assets/introPic3.jpeg'),
];

const TouchButtons = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % pics.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + pics.length) % pics.length);
  };

  const handleSkip = () => {
    navigation.navigate('PrivacyPolicyScreen');
  };

  const handleClose = () => {
    navigation.navigate('PrivacyPolicyScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={pics[index]} style={styles.backgroundImage} />
      
      {index === 0 && (
        
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
      {index === 1 && (
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
      {index === 2 && (
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      )}
      <View style={styles.bottomBar}>
        <View style={styles.leftButton}>
          {index > 0 && (
            <TouchableOpacity onPress={handlePrev}>
              <AntDesign name="left" size={24} color="black" style={styles.arrow} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.pageIndicator}>
          {pics.map((_, i) => (
            <View
              key={i}
              style={[
                styles.pageIndicatorDot,
                i === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
        <View style={styles.rightButton}>
          {index < pics.length - 1 && (
            <TouchableOpacity onPress={handleNext}>
              <AntDesign name="right" size={24} color="black" style={styles.arrow} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.roundedbottombar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor:'white'
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    right: 10,
    width: '100%',
    height: '100%',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
    left: 0,
    right: 0,
    height: 100,
    paddingHorizontal: 20,
  },
  leftButton: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  roundedbottombar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: -20,
    right: -90,
    height: 150,
    width: '118%',
    backgroundColor: 'mediumseagreen',
    paddingHorizontal: 20,
    borderTopLeftRadius: 500000,
    borderTopRightRadius: 500000,
    overflow: 'hidden',
  },
  arrow: {
    padding: 10,
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center', // Align indicators horizontally
    alignItems: 'center',
    marginTop: 10,
  },
  pageIndicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    marginHorizontal: 4,
    bottom:9.5
  },
  activeDot: {
    backgroundColor: 'black',
  },
});

export default TouchButtons;
