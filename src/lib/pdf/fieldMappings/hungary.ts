import type { CountryMapping } from './index'

const hungary: CountryMapping = {
  textFields: {
    lastName:        ["Text1"],
    firstName:       ["Text2"],
    dob:             ["Text3"],
    birthPlace:      ["Text4"],
    currentAddress:  ["Text13"],
    passport:        ["Text8", "Text7"],
    issueDate:       ["Text9"],
    expiryDate:      ["Text10"],
    phone:           ["Text41"],
    email:           ["Text43"],
    occupation:      ["Text12"],
    companyAddress:  ["Text42"],
    arrival:         ["Text16"],
    departure:       ["Text17"],
    preVisadate:   ["Text18"],
    Visasticker :   ["Text19"],         
  },
  checkboxFields: {
    gender: {
      Male:   "Button26",
      Female: "Button27",
  
    },
    maritalStatus: {
      Single:   "Button28",
      Married:  "Button29",
      Divorced: "Button31",
      Widow:    "Button30",
     },
     purposeOfTravel: {
       Tourism: "Button33" ,
       Business:"Button34",
       Visitor: "Button35",

    },

  },
}

export default hungary
