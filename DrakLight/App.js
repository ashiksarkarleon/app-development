import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Appearance, useColorScheme } from 'react-native';

export default function App() {

  // add some text in app.json file
  // "userInterfaceStyle": "automatic"

  //const colorScheme = Appearance.getColorScheme();
  const colorScheme = useColorScheme();
  
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  const themeTextStyle = colorScheme == 'light' ? styles.lightThemeText : styles.darkThemeText; 

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={themeTextStyle}>working on your app!</Text>
      <Text style={themeTextStyle}>System Mode is : {colorScheme}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0'
  },
  darkContainer: {
    backgroundColor: '#242c40'
  },
  lightThemeText: {
    color: '#242c40'
  },
  darkThemeText: {
    color: '#d0d0c0'
  }
});
