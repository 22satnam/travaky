// src/lib/external/flights.ts
export type FlightSearchParams = {
  from: string;
  to: string;
  departDate: string;   // ISO date
  returnDate?: string;  // ISO date
  adults?: number;
};

export async function searchFlights(params: FlightSearchParams) {
  // Keep this fetch-only (Edge-safe). Replace with your real API later.
  return [];
}
