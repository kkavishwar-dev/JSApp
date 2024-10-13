const p1 = new Promise((resolve, reject) => 
  setTimeout(reject, 500, 'slowest'));
const p2 = new Promise((resolve, reject) => 
  setTimeout(reject, 40, 'fastest'));
const p = [p1, p2];

//reject will be caught by the catch block as it is the first promise to be rejected
Promise.all(p)
Promise.race(p)
.then(value => console.log(value))
.catch(err => console.log(err));

//error will be logged as none of the promises were resolved
Promise.any(p)
.then(value => console.log(value))
.catch(err => console.log(err));