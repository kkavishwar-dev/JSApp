const myObj = {
  id: 1,  firstName: "Peter",  lastName: "Parker",  dob: new Date(1980, 3, 15)
}

Object.keys(myObj).forEach((key) => {
    console.log(key);
})
console.log('---------');
for (const [key, value] of Object.entries(myObj)){
  console.log(`${key} - ${value}`);
}
