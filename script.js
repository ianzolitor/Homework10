
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

// // Assignment 2

// function Photo (fileName, location){
// 	this.fileName = fileName;
// 	this.location = location;
// }

// var photo1 = new Photo("photo1.jpg", "Niagara Falls");
// var photo2 = new Photo("photo2.jpg", "The Circus");
// var photo3 = new Photo("photo3.jpg", "Music Festival");

// var photos = [photo1, photo2, photo3];

// function Album (){
// 	this.gallery = [];
// 	this.addPhoto = addPhoto;
// 	this.listPhotos = listPhotos

// }

// var myAlbum = new Album();
// var anotherAlbum = new Album();

// function addPhoto(x){
// 		this.gallery.push(x);
// 	}


// function listPhotos() {
// 	for (var i = 0; i < this.gallery.length; i++) {
// 		console.log(this.gallery[i].fileName)
// 	}
// }

// Assignment 3

function Person(name){
	this.name = name
}


function Student(name,goodStudent,currentGrade){
	this.goodStudent = goodStudent
	Person.apply(this, arguments);
	var currentGrade = 100;
	students.push(this);
}


var students = []

var ian = new Student("Ian", true)

function Teacher(name,goodTeacher){
	this.goodTeacher = goodTeacher
	Person.apply(this,arguments)
	teachers.push(this)
}

var teachers = []

var chris = new Teacher("Chris", true)


var school = [students,teachers]


