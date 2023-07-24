import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,  StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const LogInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.formView}>
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
        <TouchableOpacity style = {styles.buttonLogIn}
            onPress = {() => navigation.navigate('Home', {name: 'Home'})}>
          <Text style = {styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.signView}>
          <Text style = {styles.textSignUp}>create a new account?</Text>
          <TouchableOpacity style = {styles.buttonSignUp}
            onPress = {() => navigation.navigate('SignUp', {name: 'Sign Up'})}>
            <Text style = {styles.buttonSignUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LogInScreen

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
    buttonLogIn: {
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
    textSignUp: {
      color: '#FFFCFB',
      fontWeight: '600'
    },
    buttonSignUpText: {
      marginHorizontal: 5,
      fontWeight: 'bold',
      color: '#5016E9',
    }
  });
