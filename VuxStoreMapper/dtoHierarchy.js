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
//A - TODO - user input the path to the generated mapper file
//B - TODO - user provides the default export object name
//TODO - can default export object name be determined dynamically?
import dataMapper from '../userProfile.js';
const { userProfileObj } = dataMapper;
const allPaths = getFullPaths(userProfileObj());

const fullPaths = new Set(allPaths.map(path => path)); // Get unique paths
//create Store getters for each path
const storeGetters = [];
fullPaths.forEach((path) => {
  const getterName = path.replace(/\./g, '_').toUpperCase(); // Replace dots with underscores for getter name
  const stName = `${path.charAt(0).toLowerCase() + path.slice(1)}`; // Convert first character to lowercase
  storeGetters.push(`GET_${getterName}(state) {\n return state.${stName}; \n}`);
});

//create Store mutations for each path
const storeMutations = [];
fullPaths.forEach((path) => {
  const mutationName = path.replace(/\./g, '_').toUpperCase(); // Replace dots with underscores for mutation name
  const stName = `${path.charAt(0).toLowerCase() + path.slice(1)}`; // Convert first character to lowercase
  storeMutations.push(`SET_${mutationName}(state, payload) {\n state.${stName} = payload; \n}`);
});

//TODO - read file and replace contents with the new getters and setters
console.log(storeGetters.join(',\n'));
console.log(storeMutations.join(',\n'));