import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen';
import BookFlightScreen from './BookFlightScreen';
import MyTripsScreen from './MyTripsScreen';
import CheckInScreen from './CheckInScreen';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Book') {
            iconName = 'airplane-outline';
          } else if (route.name === 'MyTrips') {
            iconName = 'briefcase-outline';
          } else if (route.name === 'CheckIn') {
            iconName = 'checkmark-outline';
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#4caf50', // Set the active tab icon color to orange
        tabBarInactiveTintColor: '#555', // Set the inactive tab icon color to black
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookFlightScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyTrips"
        component={MyTripsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CheckIn"
        component={CheckInScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>

  );
};

export default BottomNavigation;