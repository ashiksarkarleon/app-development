import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './Screen/HomeScreen';
import CreateTodoScree from './Screen/CreateTodoScree';
import EditTodoScreen from './Screen/EditTodoScreen';
import {Provider} from 'react-redux';
import store from './redux/store';
import {NavigationRouter} from './components/NavigationRouter';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationRouter />
    </Provider>
  )
}

export default App