//Example of creating a Promise
const createPromise = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve({id: 1, name: 'Jim Cooper', dob: '05/10/1970'});
      }, 2000);
  });
}

createPromise()
.then(data => console.log(data));