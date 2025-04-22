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

import { algebraicFormulas } from "./algebraic-formulas"

export default function FormulaReference() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  // Filter formulas based on search term and selected category
  const filteredFormulas = algebraicFormulas
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
          <Info className="h-5 w-5 text-blue-500" />
          Algebraic Formulas Reference
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
                {algebraicFormulas.map((category) => (
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
                            <Card key={formulaIndex} className="overflow-hidden border-l-4 border-l-blue-500">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-medium text-blue-600 dark:text-blue-400">{formula.name}</h3>
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
                                <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-950 rounded font-mono text-sm whitespace-pre-line">
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
                        className="overflow-hidden border-l-4 border-l-blue-500"
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-blue-600 dark:text-blue-400">{formula.name}</h3>
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
                          <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-950 rounded font-mono text-sm whitespace-pre-line">
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
