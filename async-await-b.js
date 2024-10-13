import {readFromFile} from './functions-a.js';

async function getData() {
    const data = await readFromFile('data.json');
    console.log(`completed data from mockSvc`);
    return data;
}

async function processData() {
    const data = await getData();
    const pArr = JSON.parse(data);
    const per = pArr.filter((person) => person.lastName === "Carney");
    console.log(JSON.stringify(per));
    console.log(`completed processing`);
}

processData();

