// Unit conversion data organized from basic to advanced
export const unitConversionData = {
  length: {
    name: "Length",
    units: [
      // Basic units
      { id: "mm", name: "Millimeter (mm)", conversionToBase: 0.001 },
      { id: "cm", name: "Centimeter (cm)", conversionToBase: 0.01 },
      { id: "m", name: "Meter (m)", conversionToBase: 1 }, // Base unit
      { id: "km", name: "Kilometer (km)", conversionToBase: 1000 },

      // Imperial/US units
      { id: "in", name: "Inch (in)", conversionToBase: 0.0254 },
      { id: "ft", name: "Foot (ft)", conversionToBase: 0.3048 },
      { id: "yd", name: "Yard (yd)", conversionToBase: 0.9144 },
      { id: "mi", name: "Mile (mi)", conversionToBase: 1609.344 },

      // Nautical units
      { id: "nmi", name: "Nautical Mile", conversionToBase: 1852 },

      // Astronomical units
      { id: "au", name: "Astronomical Unit (AU)", conversionToBase: 1.496e11 },
      { id: "ly", name: "Light Year", conversionToBase: 9.461e15 },
      { id: "pc", name: "Parsec", conversionToBase: 3.086e16 },

      // Microscopic units
      { id: "nm", name: "Nanometer (nm)", conversionToBase: 1e-9 },
      { id: "µm", name: "Micrometer (µm)", conversionToBase: 1e-6 },
      { id: "pm", name: "Picometer (pm)", conversionToBase: 1e-12 },

      // Other units
      { id: "fathom", name: "Fathom", conversionToBase: 1.8288 },
      { id: "furlong", name: "Furlong", conversionToBase: 201.168 },
      { id: "hand", name: "Hand", conversionToBase: 0.1016 },
      { id: "league", name: "League", conversionToBase: 4828.032 },
    ],
  },

  mass: {
    name: "Mass",
    units: [
      // Basic metric units
      { id: "mg", name: "Milligram (mg)", conversionToBase: 0.000001 },
      { id: "g", name: "Gram (g)", conversionToBase: 0.001 },
      { id: "kg", name: "Kilogram (kg)", conversionToBase: 1 }, // Base unit
      { id: "t", name: "Metric Ton (t)", conversionToBase: 1000 },

      // Imperial/US units
      { id: "oz", name: "Ounce (oz)", conversionToBase: 0.028349523125 },
      { id: "lb", name: "Pound (lb)", conversionToBase: 0.45359237 },
      { id: "st", name: "Stone (st)", conversionToBase: 6.35029318 },
      { id: "ton_us", name: "US Ton", conversionToBase: 907.18474 },
      { id: "ton_uk", name: "UK Ton", conversionToBase: 1016.0469088 },

      // Scientific units
      { id: "µg", name: "Microgram (µg)", conversionToBase: 1e-9 },
      { id: "ng", name: "Nanogram (ng)", conversionToBase: 1e-12 },
      { id: "pg", name: "Picogram (pg)", conversionToBase: 1e-15 },

      // Atomic units
      { id: "u", name: "Atomic Mass Unit (u)", conversionToBase: 1.66053886e-27 },

      // Other units
      { id: "carat", name: "Carat", conversionToBase: 0.0002 },
      { id: "grain", name: "Grain", conversionToBase: 0.00006479891 },
      { id: "cwt", name: "Hundredweight (cwt)", conversionToBase: 50.80234544 },
      { id: "dram", name: "Dram", conversionToBase: 0.0017718451953125 },
    ],
  },

  temperature: {
    name: "Temperature",
    units: [
      // Basic units
      {
        id: "c",
        name: "Celsius (°C)",
        toBase: (value: number) => value,
        fromBase: (value: number) => value,
      },
      {
        id: "f",
        name: "Fahrenheit (°F)",
        toBase: (value: number) => ((value - 32) * 5) / 9,
        fromBase: (value: number) => (value * 9) / 5 + 32,
      },
      {
        id: "k",
        name: "Kelvin (K)",
        toBase: (value: number) => value - 273.15,
        fromBase: (value: number) => value + 273.15,
      },

      // Advanced units
      {
        id: "r",
        name: "Rankine (°R)",
        toBase: (value: number) => ((value - 491.67) * 5) / 9,
        fromBase: (value: number) => (value * 9) / 5 + 491.67,
      },
      {
        id: "de",
        name: "Delisle (°De)",
        toBase: (value: number) => 100 - (value * 2) / 3,
        fromBase: (value: number) => ((100 - value) * 3) / 2,
      },
      {
        id: "n",
        name: "Newton (°N)",
        toBase: (value: number) => (value * 100) / 33,
        fromBase: (value: number) => (value * 33) / 100,
      },
      {
        id: "re",
        name: "Réaumur (°Ré)",
        toBase: (value: number) => (value * 5) / 4,
        fromBase: (value: number) => (value * 4) / 5,
      },
      {
        id: "ro",
        name: "Rømer (°Rø)",
        toBase: (value: number) => ((value - 7.5) * 40) / 21,
        fromBase: (value: number) => (value * 21) / 40 + 7.5,
      },
    ],
  },
}

// Helper function to convert between units
export function convertUnit(
  value: number,
  fromUnitId: string,
  toUnitId: string,
  category: "length" | "mass" | "temperature",
): number {
  const units = unitConversionData[category].units

  // For temperature, we need special conversion
  if (category === "temperature") {
    const fromUnit = units.find((unit) => unit.id === fromUnitId)
    const toUnit = units.find((unit) => unit.id === toUnitId)

    if (!fromUnit || !toUnit) {
      throw new Error(`Unit not found in category ${category}`)
    }

    // Convert to base unit (Celsius) first, then to target unit
    const valueInBase = (fromUnit.toBase as Function)(value)
    return (toUnit.fromBase as Function)(valueInBase)
  }

  // For length and mass, we use simple multiplication/division
  const fromUnit = units.find((unit) => unit.id === fromUnitId)
  const toUnit = units.find((unit) => unit.id === toUnitId)

  if (!fromUnit || !toUnit) {
    throw new Error(`Unit not found in category ${category}`)
  }

  // Convert to base unit first, then to target unit
  const valueInBaseUnit = value * (fromUnit.conversionToBase as number)
  return valueInBaseUnit / (toUnit.conversionToBase as number)
}
