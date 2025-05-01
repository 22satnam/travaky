import type { CountryMapping } from './index'

const austria: CountryMapping = {
  textFields: {
    lastName:        ['Text1'],
    firstName:       ['Text2'],
    dob:             ['Text3'],
    birthPlace:      ['Text4'],
    currentAddress:  ['Text11', 'Text13'],
    passport:        ['Text30', 'Text7'],
    issueDate:       ['Text8'],
    expiryDate:      ['Text9'],
    phone:           ['Text14'],
    email:           ['Text12'],
    occupation:      ['Text15'],
    companyAddress:  ['Text16'],
    arrival:         ['Text19'],
    departure:       ['Text20'],
  },
  checkboxFields: {
    gender: {
      Male:   'Button23',
      Female: 'Button24',
      Other:  'Button25',
    },
    maritalStatus: {
      Single:   'Button28',
      Married:  'Button29',
      Divorced: 'Button26',
      Widow:    'Button27',
    },
  },
}

export default austria
