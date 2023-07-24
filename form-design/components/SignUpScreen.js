import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,  StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.formView}>
        <TextInput style = {styles.inputText}
          placeholder="Enter Your Name" 
          underlineColorAndroid={'transparent'}
          placeholderTextColor='gray'
          autoCapitalize="none"/>
        <TextInput style = {styles.inputText}
          placeholder="Enter Your Email" 
          underlineColorAndroid={'transparent'}
          placeholderTextColor='gray'
          autoCapitalize="none"/>
        <TextInput style = {styles.inputText}
          placeholder="Enter Your Password" 
          underlineColorAndroid={'transparent'}
          placeholderTextColor='gray'
          autoCapitalize="none"/>
        <TextInput style = {styles.inputText}
          placeholder="Enter Your Re-Type Password" 
          underlineColorAndroid={'transparent'}
          placeholderTextColor='gray'
          autoCapitalize="none"/>
        <TouchableOpacity style = {styles.buttonSignUp}
            onPress = {() => navigation.navigate('Home', {name: 'Home'})}>
          <Text style = {styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signView}>
          <Text style = {styles.textSignIn}>if you already signup?</Text>
          <TouchableOpacity style = {styles.buttonSignIn}
            onPress = {() => navigation.navigate('LogIn', {name: 'Log In'})}>
            <Text style = {styles.buttonSignInText}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#20D1DB",
    },
    formView: {
      height: "100%",
      paddingVertical: 40
    },
    inputText: {
      margin: 10,
      borderColor: '#B7B7B7',
      padding: 10,
      backgroundColor: '#E1E1E1',
      borderRadius: 5,
    },
    buttonSignUp: {
      backgroundColor: 'blue',
      textAlign: 'center',
      padding: 10,
      marginHorizontal: 100,
      borderRadius: 5,
      marginVertical: 10,
    },
    buttonText: {
      color: 'white',
    },
    signView: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
  
    },
    textSignIn: {
      color: '#FFFCFB',
      fontWeight: '600'
    },
    buttonSignInText: {
      marginHorizontal: 5,
      fontWeight: 'bold',
      color: '#5016E9'
    }
  });

export default SignUpScreen