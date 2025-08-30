import type { CountryMapping } from './index'

const sweden: CountryMapping = {
  textFields: {
    lastName:        ["1 Surname"],
    firstName:       ["3 First names"],
    dob:             ["4 Date of birth"],
    birthPlace:      ["5 Place of birth"],
    currentAddress:  ["19 Applicants home address and email address"],
    passport:        ["11 National identity number", "13 Number of travel document"],
    issueDate:       ["14 Date of issue"],
    expiryDate:      ["15 Valid until"],
    phone:           ["19 Telephone no"],
    email:           ["19 Applicants home address and email address"],
    occupation:      ["21 Current occupation"],
    companyAddress:  ["22 Employer and employers address and telephone number"],
    arrival:         ["27 Intended date of arrival of the first intended stay in the Schengen area"],
    departure:       ["27 Intended date of departure from the Schengen area after the first intended stay"],
    preVisadate:   ["28 Date fingerprints previously were collected"],
    Visasticker :   ["28 Number of the visa, if known"],        
  },
  checkboxFields: {
    gender: {
      Male:   "8 Sex",
      Female: "Button1",
  
    },
    maritalStatus: {
      Single:   "9 Civil status",
      Married:  "Button3",
      Divorced: "Button4",
     },
     purposeOfTravel: {
       Tourism: "Button6" ,
       Business:"Button7",
       Visitor: "Button8",

    },

  },
}


export default sweden
