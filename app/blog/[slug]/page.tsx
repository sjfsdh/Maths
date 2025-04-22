import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Tag, ArrowLeft, Calendar } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "10 Tips to Improve Your Typing Speed",
    excerpt:
      "Discover practical tips and exercises to boost your typing speed and accuracy. Learn how to position your hands correctly and develop muscle memory.",
    content: `
      <h2>Introduction</h2>
      <p>Typing is an essential skill in today's digital world. Whether you're a student, professional, or casual computer user, being able to type quickly and accurately can save you time and increase productivity.</p>
      
      <h2>Why Typing Speed Matters</h2>
      <p>Fast typing allows you to:</p>
      <ul>
        <li>Complete assignments and work more efficiently</li>
        <li>Reduce the gap between your thoughts and getting them on screen</li>
        <li>Decrease fatigue during long typing sessions</li>
        <li>Focus more on content rather than the mechanics of typing</li>
      </ul>
      
      <h2>10 Tips to Improve Your Typing Speed</h2>
      
      <h3>1. Use Proper Finger Positioning</h3>
      <p>Start with the home row keys (ASDF for the left hand, JKL; for the right hand). Each finger should be responsible for specific keys. Your thumbs should rest on the space bar.</p>
      
      <h3>2. Practice Touch Typing</h3>
      <p>Touch typing means typing without looking at the keyboard. This skill dramatically increases speed once mastered.</p>
      
      <h3>3. Practice Regularly</h3>
      <p>Set aside 15-20 minutes daily for typing practice. Consistency is key to building muscle memory.</p>
      
      <h3>4. Use Online Typing Tests</h3>
      <p>Regular testing helps track your progress and identifies areas for improvement.</p>
      
      <h3>5. Focus on Accuracy First</h3>
      <p>It's better to type slowly and accurately than to type quickly with many errors. Speed will naturally increase as you become more accurate.</p>
      
      <h3>6. Learn Keyboard Shortcuts</h3>
      <p>Keyboard shortcuts can significantly reduce the time spent on common tasks.</p>
      
      <h3>7. Maintain Good Posture</h3>
      <p>Sit up straight with your feet flat on the floor. Your wrists should hover above the keyboard, not rest on the desk.</p>
      
      <h3>8. Challenge Yourself</h3>
      <p>Once you're comfortable with basic typing, challenge yourself with more complex texts or increase your target WPM.</p>
      
      <h3>9. Use Typing Games</h3>
      <p>Typing games make practice fun and engaging, which helps maintain motivation.</p>
      
      <h3>10. Take Breaks</h3>
      <p>Short, frequent breaks prevent fatigue and help maintain focus during practice sessions.</p>
      
      <h2>Conclusion</h2>
      <p>Improving your typing speed is a gradual process that requires consistent practice. By following these tips and being patient with yourself, you'll see significant improvements over time. Remember, the goal is not just speed but a combination of speed and accuracy.</p>
    `,
    date: "2023-10-15",
    author: "Jane Smith",
    readTime: "5 min read",
    tags: ["Typing", "Productivity", "Skills"],
    slug: "improve-typing-speed",
  },
  {
    id: "2",
    title: "Understanding Mathematical Formulas: A Beginner's Guide",
    excerpt:
      "A comprehensive introduction to basic mathematical formulas and concepts. Perfect for students who want to strengthen their math foundation.",
    content: `
      <h2>Introduction to Mathematical Formulas</h2>
      <p>Mathematics is the language of patterns, quantities, and space. Mathematical formulas are concise ways to express relationships between different quantities or variables.</p>
      
      <h2>Why Understanding Formulas is Important</h2>
      <p>Formulas provide:</p>
      <ul>
        <li>A shorthand way to express complex relationships</li>
        <li>Tools for solving problems efficiently</li>
        <li>The foundation for advanced mathematical concepts</li>
        <li>Applications in real-world scenarios</li>
      </ul>
      
      <h2>Basic Arithmetic Formulas</h2>
      
      <h3>Addition and Subtraction</h3>
      <p>a + b = sum</p>
      <p>a - b = difference</p>
      
      <h3>Multiplication and Division</h3>
      <p>a × b = product</p>
      <p>a ÷ b = quotient (where b ≠ 0)</p>
      
      <h2>Algebraic Formulas</h2>
      
      <h3>Quadratic Formula</h3>
      <p>For a quadratic equation ax² + bx + c = 0, the solutions are:</p>
      <p>x = (-b ± √(b² - 4ac)) / 2a</p>
      
      <h3>Binomial Expansion</h3>
      <p>(a + b)² = a² + 2ab + b²</p>
      <p>(a - b)² = a² - 2ab + b²</p>
      <p>(a + b)(a - b) = a² - b²</p>
      
      <h2>Geometric Formulas</h2>
      
      <h3>Area Formulas</h3>
      <p>Rectangle: A = length × width</p>
      <p>Circle: A = πr²</p>
      <p>Triangle: A = (1/2) × base × height</p>
      
      <h3>Volume Formulas</h3>
      <p>Cube: V = side³</p>
      <p>Sphere: V = (4/3)πr³</p>
      <p>Cylinder: V = πr²h</p>
      
      <h2>Trigonometric Formulas</h2>
      
      <h3>Basic Trigonometric Ratios</h3>
      <p>sin(θ) = opposite / hypotenuse</p>
      <p>cos(θ) = adjacent / hypotenuse</p>
      <p>tan(θ) = opposite / adjacent</p>
      
      <h2>Tips for Learning Mathematical Formulas</h2>
      
      <h3>1. Understand, Don't Just Memorize</h3>
      <p>Try to understand the logic behind each formula rather than memorizing it blindly.</p>
      
      <h3>2. Practice Regularly</h3>
      <p>Apply formulas to solve problems regularly to reinforce your understanding.</p>
      
      <h3>3. Make Connections</h3>
      <p>Look for connections between different formulas and concepts.</p>
      
      <h3>4. Use Visual Aids</h3>
      <p>Diagrams and graphs can help visualize what formulas represent.</p>
      
      <h3>5. Teach Others</h3>
      <p>Explaining formulas to others is one of the best ways to solidify your understanding.</p>
      
      <h2>Conclusion</h2>
      <p>Mathematical formulas are powerful tools that help us understand and describe the world around us. By building a strong foundation in basic formulas, you'll be better equipped to tackle more complex mathematical concepts and real-world problems.</p>
    `,
    date: "2023-10-10",
    author: "John Doe",
    readTime: "8 min read",
    tags: ["Mathematics", "Education", "Beginners"],
    slug: "understanding-math-formulas",
  },
  {
    id: "3",
    title: "The Importance of Unit Conversion in Science and Engineering",
    excerpt:
      "Learn why unit conversion is crucial in scientific and engineering fields. This article covers common conversion factors and practical examples.",
    content: `
      <h2>Introduction</h2>
      <p>Unit conversion is the process of converting a quantity expressed in one unit to another unit of measurement. In science and engineering, accurate unit conversion is not just important—it's essential.</p>
      
      <h2>Why Unit Conversion Matters</h2>
      <p>Proper unit conversion:</p>
      <ul>
        <li>Ensures accuracy in calculations and measurements</li>
        <li>Facilitates communication between scientists and engineers globally</li>
        <li>Prevents costly errors in design and implementation</li>
        <li>Allows for standardization across different systems</li>
      </ul>
      
      <h2>Common Unit Conversion Systems</h2>
      
      <h3>Metric System (SI Units)</h3>
      <p>The International System of Units (SI) is the modern form of the metric system and is the most widely used system of measurement globally.</p>
      <p>Key features:</p>
      <ul>
        <li>Base units like meters, kilograms, and seconds</li>
        <li>Prefixes that modify units by powers of 10 (kilo-, milli-, etc.)</li>
        <li>Logical relationships between different units</li>
      </ul>
      
      <h3>Imperial/US Customary System</h3>
      <p>Used primarily in the United States and a few other countries.</p>
      <p>Key features:</p>
      <ul>
        <li>Units like inches, feet, pounds, and gallons</li>
        <li>Less systematic relationships between units</li>
        <li>Historical rather than scientific basis for many units</li>
      </ul>
      
      <h2>Critical Conversion Factors</h2>
      
      <h3>Length</h3>
      <p>1 inch = 2.54 centimeters (exact)</p>
      <p>1 foot = 0.3048 meters (exact)</p>
      <p>1 mile = 1.60934 kilometers</p>
      
      <h3>Mass/Weight</h3>
      <p>1 pound = 0.453592 kilograms</p>
      <p>1 kilogram = 2.20462 pounds</p>
      
      <h3>Volume</h3>
      <p>1 gallon (US) = 3.78541 liters</p>
      <p>1 liter = 0.264172 gallons (US)</p>
      
      <h2>Real-World Consequences of Conversion Errors</h2>
      
      <h3>The Mars Climate Orbiter Disaster</h3>
      <p>In 1999, NASA lost the $125 million Mars Climate Orbiter because of a unit conversion error. One team used metric units (newtons) while another used imperial units (pound-force), resulting in the spacecraft entering Mars' atmosphere at the wrong angle.</p>
      
      <h3>Gimli Glider Incident</h3>
      <p>In 1983, Air Canada Flight 143 ran out of fuel mid-flight due to a conversion error between imperial and metric units when calculating the fuel load. Fortunately, the pilots managed to glide the aircraft to a safe landing.</p>
      
      <h2>Best Practices for Unit Conversion</h2>
      
      <h3>1. Always Include Units in Calculations</h3>
      <p>Writing units alongside numbers helps track conversions and catch errors.</p>
      
      <h3>2. Use Conversion Factors as Fractions</h3>
      <p>Express conversion factors as fractions equal to 1 (e.g., 2.54 cm/1 inch) to ensure proper cancellation of units.</p>
      
      <h3>3. Double-Check Critical Conversions</h3>
      <p>For important calculations, have another person verify your work or use multiple methods to confirm results.</p>
      
      <h3>4. Use Digital Tools Wisely</h3>
      <p>While conversion calculators are helpful, understand the underlying principles to catch potential errors.</p>
      
      <h2>Conclusion</h2>
      <p>Unit conversion is a fundamental skill in science and engineering that directly impacts the success and safety of projects. By understanding different measurement systems and practicing careful conversion techniques, professionals can avoid costly mistakes and ensure accurate results in their work.</p>
    `,
    date: "2023-10-05",
    author: "Alex Johnson",
    readTime: "6 min read",
    tags: ["Science", "Engineering", "Unit Conversion"],
    slug: "unit-conversion-importance",
  },
  {
    id: "4",
    title: "How to Calculate Percentages: Simple Methods and Shortcuts",
    excerpt:
      "Master the art of calculating percentages quickly and accurately. This guide provides easy-to-follow methods and mental math shortcuts.",
    content: `
      <h2>Introduction to Percentages</h2>
      <p>A percentage is a number expressed as a fraction of 100. The symbol % is used to indicate a percentage. For example, 50% means 50 out of 100, or half of the total.</p>
      
      <h2>Why Percentages Matter</h2>
      <p>Percentages are used in countless everyday situations:</p>
      <ul>
        <li>Shopping discounts and sales tax</li>
        <li>Interest rates on loans and savings</li>
        <li>Statistics and data analysis</li>
        <li>Academic grading</li>
        <li>Business metrics and financial reports</li>
      </ul>
      
      <h2>Basic Percentage Calculations</h2>
      
      <h3>Finding a Percentage of a Number</h3>
      <p><strong>Formula:</strong> (Percentage × Number) ÷ 100</p>
      <p><strong>Example:</strong> What is 25% of 80?</p>
      <p>(25 × 80) ÷ 100 = 2000 ÷ 100 = 20</p>
      
      <h3>Finding What Percentage One Number is of Another</h3>
      <p><strong>Formula:</strong> (Part ÷ Whole) × 100</p>
      <p><strong>Example:</strong> 15 is what percentage of 60?</p>
      <p>(15 ÷ 60) × 100 = 0.25 × 100 = 25%</p>
      
      <h3>Finding the Original Number When a Percentage is Known</h3>
      <p><strong>Formula:</strong> (Amount ÷ Percentage) × 100</p>
      <p><strong>Example:</strong> 30 is 15% of what number?</p>
      <p>(30 ÷ 15) × 100 = 2 × 100 = 200</p>
      
      <h2>Mental Math Shortcuts for Percentages</h2>
      
      <h3>10% Shortcut</h3>
      <p>To find 10% of a number, simply move the decimal point one place to the left.</p>
      <p><strong>Example:</strong> 10% of 250 = 25</p>
      
      <h3>5% Shortcut</h3>
      <p>Find 10% and then divide by 2.</p>
      <p><strong>Example:</strong> 5% of 250 = 10% of 250 ÷ 2 = 25 ÷ 2 = 12.5</p>
      
      <h3>1% Shortcut</h3>
      <p>Move the decimal point two places to the left.</p>
      <p><strong>Example:</strong> 1% of 250 = 2.5</p>
      
      <h3>25% Shortcut</h3>
      <p>Find 1/4 of the number.</p>
      <p><strong>Example:</strong> 25% of 80 = 80 ÷ 4 = 20</p>
      
      <h3>50% Shortcut</h3>
      <p>Divide the number by 2.</p>
      <p><strong>Example:</strong> 50% of 80 = 80 ÷ 2 = 40</p>
      
      <h2>Percentage Increase and Decrease</h2>
      
      <h3>Percentage Increase</h3>
      <p><strong>Formula:</strong> [(New Value - Original Value) ÷ Original Value] × 100</p>
      <p><strong>Example:</strong> A product's price increases from $80 to $100. What is the percentage increase?</p>
      <p>[(100 - 80) ÷ 80] × 100 = [20 ÷ 80] × 100 = 0.25 × 100 = 25%</p>
      
      <h3>Percentage Decrease</h3>
      <p><strong>Formula:</strong> [(Original Value - New Value) ÷ Original Value] × 100</p>
      <p><strong>Example:</strong> A product's price decreases from $50 to $40. What is the percentage decrease?</p>
      <p>[(50 - 40) ÷ 50] × 100 = [10 ÷ 50] × 100 = 0.2 × 100 = 20%</p>
      
      <h2>Real-World Applications</h2>
      
      <h3>Calculating Discounts</h3>
      <p>To find the sale price after a discount:</p>
      <p><strong>Method 1:</strong> Original Price - (Original Price × Discount Percentage ÷ 100)</p>
      <p><strong>Method 2:</strong> Original Price × (1 - Discount Percentage ÷ 100)</p>
      <p><strong>Example:</strong> A $80 shirt is on sale for 25% off. What is the sale price?</p>
      <p>$80 - ($80 × 25 ÷ 100) = $80 - $20 = $60</p>
      <p>Or: $80 × (1 - 25 ÷ 100) = $80 × 0.75 = $60</p>
      
      <h3>Calculating Tax</h3>
      <p>To find the total price including tax:</p>
      <p>Total = Original Price + (Original Price × Tax Rate ÷ 100)</p>
      <p>Or: Total = Original Price × (1 + Tax Rate ÷ 100)</p>
      <p><strong>Example:</strong> A $50 item has 8% sales tax. What is the total price?</p>
      <p>$50 + ($50 × 8 ÷ 100) = $50 + $4 = $54</p>
      <p>Or: $50 × (1 + 8 ÷ 100) = $50 × 1.08 = $54</p>
      
      <h2>Conclusion</h2>
      <p>Understanding how to calculate percentages is a valuable skill that has countless applications in daily life. By mastering these basic methods and shortcuts, you'll be able to perform percentage calculations quickly and accurately, whether you're shopping, managing finances, or analyzing data.</p>
    `,
    date: "2023-09-28",
    author: "Sarah Williams",
    readTime: "4 min read",
    tags: ["Mathematics", "Percentages", "Practical Skills"],
    slug: "calculate-percentages",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
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
