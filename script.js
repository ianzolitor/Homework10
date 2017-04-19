function Multiplier(){
	this.multiply = multiply;
	this.getCurrentValue = getCurrentValue;
	this.currentValue = 1;
}

var calculate = new Multiplier();

function multiply(value){
	 this.currentValue *= value;
	
}

function getCurrentValue(){
	return this.currentValue;
}

