import type { CountryMapping } from './index'

const iceland: CountryMapping = {
  textFields: {
    lastName:        ["Surname 1"],
    firstName:       ["First name(s) 1"],
    dob:             ["Date of birth 1"],
    birthPlace:      ["Place of birth 1"],
    currentAddress:  ["Applicants home adress 1"],
    passport:        ["National identity number 1", "Number of trvel document 1"],
    issueDate:       ["Date of issue 1"],
    expiryDate:      ["Valid until 1"],
    phone:           ["Telephone no  1"],
    email:           ["Text9"],
    occupation:      ["Current occupation 1"],
    companyAddress:  ["Employer 1"],
    arrival:         ["Intended date of arrival 1"],
    departure:       ["Intended date of departure 1"],
    preVisadate: ["Date if known 1"],
    Visasticker:  ["Visa sticker number if known 1"],
  },
  checkboxFields: {
    gender: {
      Male:   "Button1",
      Female: "Button2",
      Other:  "Button3",
    },
     previousvisa: {
      No:  "Fingerprints",
      Yes: "Button4",
    },

    maritalStatus: {
      Single:   "Button8",
      Married:  "Button6",
      Divorced: "Button7",
      Widow:    "Button5",
    },
  purposeOfTravel: {
      Tourism:  "Tourism",
      Business: "Business¨",
      Visitor:  "Visiting family or friends",
    },

  },
}

export default iceland
