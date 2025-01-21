function sumAll (...nums){
  //let sum = 0;
  //nums.forEach((num) => (sum += num));
  const sum = nums.reduce((total, currentVal) => total + currentVal, 0);
  return sum;
}

console.log(sumAll(10,20));
console.log(sumAll(10,20,30));
console.log(sumAll(10,20,30,40));

const logTime = function() {
  console.log(`current time ${new Date().toLocaleString()}`)
}

setTimeout(logTime, 2000);
//setInterval(logTime, 2000);