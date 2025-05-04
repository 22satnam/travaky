/** plan prices — already present */
export const PRICE_PLANS = {
    'Docs on Call':     3_550,
    'Docs on Door':    19_890,
    'Visa at Doorstep': 28_950
  } as const
  export type PlanName = keyof typeof PRICE_PLANS
  
  /** 🆕 one place for the other fees */
  export const FEES = {
    appointment: 1_524,
    service:     1_750,
    visaCenter:  8_000      // paid later at VFS
  } as const