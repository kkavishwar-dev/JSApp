import {readFromFile} from './functions-a.js';
const data = await readFromFile('data.json');
console.log(`completed data from mockSvc`);

const mokSvc = (cb) => {
  console.log(cb);
  setTimeout(() => {
    cb(data);
  }, 3000)
}

const getData = () => {
  mokSvc((data) => {
    const pArr = JSON.parse(data);
    const per = pArr.filter((person) => person.lastName === "Carney");
    console.log(JSON.stringify(per));
  });
}

getData();