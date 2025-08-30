import type { CountryMapping } from './index'

const germany: CountryMapping = {
  textFields: {
    lastName:        ["Text1"],
    firstName:       ["Text2"],
    dob:             ["Text3"],
    birthPlace:      ["Text4", "Text5"],
    currentAddress:  ["Text11"],
    passport:        ["Text28", "Text7"],
    issueDate:       ["Text8"],
    expiryDate:      ["Text9"],
    phone:           ["Text13"],
    email:           ["Text12"],
    occupation:      ["Text14"],
    companyAddress:  ["Text16"],
    arrival:         ["Text20"],
    departure:       ["Text21"],
    preVisadate: ["Text15"],
    Visasticker:  ["Text22"]
  },
  checkboxFields: {
    gender: {
      Male:   "Button22",
      Female: "Button23"
    },
    previousvisa: {
      No:  "Button5",
      Yes: "Button6"
    },
    maritalStatus: {
      Single:   "Button24",
      Married:  "Button25",
      Divorced: "Button26",
      Widow:    "Button27"
    },
  purposeOfTravel  : {
      Tourism:  "Button35",
      Business: "Button36",
      Visitor:  "Button37"
    }
  }
}

export default germany
