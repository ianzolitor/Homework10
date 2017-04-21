
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

var school = {
	schoolTeachers: [], 
	schoolStudents: [],
	schoolOpen: true,
	schoolClose: schoolClose,
	schoolOpens: schoolOpens
}

function Student(name,goodStudent,currentGrade){
	this.goodStudent = goodStudent;
	this.currentGrade = currentGrade;
	Person.apply(this, arguments);
	school.schoolStudents.push(this);
	this.detention = false;
	this.giveApple = giveApple;
}

var students = []

var ian = new Student("Ian", true, 100);
var rob = new Student("Rob", true, 100);
var susan = new Student("Susan", true,100);

function Teacher(name){
	this.goodTeacher = false;
	Person.apply(this,arguments);
	school.schoolTeachers.push(this);
	this.apples = 0;
	this.grade = grade;
	this.giveDetention = giveDetention;
}

var teachers = []

var chris = new Teacher("Chris", true)
var oggi = new Teacher("Oggi", true)


function grade (student, grade){
	student.currentGrade += grade
	if (student.currentGrade < 60) {
		student.goodStudent = false;
} 	else {student.goodStudent = true
	}
}

function giveDetention(student){
	student.detention = true
}

function giveApple (teacher, appleAmount) {
	teacher.apples += appleAmount
	if (teacher.apples >= 3) {
		teacher.goodTeacher = true;
	} else {
		teacher.goodTeacher = false;
	}
}

function schoolClose() {
	school.schoolOpen = false;
	teachers = school.schoolTeachers;
	students = school.schoolStudents;
	school.schoolTeachers = [];
	school.schoolStudents = [];

}

function schoolOpens() {
	school.schoolOpen = true;
	school.schoolTeachers = teachers;
	school.schoolStudents = students;
	teachers = []
	students = []
}


