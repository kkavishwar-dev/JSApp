import fs from "node:fs/promises";

function timeDelay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

const readFromFile = async function(){
  await timeDelay(3000).then(() => console.log(`readFromFile - data retrieved`));
  return await fs.readFile('./data.json', 'utf-8');
};

const logMsg = () => {
  setTimeout(() => {
    console.log(`from setTimeOut function`);
  }, 10);
}

export {readFromFile, logMsg}