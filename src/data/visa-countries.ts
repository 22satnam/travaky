export type VisaCountry = {
  id: string
  name: string
  slug: string
  image: string            // public path
  tag: string              // e.g. "quick approval", "online booking"
  leadDays: number         // you edit this: UI shows "Visa by <today + leadDays>"
  priceINR: number         // base starting price (in ₹)
  features: string[]       // bullet points under the card
  link: string             // where to open on click (map to your form route)
}

export const visaCountries: VisaCountry[] = [
  {
    id: 'de',
    name: 'Germany',
    slug: 'germany',
    image: '/img/countries/germany.jpg',
    tag: 'quick approval',
    leadDays: 12,
    priceINR: 8500,
    features: ['Fast processing', 'Doorstep pickup available'],
    link: '/forms?country=Germany'
  },
  {
    id: 'fr',
    name: 'France',
    slug: 'france',
    image: '/img/countries/france.jpg',
    tag: 'instant appointment',
    leadDays: 10,
    priceINR: 7500,
    features: ['Fast processing', 'Doorstep pickup available'],
    link: '/forms?country=France'
  },
  {
    id: 'nl',
    name: 'Netherlands',
    slug: 'netherlands',
    image: '/img/countries/netherlands.jpg',
    tag: 'online booking',
    leadDays: 14,
    priceINR: 8100,
    features: ['Fast processing', 'Doorstep pickup available'],
    link: '/forms?country=Netherlands'
  },
  {
    id: 'it',
    name: 'Italy',
    slug: 'italy',
    image: '/img/countries/italy.jpg',
    tag: 'priority slots',
    leadDays: 9,
    priceINR: 8200,
    features: ['Fast processing', 'Doorstep pickup available'],
    link: '/forms?country=Italy'
  },

  // add more freely; “See more” will reveal the rest
  {
    id: 'es',
    name: 'Spain',
    slug: 'spain',
    image: '/img/countries/spain.jpg',
    tag: 'quick approval',
    leadDays: 11,
    priceINR: 7800,
    features: ['Fast processing', 'Doorstep pickup available'],
    link: '/forms?country=Spain'
  },
  {
    id: 'ae',
    name: 'UAE',
    slug: 'uae',
    image: '/img/countries/uae.jpg',
    tag: 'e-visa',
    leadDays: 3,
    priceINR: 5200,
    features: ['Fast processing', 'Doorstep pickup available'],
    link: '/forms?country=UAE'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    slug: 'uk',
    image: '/img/countries/uk.jpg',
    tag: 'priority slots',
    leadDays: 15,
    priceINR: 11200,
    features: ['Fast processing', 'Doorstep pickup available'],
    link: '/forms?country=United%20Kingdom'
  },
  {
    id: 'us',
    name: 'United States',
    slug: 'usa',
    image: '/img/countries/usa.jpg',
    tag: 'early dates',
    leadDays: 21,
    priceINR: 13500,
    features: ['Fast processing', 'Doorstep pickup available'],
    link: '/forms?country=USA'
  },
]