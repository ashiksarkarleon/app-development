import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignUpScreen from "./components/SignUpScreen";
import LogInScreen from "./components/LogInScreen";
import HomeScreen from './components/HomeScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='SignUp'
      screenOptions={{
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#11B1FF',}
      }}>
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options = {{title: 'Sign Up', }}/>
        <Stack.Screen 
          name="LogIn"
          component={LogInScreen}
          options = {{title: 'Log In',}}/>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
