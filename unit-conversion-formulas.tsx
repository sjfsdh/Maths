"use client"

import { useState } from "react"
import { Search, Copy, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Unit conversion formulas organized by category
const unitConversionFormulas = [
  {
    category: "Length",
    formulas: [
      {
        name: "Metric Conversions",
        formula:
          "1 kilometer (km) = 1000 meters (m)\n1 meter (m) = 100 centimeters (cm)\n1 centimeter (cm) = 10 millimeters (mm)",
        description: "Basic metric length conversions",
        example: "5 km = 5 × 1000 = 5000 m",
      },
      {
        name: "Imperial Conversions",
        formula: "1 mile = 1760 yards = 5280 feet\n1 yard = 3 feet\n1 foot = 12 inches",
        description: "Basic imperial length conversions",
        example: "2 yards = 2 × 3 = 6 feet",
      },
      {
        name: "Metric to Imperial",
        formula:
          "1 inch = 2.54 centimeters (exact)\n1 foot = 0.3048 meters (exact)\n1 yard = 0.9144 meters (exact)\n1 mile = 1.609344 kilometers (exact)",
        description: "Conversions between metric and imperial length units",
        example: "10 inches = 10 × 2.54 = 25.4 cm",
      },
      {
        name: "Imperial to Metric",
        formula:
          "1 millimeter = 0.03937 inches\n1 centimeter = 0.3937 inches\n1 meter = 3.28084 feet\n1 kilometer = 0.621371 miles",
        description: "Conversions from metric to imperial length units",
        example: "5 km = 5 × 0.621371 = 3.10686 miles",
      },
      {
        name: "Nautical Measurements",
        formula:
          "1 nautical mile = 1.852 kilometers (exact)\n1 nautical mile = 1.15078 miles\n1 fathom = 6 feet = 1.8288 meters",
        description: "Conversions for maritime navigation",
        example: "10 nautical miles = 10 × 1.852 = 18.52 km",
      },
      {
        name: "Astronomical Distances",
        formula:
          "1 astronomical unit (AU) = 149,597,870,700 meters (exact)\n1 light-year = 9,460,730,472,580,800 meters (exact)\n1 parsec = 30,856,775,814,671,900 meters (exact)",
        description: "Conversions for astronomical distances",
        example: "1 light-year = 63,241 AU (approx.)",
      },
    ],
  },
  {
    category: "Mass",
    formulas: [
      {
        name: "Metric Conversions",
        formula:
          "1 metric ton (t) = 1000 kilograms (kg)\n1 kilogram (kg) = 1000 grams (g)\n1 gram (g) = 1000 milligrams (mg)",
        description: "Basic metric mass conversions",
        example: "2.5 kg = 2.5 × 1000 = 2500 g",
      },
      {
        name: "Imperial/US Conversions",
        formula:
          "1 US ton = 2000 pounds (lb)\n1 UK ton = 2240 pounds (lb)\n1 stone (st) = 14 pounds (lb)\n1 pound (lb) = 16 ounces (oz)",
        description: "Basic imperial and US mass conversions",
        example: "3 stones = 3 × 14 = 42 pounds",
      },
      {
        name: "Metric to Imperial/US",
        formula:
          "1 kilogram = 2.20462 pounds\n1 gram = 0.035274 ounces\n1 metric ton = 2204.62 pounds = 1.10231 US tons",
        description: "Conversions from metric to imperial/US mass units",
        example: "75 kg = 75 × 2.20462 = 165.35 pounds",
      },
      {
        name: "Imperial/US to Metric",
        formula: "1 pound = 0.453592 kilograms\n1 ounce = 28.3495 grams\n1 US ton = 907.185 kilograms",
        description: "Conversions from imperial/US to metric mass units",
        example: "150 pounds = 150 × 0.453592 = 68.04 kg",
      },
      {
        name: "Scientific Mass Units",
        formula:
          "1 gram = 1,000,000,000 micrograms (μg)\n1 microgram = 1,000 nanograms (ng)\n1 atomic mass unit (u) = 1.66053886 × 10^-27 kg",
        description: "Conversions for scientific mass measurements",
        example: "5 mg = 5 × 1,000 = 5,000 μg",
      },
    ],
  },
  {
    category: "Temperature",
    formulas: [
      {
        name: "Celsius to Fahrenheit",
        formula: "°F = (°C × 9/5) + 32",
        description: "Convert from Celsius to Fahrenheit",
        example: "25°C = (25 × 9/5) + 32 = 77°F",
      },
      {
        name: "Fahrenheit to Celsius",
        formula: "°C = (°F - 32) × 5/9",
        description: "Convert from Fahrenheit to Celsius",
        example: "98.6°F = (98.6 - 32) × 5/9 = 37°C",
      },
      {
        name: "Celsius to Kelvin",
        formula: "K = °C + 273.15",
        description: "Convert from Celsius to Kelvin",
        example: "0°C = 0 + 273.15 = 273.15K",
      },
      {
        name: "Kelvin to Celsius",
        formula: "°C = K - 273.15",
        description: "Convert from Kelvin to Celsius",
        example: "300K = 300 - 273.15 = 26.85°C",
      },
      {
        name: "Fahrenheit to Kelvin",
        formula: "K = (°F - 32) × 5/9 + 273.15",
        description: "Convert from Fahrenheit to Kelvin",
        example: "68°F = (68 - 32) × 5/9 + 273.15 = 293.15K",
      },
      {
        name: "Kelvin to Fahrenheit",
        formula: "°F = (K - 273.15) × 9/5 + 32",
        description: "Convert from Kelvin to Fahrenheit",
        example: "300K = (300 - 273.15) × 9/5 + 32 = 80.33°F",
      },
      {
        name: "Celsius to Rankine",
        formula: "°R = (°C + 273.15) × 9/5",
        description: "Convert from Celsius to Rankine",
        example: "25°C = (25 + 273.15) × 9/5 = 537.27°R",
      },
      {
        name: "Rankine to Celsius",
        formula: "°C = (°R × 5/9) - 273.15",
        description: "Convert from Rankine to Celsius",
        example: "500°R = (500 × 5/9) - 273.15 = 4.63°C",
      },
    ],
  },
  {
    category: "Volume",
    formulas: [
      {
        name: "Metric Conversions",
        formula:
          "1 cubic meter (m³) = 1000 liters (L)\n1 liter (L) = 1000 milliliters (mL)\n1 milliliter (mL) = 1 cubic centimeter (cm³)",
        description: "Basic metric volume conversions",
        example: "2.5 L = 2.5 × 1000 = 2500 mL",
      },
      {
        name: "US Liquid Measure",
        formula:
          "1 US gallon = 3.78541 liters\n1 US gallon = 4 US quarts\n1 US quart = 2 US pints\n1 US pint = 16 US fluid ounces",
        description: "US liquid volume conversions",
        example: "2 US quarts = 2 × 0.946353 = 1.89 liters",
      },
      {
        name: "Imperial Liquid Measure",
        formula:
          "1 Imperial gallon = 4.54609 liters\n1 Imperial gallon = 4 Imperial quarts\n1 Imperial quart = 2 Imperial pints\n1 Imperial pint = 20 Imperial fluid ounces",
        description: "Imperial liquid volume conversions",
        example: "1 Imperial gallon = 1.20095 US gallons",
      },
      {
        name: "Cooking Measurements",
        formula:
          "1 US cup = 8 US fluid ounces = 236.588 mL\n1 US tablespoon = 3 US teaspoons = 14.7868 mL\n1 US teaspoon = 4.92892 mL",
        description: "Common cooking volume measurements",
        example: "3 US tablespoons = 3 × 14.7868 = 44.36 mL",
      },
    ],
  },
  {
    category: "Area",
    formulas: [
      {
        name: "Metric Conversions",
        formula:
          "1 square kilometer (km²) = 1,000,000 square meters (m²)\n1 square meter (m²) = 10,000 square centimeters (cm²)\n1 hectare (ha) = 10,000 square meters (m²)",
        description: "Basic metric area conversions",
        example: "5 hectares = 5 × 10,000 = 50,000 m²",
      },
      {
        name: "Imperial/US Conversions",
        formula:
          "1 square mile = 640 acres\n1 acre = 43,560 square feet\n1 square yard = 9 square feet\n1 square foot = 144 square inches",
        description: "Imperial and US area conversions",
        example: "2 acres = 2 × 43,560 = 87,120 square feet",
      },
      {
        name: "Metric to Imperial/US",
        formula:
          "1 square meter = 10.7639 square feet\n1 hectare = 2.47105 acres\n1 square kilometer = 0.386102 square miles",
        description: "Conversions from metric to imperial/US area units",
        example: "100 m² = 100 × 10.7639 = 1,076.39 square feet",
      },
    ],
  },
  {
    category: "Speed",
    formulas: [
      {
        name: "Basic Conversions",
        formula:
          "1 meter per second (m/s) = 3.6 kilometers per hour (km/h)\n1 kilometer per hour (km/h) = 0.277778 meters per second (m/s)\n1 mile per hour (mph) = 1.60934 kilometers per hour (km/h)\n1 knot = 1.852 kilometers per hour (km/h)",
        description: "Basic speed unit conversions",
        example: "100 km/h = 100 × 0.621371 = 62.14 mph",
      },
      {
        name: "Aviation and Maritime",
        formula:
          "1 knot = 1.15078 miles per hour (mph)\n1 knot = 0.514444 meters per second (m/s)\n1 mach (at sea level, 15°C) = 340.3 meters per second (m/s) = 1,225 kilometers per hour (km/h)",
        description: "Speed conversions for aviation and maritime use",
        example: "500 knots = 500 × 1.852 = 926 km/h",
      },
    ],
  },
  {
    category: "Time",
    formulas: [
      {
        name: "Basic Time Conversions",
        formula:
          "1 day = 24 hours\n1 hour = 60 minutes\n1 minute = 60 seconds\n1 week = 7 days\n1 year (average) = 365.242 days\n1 decade = 10 years\n1 century = 100 years",
        description: "Standard time unit conversions",
        example: "3 days = 3 × 24 = 72 hours",
      },
      {
        name: "Astronomical Time",
        formula:
          "1 solar day = 24 hours\n1 sidereal day = 23 hours, 56 minutes, 4.091 seconds\n1 lunar month = 29.53059 days\n1 light-year = 9,460,730,472,580.8 kilometers",
        description: "Time measurements used in astronomy",
        example: "1 year = 365.242 × 24 = 8,765.81 hours",
      },
    ],
  },
]

export default function UnitConversionFormulas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  // Filter formulas based on search term and selected category
  const filteredFormulas = unitConversionFormulas
    .map((category) => ({
      ...category,
      formulas: category.formulas.filter(
        (formula) =>
          (searchTerm === "" ||
            formula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            formula.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            formula.formula.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedCategory === null || category.category === selectedCategory),
      ),
    }))
    .filter((category) => category.formulas.length > 0)

  const copyFormula = (formula: string) => {
    navigator.clipboard.writeText(formula)
    setCopied(formula)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          <Info className="h-5 w-5 text-green-500" />
          Unit Conversion Formulas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search formulas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <div>
              <select
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="w-full sm:w-auto px-3 py-2 border rounded-md"
              >
                <option value="">All Categories</option>
                {unitConversionFormulas.map((category) => (
                  <option key={category.category} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Tabs defaultValue="categories" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="categories">By Category</TabsTrigger>
              <TabsTrigger value="all">All Formulas</TabsTrigger>
            </TabsList>

            <TabsContent value="categories" className="pt-4">
              <ScrollArea className="h-[60vh]">
                <Accordion type="multiple" className="w-full">
                  {filteredFormulas.map((category, categoryIndex) => (
                    <AccordionItem key={categoryIndex} value={category.category}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center">
                          <span className="font-medium">{category.category}</span>
                          <Badge className="ml-2">{category.formulas.length}</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pl-1">
                          {category.formulas.map((formula, formulaIndex) => (
                            <Card key={formulaIndex} className="overflow-hidden border-l-4 border-l-green-500">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-medium text-green-600 dark:text-green-400">{formula.name}</h3>
                                  <TooltipProvider>
                                    <Tooltip open={copied === formula.formula}>
                                      <TooltipTrigger asChild>
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          className="h-8 w-8"
                                          onClick={() => copyFormula(formula.formula)}
                                        >
                                          <Copy className="h-4 w-4" />
                                          <span className="sr-only">Copy formula</span>
                                        </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Copied!</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                                <div className="mt-2 p-2 bg-green-50 dark:bg-green-950 rounded font-mono text-sm whitespace-pre-line">
                                  {formula.formula}
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">{formula.description}</p>
                                {formula.example && (
                                  <div className="mt-2 text-xs">
                                    <span className="text-muted-foreground">Example: </span>
                                    <span className="font-medium">{formula.example}</span>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="all" className="pt-4">
              <ScrollArea className="h-[60vh]">
                <div className="space-y-4">
                  {filteredFormulas.flatMap((category) =>
                    category.formulas.map((formula, formulaIndex) => (
                      <Card
                        key={`${category.category}-${formulaIndex}`}
                        className="overflow-hidden border-l-4 border-l-green-500"
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-green-600 dark:text-green-400">{formula.name}</h3>
                              <Badge variant="outline" className="mt-1">
                                {category.category}
                              </Badge>
                            </div>
                            <TooltipProvider>
                              <Tooltip open={copied === formula.formula}>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => copyFormula(formula.formula)}
                                  >
                                    <Copy className="h-4 w-4" />
                                    <span className="sr-only">Copy formula</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Copied!</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <div className="mt-2 p-2 bg-green-50 dark:bg-green-950 rounded font-mono text-sm whitespace-pre-line">
                            {formula.formula}
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{formula.description}</p>
                          {formula.example && (
                            <div className="mt-2 text-xs">
                              <span className="text-muted-foreground">Example: </span>
                              <span className="font-medium">{formula.example}</span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )),
                  )}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
