
// // Assignment 1


// function Multiplier(){
// 	this.multiply = multiply;
// 	this.getCurrentValue = getCurrentValue;
// 	this.currentValue = 1;
// }

// var calculate = new Multiplier();

// function multiply(value){
// 	 this.currentValue *= value;
	
// }

// function getCurrentValue(){
// 	return this.currentValue;
// }

// Assignment 2

function Photo (fileName, location){
	this.fileName = fileName;
	this.location = location;
}

var photo1 = new Photo("photo1.jpg", "Niagara Falls");
var photo2 = new Photo("photo2.jpg", "The Circus");
var photo3 = new Photo("photo3.jpg", "Music Festival");

var photos = [photo1, photo2, photo3];

function Album (){
	this.gallery = [];
	this.addPhoto = addPhoto;
	this.listPhotos = listPhotos

}

var myAlbum = new Album();
var anotherAlbum = new Album();

function addPhoto(x){
		this.gallery.push(x);
	}


function listPhotos() {
	for (var i = 0; i < this.gallery.length; i++) {
		console.log(this.gallery[i].fileName)
	}
}