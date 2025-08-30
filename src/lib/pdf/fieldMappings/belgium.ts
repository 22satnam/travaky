import type { CountryMapping } from './index'

const belgium: CountryMapping = {
  textFields: {
    lastName:        ["text_1qyow"],
    firstName:       ["text_2swbn"],
    dob:             ["text_3jkin"],
    birthPlace:      ["text_4fqbj"],
    currentAddress:  ["textarea_33vyje"],
    passport:        ["text_5zcyo", "text_6iiwv"],
    issueDate:       ["text_7negd"],
    expiryDate:      ["text_8fwkv"],
    phone:           ["text_11ttgp"],
    email:           ["textarea_33vyje"],
    occupation:      ["text_12kjzd"],
    companyAddress:  ["textarea_34hbfk"],
    arrival:         ["text_35clsl"],
    departure:       ["text_36bxxh"],
    preVisadate: ["text_17four"],
    Visasticker:  ["text_16jumh"],

  },
  checkboxFields: {
    gender: {
      Male:   "checkbox_37qfqp",
      Female: "checkbox_38algl",
    },

    maritalStatus: {
      Single:   "checkbox_39euhy",
      Married:  "checkbox_40zrov",
      Divorced: "checkbox_42ksfb",
      Widow:    "checkbox_41vhjf",
    },

  },
}

export default belgium
