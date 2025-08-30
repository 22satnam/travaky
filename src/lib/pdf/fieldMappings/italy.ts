import type { CountryMapping } from './index'

const italy: CountryMapping = {
  textFields: {
    lastName:        ["Text1"],
    firstName:       ["Text2"],
    dob:             ["Text3"],
    birthPlace:      ["Text4"],
    currentAddress:  ["Text12"],
    passport:        ["Text7", "Text8"],
    issueDate:       ["Text9"],
    expiryDate:      ["Text10"],
    phone:           ["Text14"],
    email:           ["Text13"],
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
      Other:  "Button24",
    },
  previousvisa: {
      No:  "Button4",
      Yes: "Button5",
    },

    maritalStatus: {
      Single:   "Button25",
      Married:  "Button26",
      Divorced: "Button27",
      Widow:    "Button28",
    },
    purposeOfTravel: {
      Tourism:  "Button1",
      Business: "Button2",
      Visitor:  "Button3",
    },

  },
}

export default italy
