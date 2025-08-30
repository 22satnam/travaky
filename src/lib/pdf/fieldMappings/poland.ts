import type { CountryMapping } from './index'

const poland: CountryMapping = {
  textFields: {
    lastName:        ["Text1"],
    firstName:       ["Text2"],
    dob:             ["Text3"],
    birthPlace:      ["Text4"],
    currentAddress:  ["Text8"],
    passport:        ["Text13", "Text7"],
    issueDate:       ["Text14"],
    expiryDate:      ["Text15"],
    phone:           ["Text9"],
    email:           ["Text10"],
    occupation:      ["Text11"],
    companyAddress:  ["Text12"],
    arrival:         ["Text22"],
    departure:       ["Text23"],
    preVisadate:   ["Text20"],
           
  },
  checkboxFields: {
    gender: {
      Male:   "Button29",
      Female: "Button30",
  
    },
    maritalStatus: {
      Single:   "Button31",
      Married:  "Button32",
      Divorced: "Button33",
      Widow:    "Button34",
     },
     purposeOfTravel: {
       Tourism: "Button36" ,
       Business:"Button37",
       Visitor: "Button38",

    },

  },
}

export default poland
