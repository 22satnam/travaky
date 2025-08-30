

// src/lib/pdf/fieldMappings/switzerland.ts
import type { CountryMapping } from "./index";

const switzerland: CountryMapping = {
  textFields: {
    lastName:        ["1 Surname Family name  Nachname Familienname"],
    firstName:       ["3 First names Given names  Vornamen"],
    dob:             ["4 Date of birth daymonthyear  Geburtsdatum TagMonatJahr"],
    birthPlace:      ["Text1"],
    currentAddress:  ["19 Applicants home address and email address  Wohnanschrift und EMailAdresse des Antragstellers"],
    passport:        ["11 National identity number where applicable  ggf nationale Identitätsnummer", "13 Number of travel docu ment  Nummer des Reisedokuments"],
    issueDate:       ["ment  Nummer des"],
    expiryDate:      ["15 Valid until  Gültig bis"],
    phone:           ["Telephone no  Telefonnummern"],
    email:           ["Text7"],
    occupation:      ["21 Current occupation  Derzeitige berufliche Tätigkeit"],
    companyAddress:  ["22 Employer and employers address and telephone number For students name and address of educational establishment  Name Anschrift und Telefonnummer des Arbeitgebers Bei Studenten Name und Anschrift der Bildungseinrichtung"],
    arrival:         ["28 Intended dates of the journey  Datum der geplanten Reise Intended date of arrival of the first intended stay in the Schengen area  Datum der geplanten Ankunft des ersten geplanten Aufenthalts im Schengen Raum Intended date of departure from the Schengen area after the first intended stay  Datum der geplanten Abreise aus dem SchengenRaum nach dem ersten geplanten Aufenthalt"],
    departure:       ["Text12"],
    preVisadate:   ["Text13"],
    Visasticker :   ["Text14"],
  },
  checkboxFields: {
    gender: {
      Male:   "Male  männlich",
      Female: "Female  weiblich",
  
    },
    maritalStatus: {
      Single:   "Single ledig",
      Married:  "Married",
      Divorced: "Divorced",
      Widow:    "Widower",
     },
     purposeOfTravel: {
       Tourism: "Tourism  Tourismus",
       Business:"Business  Geschäftsreise",
       Visitor: "Visit of family or friends  Besuch von Familienangehörigen oder Freunden",
    },

  },
}

export default switzerland;
