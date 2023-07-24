import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import ToastManager, { Toast } from 'toastify-react-native';
import * as SQLite from 'expo-sqlite';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import Todo from '../components/Todo';
import EmptyTodoMsg from '../components/EmptyTodoMsg';
import deleteIcon from '../components/img/Deleteforever.png';
import buttonIcon from '../components/img/Button.png';
import { deletes } from '../redux/reducer';
import { useSelector, useDispatch } from 'react-redux';


function openDatabase() {
  const db = SQLite.openDatabase("todo.db");
    
  return db;
}
const db = openDatabase();

export default HomeScreen = ({navigation}) => {
      const [input, setInput] = useState("");
      const [todo, setTodo] = useState([]);
      const [time, setTime] = useState([]);
      const [dat, setDate] = useState([]);
      const [id, setId] = useState(0);
      var arrayTodo = [];
      var arrayTime = [];
      var arrayDate = [];

      const dispatch = useDispatch();
    
      const date = new Date();
      var h = date.getHours();
      const m = date.getMinutes();
      const dd = date.getDate();
      const mm = date.getMonth();
      const yy = date.getFullYear();
      const day =  ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
      //const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      const hour = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
      const minute = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
      var amPM;
      if(h<12){
        amPM = 'AM';
      }else if(h>12){
          amPM = 'PM'
          h = h - 12;
      }else{
        amPM = 'PM';
      }
      var currentTime = hour[h] + ':' + minute[m] + ' ' + amPM;
      var currentDate = day[dd] +'-' + month[mm] + '-' + yy;

    
      const handleDeleteTodo = (index) => {
        dispatch(deletes(todo.length-index));
        //reloadData();
        /*
        db.transaction((tx) =>{
          tx.executeSql(`delete from todo where id = '${ todo.length - index}'`);
          reloadData();
          //Toast.success('Todo Delete Success!');
          console.log('Todo Delete Success!');
        });
        */
      }

      const reloadData = () => {
        db.transaction((tx) => {
          tx.executeSql("select * from todo", [], (_, { rows }) =>
            {
              for(let i=0;i<rows.length;i++){
                arrayTodo[rows.item(i).id - 1] = rows.item(i).data;
                arrayTime[rows.item(i).id - 1] = rows.item(i).time;
                arrayDate[rows.item(i).id - 1] = rows.item(i).date;
              }
              setTodo(arrayTodo.reverse());
              setTime(arrayTime.reverse());
              setDate(arrayDate.reverse());
            }
          );
        })
      }

      const handleEdit = (item, index) => {
        setInput(item);
        setId(todo.length - index);
        navigation.navigate('EditTodo',{id:todo.length - index, value:item});
      }
    
      const handleInsert = () => {
        navigation.navigate('CreateTodo');
        setInput();
      }

      setTimeout(() => {
        reloadData();
      }, 1000);

      useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS todo(id INTEGER PRIMARY KEY NOT NULL, data VARCHAR(50000), time VARCHAR(30), date VARCHAR(30))'
          );
          /*
          tx.executeSql("select * from todo", [], (_, { rows }) =>
            {
              if(rows.length==0){
                tx.executeSql(`insert into todo (data, time, date) values ('Welcome','${currentTime}','${currentDate}')`);
              }
            }
          );
          */
          tx.executeSql("select * from todo", [], (_, { rows }) =>
            {
              for(let i=0;i<rows.length;i++){
                console.log(rows.item(i).id, rows.item(i).data, rows.item(i).time, rows.item(i).date);
                arrayTodo[rows.item(i).id - 1] = rows.item(i).data;
                arrayTime[rows.item(i).id - 1] = rows.item(i).time;
                arrayDate[rows.item(i).id - 1] = rows.item(i).date;
              }
              setTodo(arrayTodo.reverse());
              setTime(arrayTime.reverse());
              setDate(arrayDate.reverse());
            }
          );
          //tx.executeSql("delete from todo");
          //db.closeAsync()
          //db.deleteAsync()
        });
      }, []);

    return (
      <View style={styles.container}>
        <ToastManager />
        <StatusBar style="auto" backgroundColor='#fff' />
        <View style={styles.topView}>
          <View style={styles.topViewContent}>
            <Text style={styles.myTodo}>Todos</Text>
          </View>
        </View>
        <View style={styles.todoView}>
          <ScrollView style={styles.scrollView}
            showsHorizontalScrollIndicator={false} >
              {
                (todo.length == 0) ? <EmptyTodoMsg/> : ''
              }
                {todo.map((item, index) => {
                  //console.log(array);
                  return <TouchableOpacity key={index}
                    onPress={() => handleEdit(item, index)}
                    onLongPress={() =>{Toast.success('Long Press')}}>
                      <View style={styles.todoItems}>
                        <Todo data={item} time={time[index]} date={dat[index]} />       
                        <View style={styles.RightView}>
                          <View style={styles.RightViewItem}>
                            <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
                              <Image source={deleteIcon} style={styles.controlBtnImg} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                        })}
            </ScrollView>
        </View>
        <View style={styles.bottomAlign}>
          <TouchableOpacity style={styles.addTodoBtn} 
            onPress={handleInsert}>  
              <Image source={buttonIcon} style={styles.btnIcon} />
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
    topView: {
      alignItems: 'center',
      zIndex: 1.
    },
    topViewContent: {
      width: 250,
      height: 60,
      backgroundColor: '#EEEEEE',
      justifyContent: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      display: 'none'
      
    },
    myTodo: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      color:'#727EE8',
    },
    bottomAlign: {
      bottom: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      zIndex: 1
    },
    addTodoBtn: {
      marginRight: 20,
      //marginTop: -160
      marginTop: -55
    },
    btnIcon: {
      width: 50,
      height: 50,
    },
    pBtnText: {
      color: 'white',
      fontWeight: 'bold'
    },
    todoView: {
      //top: -60,
      marginHorizontal: 20,
      height: '100%',
    },
    scrollView: {
      //paddingVertical: 80,
      paddingVertical: 10,
      
    },
    todoItems: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F8F4F4',
      marginBottom: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 35,
      borderBottomLeftRadius: 35,
      borderBottomRightRadius: 10,
  },
    RightView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  RightViewItem: {
      
  },
  controlBtnImg: {
    marginTop: 75,
    marginRight: 15,
    width: 25,
    height: 25,
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  backBtnView: {
    marginLeft: 20,
    marginTop: 15,
    zIndex: 1,
  },
  btnBack: {
    width: 35,
    height: 35,
  },
  topViewAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  topViews: {
    alignItems: 'center',
    zIndex: 1,
  },
  topViewContents: {
    width: 220,
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
    marginLeft: 65
  },
  topRigtView: {
    width: 40,
    backgroundColor: '#727EE8',
    height: 60,
    marginLeft: -45,
    zIndex: 1
  },
  keyBoard: {
    width: '100%',
  },
  inputTextAreaView: {
    width: "100%",
    height: 550,
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
  },
  okBtn: {
    width: 50,
    height: 50,
  },
  
  });