/**
 * Dynamically generates a strongly typed mapper Objects from a JSON object.
 * @param {Object} json The JSON object to generate the mapper Objects from.
 * @param {string} objName The name of the object in the generated mapper.
*/

const fcCollection = new Map();
function generateMapper(json, objName) {
  const getTypeVal = (value) => {
    switch (typeof value) {
      case 'string':
        return `''`;
      case 'number':
        return 0;
      case 'boolean':
        return false;
      case 'object':
        return {};
      default:
        return null;
    }
  };

  const generateFields = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('Input must be a non-null object');
    }

    return Object.entries(obj)
      .map(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value) && value != null) {
          const nestedName = `${key.charAt(0).toLowerCase() + key.slice(1) + 'Obj'}`;
          return `     ${key}: ${nestedName}(),\n${generateMapper(value, nestedName)}`;
        }
        if (typeof value === 'object' && Array.isArray(value) && value != null) {
          const nestedName = `${key.charAt(0).toLowerCase() + key.slice(1) + 'Obj'}`;
          return `    ${key}: [${nestedName}()],\n${generateMapper(value[0], nestedName)}`;
        }
        return `       ${key}: ${getTypeVal(value)},`;
      })
      .join('\n');
  };

  const fields = generateFields(json);

  if(!fcCollection.has(objName)){
    const data = `return {\n${fields.replace(/\nundefined/g, '')}\n}`;
    fcCollection.set(objName, data);
  }
}

// Example usage:
import fs from 'node:fs';
//A - TODO - user input the path to the JSON file - file name
import jsonData from '../VuxStoreMapper/data-userProfile.json' with { type: 'json' };
//import jsonData from '../VuxStoreMapper/data-Auto.json' with { type: 'json' };

//B - TODO - user input the name of the default export object
const defExport = 'userProfile';
//const defExport = 'fnolAuto';
if (Array.isArray(jsonData)) {
  generateMapper(jsonData[0], defExport);
} else {
  generateMapper(jsonData, defExport);
}

//C - TODO - user input the name of the file to be created
const fileName = 'userProfile.js';
//const fileName = 'fnolAuto.js';

let keyName = '';
let i = 0;
fcCollection.forEach((value, key) => {
    i++;
    if(i === 1){
      fs.writeFileSync(`./${fileName}`, `const ${key} = function(){\n${value}\n}`, 'utf-8');
    } else {
      fs.appendFileSync(`./${fileName}`, `\n\nconst ${key} = function(){\n${value}\n}`, 'utf-8');
    }
     keyName = key;
});

const exportName = defExport ? defExport + 'Obj': keyName + 'Obj';
fs.appendFileSync(`./${fileName}`, `\n\nconst ${exportName} = function(){\n return ${keyName}();}`, 'utf-8');
fs.appendFileSync(`./${fileName}`, `\n\nexport default { ${exportName} };`, 'utf-8');

console.log('mapper file created successfully!');