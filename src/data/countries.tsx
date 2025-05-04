import { PRICE_PLANS } from '@/config/pricing'

/* ---------- new optional reassurance fields -------------------- */
interface CostItem          { label: string; value: string }
interface RejectionReason   { title: string; body: string }
interface Review            { name: string; tag?: string; rating: number; date: string; body: string }

export interface CountryExtra {
  hero?: string[]
  visaFacts?:     { label: string; value: string }[]
  requirements?:  string[]
  timeline?:      { title: string; body: string }[]
  guaranteeLine?: string
  pricePlan?:     keyof typeof PRICE_PLANS

  /* 🆕 reassurance blocks */
  costBreakdown?: { payNow: CostItem[]; payLater?: CostItem[] }
  slotAlertText?: string                      // shows “Get alerted” card
  whatYouGet?:    { heading: string; image: string }  // preview packet
  rejectionReasons?: RejectionReason[]
  reviews?:       Review[]
}

export interface CountryData extends CountryExtra {
  slug: string
  countryName: string
  backgroundPhoto: string
  visaVariable: string
  cost: string
  buttonLink: string
}

/* ---------- sample country filled with the extras ----------------*/
export const countryData: CountryData[] = [
  {
    slug: 'germany',
    countryName: 'Germany',
    backgroundPhoto:
      'https://images.unsplash.com/photo-1449452198679-05c7fd30f416',
    visaVariable: 'quick approval',
    cost: '₹8 500',
    buttonLink: '/visa/germany',

    /* previous extras */
    hero: [
      'https://images.unsplash.com/photo-1449452198679-05c7fd30f416',
      'https://images.unsplash.com/photo-1503917988258-f87a78e3c995',
      'https://images.unsplash.com/photo-1449452198679-05c7fd30f416',
      'https://images.unsplash.com/photo-1503917988258-f87a78e3c995'
    ],
    visaFacts: [
      { label: 'Visa Type', value: 'E-Visa' },
      { label: 'Stay',      value: '30 days' },
      { label: 'Validity',  value: 'up to 2 years' },
      { label: 'Entry',     value: 'Multiple' }
    ],
    requirements: ['Passport', 'Photo', 'Bank Statement', 'Income Tax Returns'],
    timeline: [
      { title: 'Apply on Travaky',   body: 'Fill out travel & passport details.' },
      { title: 'Passport Pick-up',   body: 'Courier collects your passport.' },
      { title: 'Visa Processed',     body: 'We liaise with immigration.' },
      { title: 'Passport Delivered', body: 'Courier brings it back to you.' }
    ],
    guaranteeLine: 'Get your visa by 26 Jun 2025, 05:30 AM',
    pricePlan: 'Docs on Call',

    /* 🆕 reassurance extras */
    costBreakdown: {
      payNow:   [
        { label: 'Appointment Fee × 1', value: '₹1 782' },
        { label: 'Travaky Service Fee', value: '₹1 750' }
      ],
      payLater: [
        { label: 'Visa Fee at Center',  value: '€80' }
      ]
    },
    slotAlertText:
      'Stay ahead with real-time alerts for Germany visa appointments in Delhi.',
    whatYouGet: {
      heading: 'Your Final Application Preview',
      image:
        'https://images.unsplash.com/photo-1633430300352-bcb3420c0ed5?w=500'
    },
    rejectionReasons: [
      { title: 'Expired Passport',
        body:  'Applying with a passport that has expired or expires within 6 months.' },
      { title: 'Insufficient Funds',
        body: 'Failing to demonstrate enough financial resources to support your stay.' },
      { title: 'Criminal Record',
        body: 'A criminal history that disqualifies you from obtaining a visa.' }
    ],
    reviews: [
      {
        name:   'Niti3695',
        rating: 5,
        tag:    'VISA ON TIME',
        date:   '7 Dec',
        body:   'Got my Germany visa from Dubai—smooth and cheaper than my agent!'
      }
    ]
  },
    // France
    {
      slug: "france",
      countryName: "France",
      backgroundPhoto: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8fDB8fHww",
      visaVariable: "instant appointment",
      cost: "₹7500",
      buttonLink: "/visa/france",
    },
    // Netherlands
    {
      slug: "netherlands",
      countryName: "Netherlands",
      backgroundPhoto: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0aGVybGFuZHN8ZW58MHx8MHx8fDA%3D",
      visaVariable: "online booking",
      cost: "₹8100",
      buttonLink: "/visa/netherlands",
    },
    // Germany
    { 
      slug: "germany",
      countryName: "Germany",
      backgroundPhoto: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "quick approval",
      cost: "₹8500",
      buttonLink: "/visa/germany",
    },
    // Spain
    {
      slug: "spain",
      countryName: "Spain",
      backgroundPhoto: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhaW58ZW58MHx8MHx8fDA%3D",
      visaVariable: "priority slots",
      cost: "₹8000",
      buttonLink: "/visa/spain",
    },
    // Greece
    {
      slug: "greece",
      countryName: "Greece",
      backgroundPhoto: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8fHww",
      visaVariable: "priority slots",
      cost: "₹8200",
      buttonLink: "/visa/greece",
    },
    // Austria
    {
      slug: "austria",
      countryName: "Austria",
      backgroundPhoto: "https://images.unsplash.com/photo-1597086831879-756db15e81d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      visaVariable: "easy process",
      cost: "₹8000",
      buttonLink: "/visa/austria",
    },
    // Czech Republic
    {
      slug: "czech-republic",
      countryName: "Czech Republic",
      backgroundPhoto: "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3plY2glMjByZXB1YmxpY3xlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "simple process",
      cost: "₹8200",
      buttonLink: "/visa/czech-republic",
    },
    // Italy
    {
      slug: "italy",
      countryName: "Italy",
      backgroundPhoto: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHl8ZW58MHx8MHx8fDA%3D",
      visaVariable: "priority slots",
      cost: "₹8000",
      buttonLink: "/visa/italy",
    },
    // Finland
    {
      slug: "finland",
      countryName: "Finland",
      backgroundPhoto: "https://images.unsplash.com/photo-1522885147691-06d859633fb8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlubGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "fast processing",
      cost: "₹8500",
      buttonLink: "/visa/finland",
    },
    // Sweden
    {
      slug: "sweden",
      countryName: "Sweden",
      backgroundPhoto: "https://images.unsplash.com/photo-1633430300352-bcb3420c0ed5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN3ZWRlbnxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "instant apply",
      cost: "₹8100",
      buttonLink: "/visa/sweden",
    },
    // Portugal
    {
      slug: "portugal",
      countryName: "Portugal",
      backgroundPhoto: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHVnYWx8ZW58MHx8MHx8fDA%3D",
      visaVariable: "priority service",
      cost: "₹8000",
      buttonLink: "/visa/portugal",
    },
    {
      slug: "belgium",
      countryName: "Belgium",
      backgroundPhoto: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsZ2l1bXxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "online booking",
      cost: "₹8100",
      buttonLink: "/visa/belgium",
    },
    {
      slug: "bulgaria",
      countryName: "Bulgaria",
      backgroundPhoto: "https://images.unsplash.com/photo-1633210181101-774c588bc997?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVsZ2FyaWF8ZW58MHx8MHx8fDA%3D",
      visaVariable: "fast approval",
      cost: "₹7900",
      buttonLink: "/visa/bulgaria",
    },
    {
      slug: "croatia",
      countryName: "Denmark",
      backgroundPhoto: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVubWFya3xlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "digital booking",
      cost: "₹8400",
      buttonLink: "/visa/denmark",
    },
    {
      slug: "estonia",
      countryName: "Estonia",
      backgroundPhoto: "https://images.unsplash.com/photo-1627727240079-2d3c29bf8a23?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXN0b25pYXxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "quick slots",
      cost: "₹8000",
      buttonLink: "/visa/estonia",
    },
    {
      slug: "finland",
      countryName: "Hungary",
      backgroundPhoto: "https://images.unsplash.com/photo-1518471152222-d42e38ce6873?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVuZ2FyeXxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "no hassle",
      cost: "₹7900",
      buttonLink: "/visa/hungary",
    },
    {
      slug: "iceland",
      countryName: "Iceland",
      backgroundPhoto: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "rapid processing",
      cost: "₹8800",
      buttonLink: "/visa/iceland",
    },
    {
      slug: "ireland",
      countryName: "Latvia",
      backgroundPhoto: "https://images.unsplash.com/photo-1522054541898-adc6abd570e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF0dmlhfGVufDB8fDB8fHww",
      visaVariable: "instant apply",
      cost: "₹8100",
      buttonLink: "/visa/latvia",
    },
    {
      slug: "liechtenstein",
      countryName: "Liechtenstein",
      backgroundPhoto: "https://images.unsplash.com/photo-1625138385193-bca1f03448ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGllY2h0ZW5zdGVpbnxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "seamless entry",
      cost: "₹8200",
      buttonLink: "/visa/liechtenstein",
    },
    {
      slug: "lithuania",
      countryName: "Lithuania",
      backgroundPhoto: "https://images.unsplash.com/photo-1549891472-991e6bc75d1e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl0aHVhbmlhfGVufDB8fDB8fHww",
      visaVariable: "quick processing",
      cost: "₹8050",
      buttonLink: "/visa/lithuania",
    },
    {
      slug: "luxembourg",
      countryName: "Luxembourg",
      backgroundPhoto: "https://images.unsplash.com/photo-1677078279098-a45f0c3a9051?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eGVtYm9yZnxlbnwwfHwwfHx8MA%3D%3D",
      visaVariable: "minimal docs",
      cost: "₹8100",
      buttonLink: "/visa/luxembourg",
    },
    {
      slug: "malta",
      countryName: "Malta",
      backgroundPhoto: "https://images.unsplash.com/photo-1548780416-f23a4186ceb9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsdGF8ZW58MHx8MHx8fDA%3D",
      visaVariable: "express visa",
      cost: "₹8300",
      buttonLink: "/visa/malta",
    },
    {
      slug: "monaco",
      countryName: "Norway",
      backgroundPhoto: "https://images.unsplash.com/photo-1475066392170-59d55d96fe51?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9yd2F5fGVufDB8fDB8fHww",
      visaVariable: "quick appointment",
      cost: "₹8500",
      buttonLink: "/visa/norway",
    },
    {
      slug: "poland",
      countryName: "Poland",
      backgroundPhoto: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9sYW5kfGVufDB8fDB8fHww",
      visaVariable: "direct slots",
      cost: "₹7900",
      buttonLink: "/visa/poland",
    },
    {
      slug: "romania",
      countryName: "Slovakia",
      backgroundPhoto: "https://images.unsplash.com/photo-1568567259979-a39016d968c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2xvdmFraWF8ZW58MHx8MHx8fDA%3D",
      visaVariable: "hassle-free",
      cost: "₹7900",
      buttonLink: "/visa/slovakia",
    },
    {
      slug: "slovenia",
      countryName: "Slovenia",
      backgroundPhoto: "https://images.unsplash.com/photo-1562083589-3bf71182e9c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2xvdmVuaWF8ZW58MHx8MHx8fDA%3D",
      visaVariable: "easy slots",
      cost: "₹8000",
      buttonLink: "/visa/slovenia",
    }
    // Add all the other countries from your data
  ]
  