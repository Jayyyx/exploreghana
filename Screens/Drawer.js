import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = ({ isOpen, onClose }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    console.log('Go back button pressed!');
    navigation.navigate('Home'); // Replace 'Home' with the name of your home screen
  };

  const handleLogin = () => {
    console.log('Login button pressed!');
    navigation.navigate('Home');
  };

  const handleJoin = () => {
    console.log('Join button pressed!');
    navigation.navigate('JoinShebaMilesScreen');
    // Implement your join logic here
  };

  const handleSettings = () => {
    console.log('Settings button pressed!');
    navigation.navigate('SettingsScreen');
  };

  const handleBid = () => {
    console.log('Settings button pressed!');
    navigation.navigate('BidToUpgradeScreen');
  };

  const handleNotification = () => {
    console.log('Notification button pressed!');
    navigation.navigate('Notificationhandle');
  };

  const handleMeal = () => {
    console.log('Notification button pressed!');
    navigation.navigate('PreorderMeals');
  };

  const handleMiles = () => {
    console.log('Notification button pressed!');
    navigation.navigate('MilesCalculatorScreen');
  };



  const handleCovid = () => {
    console.log('Notification button pressed!');
    navigation.navigate('CovidUpdate');
  };

  const handleAboutUs = () => {
    console.log('Notification button pressed!');
    navigation.navigate('AboutUsScreen');
  };

  const handleFeedback = () => {
    console.log('Feedback button pressed!');
    navigation.navigate('FeedbackScreen')
  };

  const handleContactUs = () => {
    console.log('Contact Us button pressed!');
    navigation.navigate('ContactUs');
  };

  const handleCar = () => {
    console.log('Book a Car button pressed!');
    navigation.navigate('CarRentalPage');
  };

  const handleSheba = () => {
    console.log('Book a Car button pressed!');
    navigation.navigate('ShebaDutyFreeScreen');
  };

  const handleFlightPass = () => {
    console.log('Book a Car button pressed!');
    navigation.navigate('FlightPassScreen');
  };

  const handleBoardingPass = () => {
    console.log('Book a Car button pressed!');
    navigation.navigate('BoardingPass');
  };

  const handleRefund = () => {
    console.log('Refund button pressed!');
    navigation.navigate('RefundScreen')
  };

  const handleBaggage = () => {
    console.log('Book a Car button pressed!');
    navigation.navigate('BaggageTrackingScreen');
  };

  const handleStar = () => {
    console.log('Star button pressed!');
    navigation.navigate('StarAllianceLoungeScreen');
  };

  const handleStop = () => {
    console.log('Stopover@Addis button pressed!');
    navigation.navigate('StopoverScreen');
  };

  const handleLinks = () => {
    console.log('Important Links button pressed!');
    navigation.navigate('ImportantLinks');
  };

  const handleFares = () => {
    console.log('Stopover@Addis button pressed!');
    navigation.navigate('CheapestFaresScreen');
  };


  const renderMenuItem = ({ icon, label, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={25} color="#555" />
      <Text style={styles.menuItemText}>{label}</Text>
    </TouchableOpacity>
  );

  const menuItems = [
    { icon: 'airplane-outline', label: 'Flight Pass', onPress: handleFlightPass },
    { icon: 'briefcase-outline', label: 'Baggage Tracking', onPress: handleBaggage },
    { icon: 'card-outline', label: 'Boarding Pass', onPress: handleBoardingPass },
    { icon: 'bus-outline', label: 'Stopover', onPress: handleStop },
    { icon: 'car-outline', label: 'Book a Car', onPress: handleCar },
    { icon: 'notifications-outline', label: 'Notification', onPress: handleNotification },
  ]

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      <TouchableOpacity style={styles.drawerItem} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={25} color="#555" />
        {/*<Text style={styles.drawerItemText}>Go Back</Text>*/}
      </TouchableOpacity>

        <View style={styles.top}>
        <Image source={require('../assets/mainlogo.png')} style={styles.shebaimage}/>
    <View style={styles.logon}>
      <TouchableOpacity style={styles.drawerItem} onPress={handleLogin}>
        <Text style={styles.drawerItemText1}>Login</Text>
      </TouchableOpacity>
      </View>

        <View style={styles.join}>
      <TouchableOpacity style={styles.drawerItem} onPress={handleJoin}>
        <Text style={styles.drawerItemText}>Join</Text>
      </TouchableOpacity>
      </View>
      </View>

      {/* Render the menu items */}
      <View style={styles.menuContainer}>
          {menuItems.map((menuItem) => renderMenuItem(menuItem))}
        </View>

      <TouchableOpacity style={styles.drawerItem} onPress={handleBid}>
          <Ionicons name="trending-up" size={25} color="#555" />
          <Text style={styles.drawerItemText}>Bid to upgrade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={handleSheba}>
          <Ionicons name="cart-outline" size={25} color="#555" />
          <Text style={styles.drawerItemText}>Sheba Duty Free</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={handleMiles}>
          <Ionicons name="speedometer-outline" size={25} color="#555" />
          <Text style={styles.drawerItemText}>Miles Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={handleMeal}>
          <Ionicons name="fast-food-outline" size={25} color="#555" />
          <Text style={styles.drawerItemText}>Preorder Meal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={handleFares}>
          <Ionicons name="pricetag-outline" size={25} color="#555" />
          <Text style={styles.drawerItemText}>Cheapeast Fares</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={handleStar}>
          <Ionicons name="star-outline" size={25} color="#555" />
          <Text style={styles.drawerItemText}>Star Alliance Lounges</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={handleRefund}>
          <Ionicons name="repeat-outline" size={25} color="#555" />
          <Text style={styles.drawerItemText}>Exchange/Refund Request</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={handleCovid}>
          <Ionicons name="alert-circle-outline" size={25} color="#555" />
          <Text style={styles.drawerItemText}>COVID-19 Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerItem} onPress={handleLinks}>
          <Ionicons name="link-outline" size={25} color="#555" />
          <Text style={styles.drawerItemText}>Important Links</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={handleFeedback}>
        <Ionicons name="chatbox-ellipses-outline" size={25} color="#555" />
        <Text style={styles.drawerItemText}>Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={handleContactUs}>
        <Ionicons name="mail-outline" size={25} color="#555" />
        <Text style={styles.drawerItemText}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={handleAboutUs}>
        <Ionicons name="information-circle-outline" size={25} color="#555" />
        <Text style={styles.drawerItemText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={handleSettings}>
        <Ionicons name="settings-outline" size={25} color="#555" />
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  logon: {
    backgroundColor: 'green',
    height: 50,
    borderRadius: 1,
    marginLeft: 70,
    marginTop: 9,
    justifyContent:'center',
    alignContent: 'center',
  },
  join: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 1,
    borderColor: 'green',
    borderWidth: 1,
    marginLeft: 5,
    marginTop: 9,
  },
  shebaimage: {
    width: 85,
    height: 70,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  top: {
    flexDirection: 'row',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemText1: {
    marginLeft: 15,
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  drawerItemText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#555',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuItem: {
    width: '32%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
    padding: 5,
  },
  menuItemText: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default Drawer;
