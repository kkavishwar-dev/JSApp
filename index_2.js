import { readFromFile } from "./functions-a.js";

function test() {
    readFromFile().then((result) => {
      let emps = JSON.parse(result);
      emps.forEach(o => {
          Object.entries(o).forEach(([key,value]) => {
            console.log(`${key}: ${value}`);
          });
          console.log('----------');
      });    
    }).catch((err) => {
      console.log(err);
    });
}

test();