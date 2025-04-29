// src/lib/pdf/fieldMappings/index.ts
export interface CountryMapping {
    textFields: Record<string,string[]>;
    checkboxFields?: Record<string,Record<string,string>>;
  }
  
  /**
   * Dynamically import the mapping for `countryKey`.
   * Falls back to an empty mapping if none exists.
   */
  export async function loadMapping(countryKey: string): Promise<CountryMapping> {
    try {
      // e.g. import("./switzerland.ts") when countryKey==="switzerland"
      const mod = await import(`./${countryKey}`);
      return (mod.default as CountryMapping) || {};
    } catch {
      console.warn(`⚠️ No PDF field mapping for country "${countryKey}"`);
      return { textFields: {} };
    }
  }
  