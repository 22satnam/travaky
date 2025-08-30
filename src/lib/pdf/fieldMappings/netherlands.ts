import type { CountryMapping } from './index'

const netherlands : CountryMapping = {
  textFields: {
    lastName:        ["Text1"],
    firstName:       ["Text2"],
    dob:             ["Text3"],
    birthPlace:      ["Text4"],
    currentAddress:  ["Text12"],
    passport:        ["Text7", "Text8"],
    issueDate:       ["Text9"],
    expiryDate:      ["Text10"],
    phone:           ["Text13"],
    email:           ["Text11"],
    occupation:      ["Text14"],
    companyAddress:  ["Text15"],
    arrival:         ["Text21"],
    departure:       ["Text22"],
     gender: {
      Male:   ["Text5"],
      Female: ["Text5"],
      Other:  ["Text5"],
    },
    maritalStatus: {
      Single:   ["Text6"],
      Married:  ["Text6"],
      Divorced: ["Text6"],
      Widow:    ["Text6"],
      Other:    ["Text6"],
    },
 purposeOfTravel: {
      Tourism:  ["Text16"],
      Business: ["Text16"],
      Visitor:  ["Text16"],
   },
  },
}
export default netherlands
