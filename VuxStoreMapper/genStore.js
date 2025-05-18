//import Dime
//import utils
import mapperFile from './genMapper.js'; // Path to the generated mapper file

const { defRootObj } = mapperFile;
//const {} = Dime
//const {} = getAxiosConfig("your apiKey");

export default {
  state: defRootObj(),
  getters: {
    GET_STATE(state) {
      return state;
    },
    GET_USERPROFILE(state) {
      return state.userProfile;
    },
    GET_USERPROFILE_ELIGIBLEFROMACCOUNTS(state) {
      return state.userProfile.eligibleFromAccounts;
    },
    GET_USERPROFILE_ELIGIBLEFROMACCOUNTS_INDICATORS(state) {
      return state.userProfile.eligibleFromAccounts.indicators;
    },
    GET_USERPROFILE_ELIGIBLEFROMACCOUNTS_RETIREMENTDATA(state) {
      return state.userProfile.eligibleFromAccounts.retirementData;
    },
    GET_USERPROFILE_ELIGIBLEFROMACCOUNTS_TRANSFERDETAILS(state) {
      return state.userProfile.eligibleFromAccounts.transferDetails;
    },
    GET_USERPROFILE_ELIGIBLEFROMACCOUNTS_TRANSFERDETAILS_ACCOUNTLIMIT(state) {
      return state.userProfile.eligibleFromAccounts.transferDetails.accountLimit;
    },
    GET_USERPROFILE_INTERESTS(state) {
      return state.userProfile.interests;
    },
    GET_USERPROFILE_ADDRESS(state) {
      return state.userProfile.address;
    },
    GET_USERPROFILE_ADDRESS_CONTACTS(state) {
      return state.userProfile.address.contacts;
    },
    GET_USERPROFILE_ADDRESS_CONTACTS_PHONENUMS(state) {
      return state.userProfile.address.contacts.phoneNums;
    },
    GET_USERPROFILE_ADDRESS_COORDINATES(state) {
      return state.userProfile.address.coordinates;
    },
    GET_STATELIST(state) {
      return state.stateList;
    },
    GET_COUNTRYLIST(state) {
      return state.countryList;
    },

  },
  mutations: {
    SET_STATE(state, payload) {
      state = payload;
    },
    SET_USERPROFILE(state, payload) {
      state.userProfile = payload;
    },
    SET_USERPROFILE_ELIGIBLEFROMACCOUNTS(state, payload) {
      state.userProfile.eligibleFromAccounts = payload;
    },
    SET_USERPROFILE_ELIGIBLEFROMACCOUNTS_INDICATORS(state, payload) {
      state.userProfile.eligibleFromAccounts.indicators = payload;
    },
    SET_USERPROFILE_ELIGIBLEFROMACCOUNTS_RETIREMENTDATA(state, payload) {
      state.userProfile.eligibleFromAccounts.retirementData = payload;
    },
    SET_USERPROFILE_ELIGIBLEFROMACCOUNTS_TRANSFERDETAILS(state, payload) {
      state.userProfile.eligibleFromAccounts.transferDetails = payload;
    },
    SET_USERPROFILE_ELIGIBLEFROMACCOUNTS_TRANSFERDETAILS_ACCOUNTLIMIT(state, payload) {
      state.userProfile.eligibleFromAccounts.transferDetails.accountLimit = payload;
    },
    SET_USERPROFILE_INTERESTS(state, payload) {
      state.userProfile.interests = payload;
    },
    SET_USERPROFILE_ADDRESS(state, payload) {
      state.userProfile.address = payload;
    },
    SET_USERPROFILE_ADDRESS_CONTACTS(state, payload) {
      state.userProfile.address.contacts = payload;
    },
    SET_USERPROFILE_ADDRESS_CONTACTS_PHONENUMS(state, payload) {
      state.userProfile.address.contacts.phoneNums = payload;
    },
    SET_USERPROFILE_ADDRESS_COORDINATES(state, payload) {
      state.userProfile.address.coordinates = payload;
    },
    SET_STATELIST(state, payload) {
      state.stateList = payload;
    },
    SET_COUNTRYLIST(state, payload) {
      state.countryList = payload;
    },
    RESET_STATE(state) {
      state = defRootObj();
    },

  },
  actions: {
    // Example action to reset the state
    resetState({ commit }) {
      commit("RESET_STATE");
    },

  }
}