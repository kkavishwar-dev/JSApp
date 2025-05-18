//import Dime
//import utils
import mapperFile from './genMapper.js'; // Path to the generated mapper file

const { defRootObj } = mapperFile;
//const {} = Dime
//const {} = getAxiosConfig("your apiKey");

export default {
  state: defRootObj(),
  getters: {
    "TODO": "REPLACE_GETTERS_SECTION",

  },
  mutations: {
    "TODO": "REPLACE_MUTATIONS_SECTION",

  },
  actions: {
    // Example action to reset the state
    resetState({ commit }) {
      commit("RESET_STATE");
    },

  }
}