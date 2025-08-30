import type { CountryMapping } from './index'

const malta: CountryMapping = {
  textFields: {
    lastName:        ["Text1"],
    firstName:       ["Text2"],
    dob:             ["Text3"],
    birthPlace:      ["Text4"],
    currentAddress:  ["Text12"],
    passport:        ["Text8", "Text7"],
    issueDate:       ["Text9"],
    expiryDate:      ["Text10"],
    phone:           ["Text13"],
    email:           ["Text14"],
    occupation:      ["Text15"],
    companyAddress:  ["Text16"],
    arrival:         ["Text20"],
    departure:       ["Text21"],
    preVisadate: ["Text22"],
    Visasticker:  ["Text23"],

  },
  checkboxFields: {
    gender: {
      Male:   "Button22",
      Female: "Button23",
    },
  previousvisa: {
      No:  "Button1",
      Yes: "Button2",
    },

    maritalStatus: {
      Single:   "Button25",
      Married:  "Button26",
      Divorced: "Button27",
      Widow:    "Button28",
    },
    purposeOfTravel: {
      Tourism:  "Button32",
      Business: "Button33",
      Visitor:  "Button34",
    },

  },
}

export default malta
