function deleteNestedObjects(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && (typeof obj[key] === 'object' || Array.isArray(obj[key]))) {
        delete obj[key];
      }
    }
  }
  return obj;
}


const myObject = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 4,
    e: {
      f: 5,
    }
  }
};

const tmp = {...myObject};
//delete tmp.c.e;
const newObj = deleteNestedObjects(tmp);
console.log(JSON.stringify(myObject)); 
console.log(JSON.stringify(tmp)); // { a: 1 }
