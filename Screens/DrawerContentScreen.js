import React, { useState } from 'react'; // Import useState
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground, navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Modal from 'react-native-modal'; // Import the Modal component
import LoginDrawer from './LoginDrawer';


const DrawerContentScreen = () => {

    const navigation = useNavigation(); // Use useNavigation hook

    const [isLoginDrawerVisible, setLoginDrawerVisible] = useState(false);
    const [membershipID, setMembershipID] = useState('');
    const [password, setPassword] = useState('');
    const [membershipIDError, setMembershipIDError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

    const toggleLoginDrawer = () => {
      setLoginDrawerVisible(!isLoginDrawerVisible);
    };

    const handleShebaMiles = () => {
      navigation.navigate('JoinShebaMilesScreen')
    };

    const handleVirtualTour = () => {
      navigation.navigate('VirtualTourScreen')
    };

    const handleFrankfurt = () => {
      navigation.navigate('FrankfurtScreen')
    };

    const handleIstanbul = () => {
      navigation.navigate('IstanbulScreen')
    };

    const handleBangkok = () => {
      navigation.navigate('BangkokSuvarnabhumiScreen')
    };

    const handleDubai = () => {
      navigation.navigate('DubaiScreen')
    };

    const handleNairobi = () => {
      navigation.navigate('NairobiScreen')
    };

    const handleViewMore = () => {
      navigation.navigate('CheapestFaresScreen')
    };
  

  const handleToggleKeepLoggedIn = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

      const handleBookFlight = () => {
        navigation.navigate('BookFlight');
      };

      const handleFlight = () => {
        navigation.navigate('FlightPassScreen');
      };

      const handleTours = () => {
        navigation.navigate('ToursAndActivitiesScreen');
      };

      const handleTerminal = () => {
        navigation.navigate('TerminalHotelScreen');
      };

      const handleSheba = () => {
        navigation.navigate("ShebaDutyFreeScreen")
      };

      const [loginSuccess, setLoginSuccess] = useState(false);
      const handleLogin = () => {
        // Perform validation here before login
        if (membershipID.trim() === '') {
          setMembershipIDError(true);
        } else {
          setMembershipIDError(false);
        }
    
        if (password.trim() === '') {
          setPasswordError(true);
        } else {
          setPasswordError(false);
        }
    
        if (membershipID.trim() !== '' && password.trim() !== '') {
          // Perform login logic here (this is a mock login)
          // Replace this with your actual login logic that checks credentials
          // For demonstration purposes, we are setting isLoggedIn to true
          // In a real application, this should be handled by your authentication mechanism
          const isLoggedIn = true;
    
          if (isLoggedIn) {
            // Show a success message after successful login
            setLoginSuccess(true);
    
            // Navigate to the home screen after a brief delay
            setTimeout(() => {
              navigation.navigate('Home'); // Replace 'Home' with the actual name of your home screen
            }); // Delay navigation for 1.5 seconds for demonstration purposes
          } else {
            // Handle login failure (show an error message or perform other actions)
            // ...
          }
        }
      };

  return (
    <View style={styles.drawerContent}>
    <View style={styles.LoginContainer}>
      <Image source={require('../assets/mainlogo.png')} style={styles.shebaimage}/>
        <Text style={styles.logintitle}> Ethiopian Airlines Loyalty Program  </Text>
        <Text style={styles.sublogin}>Enjoy Exclusive member benefit nd earn miles toward a wide range of awards.</Text>
        <TouchableOpacity style={styles.Loginbutton} onPress={toggleLoginDrawer}>
          <Text style={styles.buttonTextlogin}>Join/Login</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.dutyfree}>
      <TouchableOpacity onPress={handleTours}>
        <View style={styles.dutyContainer}>
          <View>
          <Image source={require('../assets/palmtree.png')} style={styles.shebaimage2}/>
          <Text style={styles.logintitle}> Tours and Activities </Text>
          </View>
          <View>
          <Text style={styles.sublogin}>Discover unforgettable travel experiences!</Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSheba}>
        <View style={styles.dutyContainer}>
        <Image source={require('../assets/mainlogo.png')} style={styles.shebaimage2}/>
         <Text style={styles.logintitle}> ExploreGhana </Text>
         <Text style={styles.sublogin}> Shop online and your order will be delivered Onboard</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFlight}>
        <View style={styles.dutyContainer}>
        <Image source={require('../assets/flightpass.jpg')} style={styles.shebaimage2}/>
        <Text style={styles.logintitle}> Flightpass </Text>
        <Text style={styles.sublogin}> Flight pass save up to 50% on your flight </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTerminal}>
        <View style={styles.dutyContainer}>
        <Image source={require('../assets/mainlogo.png')} style={styles.shebaimage2}/>
        <Text style={styles.logintitle}> Terminal Hotel </Text>
        <Text style={styles.sublogin}> Do you have an overnight stopover, or just a few hours to refresh? get cozy </Text>
        </View>
        </TouchableOpacity>
      </View>
      </ScrollView>

      <Text>Best fares from Addis Ababa</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.dubai}>
        <TouchableOpacity onPress={handleDubai} activeOpacity={0.8}>
        <ImageBackground source={require('../assets/dubai1.jpg')} style={styles.imageBackground} >
        <Text style={styles.text}>Dubai</Text>
        <Text style={styles.from}>From</Text>
        <Text style={styles.destination}>ETB 37,216</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style={styles.dubai}>
        <TouchableOpacity onPress={handleBangkok} activeOpacity={0.8}>
        <ImageBackground source={require('../assets/dubai2.jpg')} style={styles.imageBackground}>
        <Text style={styles.text}>Bangkok Suvarnabhumi</Text>
        <Text style={styles.from}>From</Text>
        <Text style={styles.destination}>ETB 63,962</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style={styles.dubai}>
        <TouchableOpacity onPress={handleNairobi} activeOpacity={0.8}>
        <ImageBackground source={require('../assets/dubai3.jpg')} style={styles.imageBackground}>
        <Text style={styles.text}>Nairobi</Text>
        <Text style={styles.from}>From</Text>
        <Text style={styles.destination}>ETB 33,099</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>
        
        <View style={styles.dubai}>
        <TouchableOpacity onPress={handleIstanbul} activeOpacity={0.8}>
        <ImageBackground source={require('../assets/dubai5.jpg')} style={styles.imageBackground}>
        <Text style={styles.text}>Istanbul</Text>
        <Text style={styles.from}>From</Text>
        <Text style={styles.destination}>ETB 38,488</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>
        
        <View style={styles.dubai}>
        <TouchableOpacity onPress={handleFrankfurt} activeOpacity={0.8}>
        <ImageBackground source={require('../assets/dubai4.jpg')} style={styles.imageBackground}>
        <Text style={styles.text}>Frankfurt</Text>
        <Text style={styles.from}>From</Text>
        <Text style={styles.destination}>ETB 44,390</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>

        <View style={styles.dubai}>
  <TouchableOpacity onPress={handleViewMore} activeOpacity={0.8}>
    <ImageBackground source={require('../assets/dubai4.jpg')} style={styles.viewmore}>
      <Text style={styles.text}>View More </Text>
    </ImageBackground>
  </TouchableOpacity>
  </View>
      </ScrollView>

      <View>
        <Text style={styles.inline}>
          Visit our fleet's 3D virtual tour
        </Text>
      </View>

      <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={20}
    >
      <View style={styles.dubai}>
        <TouchableOpacity onPress={handleVirtualTour} activeOpacity={0.8}>
          <ImageBackground
            source={require('../assets/virtual.jpg')}
            style={styles.imageBackground2}>
            <Text style={styles.text}>Airbus A350</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleVirtualTour} activeOpacity={0.8}>
          <ImageBackground
            source={require('../assets/virtual.jpg')}
            style={styles.imageBackground2}>
            <Text style={styles.text}>Boeing 777</Text>
          </ImageBackground>
        </TouchableOpacity>
        <LoginDrawer isVisible={isLoginDrawerVisible} onClose={toggleLoginDrawer} onLogin={handleLogin} />
 
      </View>
    </ScrollView>


        
       {/* The login drawer 
       <Modal isVisible={isLoginDrawerVisible} onBackdropPress={toggleLoginDrawer}>
      <View style={styles.loginDrawer}>
      {loginSuccess && <Text style={styles.successText}>Login Successful!</Text>}
        <Text style={styles.logintitle}>ShebaMiles Login</Text>
        <TextInput
          style={[styles.input, membershipIDError && styles.inputError]}
          placeholder="Membership ID*"
          value={membershipID}
          onChangeText={setMembershipID}
        />
        {membershipIDError && <Text style={styles.errorText}>Membership ID is required</Text>}
        <TextInput
          style={[styles.input, passwordError && styles.inputError]}
          placeholder="Password*"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {passwordError && <Text style={styles.errorText}>Password is required</Text>}
       
          <View style={styles.keepLoggedInContainer}>
        <Text style={styles.buttonText}>Keep me Logged in</Text>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            { backgroundColor: keepLoggedIn ? '#4CAF50' : '#ccc' },
          ]}
          onPress={handleToggleKeepLoggedIn}
        >
          <Text style={styles.toggleButtonText}>
            {keepLoggedIn ? 'ON' : 'OFF'}
          </Text>
        </TouchableOpacity>
      </View>
         
          <TouchableOpacity style={styles.cancelButton} onPress={handleLogin}>
            <Text style={styles.cancelButtonText}>Login</Text>
          </TouchableOpacity>
      
          <TouchableOpacity>
        <Text style={styles.dontAllowText}>I Can't Access My Account</Text>
      </TouchableOpacity>

          <Text style={styles.buttonText}>Not a ShebaMiles Member?</Text>

          <TouchableOpacity style={styles.cancelButton} onPress={handleShebaMiles}>
            <Text style={styles.cancelButtonText}>Join ShebaMiles</Text>
          </TouchableOpacity>
        </View>
      </Modal>  
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: -10,
  },
  successText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
    marginVertical: 10,
  },
    // New styles for input validation
    inputError: {
      borderColor: 'red', // Change the border color to red when there's an error
    },
    errorText: {
      color: 'red',
      fontSize: 12,
    },
  // New style for the keepLoggedInContainer
  keepLoggedInContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  dontAllowText: {
    fontSize: 16,
    color: '#3CB043',
    alignSelf: 'flex-end',
  },
  inline: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  viewmore: {
    width: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    resizeMode: 'cover',
  },
  imageBackground: {
    width: 200,
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageBackground2: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'baseline',
    alignSelf: 'baseline',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  from: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    color: 'white',
  },
  destination: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
    color: 'white',
    fontWeight: '600',
  },
  dubai: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  dutyfree: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dutyContainer: {
    marginHorizontal: 5,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#ECECEC',
    height: 170,
    width: 190,
  },
  shebaimage2: {
    width: 50,
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginLeft: 10,
  },
  buttonTextlogin: {
    color: 'white',
    fontWeight: '800',
    paddingHorizontal: 90,
  },
  Loginbutton: {
    alignItems: 'center',
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  sublogin: {
    flexWrap: 'wrap',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
    paddingBottom: 5,
    marginLeft: 10,
  },
  logintitle: {
    flexWrap: 'wrap',
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '700',
    paddingBottom: 5,
    marginLeft: 10,
  },
  shebaimage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  LoginContainer: {
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ECECEC',
    paddingVertical: 20,
    marginTop: -9,
  },
  drawerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // New styles for the login drawer
  loginDrawer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DrawerContentScreen;