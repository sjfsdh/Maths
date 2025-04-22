import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Tag, ArrowLeft, Calendar } from "lucide-react"

export const metadata = {
  title: "The Mathematics of Ratios and Proportions in Everyday Life - Quicklearn",
  description:
    "Explore how ratios and proportions are used in cooking, finance, art, and more, with practical examples and calculation techniques.",
}

export default function BlogPost() {
  const post = {
    title: "The Mathematics of Ratios and Proportions in Everyday Life",
    date: "2023-11-25",
    author: "Dr. Maria Rodriguez",
    readTime: "10 min read",
    tags: ["Mathematics", "Ratios", "Proportions", "Practical Applications"],
    content: `
      <h2>Introduction</h2>
      <p>Ratios and proportions are fundamental mathematical concepts that describe relationships between quantities. While they might seem like abstract mathematical ideas, they're actually all around us—in cooking recipes, financial calculations, architectural designs, art compositions, and even in nature. This article explores the mathematics of ratios and proportions and their practical applications in everyday life.</p>
      
      <h2>Understanding Ratios</h2>
      
      <h3>What is a Ratio?</h3>
      <p>A ratio is a comparison of two or more quantities of the same kind. It expresses how many times one quantity contains another. Ratios can be written in several ways:</p>
      <ul>
        <li>Using a colon: 3:4</li>
        <li>As a fraction: 3/4</li>
        <li>With the word "to": 3 to 4</li>
      </ul>
      
      <h3>Types of Ratios</h3>
      <p>Ratios can be classified into different types based on the number of quantities being compared:</p>
      <ul>
        <li><strong>Simple ratio:</strong> Compares two quantities (e.g., 3:4)</li>
        <li><strong>Compound ratio:</strong> Compares three or more quantities (e.g., 3:4:5)</li>
        <li><strong>Duplicate ratio:</strong> The square of a simple ratio (e.g., (3:4)² = 9:16)</li>
        <li><strong>Triplicate ratio:</strong> The cube of a simple ratio (e.g., (3:4)³ = 27:64)</li>
      </ul>
      
      <h3>Equivalent Ratios</h3>
      <p>Equivalent ratios express the same relationship between quantities, just like equivalent fractions. To find equivalent ratios, multiply or divide both terms by the same non-zero number.</p>
      <p><strong>Example:</strong> The ratio 3:4 is equivalent to 6:8, 9:12, etc.</p>
      
      <h3>Simplifying Ratios</h3>
      <p>To simplify a ratio, divide both terms by their greatest common divisor (GCD).</p>
      <p><strong>Example:</strong> To simplify 12:18</p>
      <p>Find the GCD of 12 and 18, which is 6</p>
      <p>Divide both terms by 6: 12 ÷ 6 = 2, 18 ÷ 6 = 3</p>
      <p>The simplified ratio is 2:3</p>
      
      <h2>Understanding Proportions</h2>
      
      <h3>What is a Proportion?</h3>
      <p>A proportion is a statement that two ratios are equal. It can be written as:</p>
      <p>a:b = c:d or a/b = c/d</p>
      <p>This is read as "a is to b as c is to d."</p>
      
      <h3>The Cross-Multiplication Property</h3>
      <p>In a proportion a/b = c/d, the cross products are equal: a × d = b × c. This property is extremely useful for solving proportion problems.</p>
      <p><strong>Example:</strong> In the proportion 3/4 = 9/12, we can verify that 3 × 12 = 4 × 9, or 36 = 36.</p>
      
      <h3>Solving for an Unknown in a Proportion</h3>
      <p>When one term in a proportion is unknown, we can use cross-multiplication to find it.</p>
      <p><strong>Example:</strong> Solve for x in the proportion 3/4 = x/20</p>
      <p>Cross-multiply: 3 × 20 = 4 × x</p>
      <p>60 = 4x</p>
      <p>x = 15</p>
      
      <h2>Ratios and Proportions in Cooking</h2>
      
      <h3>Recipe Scaling</h3>
      <p>When you need to adjust a recipe to serve more or fewer people, you're using proportions.</p>
      <p><strong>Example:</strong> A recipe for 4 people calls for 2 cups of flour. How much flour do you need for 6 people?</p>
      <p>Set up the proportion: 2/4 = x/6</p>
      <p>Cross-multiply: 2 × 6 = 4 × x</p>
      <p>12 = 4x</p>
      <p>x = 3</p>
      <p>You need 3 cups of flour for 6 people.</p>
      
      <h3>Ingredient Ratios</h3>
      <p>Many classic recipes are based on specific ratios of ingredients:</p>
      <ul>
        <li><strong>Classic shortbread:</strong> 1:2:3 ratio of sugar:butter:flour</li>
        <li><strong>Basic bread dough:</strong> 5:3:1 ratio of flour:water:oil</li>
        <li><strong>Traditional vinaigrette:</strong> 3:1 ratio of oil:vinegar</li>
      </ul>
      <p>Understanding these ratios allows you to create variations while maintaining the basic structure of the recipe.</p>
      
      <h2>Ratios and Proportions in Finance</h2>
      
      <h3>Financial Ratios</h3>
      <p>In finance, ratios are used to evaluate a company's performance and financial health:</p>
      <ul>
        <li><strong>Price-to-Earnings (P/E) Ratio:</strong> Stock price divided by earnings per share</li>
        <li><strong>Debt-to-Equity Ratio:</strong> Total liabilities divided by shareholders' equity</li>
        <li><strong>Current Ratio:</strong> Current assets divided by current liabilities</li>
      </ul>
      
      <h3>Currency Exchange</h3>
      <p>Currency exchange rates are expressed as ratios, and currency conversions involve proportions.</p>
      <p><strong>Example:</strong> If 1 USD = 0.85 EUR, how many euros can you get for 120 USD?</p>
      <p>Set up the proportion: 1/0.85 = 120/x</p>
      <p>Cross-multiply: 1 × x = 120 × 0.85</p>
      <p>x = 102</p>
      <p>You can get 102 EUR for 120 USD.</p>
      
      <h3>Interest Calculations</h3>
      <p>Simple interest calculations involve ratios and proportions.</p>
      <p><strong>Example:</strong> If $1000 earns $50 interest in one year, how much will $1500 earn in the same period at the same rate?</p>
      <p>Set up the proportion: 50/1000 = x/1500</p>
      <p>Cross-multiply: 50 × 1500 = 1000 × x</p>
      <p>75000 = 1000x</p>
      <p>x = 75</p>
      <p>$1500 will earn $75 interest.</p>
      
      <h2>Ratios and Proportions in Art and Design</h2>
      
      <h3>The Golden Ratio</h3>
      <p>The golden ratio (approximately 1:1.618) is a special ratio found in nature and used in art and architecture for its aesthetic appeal. When a line is divided according to the golden ratio, the ratio of the whole line to the longer segment equals the ratio of the longer segment to the shorter segment.</p>
      
      <h3>Rule of Thirds</h3>
      <p>In photography and visual composition, the rule of thirds divides an image into a 3×3 grid. Placing key elements along these lines or at their intersections creates a more balanced and engaging composition.</p>
      
      <h3>Color Mixing</h3>
      <p>Artists use ratios to mix colors in specific proportions to achieve desired hues.</p>
      <p><strong>Example:</strong> A 2:1 ratio of blue to yellow paint will create a different green than a 1:2 ratio.</p>
      
      <h2>Ratios and Proportions in Science and Engineering</h2>
      
      <h3>Scale Models</h3>
      <p>Engineers and architects use scale ratios to create models of buildings, bridges, and other structures.</p>
      <p><strong>Example:</strong> A scale model of a building might use a ratio of 1:100, meaning 1 cm on the model represents 100 cm (1 m) on the actual building.</p>
      
      <h3>Chemical Reactions</h3>
      <p>Chemical equations represent the ratios of reactants and products in a reaction.</p>
      <p><strong>Example:</strong> The equation 2H₂ + O₂ → 2H₂O indicates that 2 molecules of hydrogen react with 1 molecule of oxygen to form 2 molecules of water.</p>
      
      <h3>Gear Ratios</h3>
      <p>In mechanical engineering, gear ratios determine how many rotations one gear makes relative to another.</p>
      <p><strong>Example:</strong> If a driving gear with 20 teeth is connected to a driven gear with 60 teeth, the gear ratio is 1:3. This means the driven gear makes 1 rotation for every 3 rotations of the driving gear.</p>
      
      <h2>Ratios and Proportions in Nature</h2>
      
      <h3>The Fibonacci Sequence and the Golden Ratio</h3>
      <p>The Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13, 21, ...) appears throughout nature. The ratio of consecutive Fibonacci numbers approaches the golden ratio as the numbers get larger.</p>
      
      <h3>Allometric Scaling</h3>
      <p>In biology, allometric scaling describes how anatomical and physiological features scale with body size.</p>
      <p><strong>Example:</strong> The ratio of brain weight to body weight follows a power law across different species.</p>
      
      <h2>Practical Applications and Problem-Solving</h2>
      
      <h3>Unit Pricing</h3>
      <p>Comparing the cost of products by calculating their unit price involves ratios.</p>
      <p><strong>Example:</strong> A 12 oz package costs $3.60, while a 16 oz package costs $4.80. Which is the better value?</p>
      <p>12 oz package: $3.60 ÷ 12 = $0.30 per oz</p>
      <p>16 oz package: $4.80 ÷ 16 = $0.30 per oz</p>
      <p>Both packages have the same unit price.</p>
      
      <h3>Map Reading</h3>
      <p>Maps use scale ratios to represent distances.</p>
      <p><strong>Example:</strong> If a map has a scale of 1:50,000, then 1 cm on the map represents 50,000 cm (500 m) in real life.</p>
      
      <h3>Time and Distance</h3>
      <p>Speed calculations involve ratios of distance to time.</p>
      <p><strong>Example:</strong> If a car travels 120 miles in 2 hours, how far will it travel in 5 hours at the same speed?</p>
      <p>Set up the proportion: 120/2 = x/5</p>
      <p>Cross-multiply: 120 × 5 = 2 × x</p>
      <p>600 = 2x</p>
      <p>x = 300</p>
      <p>The car will travel 300 miles in 5 hours.</p>
      
      <h2>Tools for Working with Ratios and Proportions</h2>
      
      <h3>Our Percentage & Ratio Calculator</h3>
      <p>For complex ratio and proportion calculations, our <a href="/tools/percentage-calculator">Percentage & Ratio Calculator</a> tool can help. It provides:</p>
      <ul>
        <li>Ratio simplification</li>
        <li>Conversion between ratios, fractions, and percentages</li>
        <li>Proportion solving</li>
        <li>Scaling calculations</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Ratios and proportions are powerful mathematical tools that help us understand and describe relationships between quantities. From cooking and finance to art and science, these concepts have countless practical applications in everyday life. By mastering the basics of ratios and proportions, you'll be better equipped to solve a wide range of problems and make informed decisions.</p>
      
      <p>For assistance with ratio and proportion calculations, try our <a href="/tools/percentage-calculator">Percentage & Ratio Calculator</a> tool, which can simplify ratios, solve proportions, and perform related calculations quickly and accurately.</p>
    `,
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <article>
        <Card>
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl">{post.title}</CardTitle>
            <CardDescription className="flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            {/* AdSense Placeholder - Top */}
            <div className="w-full h-[90px] bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50 mb-8">
              <p className="text-muted-foreground text-sm">Advertisement Space</p>
            </div>

            <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* AdSense Placeholder - Bottom */}
            <div className="w-full h-[250px] bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50 mt-8">
              <p className="text-muted-foreground text-sm">Advertisement Space</p>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  )
}
