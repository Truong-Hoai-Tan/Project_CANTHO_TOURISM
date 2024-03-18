import { Select, initMDB } from "mdb-ui-kit";

initMDB({ Select });



var timer = setInterval(function(){
    $('#nextButton').trigger('click');
 },2000)