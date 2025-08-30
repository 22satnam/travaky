import type { CountryMapping } from './index'

const greece: CountryMapping = {
  textFields: {
    lastName:        ["Surname"],
    firstName:       ["Firstname"],
    dob:             ["DOB"],
    birthPlace:      ["Place"],
    currentAddress:  ["Home add"],
    passport:        ["PP1", "PP2"],
    issueDate:       ["Date of issue"],
    expiryDate:      ["Valid until"],
    phone:           ["Phno"],
    email:           ["email"],
    occupation:      ["Occupation"],
    companyAddress:  ["Employer ad"],
    arrival:         ["Arrival"],
    departure:       ["Departure"],
    preVisadate: ["Visa date"],
    Visasticker:  ["Sticker"],

  },
  checkboxFields: {
    gender: {
      Male:   "checkbox_139eluj",
      Female: "checkbox_138yneo",
    },
  previousvisa: {
      No:  "checkbox_235tvjb",
      Yes: "checkbox_236kesu",
    },

    maritalStatus: {
      Single:   "checkbox_140krnd",
      Married:  "checkbox_141zmzq",
      Divorced: "checkbox_143rvxs",
      Widow:    "Button28",
    },
purposeOfTravel: {
      Tourism:  "checkbox_147hzgx",
      Business: "checkbox_146mrnr",
      Visitor:  "checkbox_145yejn",
    },

  },
}

export default greece
