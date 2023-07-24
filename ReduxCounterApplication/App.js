import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Provider} from 'react-redux';
//import { useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
//import { increment, decrement, reset } from './redux/reducer';
import {Counter} from './components/Counter';

/*
const AppScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return(
    <View style={styles.container}>
        <Text style={styles.title}>Redux Counter</Text>
        <Text style={styles.count}>{counter}</Text>
        <View style={styles.rowView}>
          <TouchableOpacity style={styles.btnDecrement}
            onPress={() => dispatch(decrement())}>
              <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnReset}
            onPress={() => dispatch(reset())}>
              <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIncrement}
            onPress={() => dispatch(increment())}>
              <Text>+</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
    </View>
  )
}
*/
export default function App() {

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 100,
    fontWeight: 'bold'
  },
  rowView: {
    flexDirection: 'row'
  },
  btnDecrement: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  },
  btnReset: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  },
  btnIncrement: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  },
});
