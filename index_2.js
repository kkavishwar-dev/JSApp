import { readFromFile } from "./functions-a.js";

function test() {
    readFromFile().then((result) => {
      let emps = JSON.parse(result);
      emps.forEach(o => {
          //console.log(`${Object.entries(o)[0]} - ${Object.entries(o)[2]}`);
          Object.entries(o).forEach(([key,value]) => {
            if (key === "email") console.log(`${key}: ${value}`);
          });
          console.log('----------');
      });    
    }).catch((err) => {
      console.log(err);
    });
}

test();