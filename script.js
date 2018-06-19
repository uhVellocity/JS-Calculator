var light = new Array(); 
var colour= 0;
var t=0;
var n= 3;
var myArray=[]; 

light[0] = 'blue';
light[1] = 'orange'; 
light [2]= 'red';
light [3]= 'purple';
light [4]= 'green';

function flip(whichway){						
    document.body.style.backgroundColor = light[whichway]; 
}	

function doAutoFlip() {
    flip (colour)
        if (colour< light.length){
           colour++;
          }
        else {
            colour= 0;
              }
        t= setTimeout ('doAutoFlip()',300);
        }

var reset = true; 
function zero() {
	if (reset) {
		document.getElementById("output").value = "0";
		reset = false; 
	}
	else {
		document.getElementById("output").value += "0";
	}
}
function one() {
	if (reset) {
		document.getElementById("output").value = "1";
		reset = false;
	}
	else {
		document.getElementById("output").value += "1";
	}
}
function two() {
	if (reset) {
		document.getElementById("output").value = "2";
		reset = false;
	}
	else {
		document.getElementById("output").value += "2";
	}
}
function three() {
	if (reset) {
		document.getElementById("output").value = "3";
		reset = false;
	}
	else {
		document.getElementById("output").value += "3";
	}
}
function four() {
	if (reset) {
		document.getElementById("output").value = "4";
		reset = false;
	}
	else {
		document.getElementById("output").value += "4";
	}
}
function five() {
	if (reset) {
		document.getElementById("output").value = "5";
		reset = false;
	}
	else {
		document.getElementById("output").value += "5";
	}
}
function six() {
	if (reset) {
		document.getElementById("output").value = "6";
		reset = false;
	}
	else {
		document.getElementById("output").value += "6";
	}
}
function seven() {
	if (reset) {
		document.getElementById("output").value = "7";
		reset = false;
	}
	else {
		document.getElementById("output").value += "7";
	}
}
function eight() {
	if (reset) {
		document.getElementById("output").value = "8";
		reset = false;
	}
	else {
		document.getElementById("output").value += "8";
	}
}
function nine() {
	if (reset) {
		document.getElementById("output").value = "9";
		reset = false;
	}
	else {
		document.getElementById("output").value += "9";
	}
}
function decimal() {
	if (reset) {
		document.getElementById("output").value = ".";
		reset = false;
	}
	else {
		document.getElementById("output").value += ".";
	}
}
function allClear() {
	document.getElementById("output").value = "0";
    myArray=[]; 
	reset = true;
}
function add() {
	document.getElementById("output").value += "+";
	reset = false;
}
function subtract() {
	document.getElementById("output").value += "-";
	reset = false;
}
function multiply() {
	document.getElementById("output").value += "*";     
    reset = false;
}
function divide() {
	document.getElementById("output").value += "/";  
	reset = false;
    
}
   
function equals() {
	var result = eval(document.getElementById("output").value);
	document.getElementById("output").value = result;
     myArray.push (result);  
	reset = true;
     
       
                 
}
function sqroot(){
    var result = (document.getElementById("output").value);  
	document.getElementById("output").value = result*result;
	reset = true;   
}

        
