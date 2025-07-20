// /** plan prices — already present */
// export const PRICE_PLANS = {
//     'Docs on Call':     3_550,
//     'Docs on Door':    19_890,
//     'Visa at Doorstep': 28_950
//   } as const
//   export type PlanName = keyof typeof PRICE_PLANS
  
//   /** 🆕 one place for the other fees */
//   export const FEES = {
//     appointment: 1_524,
//     service:     1_750,
//     visaCenter:  8_000      // paid later at VFS
//   } as const


/**
 * Travaky – central pricing configuration + helper
 * ------------------------------------------------
 * Import `calcPrice()` everywhere (UI & API) instead of
 * sprinkling raw numbers.  One source-of-truth.
 */

export type PlanName = 'Docs on Call' | 'Docs on Door' | 'Visa at Doorstep'

type Promo = {
  code   : string          // coupon the user enters (case-sensitive)
  label  : string          // copy to show in UI (“20 % off this week”)
  pct    : number          // 0.20  → 20 % discount
  active : boolean         // toggle on/off without code pushes
}

export interface PricingConfig {
  /** Travaky fee per traveller (₹) – *before* GST */
  base      : Record<PlanName, number>

  /** Visa / embassy fee we forward (₹ per traveller) */
  visaFee   : Record<PlanName, number>

  /** Charges that never depend on the plan */
  fixed     : {
    service     : number   // convenience charge per booking
    appointment : number   // VFS appointment fee per traveller
    gstPct      : number   // 0.18 → 18 %
  }

  promos    : Promo[]
}

/* ────────────────────────────────────────────────────────── */

export const PRICING: PricingConfig = {
  base   : { 'Docs on Call': 3_550, 'Docs on Door': 19_890, 'Visa at Doorstep': 28_950 },
  visaFee: { 'Docs on Call':     0, 'Docs on Door':     0, 'Visa at Doorstep':  7_000 },

  fixed  : { service: 350, appointment: 1_950, gstPct: 0.18 },

  promos : [
    { code: 'TRIAL', label: 'Limited-time free Docs on Call', pct: 1.00, active: true  },
    { code: 'SUM20', label: 'Summer Sale – 20 % off',          pct: 0.20, active: false },
  ],
}

/* ────────────────────────────────────────────────────────── */
/* Helper                                                       */
/* ────────────────────────────────────────────────────────── */

/**
 * Calculate full price & line-item breakdown.
 * Always multiply `total` by 100 before sending to Razorpay (paise).
 */
export function calcPrice(opts: {
  plan: PlanName
  travellers: number
  promoCode?: string | null
}) {
  const { plan, travellers, promoCode } = opts

  const promo   = PRICING.promos.find(p => p.active && p.code === promoCode)
  const discountPct = promo?.pct ?? 0

  const service  = PRICING.base[plan]       * travellers
  const visa     = PRICING.visaFee[plan]    * travellers
  const appoint  = PRICING.fixed.appointment* travellers
  const conven   = PRICING.fixed.service                     // once per booking

  const subTotal   = service + visa + appoint + conven
  const discAmount = subTotal * discountPct
  const afterDisc  = subTotal - discAmount

  const gst        = afterDisc * PRICING.fixed.gstPct
  const grandTotal = Math.round(afterDisc + gst)            // rupees – round off

  return {
    total   : grandTotal,          // Razorpay “amount / 100”
    promo   : promo?.label ?? null,
    breakUp : {
      service,
      visa,
      appoint,
      conven,
      discount : discAmount,
      gst,
    },
  }
}
