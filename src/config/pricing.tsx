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


// /**
//  * Travaky – central pricing configuration + helper
//  * ------------------------------------------------
//  * Import `calcPrice()` everywhere (UI & API) instead of
//  * sprinkling raw numbers.  One source-of-truth.
//  */

// export type PlanName = 'Docs on Call' | 'Docs on Door' | 'Visa at Doorstep'

// type Promo = {
//   code   : string          // coupon the user enters (case-sensitive)
//   label  : string          // copy to show in UI (“20 % off this week”)
//   pct    : number          // 0.20  → 20 % discount
//   active : boolean         // toggle on/off without code pushes
// }

// export interface PricingConfig {
//   /** Travaky fee per traveller (₹) – *before* GST */
//   base      : Record<PlanName, number>

//   /** Visa / embassy fee we forward (₹ per traveller) */
//   visaFee   : Record<PlanName, number>

//   /** Charges that never depend on the plan */
//   fixed     : {
//     service     : number   // convenience charge per booking
//     appointment : number   // VFS appointment fee per traveller
//     gstPct      : number   // 0.18 → 18 %
//   }

//   promos    : Promo[]
// }

// /* ────────────────────────────────────────────────────────── */

// export const PRICING: PricingConfig = {
//   base   : { 'Docs on Call': 3_550, 'Docs on Door': 19_890, 'Visa at Doorstep': 28_950 },
//   visaFee: { 'Docs on Call':     0, 'Docs on Door':     0, 'Visa at Doorstep':  7_000 },

//   fixed  : { service: 350, appointment: 1_950, gstPct: 0.18 },

//   promos : [
//     { code: 'TRIAL', label: 'Limited-time free Docs on Call', pct: 1.00, active: true  },
//     { code: 'SUM20', label: 'Summer Sale – 20 % off',          pct: 0.20, active: false },
//   ],
// }

// /* ────────────────────────────────────────────────────────── */
// /* Helper                                                       */
// /* ────────────────────────────────────────────────────────── */

// /**
//  * Calculate full price & line-item breakdown.
//  * Always multiply `total` by 100 before sending to Razorpay (paise).
//  */
// export function calcPrice(opts: {
//   plan: PlanName
//   travellers: number
//   promoCode?: string | null
// }) {
//   const { plan, travellers, promoCode } = opts

//   const promo   = PRICING.promos.find(p => p.active && p.code === promoCode)
//   const discountPct = promo?.pct ?? 0

//   const service  = PRICING.base[plan]       * travellers
//   const visa     = PRICING.visaFee[plan]    * travellers
//   const appoint  = PRICING.fixed.appointment* travellers
//   const conven   = PRICING.fixed.service                     // once per booking

//   const subTotal   = service + visa + appoint + conven
//   const discAmount = subTotal * discountPct
//   const afterDisc  = subTotal - discAmount

//   const gst        = afterDisc * PRICING.fixed.gstPct
//   const grandTotal = Math.round(afterDisc + gst)            // rupees – round off

//   return {
//     total   : grandTotal,          // Razorpay “amount / 100”
//     promo   : promo?.label ?? null,
//     breakUp : {
//       service,
//       visa,
//       appoint,
//       conven,
//       discount : discAmount,
//       gst,
//     },
//   }
// }



// @/config/pricing.ts
/**
 * Travaky pricing — single source of truth
 * - MRP per plan (undiscounted Travaky fee)
 * - Optional per-plan offer (public or code-gated)
 * - calcPrice() applies the same numbers the UI shows
 */

export const PLAN_NAMES = ['Docs on Call', 'Docs on Door', 'Visa at Doorstep'] as const
export type PlanName = typeof PLAN_NAMES[number]

type Discount = { kind: 'pct' | 'flat'; value: number } // pct: 0..1 (e.g. 0.2 = 20%), flat: rupees

export type PlanOffer = {
  label: string            // e.g. "Festival Offer – 20% off"
  code?: string | null     // if present, user must enter this code to apply
  active: boolean
  discount: Discount
  start?: string           // ISO dates (optional)
  end?: string
}

