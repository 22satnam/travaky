import type { CountryMapping } from './index'

const austria: CountryMapping = {
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
    arrival:         ["Text17"],
    departure:       ["Text18"],
    preVisadate:   ["Text19"],
    Visasticker :   ["Text20"],        
  },
  checkboxFields: {
    gender: {
      Male:   "Button27",
      Female: "Button28",
  
    },
    maritalStatus: {
      Single:   "Button30",
      Married:  "Button31",
      Divorced: "Button33",
     },
     purposeOfTravel: {
       Tourism: "Button35" ,
       Business:"Button36",
       Visitor: "Button37",

    },

  },
}

export default austria
