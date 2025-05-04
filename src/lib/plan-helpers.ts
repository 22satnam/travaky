import { PRICE_PLANS, PlanName } from '@/config/pricing';

/** Runtime guard so API / router params can be trusted safely */
export function toPlanName(maybe: unknown): PlanName {
  return (Object.keys(PRICE_PLANS) as PlanName[]).includes(maybe as PlanName)
    ? (maybe as PlanName)
    : 'Docs on Call';
}
