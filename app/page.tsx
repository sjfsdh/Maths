import { ToolCard } from "@/components/tool-card"
import { Calculator, SettingsIcon as Functions, Ruler, Percent, Keyboard } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
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
      image: "/images/math-evaluator.png",
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
      image: "/images/algebra-solver.png",
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
      image: "/images/unit-converter.png",
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
      image: "/images/percentage-calculator.png",
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
      image: "/images/typing-speed-tester.png",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="relative bg-gradient-to-b from-background to-muted/50 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Learn Faster with Interactive Tools
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Quicklearn provides educational tools to help students master math, improve typing skills, and solve
                  complex problems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    <Link href="/tools">Explore Tools</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                  >
                    <Link href="/blog">Read Blog</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-image.png"
                  alt="Students learning with Quicklearn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          {/* AdSense Placeholder - Top */}
          <div className="w-full h-[90px] bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50 mb-12">
            <p className="text-muted-foreground text-sm">Advertisement Space</p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400">
              Educational Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of interactive tools to help students and teachers with mathematics, calculations, and skill
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          {/* AdSense Placeholder - Bottom */}
          <div className="w-full h-[250px] bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50 mt-12">
            <p className="text-muted-foreground text-sm">Advertisement Space</p>
          </div>
        </section>

        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/educational-articles.png"
                  alt="Latest educational articles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-rose-600 dark:from-amber-400 dark:to-rose-400">
                  Latest Educational Articles
                </h2>
                <p className="text-lg text-muted-foreground">
                  Explore our blog for tips, tutorials, and insights on mathematics, typing skills, and more educational
                  topics.
                </p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700">
                  <Link href="/blog">Browse Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
