function Person(fname, lname, age) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
}
Person.prototype.isAdult = function(){
  if(this.age > 18){
    console.log(`${this.firstName} ${this.lastName} is above legal age as an Adult`);
  } else {
    console.log(`${this.firstName} ${this.lastName} is not above legal age as an Adult`);
  }
}

function Student(fname, lname, age){
  Person.call(this, fname, lname, age);
  this.courses = [];
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.enroll = function(course){
  if(course){
    this.courses.push(course);
    console.log(`${this.firstName} ${this.lastName} enrolled into ${course.id}`);
  }
}
Student.prototype.isAdult = function(){
  if(this.age > 21){
    console.log(`${this.firstName} ${this.lastName} is above legal age as an Adult`);
  } else {
    console.log(`${this.firstName} ${this.lastName} is not above legal age as an Adult`);
  }
}

let jim = new Person("Jim", "Cooper", 29);
let stacy = new Student("Stacy", "Smith", 19);
jim.isAdult();
stacy.enroll({id: 'CS101'});
stacy.isAdult();
