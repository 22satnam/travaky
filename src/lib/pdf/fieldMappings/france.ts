import type { CountryMapping } from './index'
const france: CountryMapping = {
  textFields: {
    lastName:        ["applicantSurname"],
    firstName:       ["applicantFirstname"],
    dob:             ["applicantDateOfBirth"],
    birthPlace:      ["applicantPlaceOfBirth"],
    nationality:     ["Text9"],
    currentAddress:  ["applicantAddressL2"],
    passport:        ["travelDocNumber", "applicantIdCardNumber"],
    issueDate:       ["travelDocDateOfIssue"],
    expiryDate:      ["travelDocValidUntil"],
    phone:           ["applicantPhone"],
    email:           ["applicantAddressL5"],
    occupation:      ["applicantOccupation"],
    companyAddress:  ["applicantOccupationAddressL1","applicantOccupationAddressL2"],
    arrival:         ["dateOfArrival"],
    departure:       ["dateOfDeparture"],
    preVisadate: ["fingerprintsDate"],
    Visasticker:  ["formerBiometricVisa"],
  },
  checkboxFields: {
    gender: {
      Male:   "applicantGenderM",
      Female: "applicantGenderF",
      Other:  "applicantGenderA",
    },
 previousvisa: {
      No:  "hasFingerprintsFalse",
      Yes: "hasFingerprintsTrue",
    },

    maritalStatus: {
      Single:   "applicantMaritalCEL",
      Married:  "applicantMaritalMAR",
      Divorced: "applicantMaritalDIV",
      Widow:    "applicantMaritalVEU",
      Other:    "applicantMaritalAUT",
    },
 purposeOfTravel: {
      Tourism:  "Button1",
      Business: "purposeTRAV",
      Visitor:  "purposeVISF",
   },
  },
}

export default france
