import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './Screens/BottomNavigation';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import BookFlightScreen from './Screens/BookFlightScreen';
import MyTripsScreen from './Screens/MyTripsScreen';
import CheckInScreen from './Screens/CheckInScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import TouchButtons from './Screens/TouchButtons';
import PrivacyPolicyScreen from './Screens/PrivacyPolicyScreen';
import NotificationsScreen from './Screens/NotificationsScreen';
import DrawerContentScreen from './Screens/DrawerContentScreen';
import Notificationhandle from './Screens/Notificationhandle';
//import DrawerHamburger from './Screens/DrawerHamburger';
import ToursAndActivitiesScreen from './Screens/ToursAndActivitiesScreen';
import ShebaDutyFreeScreen from './Screens/ShebaDutyFreeScreen';
import FlightPassScreen from './Screens/FlightPassScreen';
import TerminalHotelScreen from './Screens/TerminalHotelScreen';
import JoinShebaMilesScreen from './Screens/JoinShebaMilesScreen';
import VirtualTourScreen from './Screens/VirtualTourScreen';
import CheapestFaresScreen from './Screens/CheapestFaresScreen';
import FrankfurtScreen from './Screens/FrankfurtScreen';
import IstanbulScreen from './Screens/IstanbulScreen';
import NairobiScreen from './Screens/NairobiScreen';
import BangkokSuvarnabhumiScreen from './Screens/BangkokSuvarnabhumiScreen';
import DubaiScreen from './Screens/DubaiScreen';
import LoginDrawer from './Screens/LoginDrawer';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import SettingsScreen from './Screens/SettingsScreen';
import Drawer from './Screens/Drawer';
import PreorderMeals from './Screens/PreoederMeals';
import CovidUpdate from './Screens/CovidUpdate';
import BidToUpgradeScreen from './Screens/BidToUpgradeScreen';
import MilesCalculatorScreen from './Screens/MilesCalculatorScreen';
import AboutUsScreen from './Screens/AboutUsScreen';
import ContactUs from './Screens/ContactUs';
import SubPrivacyPolicyScreen from './Screens/SubPrivacyPolicyScreen';
import TermsAndConditionsScreen from './Screens/TermsAndConsitionsScreen';
import EnterDepartureModal from './Screens/EnterDepartureModal';
import EnterDestinationModal from './Screens/EnterDestinationModal';
import CarRentalPage from './Screens/CarRentalPage';
import BoardingPass from './Screens/BoardingPass';
import BaggageTrackingScreen from './Screens/BaggageTrackingScreen';
import StopoverScreen from './Screens/StopoverScreen';
import StarAllianceLoungeScreen from './Screens/StarAllianceLoungeScreen';
import RefundScreen from './Screens/RefundScreen';
import ImportantLinks from './Screens/ImportantLinks';
import FeedbackScreen from './Screens/FeedbackScreen';
import FromTo from './Screens/FromTo';
import MultiCity from './Screens/MultiCity';
import OneWay from './Screens/OneWay';
import RoundTrip from './Screens/RoundTrip';
import Booking from './Screens/Booking';
import AddReservation from './Screens/AddReservation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} /> 
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DrawerContentScreen" component={DrawerContentScreen} />
        <Stack.Screen name='ToursAndActivitiesScreen' component={ToursAndActivitiesScreen} />
        <Stack.Screen name="BookFlight" component={BookFlightScreen} />
        <Stack.Screen name="MyTrips" component={MyTripsScreen} />
        <Stack.Screen name="CheckIn" component={CheckInScreen} />
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='TouchButtons' component={TouchButtons} />
        <Stack.Screen name='PrivacyPolicyScreen' component={PrivacyPolicyScreen} />
        <Stack.Screen name='TermsAndConditionsScreen' component={TermsAndConditionsScreen} />
        <Stack.Screen name='SubPrivacyPolicyScreen' component={SubPrivacyPolicyScreen} />
        <Stack.Screen name='NotificationsScreen' component={NotificationsScreen} />
        <Stack.Screen name='Notificationhandle' component={Notificationhandle} />
        <Stack.Screen name='PreorderMeals' component={PreorderMeals} />
        <Stack.Screen name='ShebaDutyFreeScreen' component={ShebaDutyFreeScreen} />
        <Stack.Screen name='FlightPassScreen' component={FlightPassScreen} />
        <Stack.Screen name='TerminalHotelScreen' component={TerminalHotelScreen} />
        <Stack.Screen name='JoinShebaMilesScreen' component={JoinShebaMilesScreen} />
        <Stack.Screen name='VirtualTourScreen' component={VirtualTourScreen} />
        <Stack.Screen name='CheapestFaresScreen' component={CheapestFaresScreen} />
        <Stack.Screen name='FrankfurtScreen' component={FrankfurtScreen} />
        <Stack.Screen name='IstanbulScreen' component={IstanbulScreen} />
        <Stack.Screen name='NairobiScreen' component={NairobiScreen} />
        <Stack.Screen name='DubaiScreen' component={DubaiScreen} />
        <Stack.Screen name='LoginDrawer' component={LoginDrawer} />
        <Stack.Screen name='Drawer' component={Drawer} />
        <Stack.Screen name='ContactUs' component={ContactUs} />
        <Stack.Screen name='MilesCalculatorScreen' component={MilesCalculatorScreen} />
        <Stack.Screen name='BidToUpgradeScreen' component={BidToUpgradeScreen} />
        <Stack.Screen name='CovidUpdate' component={CovidUpdate} />
        <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
        <Stack.Screen name='AboutUsScreen' component={AboutUsScreen} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        <Stack.Screen name='BangkokSuvarnabhumiScreen' component={BangkokSuvarnabhumiScreen} />
        <Stack.Screen name='EnterDepartureModal' component={EnterDepartureModal} />
        <Stack.Screen name='EnterDestinationModal' component={EnterDestinationModal} />
        <Stack.Screen name='CarRentalPage' component={CarRentalPage} />
        <Stack.Screen name='BoardingPass' component={BoardingPass} />
        <Stack.Screen name='RefundScreen' component={RefundScreen} />
        <Stack.Screen name='FeedbackScreen' component={FeedbackScreen} />
        <Stack.Screen name='ImportantLinks' component={ImportantLinks} />
        <Stack.Screen name='StarAllianceLoungeScreen' component={StarAllianceLoungeScreen} />
        <Stack.Screen name='StopoverScreen' component={StopoverScreen} />
        <Stack.Screen name='FromTo' component={FromTo} />
        <Stack.Screen name='MultiCity' component={MultiCity} />
        <Stack.Screen name='OneWay' component={OneWay} />
        <Stack.Screen name='RoundTrip' component={RoundTrip} />
        <Stack.Screen name='Booking' component={Booking} />
        <Stack.Screen name='AddReservation' component={AddReservation} />
        <Stack.Screen name='BaggageTrackingScreen' component={BaggageTrackingScreen} />
   

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
