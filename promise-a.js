//Example of creating a Promise
const createPromise = function(){
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve("timeout");
      }, 2000);
  });
}

createPromise()
.then(data => console.log(data));