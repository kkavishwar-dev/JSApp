const p1 = new Promise((resolve, reject) => 
  setTimeout(resolve, 3000, 'slowest'));
const p2 = new Promise((resolve, reject) => 
  setTimeout(reject, 1500, 'fastest'));
const p = [p1, p2];

//reject will be caught by the catch block as it is the first promise to be rejected
Promise.all(p)
.then(value => console.log(`then block - ${value}`))
.catch(err => console.log(`catch block - ${err}`));
Promise.race(p)
.then(value => console.log(`then block - ${value}`))
.catch(err => console.log(`catch block - ${err}`));

//error will be logged as none of the promises were resolved
Promise.any(p)
.then(value => console.log(`then block - ${value}`))
.catch(err => console.log(`catch block - ${err}`));