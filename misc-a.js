
const array = ['1', '5', '1', '7', '5', '7'];
const number = array.map(n => Number(n));
console.log(number);

const nArray = number.filter(n => !isNaN(n));
const mean = nArray.reduce((acc, n) => acc + n, 0) / nArray.length;
const diff = nArray.map(el => (el - mean).toFixed(2));
console.log(diff);

const array1 = ["bad", "moron"];
const value = "This isn't a bAD example";
const containsAny = array1.some(str => value.toLowerCase().includes(str));
console.log(containsAny);

const object1 = {a: 1,  b: 2,};
const object2 = {b: 4, c: 5,};
const object3 = Object.assign(object1, object2);
object3.d = 100;

console.log(object1);
console.log(object2);
console.log(object3 === object1);