export interface PricingConfig {
  /** Undiscounted Travaky fee per traveller (rupees, pre-GST) */
  mrp: Record<PlanName, number>

  /** Visa/embassy/VFS fee (we forward) per traveller */
  visaFee: Record<PlanName, number>

  /** Charges independent of plan */
  fixed: {
    service: number        // convenience charge per booking
    appointment: number    // appointment fee per traveller
    gstPct: number         // e.g. 0.18 -> 18%
  }

  /** Optional per-plan public/code-gated offers */
  offers: Partial<Record<PlanName, PlanOffer>>
}

export const PRICING: PricingConfig = {
  // MRP (headline Travaky fee)
  mrp: {
    'Docs on Call':      3550,
    'Docs on Door':     9890,
    'Visa at Doorstep': 14950,
  },

  // visa/VFS/embassy fees we pass along
  visaFee: {
    'Docs on Call':        0,
    'Docs on Door':        0,
    'Visa at Doorstep': 7000,
  },

  // charges common to all plans
  fixed: {
    service:     350,     // once per booking
    appointment: 1950,    // per traveller
    gstPct:      0.18,
  },

  // per-plan offers; make any inactive by setting active: false
  offers: {
    'Docs on Call': {
      label: 'Limited-time free',
      code:  'DOCTRIAL100',       // code required
      active: true,
      discount: { kind: 'pct', value: 1.00 }, // 100% off Travaky fee
    },
    'Docs on Door': {
      label: 'Flat 50% off',
      code: 'TRIAL50',
      active: true,         // public (no code)
      discount: { kind: 'pct', value: 0.50 },
    },
    'Visa at Doorstep': {
      label: 'Flat 50% off',
      code: 'TRIAL50',
      active: true,         // public (no code)
      discount: { kind: 'pct', value: 0.50 },
    },
  },
}

/* ───────────────────────────────────────────────────────────── */

const applyDiscount = (base: number, d?: Discount) => {
  if (!d) return base
  return Math.max(0, d.kind === 'pct' ? Math.round(base * (1 - d.value)) : base - d.value)
}

const activeOffer = (plan: PlanName) => {
  const o = PRICING.offers[plan]
  return o && o.active ? o : null
}

/**
 * UI helper for MRP vs today price (service fee only).
 * If offer has a code, we still compute "today" for display,
 * and the UI can show "use code XYZ".
 */
export function planUiDisplay(plan: PlanName) {
  const mrp = PRICING.mrp[plan]
  const offer = activeOffer(plan)
  const today = offer ? applyDiscount(mrp, offer.discount) : mrp
  const savingsAmt = Math.max(0, mrp - today)
  const savingsPct = mrp ? Math.round((savingsAmt / mrp) * 100) : 0
  return { mrp, today, offer, savingsAmt, savingsPct }
}

/**
 * Calculate full price & line items for N travellers.
 * - Applies public offers automatically.
 * - Applies code-gated offer only if promoCode matches.
 */
export function calcPrice(opts: { plan: PlanName; travellers: number; promoCode?: string | null }) {
  const { plan, travellers, promoCode } = opts

  const baseMrp = PRICING.mrp[plan]
  const offer   = activeOffer(plan)

  const canApply =
    !!offer && (
      !offer.code ||
      (promoCode && offer.code && promoCode === offer.code)
    )

  const unitService = canApply ? applyDiscount(baseMrp, offer!.discount) : baseMrp
  const service     = unitService * travellers
  const visa        = PRICING.visaFee[plan] * travellers
  const appoint     = PRICING.fixed.appointment * travellers
  const conven      = PRICING.fixed.service

  const subTotal    = service + visa + appoint + conven
  const gst         = Math.round(subTotal * PRICING.fixed.gstPct)
  const total       = Math.round(subTotal + gst)

  return {
    total,
    appliedOffer: canApply ? offer : null,
    breakUp: { service, visa, appoint, conven, gst },
  }
}
