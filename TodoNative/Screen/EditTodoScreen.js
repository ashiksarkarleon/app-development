import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, createContext, useContext} from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import okButtonImg from '../components/img/okButton.png';
import backButtonImg from '../components/img/backButton.png';
import { useSelector, useDispatch } from 'react-redux';
import {update} from '../redux/reducer';

const EditTodoScreen = ({navigation, route}) => {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handleUpdateTodo = () => {
        
        if(input != ''){
            dispatch(update(route.params.id, input));
            navigation.navigate('Home');
        }
    }

    useEffect(() => {
        setInput(route.params.value);
    }, [])

    return(
        <View style = {styles.container}>

        <StatusBar style="auto" backgroundColor='#fff' />
            
        <View style={styles.topContainer}>
            <View style={styles.backBtnView}>
              <TouchableOpacity 
                onPress={() => {navigation.navigate('Home')}}>
                <Image source={backButtonImg} style={styles.btnBack} />
              </TouchableOpacity>
            </View>
            <View style={styles.topViewAlign}>
              <View style={styles.topViews}>
                <View style={styles.topViewContents}>
                  <Text style={styles.todoStyle}>View & Edit Todo</Text>
                </View>
              </View>
            </View>
        </View>

        <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}
                style={styles.keyBoard}
                
            >
            <View style={styles.inputTextAreaView}>
              <View style={styles.inputView}> 
                <TextInput multiline={true} style={styles.inputText} value={input} onChangeText={(text) => setInput(text)} placeholder={'Write here...'} placeholderTextColor='#797575'/>
              </View>
            </View>
          </KeyboardAvoidingView>

          <View style={styles.okBtnView}>
              <TouchableOpacity style={styles.saveTodoBtn} 
                onPress={handleUpdateTodo}>      
                <Image source={okButtonImg} style={styles.okBtn} />
              </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 40,
    },
    modal: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topContainer: {
      flex: 1,
      flexDirection: 'row',
      zIndex: 1
    },
    backBtnView: {
      marginLeft: 25,
      marginTop: 20,
    },
    btnBack: {
      width: 21,
      height: 20,
    },
    topViewAlign: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    topViews: {
      alignItems: 'center',
    },
    topViewContents: {
      width: 265,
      height: 60,
      backgroundColor: '#727EE8',
      justifyContent: 'center',
      borderBottomLeftRadius: 90,
    },
    todoStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#FFFFFF',
      marginLeft: 30
    },
    keyBoard: {
      width: '100%',
    },
    inputTextAreaView: {
      width: "100%",
      height: 600,
      top: 55,
    },
    inputView: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginVertical: 20,
      height: '100%',
    },
    inputText: {
      width: '100%',
      height: 350,
      textAlignVertical: 'top',
      backgroundColor: '#F8F4F4',
      borderRadius: 5,
      paddingHorizontal: 15,
      paddingVertical: 10,
      textAlign: 'justify'
    },
    okBtnView: {
      flexDirection: 'row',
      justifyContent: 'center',
      top: -120
    },
    okBtn: {
      width: 50,
      height: 50,
    },
})

export default EditTodoScreen