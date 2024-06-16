import { readFromFile } from "./functions-a.js";

readFromFile().then((res) => {
  let emp = (JSON.parse(res))[0];
  //console.log(emp);
});

//this will be undefined in Object literal using arrow function
const emp1 = {
  id: 1001, firstName: "Lamb",  lastName: "Mcclain",
  printName: () => console.log(`full name ${this.firstName} - ${this.lastName}`),
};
//console.log(emp1.printName());

//this will work in Class - constructor Function using arrow function
function emp2(id, fname, lname){
  this.id = id;   this.firstName = fname;   this.lastName = lname;
    this.printName = () => console.log(`full name ${this.firstName} - ${this.lastName}`)
}
let employee2 = new emp2(1002, "John", "Doe");
employee2.printName();