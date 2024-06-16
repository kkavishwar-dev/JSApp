class Person {
  firstName = "";
  lastName = "";
  age = 0;
  constructor(fname, lname, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;  
  }
  isAdult() {
    console.log(this.age >= 18 ? 'major - age is verified': 'minor - non qualified');
  }  
}

class Student extends Person {
  courses = [];
  enroll(course){
    if(course && course.id){
        this.courses.push(course);
        console.log(`${this.firstName} ${this.lastName} enrolled in ${course.id}`);
    }
  }
  isAdult(){
    console.log(this.age >= 21 ? 'student is major': 'student is minor');
  }
}

function printFullName(person){
  console.log(`${person.firstName} ${person.lastName}`);
}

let jim = new Student("Jim", "Cooper", "18");
jim.enroll({id: "CS101"});
jim.isAdult();
printFullName(jim);