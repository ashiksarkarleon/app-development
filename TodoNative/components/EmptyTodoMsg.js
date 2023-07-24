import React from 'react'
import { View , StyleSheet, Text, ScrollView} from 'react-native'

const EmptyTodoMsg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME</Text>
      <Text style={styles.noTodo}>No to-dos</Text>
    </View>
  )
}

export default EmptyTodoMsg

const styles = StyleSheet.create({
    container: {
        flexL: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '90%'
    },
    welcome: {
        fontSize: 40,
        color: '#999494'
    },
    noTodo: {
        fontSize: 30,
        color: '#999494'
    },
  });
  