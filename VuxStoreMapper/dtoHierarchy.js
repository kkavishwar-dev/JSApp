function getFullPaths(jsonObject, currentPath = '') {
  const paths = [];

  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      const fullPath = currentPath ? `${currentPath}.${key}` : key;

      if (typeof jsonObject[key] === 'object' && jsonObject[key] !== null) {
        // Add the current path if it's an object or array
        if (paths.indexOf(fullPath) === -1 && !fullPath.includes('0')) {
          if (fullPath && fullPath.includes('.')) {
            paths.push(fullPath);
          }
        }

        // Recursively traverse deeper
        paths.push(...getFullPaths(jsonObject[key], fullPath));
      }
    }
  }

  return paths;
}

// Example usage
//import userProfileObj from '../userProfile.js';
import fnolAuto from "../fnolAuto.js";

const fullPaths = getFullPaths(fnolAuto);
const statePaths = [];

//TODO - create Store getters and setters for each path
//TODO - read file and replace contents with the new getters and setters
fullPaths.forEach((path) => {
  const pathParts = path.split('.');
  pathParts[0] = 'state'; // Change the first part to 'state'
  statePaths.push(pathParts.join('.'));
});
console.log(statePaths)  