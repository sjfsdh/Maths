"use client"

import { useState } from "react"
import { Ruler, Scale, Thermometer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { unitConversionData, convertUnit } from "./unit-conversion-data"

export default function UnitConverter() {
  const [activeTab, setActiveTab] = useState<"length" | "mass" | "temperature">("length")
  const [inputValue, setInputValue] = useState<string>("")
  const [fromUnit, setFromUnit] = useState<string>("")
  const [toUnit, setToUnit] = useState<string>("")
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleConvert = () => {
    setError(null)

    if (!inputValue) {
      setError("Please enter a value to convert")
      setResult(null)
      return
    }

    if (!fromUnit) {
      setError("Please select a unit to convert from")
      setResult(null)
      return
    }

    if (!toUnit) {
      setError("Please select a unit to convert to")
      setResult(null)
      return
    }

    const numValue = Number.parseFloat(inputValue)

    if (isNaN(numValue)) {
      setError("Please enter a valid number")
      setResult(null)
      return
    }

    try {
      const convertedValue = convertUnit(numValue, fromUnit, toUnit, activeTab)

      // Format the result based on the magnitude
      let formattedResult: string

      if (Math.abs(convertedValue) >= 1e9 || (Math.abs(convertedValue) <= 1e-9 && convertedValue !== 0)) {
        // Use scientific notation for very large or small numbers
        formattedResult = convertedValue.toExponential(6)
      } else if (Number.isInteger(convertedValue)) {
        // Use integer format if it's a whole number
        formattedResult = convertedValue.toString()
      } else {
        // Use decimal format with appropriate precision
        const precision =
          Math.abs(convertedValue) < 0.001
            ? 10
            : Math.abs(convertedValue) < 1
              ? 6
              : Math.abs(convertedValue) < 100
                ? 4
                : 2
        formattedResult = convertedValue.toFixed(precision).replace(/\.?0+$/, "")
      }

      setResult(formattedResult)
    } catch (err) {
      setError("An error occurred during conversion")
      setResult(null)
    }
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value as "length" | "mass" | "temperature")
    setFromUnit("")
    setToUnit("")
    setResult(null)
    setError(null)
  }

  const getUnitSymbol = (unitId: string, category: "length" | "mass" | "temperature"): string => {
    const unit = unitConversionData[category].units.find((u) => u.id === unitId)
    if (!unit) return ""

    // Extract the symbol from the name (usually in parentheses)
    const match = unit.name.match(/$$([^)]+)$$/)
    return match ? match[1] : unit.id
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-lg border-t-4 border-t-green-500 dark:border-t-green-400">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Ruler className="h-6 w-6 text-green-500 dark:text-green-400" />
            <CardTitle className="text-2xl">Unit Converter</CardTitle>
          </div>
          <CardDescription>Convert between different units of measurement</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="length" onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="length" className="flex items-center gap-2">
                <Ruler className="h-4 w-4" />
                <span className="hidden sm:inline">Length</span>
              </TabsTrigger>
              <TabsTrigger value="mass" className="flex items-center gap-2">
                <Scale className="h-4 w-4" />
                <span className="hidden sm:inline">Mass</span>
              </TabsTrigger>
              <TabsTrigger value="temperature" className="flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                <span className="hidden sm:inline">Temperature</span>
              </TabsTrigger>
            </TabsList>

            {(["length", "mass", "temperature"] as const).map((category) => (
              <TabsContent key={category} value={category} className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor={`${category}-from`}>From</Label>
                      <Select value={fromUnit} onValueChange={setFromUnit}>
                        <SelectTrigger id={`${category}-from`} className="w-full">
                          <SelectValue placeholder={`Select ${category} unit`} />
                        </SelectTrigger>
                        <SelectContent>
                          {unitConversionData[category].units.map((unit) => (
                            <SelectItem key={unit.id} value={unit.id}>
                              {unit.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor={`${category}-value`}>Value</Label>
                      <Input
                        id={`${category}-value`}
                        type="text"
                        inputMode="decimal"
                        placeholder="Enter value"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor={`${category}-to`}>To</Label>
                      <Select value={toUnit} onValueChange={setToUnit}>
                        <SelectTrigger id={`${category}-to`} className="w-full">
                          <SelectValue placeholder={`Select ${category} unit`} />
                        </SelectTrigger>
                        <SelectContent>
                          {unitConversionData[category].units.map((unit) => (
                            <SelectItem key={unit.id} value={unit.id}>
                              {unit.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={handleConvert} className="w-full bg-green-600 hover:bg-green-700">
                      Convert
                    </Button>
                  </div>
                </div>

                {error && (
                  <div className="p-4 border border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800 rounded-md text-red-600 dark:text-red-400">
                    {error}
                  </div>
                )}

                {result !== null && (
                  <div className="p-6 border border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 rounded-md">
                    <div className="text-sm text-muted-foreground mb-1">Result:</div>
                    <div className="text-2xl font-medium">
                      {inputValue} {getUnitSymbol(fromUnit, activeTab)} = {result} {getUnitSymbol(toUnit, activeTab)}
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h3 className="text-lg font-medium mb-2">About {unitConversionData[category].name} Units</h3>
                  <p className="text-sm text-muted-foreground">
                    {category === "length" &&
                      "Length units measure distance. The meter (m) is the SI base unit for length. Other common units include millimeters (mm), centimeters (cm), kilometers (km), inches (in), feet (ft), yards (yd), and miles (mi)."}
                    {category === "mass" &&
                      "Mass units measure the amount of matter in an object. The kilogram (kg) is the SI base unit for mass. Other common units include milligrams (mg), grams (g), metric tons (t), ounces (oz), pounds (lb), and stones (st)."}
                    {category === "temperature" &&
                      "Temperature units measure the degree of heat. Common scales include Celsius (°C), Fahrenheit (°F), and Kelvin (K). Celsius and Kelvin have the same size degree, while Fahrenheit degrees are 5/9 the size of Celsius degrees."}
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
