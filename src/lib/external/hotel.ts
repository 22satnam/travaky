// src/lib/external/hotels.ts
export type HotelSearchParams = {
  city: string;
  checkIn: string;   // ISO date
  checkOut: string;  // ISO date
  guests: number;
};

export async function searchHotels(params: HotelSearchParams) {
  // Keep this fetch-only (Edge-safe). Replace with your real API later.
  // For now, return a stable empty list so the build passes.
  return [];
}
