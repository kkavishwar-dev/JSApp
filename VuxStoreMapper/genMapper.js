const indicatorsObj = function () {
       return {
              accountType: '',
              subAccountType: '',
       }
}

const retirementDataObj = function () {
       return {
              planName: '',
              planType: '',
              contributionRate: 0,
              employerMatch: 0,
       }
}

const accountLimitObj = function () {
       return {
              type: '',
              amount: 0,
       }
}

const transferDetailsObj = function () {
       return {
              frequencyType: '',
              accountLimit: [accountLimitObj()],
              preDisclaimerCodes: '',
              postDisclaimerCodes: '',
              disclaimerText: '',
       }
}

const eligibleFromAccountsObj = function () {
       return {
              displayName: '',
              groupId: '',
              indicators: indicatorsObj(),
              retirementData: retirementDataObj(),
              transferDetails: [transferDetailsObj()],
              accountType: '',
              accountNumber: '',
              accountName: '',
              accountBalance: 0,
       }
}

const interestsObj = function () {
       return {
              name: '',
              category: '',
       }
}

const phoneNumsObj = function () {
       return {
              type: '',
              value: '',
       }
}

const contactsObj = function () {
       return {
              country: '',
              countryCd: '',
              phoneNums: [phoneNumsObj()],
       }
}

const coordinatesObj = function () {
       return {
              latitude: 0,
              longitude: 0,
       }
}

const addressObj = function () {
       return {
              street: '',
              city: '',
              state: '',
              zip: '',
              contacts: contactsObj(),
              coordinates: coordinatesObj(),
       }
}

const userProfileObj = function () {
       return {
              username: '',
              email: '',
              fullName: '',
              age: 0,
              location: '',
              eligibleFromAccounts: [eligibleFromAccountsObj()],
              interests: [interestsObj()],
              address: addressObj(),
              isSubscribed: false,
              lastLogin: '',
       }
}

const stateListObj = function () {
       return {
              state: '',
              stateCd: '',
              countryCd: '',
              country: '',
       }
}

const countryListObj = function () {
       return {
              country: '',
              countryCd: '',
       }
}

const defRoot = function () {
       return {
              userProfile: userProfileObj(),
              stateList: [stateListObj()],
              countryList: [countryListObj()],
       }
}

const defRootObj = function () {
       return defRoot();
}

export default { defRootObj };