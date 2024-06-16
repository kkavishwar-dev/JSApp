import fs from "node:fs/promises";
import { resolve } from "node:path";

function timeDelay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

const readFromFile = async function(){
  const data = await fs.readFile('./data.json', 'utf-8');
  return data;
};

const logMsg = () => {
  setTimeout(() => {
    console.log(`from setTimeOut function`);
  }, 10);
}

export {readFromFile, logMsg}