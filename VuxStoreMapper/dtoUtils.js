import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

/**
 * * Returns the absolute path of a file relative to the current module.
 * * @param {string} file - The relative path of the file.
 * * @returns {string} - The absolute path of the file.
*/
export function getUpdatedFilePath(file) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const updatedFilePath = path.resolve(__dirname, file);
  return updatedFilePath;
}


/**
 * Dynamically generates a strongly typed mapper Objects from a JSON object.
 * @param {Object} json The JSON object to generate the mapper Objects from.
 * @param {string} objName The name of the object in the generated mapper.
*/
export const fcCollection = new Map();
export function generateMapper(json, objName) {
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

  if (!fcCollection.has(objName)) {
    const data = `return {\n${fields.replace(/\nundefined/g, '')}\n}`;
    fcCollection.set(objName, data);
  }
}

/**
  * This function generates Vuex store getters and mutations based on the structure of a JSON object.
  * @param {Object} jsonObject - The JSON object to analyze.
  * @param {string} [currentPath=''] - The current path in the JSON object being processed. Defaults to an empty string.
*/
export function getFullPaths(jsonObject, currentPath = '') {
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

/**
 * * Generates Vuex store getters based on the provided paths.
 * * @param {Array} fullPaths - An array of paths to generate getters for.
 * * @returns {Array} - An array of Vuex store getters.
*/
export function genStoreGetters(fullPaths) {
  //create Store getters for each path
  const storeGetters = [];
  fullPaths.forEach((path) => {
    const getterName = path.replace(/\./g, '_').toUpperCase(); // Replace dots with underscores for getter name
    const stName = `${path.charAt(0).toLowerCase() + path.slice(1)}`; // Convert first character to lowercase
    storeGetters.push(`GET_${getterName}(state) {\n return state.${stName}; \n}`);
  });
  storeGetters.unshift(`GET_STATE(state) {\n return state; \n}`); // Add a getter for the entire state

  return storeGetters; // Return the array of getters
}

/**
 * * Generates Vuex store mutations based on the provided paths.
 * * @param {Array} fullPaths - An array of paths to generate mutations for.
 * * @returns {Array} - An array of Vuex store mutations.
*/
export function genStoreMutations(fullPaths) {
  const storeMutations = [];
  fullPaths.forEach((path) => {
    const mutationName = path.replace(/\./g, '_').toUpperCase(); // Replace dots with underscores for mutation name
    const stName = `${path.charAt(0).toLowerCase() + path.slice(1)}`; // Convert first character to lowercase
    storeMutations.push(`SET_${mutationName}(state, payload) {\n state.${stName} = payload; \n}`);
  });
  storeMutations.unshift(`SET_STATE(state, payload) {\n state = payload; \n}`); // Add a mutation for the entire state
  storeMutations.push(`RESET_STATE(state) {\n state = defRootObj(); \n}`); // Add a mutation to reset the state

  return storeMutations; // Return the array of mutations
}

/**
 * * Replaces the contents of a file with new getters and mutations.
 * * @param {Array} storeGetters - An array of Vuex store getters.
 * * @param {Array} storeMutations - An array of Vuex store mutations.
 * * @returns {string} - The updated contents of the file.
 */
export function replaceTemplateContents(storeGetters, storeMutations) {
  //read the file and replace contents with the new getters and setters
  const storeTemplatePath = './StoreTemplate.js'; // Path to the Vuex store template file
  const markupGetters = `"TODO": "REPLACE_GETTERS_SECTION"`;
  const markupMutations = `"TODO": "REPLACE_MUTATIONS_SECTION"`;

  const __filePath = getUpdatedFilePath(storeTemplatePath); // Path to the Vuex store template file
  const fileContents = fs.readFileSync(__filePath, 'utf8');

  // Replace all occurrences of the markup
  const updatedContents = fileContents.replace(new RegExp(markupGetters, 'g'), storeGetters.join(',\n'));
  const newContents = updatedContents.replace(new RegExp(markupMutations, 'g'), storeMutations.join(',\n'));

  return newContents; // Return the updated contents
}

