import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './tabs/Home'
import Notification from './tabs/Notification'
import About from './tabs/About'
import Profile from './tabs/Profile'
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={() => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
    })}>
    <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
        }}
    />
    <Tab.Screen 
        name='Notification' 
        component={Notification}
        options={{
            //tabBarBadge: 3,
            tabBarLabel: 'Notification',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="bell" color={color} size={size}/>
            ),
        }}/>
    <Tab.Screen 
        name='About' 
        component={About}
        options={{
            tabBarLabel: 'About',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account-details" color={color} size={size}/>
            ),
        }}/>
    <Tab.Screen 
        name='Profile' 
        component={Profile}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account" color={color} size={size}/>
            ),
        }}/>
    </Tab.Navigator>
  )
}

export default HomeScreen