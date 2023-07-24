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
}else{
    amPM = 'PM'
    h = h - 12;
}
var currentTime = hour[h] + ':' + minute[m] + ' ' + amPM;
var currentDate = day[dd] +'-' + month[mm] + '-' + yy;

console.log(currentTime);
console.log(currentDate);