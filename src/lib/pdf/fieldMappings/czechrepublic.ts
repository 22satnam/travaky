import type { CountryMapping } from './index'

const czechrepublic: CountryMapping = {
  textFields: {
    lastName:        ['Text1'],
    firstName:       ['Text2'],
    dob:             ['Text3'],
    birthPlace:      ['Text4'],
    currentAddress:  ['Text14'],
    passport:        ['Text7', 'Text8'],
    issueDate:       ['Text9'],
    expiryDate:      ['Text10'],
    phone:           ['Text16'],
    email:           ['Text13'],
    occupation:      ['Text17'],
    companyAddress:  ['Text20'],
    arrival:         ['Text24'],
    departure:       ['Text26'],
    preVisadate: ['Text15'],
    Visasticker:  ['Text18']
  },
  checkboxFields: {
    gender: {
      Male:   "Button27",
      Female: "Button28",
      Other:  "Button29",
    },
    previousvisa: {
      No:  "Button1",
      Yes: "Button2",
    },
    maritalStatus: {
      Single:   "Button30",
      Married:  "Button31",
      Divorced: "Button33",
      Widow:    "Button34",
    },
purposeOfTravel: {
      Tourism:  "Button19",
      Business: "Button20",
      Visitor:  "Button21",
    }
  },
}

export default czechrepublic
