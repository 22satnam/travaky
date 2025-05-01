import type { CountryMapping } from "./index";

const spain: CountryMapping = {
  textFields: {
    lastName:        ["text_1dbgc", "text_2zkad"],
    firstName:       ["text_3udgd"],
    dob:             ["text_4jytb"],
    birthPlace:      ["text_5gwez"],
    nationality:     ["Text9"],
    currentAddress:  ["text_20ejnw"],
    passport:        ["text_14tmze", "text_15stvt"],
    issueDate:       ["text_16uvgn"],
    expiryDate:      ["text_17zthx"],
    phone:           ["text_22piqw"],
    email:           ["text_21chhg"],
    occupation:      ["text_25njbd"],
    companyAddress:  ["textarea_26tmc"],
    arrival:         ["text_27rfkh"],
    departure:       ["text_28pzg"],
  },
  checkboxFields: {
    gender: {
      Male:   "checkbox_8ujbx",
      Female: "checkbox_9sque",
      Other:  "Button14", // fallback
    },
    maritalStatus: {
      Single:   "checkbox_10uucb",
      Married:  "checkbox_11yebk",
      Divorced: "checkbox_13ujuj",
      Widow:    "Button19", // fallback
      Other:    "Button21", // fallback
    },
  },
};

export default spain;
