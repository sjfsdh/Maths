"use client"

import { useState } from "react"
import { Percent, Calculator, ArrowRight, Info, RefreshCcw, DivideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PercentageCalculator() {
  // Percentage Calculator State
  const [percentageMode, setPercentageMode] = useState<string>("find-percentage")
  const [percentageValue, setPercentageValue] = useState<string>("")
  const [ofValue, setOfValue] = useState<string>("")
  const [percentageResult, setPercentageResult] = useState<string | null>(null)

  // Ratio Calculator State
  const [ratioA, setRatioA] = useState<string>("")
  const [ratioB, setRatioB] = useState<string>("")
  const [ratioResult, setRatioResult] = useState<string | null>(null)
  const [ratioDecimal, setRatioDecimal] = useState<string | null>(null)
  const [ratioPercentage, setRatioPercentage] = useState<string | null>(null)

  // Percentage Increase/Decrease State
  const [originalValue, setOriginalValue] = useState<string>("")
  const [newValue, setNewValue] = useState<string>("")
  const [changeResult, setChangeResult] = useState<string | null>(null)

  // Ratio Proportion State
  const [proportionA, setProportionA] = useState<string>("")
  const [proportionB, setProportionB] = useState<string>("")
  const [proportionC, setProportionC] = useState<string>("")
  const [proportionD, setProportionD] = useState<string>("")
  const [proportionResult, setProportionResult] = useState<string | null>(null)

  // Calculate percentage
  const calculatePercentage = () => {
    if (!percentageValue || !ofValue) {
      setPercentageResult("Please fill in all fields")
      return
    }

    const percent = Number.parseFloat(percentageValue)
    const value = Number.parseFloat(ofValue)

    if (isNaN(percent) || isNaN(value)) {
      setPercentageResult("Please enter valid numbers")
      return
    }

    let result: number

    switch (percentageMode) {
      case "find-percentage":
        // Calculate X% of Y
        result = (percent * value) / 100
        setPercentageResult(`${percent}% of ${value} = ${result.toFixed(2)}`)
        break
      case "find-percent":
        // Calculate what percentage X is of Y
        result = (percent / value) * 100
        setPercentageResult(`${percent} is ${result.toFixed(2)}% of ${value}`)
        break
      case "find-value":
        // Calculate X is what value of Y%
        result = (percent * 100) / value
        setPercentageResult(`${percent} is ${value}% of ${result.toFixed(2)}`)
        break
    }
  }

  // Calculate ratio
  const calculateRatio = () => {
    if (!ratioA || !ratioB) {
      setRatioResult("Please fill in both values")
      setRatioDecimal(null)
      setRatioPercentage(null)
      return
    }

    const a = Number.parseFloat(ratioA)
    const b = Number.parseFloat(ratioB)

    if (isNaN(a) || isNaN(b)) {
      setRatioResult("Please enter valid numbers")
      setRatioDecimal(null)
      setRatioPercentage(null)
      return
    }

    if (b === 0) {
      setRatioResult("Cannot divide by zero")
      setRatioDecimal(null)
      setRatioPercentage(null)
      return
    }

    // Find the greatest common divisor (GCD)
    const gcd = findGCD(a, b)
    const simplifiedA = a / gcd
    const simplifiedB = b / gcd

    // Format as whole numbers if possible
    const formatNumber = (num: number) => {
      return Number.isInteger(num) ? num.toString() : num.toFixed(2)
    }

    setRatioResult(`${formatNumber(simplifiedA)}:${formatNumber(simplifiedB)}`)
    setRatioDecimal((a / b).toFixed(4))
    setRatioPercentage(((a / b) * 100).toFixed(2) + "%")
  }

  // Calculate percentage change
  const calculateChange = () => {
    if (!originalValue || !newValue) {
      setChangeResult("Please fill in both values")
      return
    }

    const original = Number.parseFloat(originalValue)
    const current = Number.parseFloat(newValue)

    if (isNaN(original) || isNaN(current)) {
      setChangeResult("Please enter valid numbers")
      return
    }

    if (original === 0) {
      setChangeResult("Original value cannot be zero")
      return
    }

    const change = current - original
    const percentageChange = (change / original) * 100

    if (percentageChange > 0) {
      setChangeResult(`Increase of ${percentageChange.toFixed(2)}%`)
    } else if (percentageChange < 0) {
      setChangeResult(`Decrease of ${Math.abs(percentageChange).toFixed(2)}%`)
    } else {
      setChangeResult("No change (0%)")
    }
  }

  // Calculate proportion
  const calculateProportion = () => {
    if (!proportionA || !proportionB || !proportionC) {
      setProportionResult("Please fill in at least three values")
      return
    }

    const a = Number.parseFloat(proportionA)
    const b = Number.parseFloat(proportionB)
    const c = Number.parseFloat(proportionC)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setProportionResult("Please enter valid numbers")
      return
    }

    if (b === 0) {
      setProportionResult("Cannot divide by zero")
      return
    }

    // Calculate the missing value in the proportion a:b = c:d
    const d = (c * b) / a
    setProportionD(d.toFixed(2))
    setProportionResult(`${proportionA}:${proportionB} = ${proportionC}:${d.toFixed(2)}`)
  }

  // Helper function to find the greatest common divisor (GCD)
  const findGCD = (a: number, b: number): number => {
    a = Math.abs(a)
    b = Math.abs(b)
    while (b) {
      const t = b
      b = a % b
      a = t
    }
    return a
  }

  // Reset all fields
  const resetFields = (calculator: string) => {
    switch (calculator) {
      case "percentage":
        setPercentageValue("")
        setOfValue("")
        setPercentageResult(null)
        break
      case "ratio":
        setRatioA("")
        setRatioB("")
        setRatioResult(null)
        setRatioDecimal(null)
        setRatioPercentage(null)
        break
      case "change":
        setOriginalValue("")
        setNewValue("")
        setChangeResult(null)
        break
      case "proportion":
        setProportionA("")
        setProportionB("")
        setProportionC("")
        setProportionD("")
        setProportionResult(null)
        break
    }
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-lg border-t-4 border-t-amber-500 dark:border-t-amber-400">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Percent className="h-6 w-6 text-amber-500 dark:text-amber-400" />
            <CardTitle className="text-2xl">Percentage & Ratio Calculator</CardTitle>
          </div>
          <CardDescription>Calculate percentages, ratios, and proportions with ease</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="percentage" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="percentage" className="flex items-center gap-2">
                <Percent className="h-4 w-4" />
                <span>Percentages</span>
              </TabsTrigger>
              <TabsTrigger value="ratio" className="flex items-center gap-2">
                <DivideIcon className="h-4 w-4" />
                <span>Ratios</span>
              </TabsTrigger>
            </TabsList>

            {/* Percentage Tab */}
            <TabsContent value="percentage" className="space-y-6 pt-4">
              <Accordion type="single" collapsible defaultValue="percentage-calc" className="w-full">
                {/* Percentage Calculator */}
                <AccordionItem value="percentage-calc">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-amber-500" />
                      <span>Percentage Calculator</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-2">
                        <Label htmlFor="percentage-mode">Calculation Type</Label>
                        <Select value={percentageMode} onValueChange={setPercentageMode}>
                          <SelectTrigger id="percentage-mode">
                            <SelectValue placeholder="Select calculation type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="find-percentage">Find X% of Y</SelectItem>
                            <SelectItem value="find-percent">What % is X of Y?</SelectItem>
                            <SelectItem value="find-value">X is Y% of what?</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="percentage-value">
                              {percentageMode === "find-percentage"
                                ? "Percentage (%)"
                                : percentageMode === "find-percent"
                                  ? "Value X"
                                  : "Value X"}
                            </Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  {percentageMode === "find-percentage"
                                    ? "Enter the percentage value"
                                    : percentageMode === "find-percent"
                                      ? "Enter the value to find its percentage"
                                      : "Enter the value that represents the percentage"}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input
                            id="percentage-value"
                            type="number"
                            placeholder={percentageMode === "find-percentage" ? "e.g., 20" : "e.g., 30"}
                            value={percentageValue}
                            onChange={(e) => setPercentageValue(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="of-value">
                              {percentageMode === "find-percentage"
                                ? "Of Value"
                                : percentageMode === "find-percent"
                                  ? "Of Value Y"
                                  : "Percentage (%)"}
                            </Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  {percentageMode === "find-percentage"
                                    ? "Enter the value to calculate percentage of"
                                    : percentageMode === "find-percent"
                                      ? "Enter the total value"
                                      : "Enter the percentage"}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input
                            id="of-value"
                            type="number"
                            placeholder={
                              percentageMode === "find-percentage"
                                ? "e.g., 150"
                                : percentageMode === "find-percent"
                                  ? "e.g., 200"
                                  : "e.g., 25"
                            }
                            value={ofValue}
                            onChange={(e) => setOfValue(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={calculatePercentage} className="flex-1 bg-amber-600 hover:bg-amber-700">
                          Calculate
                        </Button>
                        <Button variant="outline" onClick={() => resetFields("percentage")} className="w-10 p-0">
                          <RefreshCcw className="h-4 w-4" />
                        </Button>
                      </div>

                      {percentageResult && (
                        <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-md border border-amber-200 dark:border-amber-800 mt-4 animate-in fade-in-50 duration-300">
                          <div className="font-medium text-lg">{percentageResult}</div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Percentage Change Calculator */}
                <AccordionItem value="percentage-change">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-amber-500" />
                      <span>Percentage Change Calculator</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="original-value">Original Value</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>Enter the starting value</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input
                            id="original-value"
                            type="number"
                            placeholder="e.g., 100"
                            value={originalValue}
                            onChange={(e) => setOriginalValue(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="new-value">New Value</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>Enter the final value</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input
                            id="new-value"
                            type="number"
                            placeholder="e.g., 125"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={calculateChange} className="flex-1 bg-amber-600 hover:bg-amber-700">
                          Calculate Change
                        </Button>
                        <Button variant="outline" onClick={() => resetFields("change")} className="w-10 p-0">
                          <RefreshCcw className="h-4 w-4" />
                        </Button>
                      </div>

                      {changeResult && (
                        <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-md border border-amber-200 dark:border-amber-800 mt-4 animate-in fade-in-50 duration-300">
                          <div className="font-medium text-lg">{changeResult}</div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Ratio Tab */}
            <TabsContent value="ratio" className="space-y-6 pt-4">
              <Accordion type="single" collapsible defaultValue="ratio-calc" className="w-full">
                {/* Ratio Calculator */}
                <AccordionItem value="ratio-calc">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-amber-500" />
                      <span>Ratio Calculator</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="ratio-a">Value A</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>Enter the first value of the ratio</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input
                            id="ratio-a"
                            type="number"
                            placeholder="e.g., 2"
                            value={ratioA}
                            onChange={(e) => setRatioA(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="ratio-b">Value B</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>Enter the second value of the ratio</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Input
                            id="ratio-b"
                            type="number"
                            placeholder="e.g., 3"
                            value={ratioB}
                            onChange={(e) => setRatioB(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={calculateRatio} className="flex-1 bg-amber-600 hover:bg-amber-700">
                          Calculate Ratio
                        </Button>
                        <Button variant="outline" onClick={() => resetFields("ratio")} className="w-10 p-0">
                          <RefreshCcw className="h-4 w-4" />
                        </Button>
                      </div>

                      {ratioResult && (
                        <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-md border border-amber-200 dark:border-amber-800 mt-4 animate-in fade-in-50 duration-300">
                          <div className="font-medium text-lg">Simplified Ratio: {ratioResult}</div>
                          {ratioDecimal && (
                            <div className="text-sm text-muted-foreground mt-2">
                              Decimal: {ratioDecimal} | Percentage: {ratioPercentage}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Proportion Calculator */}
                <AccordionItem value="proportion-calc">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-amber-500" />
                      <span>Proportion Calculator</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground mb-2">
                        Calculate the missing value in the proportion A:B = C:D
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="proportion-a">A</Label>
                          <Input
                            id="proportion-a"
                            type="number"
                            placeholder="e.g., 2"
                            value={proportionA}
                            onChange={(e) => setProportionA(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="proportion-b">B</Label>
                          <Input
                            id="proportion-b"
                            type="number"
                            placeholder="e.g., 3"
                            value={proportionB}
                            onChange={(e) => setProportionB(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="proportion-c">C</Label>
                          <Input
                            id="proportion-c"
                            type="number"
                            placeholder="e.g., 4"
                            value={proportionC}
                            onChange={(e) => setProportionC(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="proportion-d">D (result)</Label>
                          <Input
                            id="proportion-d"
                            type="number"
                            placeholder="Result"
                            value={proportionD}
                            readOnly
                            className="bg-muted"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={calculateProportion} className="flex-1 bg-amber-600 hover:bg-amber-700">
                          Calculate Proportion
                        </Button>
                        <Button variant="outline" onClick={() => resetFields("proportion")} className="w-10 p-0">
                          <RefreshCcw className="h-4 w-4" />
                        </Button>
                      </div>

                      {proportionResult && (
                        <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-md border border-amber-200 dark:border-amber-800 mt-4 animate-in fade-in-50 duration-300">
                          <div className="font-medium text-lg">{proportionResult}</div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>

          {/* Common Formulas and Examples */}
          <div className="mt-8 p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium mb-4">Common Formulas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-amber-600 dark:text-amber-400 mb-2">Percentage Calculations</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-mono">X% of Y = (X × Y) ÷ 100</span>
                  </li>
                  <li>
                    <span className="font-mono">X is what % of Y? = (X ÷ Y) × 100</span>
                  </li>
                  <li>
                    <span className="font-mono">X is Y% of what? = X ÷ (Y ÷ 100)</span>
                  </li>
                  <li>
                    <span className="font-mono">Percentage change = ((New - Original) ÷ Original) × 100</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-amber-600 dark:text-amber-400 mb-2">Ratio Calculations</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-mono">Simplify A:B = (A ÷ GCD):(B ÷ GCD)</span>
                  </li>
                  <li>
                    <span className="font-mono">Ratio to decimal = A ÷ B</span>
                  </li>
                  <li>
                    <span className="font-mono">Ratio to percentage = (A ÷ B) × 100%</span>
                  </li>
                  <li>
                    <span className="font-mono">Proportion A:B = C:D means A ÷ B = C ÷ D</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
