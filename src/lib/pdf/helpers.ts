export function normalizeFormDataForPDF(formData: Record<string, any>): Record<string, any> {
    const fieldMap: Record<string, string> = {
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Contact Number",
      email: "Email Address",
      nationality: "Nationality",
      countryOfBirth: "Country of Birth",
      gender: "Gender",
      maritalStatus: "Marital Status",
      dob: "Date of Birth",
      birthPlace: "Place of Birth",
      passport: "Passport Number",
      issueDate: "Date of Issue",
      expiryDate: "Date of Expiry",
      currentAddress: "Current Address",
      passportFront: "Attach front side of passport",
      passportBack: "Attach back side of passport",
      resPermit: "Residence Permit",
      privacyConsent: "I agree to the collection and use of my data as outlined in the privacy consent",
      occupation: "Occupation",
      companyAddress: "Company Address",
      companyContact: "Company Contact Number",
      companyEmail: "Company Email",
      travelPurpose: "Purpose of Travel",
      arrival: "Date of Travel Arrival",
      departure: "Date of Departure",
      selectedPlan: "Plan",
      appointmentDate: "Date",
      appointmentTime: "Time",
      appointmentAddress: "Address",
      appointmentPincode: "Pincode",
      appointmentContact: "Contact Details",
    }
  
    const normalized: Record<string, any> = {}
  
    for (const key in formData) {
      const mappedKey = fieldMap[key]
      if (mappedKey) {
        normalized[mappedKey] = formData[key]
      }
    }
  
    return normalized
  }
  