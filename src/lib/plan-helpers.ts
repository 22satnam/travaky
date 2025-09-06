import { PRICING, PlanName } from '@/config/pricing';

/** Runtime guard so API / router params can be trusted safely */
export function toPlanName(maybe: unknown): PlanName {
  return (Object.keys(PRICING.mrp) as PlanName[]).includes(maybe as PlanName)
    ? (maybe as PlanName)
    : 'Docs on Call';
}
