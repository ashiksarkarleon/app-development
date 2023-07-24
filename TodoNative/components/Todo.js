import React from 'react'
import { View , StyleSheet, Text, ScrollView} from 'react-native'

const Todo = (props) => {
  return (
    <View>
      <Text style={styles.todoItem}>{props.data}</Text>
      <Text style={styles.todoItemTime}>{props.time + '   ' + props.date}</Text>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
    todoItem: {
      marginHorizontal: 20,
      marginVertical: 18,
      paddingVertical: 10,
      paddingHorizontal: 10,
      color: '#000000',
      width: 279,
      height: 70,
    },
    todoItemTime: {
      fontSize: 10,
      marginLeft: 35,
      top: -10
    }
  });
  