$(document).ready(function () {
   
       new CustomerJS();
   
    
   
})

class CustomerJS extends BaseJS {
    constructor() {
        super();
        super.Event();
        
    }




/**
* Format dữ liệu sang kiểu dd/mm/yyyy
* @param {any} date
*/



function Dateformat(date) {
    var date = new Date(date);
    //day  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    //month
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    //year
    var year = date.getFullYear();
    return day + '/' + month + '/' + year;
}




