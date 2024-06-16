class Person {
  firstName = "";
  lastName = "";
  age = 0;
  constructor(fname, lname, age){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
  }
  isAdult(){
    console.log(this.age > 18 ? `Adult - above 18`: `Minor - below 18`);
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName){
    if(fullName && fullName.indexOf(" ") > -1){
      const [fname, lname] = fullName.split(" ");
      this.firstName = fname;
      this.lastName = lname;
    }
  }
}

let Jim = new Person("Peter", "Parker", 29);
Jim.isAdult();
console.log(Jim.fullName);
Jim.fullName = "John Doe";
console.log(Jim.fullName);
