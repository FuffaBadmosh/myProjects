const display=document.getElementById('display');

function appendToDisplay(input){
  display.value+=input;
}

function clearAll(){
    display.value=display.value.toString().slice(0,-1);

}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
}
function dlt(){
    display.value="";

}
