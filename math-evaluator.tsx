"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Calculator, Copy, X, Search, BookOpen, Info, Lightbulb, History, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Import mathematical terms data
import { mathematicalTerms } from "./mathematical-terms"
import { exampleCategories } from "./example-categories"

export default function MathExpressionEvaluator() {
  const [expression, setExpression] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredTerms, setFilteredTerms] = useState(mathematicalTerms)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [exampleSearchTerm, setExampleSearchTerm] = useState("")
  const [filteredExamples, setFilteredExamples] = useState(exampleCategories)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [solutionSteps, setSolutionSteps] = useState<string[]>([])
  const [history, setHistory] = useState<Array<{ expression: string; result: string }>>([])
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const [exampleExpression, setExampleExpression] = useState("")

  useEffect(() => {
    if (searchTerm) {
      const results = mathematicalTerms
        .map((category) => ({
          ...category,
          terms: category.terms.filter(
            (term) =>
              term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
              term.definition.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        }))
        .filter((category) => category.terms.length > 0)

      setFilteredTerms(results)
    } else {
      setFilteredTerms(mathematicalTerms)
    }
  }, [searchTerm])

  useEffect(() => {
    let filtered = exampleCategories

    // Filter by search term
    if (exampleSearchTerm) {
      filtered = filtered
        .map((category) => ({
          ...category,
          examples: category.examples.filter(
            (example) =>
              example.text.toLowerCase().includes(exampleSearchTerm.toLowerCase()) ||
              example.description.toLowerCase().includes(exampleSearchTerm.toLowerCase()) ||
              (example.explanation && example.explanation.toLowerCase().includes(exampleSearchTerm.toLowerCase())),
          ),
        }))
        .filter((category) => category.examples.length > 0)
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((category) => category.name === selectedCategory)
    }

    setFilteredExamples(filtered)
  }, [exampleSearchTerm, selectedCategory])

  const generateSolutionSteps = (expr: string, calculatedResult: number | string): string[] => {
    const steps: string[] = []

    try {
      // Basic parsing for demonstration - in a real app, you'd use a proper parser
      steps.push(`Starting with the expression: ${expr}`)

      // Handle parentheses
      if (expr.includes("(")) {
        steps.push(`Evaluate expressions inside parentheses first`)
      }

      // Handle exponents
      if (expr.includes("^") || expr.includes("**")) {
        steps.push(`Calculate exponents: a^b means a raised to the power of b`)
      }

      // Handle multiplication and division
      if (expr.includes("*") || expr.includes("/")) {
        steps.push(`Perform multiplication and division from left to right`)
      }

      // Handle addition and subtraction
      if (expr.includes("+") || expr.includes("-")) {
        steps.push(`Perform addition and subtraction from left to right`)
      }

      // Handle functions
      const functions = ["sin", "cos", "tan", "sqrt", "log", "abs"]
      for (const func of functions) {
        if (expr.includes(func)) {
          steps.push(`Calculate the ${func} function: ${func}(x) means the ${func} of x`)
        }
      }

      // Final result
      steps.push(`Final result: ${calculatedResult}`)

      return steps
    } catch (error) {
      return [`Could not generate solution steps for: ${expr}`]
    }
  }

  const evaluateExpression = () => {
    if (!expression.trim()) {
      setError("Please enter a math expression")
      setResult(null)
      setSolutionSteps([])
      return
    }

    try {
      // Create a safe evaluation context with only math functions
      const mathContext = {
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        asin: Math.asin,
        acos: Math.acos,
        atan: Math.atan,
        sinh: Math.sinh,
        cosh: Math.cosh,
        tanh: Math.tanh,
        sqrt: Math.sqrt,
        cbrt: Math.cbrt,
        log: Math.log10,
        ln: Math.log,
        abs: Math.abs,
        floor: Math.floor,
        ceil: Math.ceil,
        round: Math.round,
        max: (...args) => Math.max(...args),
        min: (...args) => Math.min(...args),
        PI: Math.PI,
        E: Math.E,
        pow: Math.pow,
        // Add factorial function
        factorial: (n) => {
          if (n < 0) return Number.NaN
          if (n === 0) return 1
          let result = 1
          for (let i = 2; i <= n; i++) result *= i
          return result
        },
      }

      // Process the expression
      let processedExpression = expression
        .replace(/\^/g, "**") // Replace ^ with ** for exponents
        .replace(/π/g, "PI")
        .replace(/pi/g, "PI")

      // Handle factorial
      processedExpression = processedExpression.replace(/(\d+)!/g, (match, number) => {
        return `factorial(${number})`
      })

      // Make sure all function calls are properly formatted
      const mathFunctions = [
        "sin",
        "cos",
        "tan",
        "asin",
        "acos",
        "atan",
        "sinh",
        "cosh",
        "tanh",
        "sqrt",
        "cbrt",
        "log",
        "ln",
        "abs",
        "floor",
        "ceil",
        "round",
        "max",
        "min",
      ]

      // First, handle cases where a function name is immediately followed by a number (like "log55")
      // This regex finds function names followed immediately by numbers and adds parentheses
      for (const func of mathFunctions) {
        const funcWithNumberRegex = new RegExp(`\\b${func}(\\d+)\\b`, "g")
        processedExpression = processedExpression.replace(funcWithNumberRegex, `${func}($1)`)
      }

      // Then handle normal function calls to ensure they're properly formatted
      for (const func of mathFunctions) {
        const funcRegex = new RegExp(`\\b${func}\\(`, "g")
        processedExpression = processedExpression.replace(funcRegex, `${func}(`)
      }

      // Security check - allow more characters but still prevent dangerous code
      if (!/^[\d+\-*/().^,\s\w=<>!&|%]+$/.test(processedExpression)) {
        throw new Error("Invalid characters in expression")
      }

      // Add more detailed logging for debugging
      console.log("Original expression:", expression)
      console.log("Processed expression:", processedExpression)

      // Create a Function that uses our safe math context
      const calculate = new Function(
        ...Object.keys(mathContext),
        `
        try {
          const result = ${processedExpression};
          return result;
        } catch (e) {
          console.error("Calculation error:", e);
          throw new Error("Invalid expression: " + e.message);
        }
      `,
      )

      // Execute the function with our math context values
      const calculatedResult = calculate(...Object.values(mathContext))

      if (calculatedResult === undefined || calculatedResult === null || isNaN(calculatedResult)) {
        throw new Error("Could not evaluate expression")
      }

      // Format the result
      const formattedResult =
        typeof calculatedResult === "number" && !Number.isInteger(calculatedResult)
          ? calculatedResult.toFixed(6).replace(/\.?0+$/, "")
          : calculatedResult.toString()

      setResult(formattedResult)
      setError(null)

      // Generate solution steps
      const steps = generateSolutionSteps(expression, formattedResult)
      setSolutionSteps(steps)

      // Add to history
      setHistory((prev) => [{ expression, result: formattedResult }, ...prev.slice(0, 9)])
    } catch (err) {
      console.error("Evaluation error:", err)
      setError(`Invalid expression. ${err.message || "Please check your syntax."}`)
      setResult(null)
      setSolutionSteps([])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      evaluateExpression()
    }
  }

  const clearInput = () => {
    setExpression("")
    setResult(null)
    setError(null)
    setSolutionSteps([])
    inputRef.current?.focus()
  }

  const copyResult = () => {
    if (result) {
      navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleUseExample = (example: string) => {
    setExpression(example)
    setResult(null)
    setError(null)
    setSolutionSteps([])
    inputRef.current?.focus()
  }

  useEffect(() => {
    if (exampleExpression) {
      setExpression(exampleExpression)
      setResult(null)
      setError(null)
      setSolutionSteps([])
      inputRef.current?.focus()
    }
  }, [exampleExpression])

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-lg border-t-4 border-t-blue-500 dark:border-t-blue-400">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              <CardTitle className="text-2xl">Math Expression Evaluator</CardTitle>
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Dialog open={historyDialogOpen} onOpenChange={setHistoryDialogOpen}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <History className="h-5 w-5" />
                          <span className="sr-only">History</span>
                        </Button>
                      </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Calculation History</p>
                    </TooltipContent>
                  </Tooltip>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Calculation History</DialogTitle>
                      <DialogDescription>Your recent calculations</DialogDescription>
                    </DialogHeader>
                    {history.length > 0 ? (
                      <div className="space-y-2 mt-2">
                        {history.map((item, index) => (
                          <div
                            key={index}
                            className="p-3 border rounded-md hover:bg-muted cursor-pointer"
                            onClick={() => {
                              setExpression(item.expression)
                              setHistoryDialogOpen(false)
                            }}
                          >
                            <div className="font-mono text-sm">{item.expression}</div>
                            <div className="flex justify-between items-center mt-1">
                              <div className="text-sm text-muted-foreground">= {item.result}</div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setExpression(item.expression)
                                  setHistoryDialogOpen(false)
                                }}
                              >
                                Use
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">No calculation history yet</div>
                    )}
                  </DialogContent>
                </Dialog>
              </TooltipProvider>

              <TooltipProvider>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <BookOpen className="h-5 w-5" />
                          <span className="sr-only">Mathematical Terms</span>
                        </Button>
                      </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Mathematical Terms</p>
                    </TooltipContent>
                  </Tooltip>
                  <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-hidden flex flex-col">
                    <DialogHeader>
                      <DialogTitle className="text-xl flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Mathematical Terms
                      </DialogTitle>
                      <DialogDescription>Explore mathematical concepts, definitions, and formulas</DialogDescription>
                    </DialogHeader>

                    <div className="relative mt-2 mb-4">
                      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search terms..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8"
                      />
                      {searchTerm && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                          onClick={() => setSearchTerm("")}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Clear search</span>
                        </Button>
                      )}
                    </div>

                    <Tabs defaultValue="categories" className="flex-1 overflow-hidden flex flex-col">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="categories">By Category</TabsTrigger>
                        <TabsTrigger value="all">All Terms</TabsTrigger>
                      </TabsList>

                      <TabsContent value="categories" className="flex-1 overflow-hidden">
                        <ScrollArea className="h-[50vh] pr-4">
                          <Accordion type="multiple" className="w-full">
                            {filteredTerms.map((category, index) => (
                              <AccordionItem key={index} value={`category-${index}`}>
                                <AccordionTrigger className="text-md font-medium hover:no-underline">
                                  {category.category} <Badge className="ml-2">{category.terms.length}</Badge>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="space-y-4 pl-1">
                                    {category.terms.map((term, termIndex) => (
                                      <div
                                        key={termIndex}
                                        className="border-l-2 border-blue-200 dark:border-blue-800 pl-3 py-1"
                                      >
                                        <h3 className="font-medium text-blue-600 dark:text-blue-400">{term.term}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{term.definition}</p>
                                        {term.formula && (
                                          <div className="mt-1 text-sm font-mono bg-muted p-1 rounded">
                                            {term.formula}
                                          </div>
                                        )}
                                        {term.example && (
                                          <div className="mt-1 text-xs">
                                            <span className="text-muted-foreground">Example: </span>
                                            <span className="font-medium">{term.example}</span>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </ScrollArea>
                      </TabsContent>

                      <TabsContent value="all" className="flex-1 overflow-hidden">
                        <ScrollArea className="h-[50vh] pr-4">
                          <div className="space-y-4">
                            {filteredTerms.flatMap((category) =>
                              category.terms.map((term, termIndex) => (
                                <div
                                  key={`${category.category}-${termIndex}`}
                                  className="border-l-2 border-blue-200 dark:border-blue-800 pl-3 py-2"
                                >
                                  <div className="flex items-center">
                                    <h3 className="font-medium text-blue-600 dark:text-blue-400">{term.term}</h3>
                                    <Badge variant="outline" className="ml-2 text-xs">
                                      {category.category}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">{term.definition}</p>
                                  {term.formula && (
                                    <div className="mt-1 text-sm font-mono bg-muted p-1 rounded">{term.formula}</div>
                                  )}
                                  {term.example && (
                                    <div className="mt-1 text-xs">
                                      <span className="text-muted-foreground">Example: </span>
                                      <span className="font-medium">{term.example}</span>
                                    </div>
                                  )}
                                </div>
                              )),
                            )}
                          </div>
                        </ScrollArea>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </TooltipProvider>
            </div>
          </div>
          <CardDescription>Enter a mathematical expression and click evaluate to see the result.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Input
              ref={inputRef}
              type="text"
              placeholder="e.g., (2+3)*5"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pr-10 text-lg py-6 font-mono"
              aria-label="Enter Math Expression"
            />
            {expression && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                onClick={clearInput}
                aria-label="Clear input"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <Button
            onClick={evaluateExpression}
            className="w-full py-6 text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700"
          >
            Evaluate
          </Button>

          {error && (
            <Alert variant="destructive" className="animate-in fade-in-50 duration-300">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result !== null && (
            <div className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-5 duration-300">
              <div className="relative p-4 bg-muted rounded-lg border">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-muted-foreground">Result:</h3>
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
                <p className="text-2xl font-mono mt-1 break-all">{result}</p>
              </div>

              {solutionSteps.length > 0 && (
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-5 w-5 text-blue-500" />
                    <h3 className="font-medium">Solution Steps</h3>
                  </div>
                  <ol className="space-y-2 pl-5 list-decimal">
                    {solutionSteps.map((step, index) => (
                      <li key={index} className="text-sm">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Example Expressions</h3>
              <div className="flex items-center gap-2">
                <div className="relative w-[200px]">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search examples..."
                    value={exampleSearchTerm}
                    onChange={(e) => setExampleSearchTerm(e.target.value)}
                    className="pl-8 h-8"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8">
                      <Filter className="h-4 w-4 mr-1" />
                      {selectedCategory || "All Categories"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedCategory(null)}>All Categories</DropdownMenuItem>
                    <Separator />
                    {exampleCategories.map((category) => (
                      <DropdownMenuItem key={category.name} onClick={() => setSelectedCategory(category.name)}>
                        {category.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredExamples.map((category) => (
                <div key={category.name}>
                  {filteredExamples.length > 1 && <h4 className="text-sm font-medium mb-2">{category.name}</h4>}
                  <div className="space-y-3">
                    {category.examples.map((example, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="py-3 px-4 bg-blue-50 dark:bg-blue-950 border-b">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-md font-mono">{example.text}</CardTitle>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleUseExample(example.text)}
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
                                <span className="font-medium">How it works:</span>
                              </div>
                              <p className="mt-1">{example.explanation}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredExamples.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No examples found matching your search criteria
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start text-sm text-muted-foreground">
          <p>
            This evaluator supports basic arithmetic operations (+, -, *, /), exponents (^), parentheses, and functions
            like sin(), cos(), sqrt(), log(), abs(), floor(), ceil(), and more. Click the book icon to explore
            mathematical terms.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
