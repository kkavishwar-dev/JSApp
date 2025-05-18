import { generateMapper, fcCollection, getUpdatedFilePath } from './dtoUtils.js';
import fs from 'node:fs';

// Example usage:
//TODO - user input the path to the JSON file - file name
import jsonData from '../VuxStoreMapper/dataFile.json' with { type: 'json' };

const defExport = 'defRoot';
if (Array.isArray(jsonData)) {
  generateMapper(jsonData[0], defExport);
} else {
  generateMapper(jsonData, defExport);
}

const updatedFilePath = getUpdatedFilePath('./genMapper.js'); // Path to the generated mapper file
let keyName = '';
let i = 0;
fcCollection.forEach((value, key) => {
  i++;
  if (i === 1) {
    fs.writeFileSync(updatedFilePath, `const ${key} = function(){\n${value}\n}`, 'utf-8');
  } else {
    fs.appendFileSync(updatedFilePath, `\n\nconst ${key} = function(){\n${value}\n}`, 'utf-8');
  }
  keyName = key;
});

const exportName = defExport ? defExport + 'Obj' : keyName + 'Obj';
fs.appendFileSync(updatedFilePath, `\n\nconst ${exportName} = function(){\n return ${keyName}();}`, 'utf-8');
fs.appendFileSync(updatedFilePath, `\n\nexport default { ${exportName} };`, 'utf-8');

console.log(`${updatedFilePath} created successfully!`);