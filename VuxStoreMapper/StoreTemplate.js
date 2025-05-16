//import Dime
//import utils
//TODO - import created dataMapping file
import mapperFile from "../userProfile.js";

const {userProfileObj} = mapperFile;
//const {} = Dime
//const {} = getAxiosConfig("your apiKey");

export default {
  state: userProfileObj(),
  getters: {
    "TODO": "REPLACE_GETTERS_SECTION",
    
  },
  mutations: {
    "TODO": "REPLACE_MUTATIONS_SECTION",

    RESET_STATE: (state) => { 
      // Reset the state to its initial value
      state = userProfileObj();  
    },    
  },
  actions: {
    // Example action to reset the state
    resetState({ commit }) {
      commit("RESET_STATE");
    },
    
  }
}