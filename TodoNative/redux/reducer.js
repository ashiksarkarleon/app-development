import { Toast } from 'toastify-react-native';
import * as SQLite from 'expo-sqlite';

// action
const DBOPEN = 'DBOPEN';
const INSERT = 'INSERT';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const STARTLOAD = 'STARTLOAD';
const INPUT = 'INPUT';
const TODO = 'TODO';
const ID = 'ID';
const ARRAY = 'ARRAY';


export const input = () => ({
    type: INPUT,
})
export const todo = () => ({
    type: TODO,
})
export const id = () => ({
    type: ID,
})
export const array = () => ({
    type: ARRAY,
})

export const dbopen = () => ({
    type: DBOPEN,
})

export const insert = (insertValue) => ({
    type: INSERT,
    insertValue: insertValue,
})

export const update = (Id, UpdateValue) => ({
    type: UPDATE,
    id: Id,
    updateValue: UpdateValue,
})

export const deletes = (id) => ({
    type: DELETE,
    id: id,
})


// initial state
const initialState = {
    counter: 0
}

function openDatabase() {
    const db = SQLite.openDatabase("todo.db");
      
    return db;
}

// root reducer
const rootReducer = (state=initialState, action) => {
    const db = openDatabase();
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

    switch(action.type) {
        case INSERT:
            return (
                db.transaction((tx) =>{
                    tx.executeSql(`insert into todo (data,time,date) values ('${action.insertValue}','${currentTime}','${currentDate}')`);
                    //Toast.success('Todo Add Success!');
                    console.log('Todo Add Success!');
                  })
                )
        case UPDATE:
            return (
                db.transaction((tx) =>{
                    tx.executeSql(`update todo set data = '${action.updateValue}', time = '${currentTime}', date = '${currentDate}' where id = ${action.id}`);
                    //Toast.success('Update Success!');
                    console.log('Update Success!');
                })
            )
        case DELETE:
            return (
                db.transaction((tx) =>{
                    tx.executeSql(`delete from todo where id = '${action.id}'`);
                    //Toast.success('Todo Delete Success!');
                    console.log('Todo Delete Success!');
                  })
            )
        case STARTLOAD:
            return (
                db.transaction((tx) => {
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS todo(id INTEGER PRIMARY KEY NOT NULL, data VARCHAR(30))'
                    );
                    tx.executeSql("select * from todo", [], (_, { rows }) =>
                      {
                        if(rows.length==0){
                          tx.executeSql("insert into todo (data) values ('Welcome')");
                        }
                      }
                    );
                    tx.executeSql("select * from todo", [], (_, { rows }) =>
                      {
                        for(let i=0;i<rows.length;i++){
                          console.log(rows.item(i).id, rows.item(i).data);
                          array[rows.item(i).id - 1] = rows.item(i).data;
                          
                        }
                        setTodo(array.reverse());
                      }
                    );
                  })
            )
        default:
            return 0;
    }
}
export default rootReducer