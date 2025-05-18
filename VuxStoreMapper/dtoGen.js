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
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
//A - TODO - user input the path to the JSON file - file name
import jsonData from '../VuxStoreMapper/dataFile.json' with { type: 'json' };

const defExport = 'defRoot';
if (Array.isArray(jsonData)) {
  generateMapper(jsonData[0], defExport);
} else {
  generateMapper(jsonData, defExport);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 
const updatedFilePath = path.resolve(__dirname, './genMapper.js');

let keyName = '';
let i = 0;
fcCollection.forEach((value, key) => {
    i++;
    if(i === 1){
      fs.writeFileSync(updatedFilePath, `const ${key} = function(){\n${value}\n}`, 'utf-8');
    } else {
      fs.appendFileSync(updatedFilePath, `\n\nconst ${key} = function(){\n${value}\n}`, 'utf-8');
    }
     keyName = key;
});

const exportName = defExport ? defExport + 'Obj': keyName + 'Obj';
fs.appendFileSync(updatedFilePath, `\n\nconst ${exportName} = function(){\n return ${keyName}();}`, 'utf-8');
fs.appendFileSync(updatedFilePath, `\n\nexport default { ${exportName} };`, 'utf-8');

console.log(`${updatedFilePath} created successfully!`);