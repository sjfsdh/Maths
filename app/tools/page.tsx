import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, SettingsIcon as Functions, Ruler, Percent, Keyboard } from "lucide-react"

export const metadata = {
  title: "Educational Tools - Quicklearn",
  description: "Interactive educational tools and resources for students and teachers",
}

export default function ToolsPage() {
  const tools = [
    {
      id: "math-evaluator",
      title: "Math Expression Evaluator",
      description: "Evaluate complex mathematical expressions with step-by-step solutions.",
      icon: Calculator,
      color: "bg-blue-100 dark:bg-blue-950",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "algebra-solver",
      title: "Algebra Solver",
      description: "Solve algebraic equations and systems with detailed explanations.",
      icon: Functions,
      color: "bg-purple-100 dark:bg-purple-950",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "unit-converter",
      title: "Unit Converter",
      description: "Convert between different units of measurement across various categories.",
      icon: Ruler,
      color: "bg-green-100 dark:bg-green-950",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      id: "percentage-calculator",
      title: "Percentage & Ratio Calculator",
      description: "Calculate percentages, ratios, and proportions with ease.",
      icon: Percent,
      color: "bg-amber-100 dark:bg-amber-950",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      id: "typing-speed-tester",
      title: "Typing Speed Tester",
      description: "Measure and improve your typing speed and accuracy with interactive tests.",
      icon: Keyboard,
      color: "bg-rose-100 dark:bg-rose-950",
      textColor: "text-rose-600 dark:text-rose-400",
    },
  ]

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Educational Tools</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of interactive tools to help students and teachers with mathematics, calculations, and skill
          development.
        </p>
      </div>

      {/* AdSense Placeholder - Top */}
      <div className="w-full h-[90px] bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50 mb-8">
        <p className="text-muted-foreground text-sm">Advertisement Space</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
            <CardHeader className={`${tool.color} p-6`}>
              <div className="flex items-center gap-3">
                <div className={`rounded-full bg-white dark:bg-gray-800 p-2 ${tool.textColor}`}>
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{tool.title}</h3>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground">{tool.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={`/tools/${tool.id}`}>Launch Tool</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* AdSense Placeholder - Bottom */}
      <div className="w-full h-[250px] bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50 mt-12">
        <p className="text-muted-foreground text-sm">Advertisement Space</p>
      </div>
    </div>
  )
}
