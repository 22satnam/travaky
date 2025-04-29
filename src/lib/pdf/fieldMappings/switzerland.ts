// // src/lib/pdf/fieldMappings/switzerland.ts
// import type { CountryMapping } from "./index";

// const switzerland: CountryMapping = {
//   textFields: {
//     lastName:       ["Text1","Text2","Text72"],
//     firstName:      ["Text3","Text73"],
//     dob:            ["Text4","Text8"],
//     placeOfBirth:   ["Text6"],
//     nationality:    ["Text9"],
//     address:        ["Text11"],
//     passportNumber: ["Text67","Text68"],
//     dateOfIssue:    ["Text69"],
//     dateOfExpiry:   ["Text70"],
//     phone:          ["Text75"],
//     email:          ["Text10"],
//     occupation:     ["Text76"],
//     employerAddress:["Text77"],
//     travelDate:     ["Text82"],
//     returnDate:     ["Text83"],
//   },
//   checkboxFields: {
//     gender: {
//       Male:   "Button12",
//       Female: "Button13",
//       Other:  "Button14",
//     },
//     maritalStatus: {
//       Single:  "Button15",
//       Married: "Button16",
//       Divorced:"Button18",
//       Widow:   "Button19",
//       Other:   "Button21",
//     },
//   },
// };

// export default switzerland;



// src/lib/pdf/fieldMappings/switzerland.ts
import type { CountryMapping } from "./index";

const switzerland: CountryMapping = {
  textFields: {
    lastName:        ["Text1", "Text2", "Text72"],
    firstName:       ["Text3", "Text73"],
    dob:             ["Text4", "Text8"],
    birthPlace:      ["Text6"],
    nationality:     ["Text9"],
    currentAddress:  ["Text11"],
    passport:        ["Text67", "Text68"],
    issueDate:       ["Text69"],
    expiryDate:      ["Text70"],
    phone:           ["Text75"],
    email:           ["Text10"],
    occupation:      ["Text76"],
    companyAddress:  ["Text77"],
    arrival:         ["Text82"],
    departure:       ["Text83"],
  },
  checkboxFields: {
    gender: {
      Male:   "Button12",
      Female: "Button13",
      Other:  "Button14",
    },
    maritalStatus: {
      Single:   "Button15",
      Married:  "Button16",
      Divorced: "Button18",
      Widow:    "Button19",
      Other:    "Button21",
    },
  },
};

export default switzerland;
