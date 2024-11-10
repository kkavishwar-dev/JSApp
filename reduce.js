import { readFromFile } from "./functions-a.js";

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Bob", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = Object.hasOwn(allNames, name) ? allNames[name] : 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});

for(const [key, value] of Object.entries(countedNames)){
  console.log(`${key}-${value}`);
}

function getTotalSR() {
  readFromFile().then((res) => {
    let empArray = JSON.parse(res);
    const totalSR = empArray.reduce(
      (total, emp) => total + emp.starRating, 0);
      
      console.log(`TotalStarRating ${totalSR}`);
  });
}

getTotalSR();