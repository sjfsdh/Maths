"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Calculator, ArrowRight, Info, Lightbulb, Copy, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Import example equations and formula reference
import { algebraExamples } from "./algebra-examples"
import FormulaReference from "./formula-reference"

export default function AlgebraSolver() {
  const [equation, setEquation] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [steps, setSteps] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [isFormulaDialogOpen, setIsFormulaDialogOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const solveEquation = () => {
    if (!equation.trim()) {
      setError("Please enter an equation")
      setResult(null)
      setSteps([])
      return
    }

    try {
      // Reset previous results
      setError(null)

      // Check if the equation contains an equals sign
      if (!equation.includes("=")) {
        throw new Error("Equation must contain an equals sign (=)")
      }

      // Split the equation into left and right sides
      const [leftSide, rightSide] = equation.split("=").map((side) => side.trim())

      // Find the variable (assuming it's a single letter)
      const variableMatch = equation.match(/[a-zA-Z]/)
      if (!variableMatch) {
        throw new Error("No variable found in the equation")
      }

      const variable = variableMatch[0]

      // Parse the equation and solve for the variable
      const solutionSteps = []
      solutionSteps.push(`Starting with the equation: ${equation}`)

      // Move all terms with the variable to the left side
      // Move all constant terms to the right side
      const leftTerms = parseTerms(leftSide)
      const rightTerms = parseTerms(rightSide)

      // Collect variable terms and constant terms
      let variableCoefficient = 0
      let constantTerm = 0

      // Process left side
      leftTerms.forEach((term) => {
        if (term.includes(variable)) {
          // Extract coefficient
          const coefficient = extractCoefficient(term, variable)
          variableCoefficient += coefficient
        } else {
          // It's a constant, move it to the right side (with opposite sign)
          constantTerm -= Number.parseFloat(term)
        }
      })

      // Process right side
      rightTerms.forEach((term) => {
        if (term.includes(variable)) {
          // Extract coefficient and move to left side (with opposite sign)
          const coefficient = extractCoefficient(term, variable)
          variableCoefficient -= coefficient
        } else {
          // It's a constant
          constantTerm += Number.parseFloat(term)
        }
      })

      // Check if we can solve the equation
      if (variableCoefficient === 0) {
        if (constantTerm === 0) {
          setResult("Infinite solutions")
          solutionSteps.push("The equation is satisfied for any value of the variable")
        } else {
          setResult("No solution")
          solutionSteps.push("The equation has no solution")
        }
      } else {
        // Solve for the variable
        const solution = constantTerm / variableCoefficient

        // Add steps
        solutionSteps.push(`Move all terms with ${variable} to the left side and all constant terms to the right side`)
        solutionSteps.push(`${variableCoefficient}${variable} = ${constantTerm}`)
        solutionSteps.push(`Divide both sides by ${variableCoefficient}`)
        solutionSteps.push(`${variable} = ${solution}`)

        // Format the result
        const formattedResult = Number.isInteger(solution)
          ? solution.toString()
          : solution.toFixed(4).replace(/\.?0+$/, "")

        setResult(`${variable} = ${formattedResult}`)
      }

      setSteps(solutionSteps)
    } catch (err) {
      console.error("Solving error:", err)
      setError(`Error: ${err.message || "Could not solve the equation"}`)
      setResult(null)
      setSteps([])
    }
  }

  // Helper function to parse terms from an expression
  const parseTerms = (expression: string): string[] => {
    // Replace - with +- to make splitting easier
    const normalized = expression.replace(/\s/g, "").replace(/-/g, "+-")
    // Split by + and filter out empty strings
    return normalized.split("+").filter((term) => term !== "")
  }

  // Helper function to extract coefficient from a term
  const extractCoefficient = (term: string, variable: string): number => {
    if (term === variable) return 1
    if (term === `-${variable}`) return -1

    // Extract the coefficient
    const coefficient = term.replace(variable, "")
    return Number.parseFloat(coefficient)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      solveEquation()
    }
  }

  const clearInput = () => {
    setEquation("")
    setResult(null)
    setSteps([])
    setError(null)
    inputRef.current?.focus()
  }

  const copyResult = () => {
    if (result) {
      navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleUseExample = (exampleEquation: string) => {
    setEquation(exampleEquation)
    setResult(null)
    setSteps([])
    setError(null)
    inputRef.current?.focus()
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-lg border-t-4 border-t-blue-500 dark:border-t-blue-400">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              <CardTitle className="text-2xl">Algebra Equation Solver</CardTitle>
            </div>
            <Dialog open={isFormulaDialogOpen} onOpenChange={setIsFormulaDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Formula Reference</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle>Algebraic Formulas Reference</DialogTitle>
                  <DialogDescription>Browse formulas from basic to advanced algebra</DialogDescription>
                </DialogHeader>
                <FormulaReference />
              </DialogContent>
            </Dialog>
          </div>
          <CardDescription>Enter a linear equation and solve for the variable.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="solver" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="solver">Equation Solver</TabsTrigger>
              <TabsTrigger value="formulas">Formula Reference</TabsTrigger>
            </TabsList>

            <TabsContent value="solver" className="space-y-4 pt-4">
              <div className="relative">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="e.g., 2x + 4 = 10"
                  value={equation}
                  onChange={(e) => setEquation(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pr-10 text-lg py-6 font-mono"
                  aria-label="Enter Equation"
                />
                {equation && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={clearInput}
                    aria-label="Clear input"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <Button
                onClick={solveEquation}
                className="w-full py-6 text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700"
              >
                Solve
              </Button>

              {error && (
                <Alert variant="destructive" className="animate-in fade-in-50 duration-300">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {result && (
                <div className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-5 duration-300">
                  <div className="relative p-4 bg-muted rounded-lg border">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-muted-foreground">Solution:</h3>
                      <TooltipProvider>
                        <Tooltip open={copied}>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={copyResult} className="h-8 w-8">
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy result</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copied!</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-2xl font-mono break-all">{result}</p>
                  </div>

                  {steps.length > 0 && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-5 w-5 text-blue-500" />
                        <h3 className="font-medium">Solution Steps</h3>
                      </div>
                      <ol className="space-y-2 pl-5 list-decimal">
                        {steps.map((step, index) => (
                          <li key={index} className="text-sm">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-500" />
                  <h3 className="font-medium">Tips</h3>
                </div>
                <ul className="mt-2 space-y-1 text-sm pl-7 list-disc">
                  <li>Supports simple linear equations only (e.g., ax + b = c)</li>
                  <li>Use a single letter variable (like x, y, or z)</li>
                  <li>Make sure to include the equals sign (=)</li>
                  <li>For multiplication, use * (e.g., 2*x) or just write 2x</li>
                  <li>Check the Formula Reference tab for algebraic formulas and rules</li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Example Equations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {algebraExamples.map((example, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="py-3 px-4 bg-blue-50 dark:bg-blue-950 border-b">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-md font-mono">{example.equation}</CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleUseExample(example.equation)}
                            className="h-7"
                          >
                            Use
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="py-3 px-4">
                        <p className="text-sm">{example.description}</p>
                        {example.explanation && (
                          <div className="mt-2 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                              <Info className="h-3 w-3" />
                              <span className="font-medium">Approach:</span>
                            </div>
                            <p className="mt-1">{example.explanation}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="formulas" className="pt-4">
              <FormulaReference />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-start text-sm text-muted-foreground">
          <p>
            This solver handles basic linear equations in the form of ax + b = cx + d. For more complex equations, refer
            to the Formula Reference for guidance on solving techniques.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
