import { getFullPaths, getUpdatedFilePath, genStoreGetters, genStoreMutations, replaceTemplateContents } from './dtoUtils.js';
import fs from 'node:fs';

// Example usage
import dataMapper from './genMapper.js'; // Path to the generated mapper file
const { defRootObj } = dataMapper;
const allPaths = getFullPaths(defRootObj());
const fullPaths = new Set(allPaths.map(path => path)); // Get unique paths

const storeGetters = genStoreGetters(fullPaths); // Generate Vuex store getters
const storeMutations = genStoreMutations(fullPaths); // Generate Vuex store mutations

const newContents = replaceTemplateContents(storeGetters, storeMutations); // Replace template contents
const updatedFilePath = getUpdatedFilePath('./genStore.js'); // Path to the generated Vuex store file
// Write the updated contents back to the file
fs.writeFileSync(updatedFilePath, newContents, 'utf8');

//console.log(storeGetters.join(',\n'));
//console.log(storeMutations.join(',\n'));