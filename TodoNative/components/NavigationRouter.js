import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../Screen/HomeScreen';
import CreateTodoScree from '../Screen/CreateTodoScree';
import EditTodoScreen from '../Screen/EditTodoScreen';


const Stack = createNativeStackNavigator();

export const NavigationRouter = () => {
  return (
    <NavigationContainer initialRouteName='Home'>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
            name = 'Home'
            component = {HomeScreen}
            options = {{ title: 'Welcome to HomeScreen'}}/>
        <Stack.Screen 
            name = 'CreateTodo'
            component={CreateTodoScree} />
        <Stack.Screen 
            name = 'EditTodo'
            component={EditTodoScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}