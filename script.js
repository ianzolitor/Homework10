
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
	this.goodStudent = goodStudent;
	this.currentGrade = currentGrade;
	Person.apply(this, arguments);
	students.push(this);
}


var students = []

var ian = new Student("Ian", true, 100);
var rob = new Student("Rob", true, 100);
var susan = new Student("Susan", true,100);

function Teacher(name,goodTeacher){
	this.goodTeacher = goodTeacher
	Person.apply(this,arguments)
	teachers.push(this)
	this.grade = grade
}

var teachers = []

var chris = new Teacher("Chris", true)
var oggi = new Teacher("Oggi", true)


var school = [students,teachers]

function grade (student, grade){
	student.currentGrade += grade
	if (student.currentGrade < 60) {
		student.goodStudent = false;
	} else {student.goodStudent = true
}
}

