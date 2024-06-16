const myObj = {
  id: 1,  firstName: "Peter",  lastName: "Smith",  dob: new Date(1980, 3, 15),
  logName: function() {console.log(`full Name: ${this.firstName} - ${this.lastName}`)}
}
myObj.logName();

let myObj2 = {};
myObj2 = { ...myObj };
//        OR
//Object.assign(myObj2, myObj);

for (const [key, value] of Object.entries(myObj2)){
    console.log(`${key} - ${value}`);
}
myObj2.logName();