// src/lib/getCountry.ts
import { countryData } from '@/data/countries'

export function getCountry(slug: string) {
  return countryData.find(c => c.buttonLink.endsWith(`/${slug}`))
}
