const outerFn = () => {
  var delay = Math.floor(Math.random() * 1000 + 3000);

  const innerFn = () => {
     setTimeout(() => {
       console.log(`delay ${delay}`);
     }, delay);
  }
  return innerFn;
};

for (let index = 0; index < 10; index++) {
 const print = outerFn();
 print();  
}

console.log("UI Thread - after outerFn");
//--------------------------------
// const cc = function(initVal = 0) {
//   let counter = initVal;

//   const ic = () => {
//     console.log(`in inner function ${counter}`);
//     return counter++;
//   }
//   return ic;
// }

// const a = cc(10);
// console.log(a);
// console.log(a());
// console.log(a());
// console.log(a());