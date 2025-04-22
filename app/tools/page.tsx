import Link from "next/link"
import Image from "next/image"
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
      description:
        "Evaluate complex mathematical expressions with step-by-step solutions. Our powerful calculator handles arithmetic, algebra, trigonometry, and calculus with detailed explanations for each step.",
      longDescription:
        "Our Math Expression Evaluator is a comprehensive tool designed to handle a wide range of mathematical calculations. From basic arithmetic to complex calculus, this tool breaks down each step of the solution process, making it perfect for students who want to understand the 'why' behind each calculation. Features include support for variables, constants, functions, and a history feature to track your previous calculations.",
      icon: Calculator,
      color: "bg-blue-100 dark:bg-blue-950",
      textColor: "text-blue-600 dark:text-blue-400",
      image: "/placeholder.svg?height=200&width=400&text=Math+Expression+Evaluator",
    },
    {
      id: "algebra-solver",
      title: "Algebra Solver",
      description:
        "Solve algebraic equations and systems with detailed explanations. From linear equations to quadratics, polynomials, and systems of equations, get comprehensive solutions.",
      longDescription:
        "The Algebra Solver is your go-to resource for solving all types of algebraic problems. It handles linear equations, quadratic equations, polynomials, inequalities, and systems of equations with ease. Each solution comes with a step-by-step breakdown, helping you understand the algebraic principles at work. The tool also includes a formula reference section with common algebraic formulas and their applications.",
      icon: Functions,
      color: "bg-purple-100 dark:bg-purple-950",
      textColor: "text-purple-600 dark:text-purple-400",
      image: "/placeholder.svg?height=200&width=400&text=Algebra+Solver",
    },
    {
      id: "unit-converter",
      title: "Unit Converter",
      description:
        "Convert between different units of measurement across various categories including length, mass, volume, temperature, time, and more with precise calculations and formulas.",
      longDescription:
        "Our Unit Converter tool makes converting between different measurement systems effortless. It supports a comprehensive range of categories including length, area, volume, mass, temperature, time, speed, pressure, energy, and digital storage. Each conversion includes the exact formula used, allowing you to understand the mathematical relationship between different units. The tool also features commonly used conversions for quick access and a history feature to track your recent conversions.",
      icon: Ruler,
      color: "bg-green-100 dark:bg-green-950",
      textColor: "text-green-600 dark:text-green-400",
      image: "/placeholder.svg?height=200&width=400&text=Unit+Converter",
    },
    {
      id: "percentage-calculator",
      title: "Percentage & Ratio Calculator",
      description:
        "Calculate percentages, ratios, and proportions with ease. Solve percentage increase/decrease, find part/whole values, and convert between fractions, decimals, and percentages.",
      longDescription:
        "The Percentage & Ratio Calculator is a versatile tool for all your percentage and proportion needs. It can calculate percentage increases and decreases, find what percentage one number is of another, determine the original value before a percentage change, and convert between fractions, decimals, and percentages. The ratio calculator helps you simplify ratios, find missing values in proportions, and scale ratios up or down. Practical examples are included for real-world applications like discounts, taxes, and interest calculations.",
      icon: Percent,
      color: "bg-amber-100 dark:bg-amber-950",
      textColor: "text-amber-600 dark:text-amber-400",
      image: "/placeholder.svg?height=200&width=400&text=Percentage+Calculator",
    },
    {
      id: "typing-speed-tester",
      title: "Typing Speed Tester",
      description:
        "Measure and improve your typing speed and accuracy with interactive tests. Choose from different difficulty levels, track your WPM, accuracy, and progress over time.",
      longDescription:
        "Our Typing Speed Tester is designed to help you assess and improve your typing skills. It offers multiple difficulty levels from beginner to advanced, with customizable text options. The tool measures your words per minute (WPM), accuracy percentage, and provides detailed statistics on your performance. The advanced mode includes a timer feature to simulate time-pressure situations. Regular practice with this tool can help you develop muscle memory, increase typing speed, and reduce errors, which are valuable skills for students, professionals, and anyone who uses a computer regularly.",
      icon: Keyboard,
      color: "bg-rose-100 dark:bg-rose-950",
      textColor: "text-rose-600 dark:text-rose-400",
      image: "/placeholder.svg?height=200&width=400&text=Typing+Speed+Tester",
    },
  ]

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Educational Tools
        </h1>
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
          <Card
            key={tool.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col h-full"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={tool.image || "/placeholder.svg"}
                alt={tool.title}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={`absolute inset-0 opacity-60 ${tool.color}`}></div>
              <div className="absolute top-4 left-4 z-10">
                <div className={`rounded-full bg-white dark:bg-gray-800 p-2 ${tool.textColor}`}>
                  <tool.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
            <CardHeader className="p-6">
              <h3 className={`text-xl font-semibold ${tool.textColor}`}>{tool.title}</h3>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <p className="text-muted-foreground">{tool.longDescription || tool.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                asChild
                className={`w-full ${tool.color.replace("bg-", "bg-").replace("dark:bg-", "dark:bg-").replace("-100", "-600").replace("-950", "-600")} hover:${tool.color.replace("bg-", "bg-").replace("dark:bg-", "dark:bg-").replace("-100", "-700").replace("-950", "-700")} text-white`}
              >
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
