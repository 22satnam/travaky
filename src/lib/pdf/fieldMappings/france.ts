import type { CountryMapping } from './index'

const france: CountryMapping = {
  textFields: {
    lastName:        ['applicantSurname'],
    firstName:       ['applicantFirstname'],
    dob:             ['applicantDateOfBirth'],
    birthPlace:      ['applicantPlaceOfBirth'],
    nationality:     ['applicantIdCardNumber'],
    currentAddress:  ['applicantAddressL2'],
    passport:        ['travelDocNumber', 'applicantIdCardNumber'],
    issueDate:       ['travelDocDateOfIssue'],
    expiryDate:      ['travelDocValidUntil'],
    phone:           ['applicantPhone'],
    email:           ['applicantAddressL5'],
    occupation:      ['applicantOccupation'],
    companyAddress:  ['applicantOccupationAddressL1', 'applicantOccupationAddressL2'],
    arrival:         ['dateOfArrival'],
    departure:       ['dateOfDeparture'],
  },
  checkboxFields: {
    gender: {
      Male:   'applicantGenderM',
      Female: 'applicantGenderF',
      Other:  'applicantGenderA',
    },
    maritalStatus: {
      Single:   'applicantMaritalCEL',
      Married:  'applicantMaritalMAR',
      Divorced: 'applicantMaritalDIV',
      Widow:    'applicantMaritalVEU',
      Other:    'applicantMaritalAUT',
    },
  },
}

export default france
