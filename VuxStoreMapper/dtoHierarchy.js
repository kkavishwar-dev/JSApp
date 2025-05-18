/**
 * Reads a file, replaces all occurrences of a markup, and writes the updated content back to the file.
 * @param {string} filePath - The path to the file to process.
 * @param {string} markup - The markup placeholder to replace.
 * @param {string} replacement - The string to replace the markup with.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
function replaceMarkup(filePath, markup, replacement) {
  try {
    // Read the file contents



  

    console.log('Successfully replaced markup replacement');
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

/**
  * This script generates Vuex store getters and mutations based on the structure of a JSON object.
  * @param {Object} jsonObject - The JSON object to analyze.
  * @param {string} [currentPath=''] - The current path in the JSON object being processed. Defaults to an empty string.
*/

function getFullPaths(jsonObject, currentPath = '') {
  const paths = [];

  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      const fullPath = currentPath ? `${currentPath}.${key}` : key;

      if (typeof jsonObject[key] === 'object' && jsonObject[key] !== null) {
        // Add the current path if it's an object or array
        if (fullPath && paths.indexOf(fullPath) === -1) {
            let pathName = fullPath.replace(/.0./g, ''); // Remove zeroes from the path
            pathName = fullPath.replace(/.0/g, ''); // Remove any trailing zeroes from the path            
            paths.push(pathName); // Add the path to the list
        }

        // Recursively traverse deeper
        paths.push(...getFullPaths(jsonObject[key], fullPath));
      }
    }
  }

  return paths;
}

// Example usage
import dataMapper from './genMapper.js'; // Path to the generated mapper file
const { defRootObj } = dataMapper;
const allPaths = getFullPaths(defRootObj());

const fullPaths = new Set(allPaths.map(path => path)); // Get unique paths
//create Store getters for each path
const storeGetters = [];
fullPaths.forEach((path) => {
  const getterName = path.replace(/\./g, '_').toUpperCase(); // Replace dots with underscores for getter name
  const stName = `${path.charAt(0).toLowerCase() + path.slice(1)}`; // Convert first character to lowercase
  storeGetters.push(`GET_${getterName}(state) {\n return state.${stName}; \n}`);
});
storeGetters.unshift(`GET_STATE(state) {\n return state; \n}`); // Add a getter for the entire state

//create Store mutations for each path
const storeMutations = [];
fullPaths.forEach((path) => {
  const mutationName = path.replace(/\./g, '_').toUpperCase(); // Replace dots with underscores for mutation name
  const stName = `${path.charAt(0).toLowerCase() + path.slice(1)}`; // Convert first character to lowercase
  storeMutations.push(`SET_${mutationName}(state, payload) {\n state.${stName} = payload; \n}`);
});
storeMutations.unshift(`SET_STATE(state, payload) {\n state = payload; \n}`); // Add a mutation for the entire state
storeMutations.push(`RESET_STATE(state) {\n state = defRootObj(); \n}`); // Add a mutation to reset the state

//read the file and replace contents with the new getters and setters
const storeTemplatePath = './StoreTemplate.js'; // Path to the Vuex store template file
 const markupGetters = `"TODO": "REPLACE_GETTERS_SECTION"`;
 const markupMutations = `"TODO": "REPLACE_MUTATIONS_SECTION"`;

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = dirname(__filename); 
 const __filePath = path.resolve(__dirname, storeTemplatePath);
 const fileContents = fs.readFileSync(__filePath, 'utf8');

// Replace all occurrences of the markup
const updatedContents = fileContents.replace(new RegExp(markupGetters, 'g'), storeGetters.join(',\n'));
const newContents = updatedContents.replace(new RegExp(markupMutations, 'g'), storeMutations.join(',\n'));

// Write the updated contents back to the file
const updatedFilePath = path.resolve(__dirname, './genStore.js');
fs.writeFileSync(updatedFilePath, newContents, 'utf8');
  
 //replaceMarkup(storeTemplatePath, markupGetters, storeGetters.join(',\n'));
 //replaceMarkup(storeTemplatePath, markupMutations, storeMutations.join(',\n'));
//console.log(storeGetters.join(',\n'));
//console.log(storeMutations.join(',\n'));