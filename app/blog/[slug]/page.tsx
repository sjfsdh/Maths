import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Tag, ArrowLeft, Calendar } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "Mastering Mental Math: Techniques to Calculate Faster",
    excerpt: "Learn powerful mental math techniques to improve calculation speed and accuracy in everyday situations.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Introduction</h2>
      <p>Mental math is the ability to perform calculations in your head without the aid of calculators, pen, or paper. It's a valuable skill that can save time and improve your overall mathematical abilities.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Why Mental Math Matters</h2>
      <p>Being proficient in mental math offers several advantages:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Saves time in everyday situations like shopping or splitting bills</li>
        <li>Improves number sense and mathematical intuition</li>
        <li>Enhances problem-solving abilities</li>
        <li>Builds confidence in handling numbers</li>
        <li>Serves as a foundation for more advanced mathematical concepts</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Basic Mental Math Techniques</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">1. Addition Strategies</h3>
      <p><strong class="text-green-600 dark:text-green-400">Make tens:</strong> When adding numbers, look for combinations that make 10, as these are easier to work with.</p>
      <p>Example: 8 + 7 = 8 + 2 + 5 = 10 + 5 = 15</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Left-to-right addition:</strong> Add the largest place values first.</p>
      <p>Example: 328 + 451 = (300 + 400) + (20 + 50) + (8 + 1) = 700 + 70 + 9 = 779</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">2. Subtraction Strategies</h3>
      <p><strong class="text-green-600 dark:text-green-400">Counting up:</strong> Instead of subtracting, count up from the smaller number to the larger one.</p>
      <p>Example: 83 - 57 = ? (Count: 57 + 3 = 60, 60 + 20 = 80, 80 + 3 = 83, so 3 + 20 + 3 = 26)</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Compensation:</strong> Round to an easier number, then adjust.</p>
      <p>Example: 83 - 57 = 83 - 60 + 3 = 23 + 3 = 26</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">3. Multiplication Strategies</h3>
      <p><strong class="text-green-600 dark:text-green-400">Multiply by 10, 100, 1000:</strong> Simply add zeros or move the decimal point.</p>
      <p>Example: 45 × 10 = 450, 45 × 100 = 4500</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Doubling and halving:</strong> Double one factor and halve the other to get an equivalent multiplication.</p>
      <p>Example: 25 × 16 = 50 × 8 = 100 × 4 = 400</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Distributive property:</strong> Break down one factor into parts that are easier to multiply.</p>
      <p>Example: 13 × 7 = (10 × 7) + (3 × 7) = 70 + 21 = 91</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Advanced Mental Math Techniques</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">1. Squaring Numbers</h3>
      <p><strong class="text-green-600 dark:text-green-400">Squaring numbers ending in 5:</strong> The result always ends in 25, and the first part is the number multiplied by the next number.</p>
      <p>Example: 35² = 3 × 4 = 12, so 35² = 1225</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">2. Percentage Calculations</h3>
      <p><strong class="text-green-600 dark:text-green-400">Finding 10%:</strong> Move the decimal point one place to the left.</p>
      <p>Example: 10% of 250 = 25</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Finding other percentages:</strong> Use 10% as a reference.</p>
      <p>Example: 15% of 80 = 10% of 80 + 5% of 80 = 8 + 4 = 12</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">3. Division Shortcuts</h3>
      <p><strong class="text-green-600 dark:text-green-400">Dividing by 5:</strong> Multiply by 2 and then divide by 10.</p>
      <p>Example: 85 ÷ 5 = (85 × 2) ÷ 10 = 170 ÷ 10 = 17</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Practice Exercises</h2>
      <p>To improve your mental math skills, try these exercises:</p>
      <ol class="list-decimal pl-6 my-4 space-y-2">
        <li>Calculate the tip on a restaurant bill without a calculator</li>
        <li>Add up grocery items as you shop</li>
        <li>Practice multiplication tables daily</li>
        <li>Play number games like Sudoku or KenKen</li>
        <li>Challenge yourself with mental math apps or online quizzes</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Conclusion</h2>
      <p>Mastering mental math is a gradual process that requires regular practice. Start with basic techniques and gradually move to more advanced ones. With time and practice, you'll develop faster calculation skills that will serve you well in many aspects of life.</p>
    `,
    date: "2023-11-01",
    author: "Michael Chen",
    readTime: "8 min read",
    tags: ["Mathematics", "Mental Math", "Learning Techniques"],
    slug: "mastering-mental-math",
    image: "/images/mental-math.png",
  },
  {
    id: "2",
    title: "The Science of Typing: How to Improve Your Speed and Accuracy",
    excerpt:
      "Discover the science behind efficient typing and learn evidence-based techniques to boost your typing speed and accuracy.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Introduction to Typing Science</h2>
      <p>Typing is a fundamental skill in today's digital world. Whether you're a student, professional, or casual computer user, efficient typing can save you countless hours and reduce physical strain.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">The Mechanics of Typing</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Keyboard Layouts</h3>
      <p>The most common keyboard layout is QWERTY, designed in the 1870s for mechanical typewriters. Alternative layouts include:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Dvorak:</strong> Designed to increase efficiency by placing the most commonly used letters in the home row</li>
        <li><strong class="text-green-600 dark:text-green-400">Colemak:</strong> A modern alternative that's easier to learn for QWERTY users while still improving efficiency</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Touch Typing Fundamentals</h3>
      <p>Touch typing is the ability to type without looking at the keyboard. The key principles include:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Keeping fingers on the home row (ASDF for left hand, JKL; for right hand)</li>
        <li>Using specific fingers for specific keys</li>
        <li>Maintaining proper posture and hand position</li>
        <li>Looking at the screen instead of the keyboard</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">The Science Behind Typing Speed</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Muscle Memory</h3>
      <p>Typing speed primarily depends on developing muscle memory, which is the ability to perform movements without conscious thought. When you type frequently, your brain creates neural pathways that allow your fingers to move automatically to the correct keys.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Cognitive Processing</h3>
      <p>Fast typing also involves efficient cognitive processing. Experienced typists:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Read ahead while typing</li>
        <li>Process words or chunks rather than individual letters</li>
        <li>Develop automaticity that reduces cognitive load</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Evidence-Based Techniques to Improve Typing</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">1. Deliberate Practice</h3>
      <p>Research shows that deliberate practice—focused, structured practice with feedback—is more effective than casual typing. Spend 15-30 minutes daily on typing exercises that target your specific weaknesses.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">2. Progressive Overload</h3>
      <p>Gradually increase the difficulty of your typing practice. Start with simple exercises and progressively move to more complex ones as your skills improve.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">3. Proper Ergonomics</h3>
      <p>Ergonomic factors significantly impact typing speed and accuracy:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Keep wrists straight and elevated</li>
        <li>Position the keyboard at or slightly below elbow height</li>
        <li>Sit with back straight and feet flat on the floor</li>
        <li>Position the screen at eye level</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">4. Rhythm and Consistency</h3>
      <p>Research indicates that consistent rhythm is more important than raw speed. Focus on maintaining a steady pace rather than typing as fast as possible, which often leads to errors.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Measuring and Tracking Progress</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Key Metrics</h3>
      <p>Track these metrics to monitor your typing progress:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Words Per Minute (WPM):</strong> The standard measure of typing speed</li>
        <li><strong class="text-green-600 dark:text-green-400">Accuracy Rate:</strong> The percentage of correctly typed characters</li>
        <li><strong class="text-green-600 dark:text-green-400">Consistency:</strong> The variation in your typing speed</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Benchmarks</h3>
      <p>Average typing speeds by proficiency level:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Beginner: 15-35 WPM</li>
        <li>Intermediate: 35-60 WPM</li>
        <li>Advanced: 60-80 WPM</li>
        <li>Professional: 80+ WPM</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Common Typing Mistakes and How to Fix Them</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">1. Looking at the Keyboard</h3>
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong> Cover your hands with a cloth or use a keyboard cover to force yourself to type without looking.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">2. Using Incorrect Finger Placement</h3>
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong> Practice basic finger placement exercises until the correct movements become automatic.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">3. Inconsistent Rhythm</h3>
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong> Type to the beat of a metronome to develop a consistent typing rhythm.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Recommended Tools and Resources</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Online Typing Tutors</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Typing.com - Comprehensive lessons for beginners to advanced</li>
        <li>Keybr.com - Adaptive practice that focuses on your weak spots</li>
        <li>MonkeyType - Minimalist typing test with extensive customization</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Typing Games</h3>
      <p>Gamified typing practice can make learning more enjoyable and increase motivation:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>ZType - Space shooter typing game</li>
        <li>TypeRacer - Competitive multiplayer typing races</li>
        <li>Nitro Type - Racing game with progression and rewards</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Conclusion</h2>
      <p>Improving your typing speed and accuracy is a worthwhile investment that pays dividends throughout your digital life. By understanding the science behind efficient typing and implementing evidence-based techniques, you can significantly enhance your typing skills. Remember that consistent practice is key—even 15 minutes of focused practice daily can lead to substantial improvements over time.</p>
    `,
    date: "2023-11-05",
    author: "Emily Johnson",
    readTime: "10 min read",
    tags: ["Typing", "Productivity", "Learning Techniques"],
    slug: "science-of-typing",
    image: "/images/science-of-typing.png",
  },
  {
    id: "3",
    title: "Understanding Unit Conversions: A Comprehensive Guide",
    excerpt:
      "Master the fundamentals of unit conversions across different measurement systems with practical examples and conversion techniques.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Introduction to Unit Conversions</h2>
      <p>Unit conversion is the process of changing a measurement from one unit to another. This skill is essential in science, engineering, cooking, travel, and many other everyday activities.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Fundamental Concepts</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Conversion Factors</h3>
      <p>A conversion factor is a ratio that expresses how many of one unit are equal to another unit. For example, 1 meter = 100 centimeters is a conversion factor.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Dimensional Analysis</h3>
      <p>Also known as the factor-label method, dimensional analysis involves multiplying the original measurement by one or more conversion factors to obtain the desired units.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Common Measurement Systems</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Metric System (SI)</h3>
      <p>The International System of Units (SI) is the modern form of the metric system and is the most widely used system of measurement globally.</p>
      <p>Key features:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Base units include meter (length), kilogram (mass), second (time)</li>
        <li>Uses prefixes to indicate multiples of 10 (kilo-, centi-, milli-, etc.)</li>
        <li>Consistent relationships between units (1000 meters = 1 kilometer)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Imperial/US Customary System</h3>
      <p>Used primarily in the United States and a few other countries.</p>
      <p>Key features:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Common units include inch, foot, yard, mile (length); ounce, pound, ton (weight)</li>
        <li>Relationships between units are not consistently based on powers of 10</li>
        <li>Different from the British Imperial system in some measurements</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Length Conversions</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Metric Length Conversions</h3>
      <p>Common metric length units and their relationships:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 kilometer (km) = 1000 meters (m)</li>
        <li>1 meter (m) = 100 centimeters (cm)</li>
        <li>1 centimeter (cm) = 10 millimeters (mm)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Imperial/US Length Conversions</h3>
      <p>Common imperial length units and their relationships:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 mile = 1760 yards = 5280 feet</li>
        <li>1 yard = 3 feet = 36 inches</li>
        <li>1 foot = 12 inches</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Metric-Imperial Conversions</h3>
      <p>Key conversion factors between systems:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 inch = 2.54 centimeters (exact)</li>
        <li>1 foot ≈ 0.3048 meters</li>
        <li>1 mile ≈ 1.60934 kilometers</li>
        <li>1 meter ≈ 3.28084 feet</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Weight and Mass Conversions</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Metric Weight/Mass Conversions</h3>
      <p>Common metric weight units and their relationships:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 metric ton (t) = 1000 kilograms (kg)</li>
        <li>1 kilogram (kg) = 1000 grams (g)</li>
        <li>1 gram (g) = 1000 milligrams (mg)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Imperial/US Weight Conversions</h3>
      <p>Common imperial weight units and their relationships:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 ton = 2000 pounds</li>
        <li>1 pound (lb) = 16 ounces (oz)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Metric-Imperial Weight Conversions</h3>
      <p>Key conversion factors between systems:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 kilogram ≈ 2.20462 pounds</li>
        <li>1 pound ≈ 0.453592 kilograms</li>
        <li>1 ounce ≈ 28.3495 grams</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Volume Conversions</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Metric Volume Conversions</h3>
      <p>Common metric volume units and their relationships:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 cubic meter (m³) = 1000 liters (L)</li>
        <li>1 liter (L) = 1000 milliliters (mL)</li>
        <li>1 milliliter (mL) = 1 cubic centimeter (cm³)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Imperial/US Volume Conversions</h3>
      <p>Common imperial volume units and their relationships:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 gallon = 4 quarts = 8 pints = 16 cups = 128 fluid ounces</li>
        <li>1 quart = 2 pints = 4 cups = 32 fluid ounces</li>
        <li>1 pint = 2 cups = 16 fluid ounces</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Metric-Imperial Volume Conversions</h3>
      <p>Key conversion factors between systems:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1 liter ≈ 0.264172 US gallons</li>
        <li>1 US gallon ≈ 3.78541 liters</li>
        <li>1 US fluid ounce ≈ 29.5735 milliliters</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Temperature Conversions</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Common Temperature Scales</h3>
      <p>The three main temperature scales are:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Celsius (°C):</strong> Used in most countries worldwide</li>
        <li><strong class="text-green-600 dark:text-green-400">Fahrenheit (°F):</strong> Used primarily in the United States</li>
        <li><strong class="text-green-600 dark:text-green-400">Kelvin (K):</strong> The SI unit used in scientific contexts</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Temperature Conversion Formulas</h3>
      <p>Unlike other conversions, temperature conversions use formulas rather than simple multiplication:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Celsius to Fahrenheit: °F = (°C × 9/5) + 32</li>
        <li>Fahrenheit to Celsius: °C = (°F - 32) × 5/9</li>
        <li>Celsius to Kelvin: K = °C + 273.15</li>
        <li>Kelvin to Celsius: °C = K - 273.15</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Practical Examples</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Example 1: Length Conversion</h3>
      <p><strong class="text-green-600 dark:text-green-400">Problem:</strong> Convert 5.8 meters to feet.</p>
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>5.8 meters × (3.28084 feet/1 meter) = 19.03 feet</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Example 2: Weight Conversion</h3>
      <p><strong class="text-green-600 dark:text-green-400">Problem:</strong> Convert 180 pounds to kilograms.</p>
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>180 pounds × (0.453592 kilograms/1 pound) = 81.65 kilograms</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Example 3: Temperature Conversion</h3>
      <p><strong class="text-green-600 dark:text-green-400">Problem:</strong> Convert 98.6°F (normal body temperature) to Celsius.</p>
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>°C = (98.6 - 32) × 5/9 = 66.6 × 5/9 = 37°C</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Tips for Accurate Unit Conversions</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">1. Write Out the Units</h3>
      <p>Always include units in your calculations to ensure dimensional consistency and to check that your final answer has the correct units.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">2. Use Exact Conversion Factors</h3>
      <p>When possible, use exact conversion factors rather than rounded values to minimize cumulative errors.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">3. Chain Conversions When Necessary</h3>
      <p>For complex conversions, break the process into steps using intermediate units.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Conclusion</h2>
      <p>Understanding unit conversions is a valuable skill that has applications across many fields and everyday situations. By mastering the fundamental concepts and practicing with different types of conversions, you can confidently work with measurements in any system. Remember that accuracy is crucial, especially in scientific, medical, and engineering contexts, so always double-check your work and use reliable conversion factors.</p>
    `,
    date: "2023-11-10",
    author: "Dr. Robert Martinez",
    readTime: "12 min read",
    tags: ["Mathematics", "Science", "Unit Conversion", "Practical Skills"],
    slug: "understanding-unit-conversions",
    image: "/images/understanding-unit-conversions.png",
  },
  {
    id: "4",
    title: "Mastering Percentages: Essential Skills for Everyday Math",
    excerpt:
      "Learn how to calculate and understand percentages for practical applications in shopping, finance, and data analysis.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Introduction to Percentages</h2>
      <p>Percentages are a fundamental mathematical concept used to express a number as a fraction of 100. The term "percent" literally means "per hundred" (from Latin "per centum"). Percentages are used extensively in everyday life, from shopping discounts to financial calculations, statistics, and data analysis.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Understanding Percentages</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Basic Concept</h3>
      <p>A percentage is a way to express a number as a fraction of 100. For example:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>50% means 50 out of 100, or 50/100, which equals 0.5</li>
        <li>25% means 25 out of 100, or 25/100, which equals 0.25</li>
        <li>100% means 100 out of 100, or 100/100, which equals 1 (the whole)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Converting Between Percentages, Decimals, and Fractions</h3>
      <p><strong class="text-green-600 dark:text-green-400">Percentage to Decimal:</strong> Divide by 100 (or move the decimal point two places to the left)</p>
      <p>Example: 75% = 75/100 = 0.75</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Decimal to Percentage:</strong> Multiply by 100 (or move the decimal point two places to the right)</p>
      <p>Example: 0.35 = 0.35 × 100 = 35%</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Fraction to Percentage:</strong> Divide the numerator by the denominator, then multiply by 100</p>
      <p>Example: 3/4 = 0.75 × 100 = 75%</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Percentage to Fraction:</strong> Express as a fraction with 100 as the denominator, then simplify</p>
      <p>Example: 25% = 25/100 = 1/4</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Basic Percentage Calculations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Finding a Percentage of a Number</h3>
      <p>To find a percentage of a number, convert the percentage to a decimal and multiply:</p>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> Number × (Percentage/100)</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> What is 15% of 80?</p>
      <p>80 × (15/100) = 80 × 0.15 = 12</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Finding What Percentage One Number is of Another</h3>
      <p>To find what percentage one number is of another, divide the first number by the second, then multiply by 100:</p>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> (Number 1 / Number 2) × 100</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> What percentage of 80 is 20?</p>
      <p>(20 / 80) × 100 = 0.25 × 100 = 25%</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Finding the Original Number When a Percentage is Known</h3>
      <p>To find the original number when you know a percentage of it:</p>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> Known amount / (Percentage/100)</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> If 15% of a number is 30, what is the number?</p>
      <p>30 / (15/100) = 30 / 0.15 = 200</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Percentage Increase and Decrease</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Calculating Percentage Increase</h3>
      <p>To find the percentage increase:</p>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> ((New Value - Original Value) / Original Value) × 100</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> A product's price increased from $80 to $100. What is the percentage increase?</p>
      <p>((100 - 80) / 80) × 100 = (20 / 80) × 100 = 0.25 × 100 = 25%</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Calculating Percentage Decrease</h3>
      <p>To find the percentage decrease:</p>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> ((Original Value - New Value) / Original Value) × 100</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> A product's price decreased from $100 to $75. What is the percentage decrease?</p>
      <p>((100 - 75) / 100) × 100 = (25 / 100) × 100 = 0.25 × 100 = 25%</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Finding the Final Value After a Percentage Change</h3>
      <p>To find the final value after a percentage increase or decrease:</p>
      <p><strong class="text-green-600 dark:text-green-400">Formula for increase:</strong> Original Value × (1 + Percentage/100)</p>
      <p><strong class="text-green-600 dark:text-green-400">Formula for decrease:</strong> Original Value × (1 - Percentage/100)</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> What is the final price of a $80 item after a 15% increase?</p>
      <p>$80 × (1 + 15/100) = $80 × 1.15 = $92</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Practical Applications</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Shopping and Discounts</h3>
      <p><strong class="text-green-600 dark:text-green-400">Calculating Sale Prices:</strong> Original Price × (1 - Discount Percentage/100)</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> A $50 shirt is on sale for 30% off. What is the sale price?</p>
      <p>$50 × (1 - 30/100) = $50 × 0.7 = $35</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Taxes and Tips</h3>
      <p><strong class="text-green-600 dark:text-green-400">Adding Tax:</strong> Original Price × (1 + Tax Rate/100)</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> What is the total cost of a $80 item with 8% sales tax?</p>
      <p>$80 × (1 + 8/100) = $80 × 1.08 = $86.40</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Calculating Tip:</strong> Bill Amount × (Tip Percentage/100)</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> How much is a 15% tip on a $60 restaurant bill?</p>
      <p>$60 × (15/100) = $60 × 0.15 = $9</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Finance and Investment</h3>
      <p><strong class="text-green-600 dark:text-green-400">Simple Interest:</strong> Principal × Rate × Time</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> How much interest will $1000 earn in 2 years at 5% annual simple interest?</p>
      <p>$1000 × (5/100) × 2 = $1000 × 0.05 × 2 = $100</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Compound Interest:</strong> Principal × (1 + Rate/100)^Time</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> What will $1000 be worth after 2 years at 5% annual compound interest?</p>
      <p>$1000 × (1 + 5/100)^2 = $1000 × 1.05^2 = $1000 × 1.1025 = $1102.50</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Common Percentage Shortcuts</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Mental Math Techniques</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Finding 10%:</strong> Move the decimal point one place to the left</li>
        <li><strong class="text-green-600 dark:text-green-400">Finding 1%:</strong> Move the decimal point two places to the left</li>
        <li><strong class="text-green-600 dark:text-green-400">Finding 5%:</strong> Take half of 10%</li>
        <li><strong class="text-green-600 dark:text-green-400">Finding 25%:</strong> Take one-fourth (divide by 4)</li>
        <li><strong class="text-green-600 dark:text-green-400">Finding 50%:</strong> Take one-half (divide by 2)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Building Complex Percentages</h3>
      <p>You can find complex percentages by combining simpler ones:</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> To find 35% of a number, find 30% (3 × 10%) and add 5%</p>
      <p>35% of 80 = 30% of 80 + 5% of 80 = 24 + 4 = 28</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Common Percentage Errors to Avoid</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Consecutive Percentage Changes</h3>
      <p>When applying multiple percentage changes, you cannot simply add or subtract the percentages.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> If a price increases by 10% and then decreases by 10%, it does not return to the original price.</p>
      <p>Original: $100</p>
      <p>After 10% increase: $100 × 1.1 = $110</p>
      <p>After 10% decrease: $110 × 0.9 = $99 (not $100)</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Percentage Points vs. Percentages</h3>
      <p>A percentage point is the arithmetic difference between two percentages, while a percentage change is the relative change.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> If an interest rate changes from 5% to 7%:</p>
      <p>The change is 2 percentage points</p>
      <p>The percentage increase is ((7 - 5) / 5) × 100 = 40%</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Conclusion</h2>
      <p>Mastering percentages is an essential skill for everyday mathematics. From shopping discounts to financial planning, understanding how to calculate and interpret percentages will help you make informed decisions. With practice, these calculations can become second nature, allowing you to quickly estimate and solve percentage problems in your daily life.</p>
    `,
    date: "2023-11-15",
    author: "Lisa Wong",
    readTime: "9 min read",
    tags: ["Mathematics", "Percentages", "Practical Skills", "Finance"],
    slug: "mastering-percentages",
    image: "/images/mastering-percentages.png",
  },
  {
    id: "5",
    title: "Solving Algebraic Equations: Step-by-Step Techniques",
    excerpt:
      "Learn systematic approaches to solve different types of algebraic equations with clear examples and practical applications.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Introduction to Algebraic Equations</h2>
      <p>Algebraic equations are mathematical statements that contain variables, numbers, and operations, with an equals sign (=) showing that two expressions have the same value. Solving these equations is a fundamental skill in mathematics with applications in science, engineering, finance, and many other fields.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Types of Algebraic Equations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Linear Equations</h3>
      <p>Linear equations involve variables raised only to the first power. The general form is ax + b = c, where a, b, and c are constants and x is the variable.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> 3x + 5 = 20</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Quadratic Equations</h3>
      <p>Quadratic equations involve variables raised to the second power. The general form is ax² + bx + c = 0, where a, b, and c are constants (a ≠ 0) and x is the variable.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> x² - 5x + 6 = 0</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Polynomial Equations</h3>
      <p>Polynomial equations involve variables raised to various powers. The general form is a₀ + a₁x + a₂x² + ... + aₙxⁿ = 0, where a₀, a₁, ..., aₙ are constants and x is the variable.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> 2x³ - 4x² + x - 3 = 0</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Rational Equations</h3>
      <p>Rational equations involve fractions with variables in the numerator, denominator, or both.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> (x + 3)/(x - 2) = 4</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Radical Equations</h3>
      <p>Radical equations involve variables under a radical sign (square root, cube root, etc.).</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> √(2x + 3) = x</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Basic Principles for Solving Equations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">The Balance Principle</h3>
      <p>The fundamental principle for solving equations is to maintain balance. Whatever operation you perform on one side of the equation, you must perform the same operation on the other side.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Inverse Operations</h3>
      <p>To isolate a variable, use inverse operations:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Addition ↔ Subtraction</li>
        <li>Multiplication ↔ Division</li>
        <li>Exponentiation ↔ Taking roots</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Solving Linear Equations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Step-by-Step Process</h3>
      <ol class="list-decimal pl-6 my-4 space-y-2">
        <li>Simplify each side of the equation by combining like terms</li>
        <li>Use addition or subtraction to get all variable terms on one side and all constant terms on the other</li>
        <li>Use multiplication or division to isolate the variable</li>
      </ol>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Example: Solving 3x + 5 = 20</h3>
      <p><strong class="text-green-600 dark:text-green-400">Step 1:</strong> Subtract 5 from both sides</p>
      <p>3x + 5 - 5 = 20 - 5</p>
      <p>3x = 15</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 2:</strong> Divide both sides by 3</p>
      <p>3x/3 = 15/3</p>
      <p>x = 5</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Example: Solving 2(x - 3) + 4 = 3x - 5</h3>
      <p><strong class="text-green-600 dark:text-green-400">Step 1:</strong> Expand the parentheses</p>
      <p>2x - 6 + 4 = 3x - 5</p>
      <p>2x - 2 = 3x - 5</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 2:</strong> Subtract 3x from both sides</p>
      <p>2x - 2 - 3x = 3x - 5 - 3x</p>
      <p>-x - 2 = -5</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 3:</strong> Add 2 to both sides</p>
      <p>-x - 2 + 2 = -5 + 2</p>
      <p>-x = -3</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 4:</strong> Multiply both sides by -1</p>
      <p>x = 3</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Solving Quadratic Equations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Method 1: Factoring</h3>
      <p>If a quadratic equation can be factored, this is often the quickest method:</p>
      <ol class="list-decimal pl-6 my-4 space-y-2">
        <li>Rearrange the equation to standard form: ax² + bx + c = 0</li>
        <li>Factor the left side into the form (px + q)(rx + s)</li>
        <li>Set each factor equal to zero and solve for x</li>
      </ol>
      
      <p><strong class="text-green-600 dark:text-green-400">Example: Solving x² - 5x + 6 = 0</strong></p>
      <p><strong class="text-green-600 dark:text-green-400">Step 1:</strong> Factor the left side</p>
      <p>(x - 2)(x - 3) = 0</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 2:</strong> Set each factor equal to zero</p>
      <p>x - 2 = 0 or x - 3 = 0</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 3:</strong> Solve each equation</p>
      <p>x = 2 or x = 3</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Method 2: Quadratic Formula</h3>
      <p>For any quadratic equation in the form ax² + bx + c = 0, the solutions are given by:</p>
      <p>x = (-b ± √(b² - 4ac)) / (2a)</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Example: Solving 2x² + 5x - 3 = 0</strong></p>
      <p>Here, a = 2, b = 5, c = -3</p>
      
      <p>x = (-5 ± √(5² - 4(2)(-3))) / (2(2))</p>
      <p>x = (-5 ± √(25 + 24)) / 4</p>
      <p>x = (-5 ± √49) / 4</p>
      <p>x = (-5 ± 7) / 4</p>
      <p>x = (-5 + 7) / 4 or x = (-5 - 7) / 4</p>
      <p>x = 2/4 = 0.5 or x = -12/4 = -3</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Method 3: Completing the Square</h3>
      <p>This method is useful for deriving the quadratic formula and for certain applications:</p>
      <ol class="list-decimal pl-6 my-4 space-y-2">
        <li>Rearrange to get ax² + bx on one side</li>
        <li>Factor out the coefficient of x²</li>
        <li>Complete the square inside the parentheses</li>
        <li>Solve for x</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Solving Rational Equations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Step-by-Step Process</h3>
      <ol class="list-decimal pl-6 my-4 space-y-2">
        <li>Find the least common denominator (LCD) of all fractions</li>
        <li>Multiply all terms by the LCD to eliminate fractions</li>
        <li>Solve the resulting equation</li>
        <li>Check all solutions in the original equation to avoid extraneous solutions</li>
      </ol>
      
      <p><strong class="text-green-600 dark:text-green-400">Example: Solving (x + 3)/(x - 2) = 4</strong></p>
      <p><strong class="text-green-600 dark:text-green-400">Step 1:</strong> Multiply both sides by (x - 2)</p>
      <p>(x + 3) = 4(x - 2)</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 2:</strong> Expand the right side</p>
      <p>x + 3 = 4x - 8</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 3:</strong> Subtract x from both sides</p>
      <p>3 = 3x - 8</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 4:</strong> Add 8 to both sides</p>
      <p>11 = 3x</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 5:</strong> Divide both sides by 3</p>
      <p>11/3 = x</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 6:</strong> Check the solution</p>
      <p>Since x = 11/3, we need to verify that x ≠ 2 (to avoid division by zero in the original equation)</p>
      <p>11/3 ≠ 2, so the solution is valid</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Solving Radical Equations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Step-by-Step Process</h3>
      <ol class="list-decimal pl-6 my-4 space-y-2">
        <li>Isolate the radical term on one side of the equation</li>
        <li>Square both sides (or raise to the appropriate power) to eliminate the radical</li>
        <li>Solve the resulting equation</li>
        <li>Check all solutions in the original equation to avoid extraneous solutions</li>
      </ol>
      
      <p><strong class="text-green-600 dark:text-green-400">Example: Solving √(2x + 3) = x</strong></p>
      <p><strong class="text-green-600 dark:text-green-400">Step 1:</strong> Square both sides</p>
      <p>(√(2x + 3))² = x²</p>
      <p>2x + 3 = x²</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 2:</strong> Rearrange to standard form</p>
      <p>x² - 2x - 3 = 0</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 3:</strong> Factor</p>
      <p>(x - 3)(x + 1) = 0</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 4:</strong> Solve</p>
      <p>x = 3 or x = -1</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Step 5:</strong> Check solutions</p>
      <p>For x = 3: √(2(3) + 3) = √9 = 3 ✓</p>
      <p>For x = -1: √(2(-1) + 3) = √1 = 1 ≠ -1 ✗</p>
      <p>Therefore, x = 3 is the only valid solution.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Systems of Equations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Methods for Solving Systems</h3>
      <ol class="list-decimal pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Substitution Method:</strong> Solve one equation for one variable and substitute into the other equation</li>
        <li><strong class="text-green-600 dark:text-green-400">Elimination Method:</strong> Add or subtract equations to eliminate one variable</li>
        <li><strong class="text-green-600 dark:text-green-400">Matrix Method:</strong> Use matrices and determinants for larger systems</li>
      </ol>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Example: Solving a System of Linear Equations</h3>
      <p>Solve the system:</p>
      <p>2x + y = 7</p>
      <p>x - y = 1</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Using Elimination:</strong></p>
      <p>Add the two equations:</p>
      <p>2x + y = 7</p>
      <p>x - y = 1</p>
      <p>---------</p>
      <p>3x = 8</p>
      <p>x = 8/3</p>
      
      <p>Substitute back to find y:</p>
      <p>2(8/3) + y = 7</p>
      <p>16/3 + y = 7</p>
      <p>y = 7 - 16/3</p>
      <p>y = 21/3 - 16/3</p>
      <p>y = 5/3</p>
      
      <p>Solution: x = 8/3, y = 5/3</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Practical Applications</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Word Problems</h3>
      <p>Algebraic equations are often used to solve real-world problems:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Motion problems (distance, speed, time)</li>
        <li>Mixture problems (concentrations, blending)</li>
        <li>Work problems (rates, completion time)</li>
        <li>Financial problems (interest, investment)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Example: Distance Problem</h3>
      <p><strong class="text-green-600 dark:text-green-400">Problem:</strong> A car travels 150 miles at a certain speed. If the speed had been 10 mph faster, the trip would have taken 1 hour less. Find the original speed.</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>Let x = original speed in mph</p>
      <p>Original time = distance/speed = 150/x hours</p>
      <p>New time = 150/(x+10) hours</p>
      <p>The new time is 1 hour less than the original time:</p>
      <p>150/x - 150/(x+10) = 1</p>
      
      <p>Multiply all terms by x(x+10):</p>
      <p>150(x+10) - 150x = x(x+10)</p>
      <p>150x + 1500 - 150x = x² + 10x</p>
      <p>1500 = x² + 10x</p>
      <p>x² + 10x - 1500 = 0</p>
      
      <p>Using the quadratic formula:</p>
      <p>x = (-10 ± √(10² + 4(1)(1500))) / (2(1))</p>
      <p>x = (-10 ± √(100 + 6000)) / 2</p>
      <p>x = (-10 ± √6100) / 2</p>
      <p>x = (-10 ± 78.1) / 2</p>
      <p>x = 34.05 or x = -44.05</p>
      
      <p>Since speed cannot be negative, x = 34.05 mph is the answer.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Tips for Solving Algebraic Equations</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">General Strategies</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Always check your solutions in the original equation</li>
        <li>Be careful with rational and radical equations, which can introduce extraneous solutions</li>
        <li>When solving word problems, clearly define your variables before setting up equations</li>
        <li>Draw diagrams or tables to help visualize problems when appropriate</li>
        <li>Practice regularly to build intuition for different types of equations</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Conclusion</h2>
      <p>Solving algebraic equations is a fundamental skill that opens doors to understanding and solving many real-world problems. By mastering the techniques for different types of equations, you'll develop valuable problem-solving abilities that extend far beyond mathematics. Remember that practice is essential—the more equations you solve, the more intuitive the process will become.</p>
    `,
    date: "2023-11-20",
    author: "Prof. James Anderson",
    readTime: "11 min read",
    tags: ["Mathematics", "Algebra", "Problem Solving", "Education"],
    slug: "solving-algebraic-equations",
    image: "/images/solving-algebraic-equations.png",
  },
  {
    id: "6",
    title: "The Mathematics of Ratios and Proportions in Everyday Life",
    excerpt:
      "Explore how ratios and proportions are used in cooking, finance, art, and more, with practical examples and calculation techniques.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Introduction to Ratios and Proportions</h2>
      <p>Ratios and proportions are fundamental mathematical concepts that describe relationships between quantities. They are used extensively in everyday life, from cooking and shopping to art, architecture, and finance.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Understanding Ratios</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">What is a Ratio?</h3>
      <p>A ratio is a comparison of two or more quantities of the same kind. It shows how many times one value contains or is contained within another value.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Ways to Express Ratios</h3>
      <p>Ratios can be expressed in several ways:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Using a colon:</strong> 3:4</li>
        <li><strong class="text-green-600 dark:text-green-400">As a fraction:</strong> 3/4</li>
        <li><strong class="text-green-600 dark:text-green-400">In words:</strong> "3 to 4"</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Simplifying Ratios</h3>
      <p>Ratios should be expressed in their simplest form by dividing both quantities by their greatest common divisor (GCD).</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> The ratio 8:12 can be simplified to 2:3 by dividing both numbers by 4.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Part-to-Part and Part-to-Whole Ratios</h3>
      <p><strong class="text-green-600 dark:text-green-400">Part-to-Part Ratio:</strong> Compares one part to another part</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> In a class with 15 boys and 20 girls, the ratio of boys to girls is 15:20 or 3:4.</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Part-to-Whole Ratio:</strong> Compares one part to the total</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> In the same class, the ratio of boys to the total number of students is 15:35 or 3:7.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Understanding Proportions</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">What is a Proportion?</h3>
      <p>A proportion is a statement that two ratios are equal. It can be written as:</p>
      <p>a:b = c:d or a/b = c/d</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">The Cross-Multiplication Property</h3>
      <p>In a proportion a/b = c/d, the cross products are equal: a × d = b × c</p>
      <p>This property is useful for solving for an unknown value in a proportion.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Example: Solving a Proportion</h3>
      <p><strong class="text-green-600 dark:text-green-400">Problem:</strong> If 3/5 = x/20, find the value of x.</p>
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong> Using cross-multiplication:</p>
      <p>3 × 20 = 5 × x</p>
      <p>60 = 5x</p>
      <p>x = 12</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Ratios and Proportions in Cooking</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Recipe Scaling</h3>
      <p>Ratios and proportions are essential for scaling recipes up or down.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> A recipe calls for 2 cups of flour and 1 cup of sugar to make 24 cookies. How much flour and sugar are needed to make 36 cookies?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>Set up a proportion for flour: 2/24 = x/36</p>
      <p>Cross-multiply: 2 × 36 = 24 × x</p>
      <p>72 = 24x</p>
      <p>x = 3 cups of flour</p>
      
      <p>Similarly for sugar: 1/24 = y/36</p>
      <p>y = 1.5 cups of sugar</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Ingredient Ratios</h3>
      <p>Many classic recipes are based on standard ratios:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Classic vinaigrette:</strong> 3:1 ratio of oil to vinegar</li>
        <li><strong class="text-green-600 dark:text-green-400">Basic bread:</strong> 5:3 ratio of flour to water</li>
        <li><strong class="text-green-600 dark:text-green-400">Traditional shortbread:</strong> 3:2:1 ratio of flour to butter to sugar</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Ratios and Proportions in Finance</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Financial Ratios</h3>
      <p>Financial ratios help analyze business performance and investment opportunities:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Price-to-Earnings (P/E) Ratio:</strong> Stock price divided by earnings per share</li>
        <li><strong class="text-green-600 dark:text-green-400">Debt-to-Equity Ratio:</strong> Total liabilities divided by shareholders' equity</li>
        <li><strong class="text-green-600 dark:text-green-400">Current Ratio:</strong> Current assets divided by current liabilities</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Investment Allocation</h3>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> An investor wants to maintain a 60:40 ratio of stocks to bonds in their portfolio. If they have $60,000 in stocks and $30,000 in bonds, how much should they transfer from stocks to bonds to achieve the desired ratio?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>Current ratio: $60,000 : $30,000 = 2:1</p>
      <p>Desired ratio: 60:40 = 3:2</p>
      
      <p>Let x be the amount to transfer from stocks to bonds.</p>
      <p>(60,000 - x) / (30,000 + x) = 60/40 = 3/2</p>
      <p>2(60,000 - x) = 3(30,000 + x)</p>
      <p>120,000 - 2x = 90,000 + 3x</p>
      <p>120,000 - 90,000 = 2x + 3x</p>
      <p>30,000 = 5x</p>
      <p>x = $6,000</p>
      
      <p>The investor should transfer $6,000 from stocks to bonds.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Ratios and Proportions in Art and Design</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">The Golden Ratio</h3>
      <p>The golden ratio (approximately 1:1.618) is found throughout art, architecture, and nature. It's considered aesthetically pleasing and has been used in famous works like the Parthenon and the Mona Lisa.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Rule of Thirds</h3>
      <p>In photography and design, the rule of thirds divides an image into a 3×3 grid. Placing key elements along these lines or at their intersections creates balanced, interesting compositions.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Scaling and Proportional Drawing</h3>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> An architect has a blueprint with a scale of 1:50. If a room measures 6 cm by 8 cm on the blueprint, what are its actual dimensions?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>1 cm on the blueprint represents 50 cm in reality.</p>
      <p>Length: 8 cm × 50 = 400 cm = 4 m</p>
      <p>Width: 6 cm × 50 = 300 cm = 3 m</p>
      <p>The actual room dimensions are 4 m by 3 m.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Ratios and Proportions in Science</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Chemical Reactions</h3>
      <p>Chemical equations represent the ratio of reactants and products in a reaction.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> In the reaction 2H₂ + O₂ → 2H₂O, the ratio of hydrogen to oxygen is 2:1.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Dilutions</h3>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> A solution contains acid and water in a ratio of 1:4. If you have 100 mL of this solution, how much acid and water does it contain?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>The ratio 1:4 means 1 part acid to 4 parts water, or 1 part acid to 5 parts total solution.</p>
      <p>Acid: (1/5) × 100 mL = 20 mL</p>
      <p>Water: (4/5) × 100 mL = 80 mL</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Practical Applications of Proportional Reasoning</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Unit Pricing</h3>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> A 12 oz package of coffee costs $8.40, while a 16 oz package costs $10.80. Which offers better value?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>12 oz package: $8.40 ÷ 12 = $0.70 per oz</p>
      <p>16 oz package: $10.80 ÷ 16 = $0.675 per oz</p>
      <p>The 16 oz package offers better value.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Map Reading</h3>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> On a map with a scale of 1:25,000, two cities are 12 cm apart. What is the actual distance between them?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>1 cm on the map represents 25,000 cm in reality.</p>
      <p>12 cm × 25,000 = 300,000 cm = 3 km</p>
      <p>The actual distance is 3 kilometers.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Fuel Efficiency</h3>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> A car travels 210 miles on 10 gallons of fuel. How far can it travel on 16 gallons?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>Set up a proportion: 210/10 = x/16</p>
      <p>Cross-multiply: 210 × 16 = 10 × x</p>
      <p>3360 = 10x</p>
      <p>x = 336 miles</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Common Ratio Problems and Techniques</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Direct Proportion</h3>
      <p>In a direct proportion, as one quantity increases, the other increases at the same rate.</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> If 5 workers can complete a task in 12 days, how many days would it take 3 workers to complete the same task?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>This is an inverse proportion (fewer workers means more days).</p>
      <p>5 workers × 12 days = 3 workers × x days</p>
      <p>60 = 3x</p>
      <p>x = 20 days</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Ratio Word Problems</h3>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> The ratio of cats to dogs at a shelter is 5:3. If there are 40 animals in total, how many cats and how many dogs are there?</p>
      
      <p><strong class="text-green-600 dark:text-green-400">Solution:</strong></p>
      <p>The ratio 5:3 means 5 parts cats to 3 parts dogs, or 8 parts total.</p>
      <p>Cats: (5/8) × 40 = 25 cats</p>
      <p>Dogs: (3/8) × 40 = 15 dogs</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Conclusion</h2>
      <p>Ratios and proportions are powerful mathematical tools that help us understand and solve problems in many areas of life. From cooking the perfect meal to making smart financial decisions, these concepts provide a framework for comparing quantities and finding unknown values. By mastering ratios and proportions, you'll enhance your problem-solving abilities and gain a deeper appreciation for the mathematical relationships that exist all around us.</p>
    `,
    date: "2023-11-25",
    author: "Dr. Maria Rodriguez",
    readTime: "10 min read",
    tags: ["Mathematics", "Ratios", "Proportions", "Practical Applications"],
    slug: "mathematics-of-ratios",
    image: "/images/mathematics-of-ratios.png",
  },
  {
    id: "7",
    title: "Temperature Scales Explained: Celsius, Fahrenheit, and Kelvin",
    excerpt:
      "Learn about the history, conversion formulas, and practical applications of different temperature scales used around the world.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Introduction to Temperature Scales</h2>
      <p>Temperature is a physical quantity that expresses hot and cold. It is measured with a thermometer calibrated in one or more temperature scales. The most commonly used temperature scales are Celsius (°C), Fahrenheit (°F), and Kelvin (K).</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">The Celsius Scale (°C)</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">History and Development</h3>
      <p>The Celsius scale, also known as the centigrade scale, was proposed by Swedish astronomer Anders Celsius in 1742. Originally, Celsius set 0° as the boiling point of water and 100° as the freezing point. After his death, the scale was reversed to its current form.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Reference Points</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>0°C: Freezing point of water at standard atmospheric pressure</li>
        <li>100°C: Boiling point of water at standard atmospheric pressure</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Usage</h3>
      <p>The Celsius scale is used in most countries around the world for everyday temperature measurement. It is also the standard unit of temperature in the scientific community, except in some fields where Kelvin is preferred.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Common Reference Temperatures in Celsius</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>-40°C: Extremely cold weather</li>
        <li>0°C: Freezing point of water</li>
        <li>20°C: Room temperature</li>
        <li>37°C: Normal human body temperature</li>
        <li>100°C: Boiling point of water</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">The Fahrenheit Scale (°F)</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">History and Development</h3>
      <p>The Fahrenheit scale was proposed by German physicist Daniel Gabriel Fahrenheit in 1724. He initially defined 0°F as the temperature of a mixture of ice, water, and ammonium chloride, and 96°F as the human body temperature. The scale was later adjusted so that the freezing point of water is exactly 32°F and the boiling point is 212°F.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Reference Points</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>32°F: Freezing point of water at standard atmospheric pressure</li>
        <li>212°F: Boiling point of water at standard atmospheric pressure</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Usage</h3>
      <p>The Fahrenheit scale is primarily used in the United States and its territories for everyday temperature measurement. It is also used in a few other countries, including the Bahamas, Belize, and the Cayman Islands.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Common Reference Temperatures in Fahrenheit</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>-40°F: Coincidentally, -40°F equals -40°C</li>
        <li>32°F: Freezing point of water</li>
        <li>68°F: Room temperature</li>
        <li>98.6°F: Normal human body temperature</li>
        <li>212°F: Boiling point of water</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">The Kelvin Scale (K)</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">History and Development</h3>
      <p>The Kelvin scale was proposed by British physicist William Thomson (Lord Kelvin) in 1848. It is an absolute temperature scale, meaning it starts at absolute zero, the theoretical temperature at which all thermal motion ceases.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Reference Points</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>0 K: Absolute zero (-273.15°C or -459.67°F)</li>
        <li>273.15 K: Freezing point of water</li>
        <li>373.15 K: Boiling point of water</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Usage</h3>
      <p>The Kelvin scale is the primary unit of temperature in the International System of Units (SI) and is widely used in science and engineering. It is particularly important in thermodynamics, astronomy, and physics.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Important Note</h3>
      <p>Unlike Celsius and Fahrenheit, the Kelvin scale does not use the degree symbol (°). Temperatures are simply expressed as "K" (e.g., 273 K, not 273°K).</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Temperature Conversion Formulas</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Celsius to Fahrenheit</h3>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> °F = (°C × 9/5) + 32</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> Convert 25°C to Fahrenheit</p>
      <p>°F = (25 × 9/5) + 32 = 45 + 32 = 77°F</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Fahrenheit to Celsius</h3>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> °C = (°F - 32) × 5/9</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> Convert 98.6°F to Celsius</p>
      <p>°C = (98.6 - 32) × 5/9 = 66.6 × 5/9 = 37°C</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Celsius to Kelvin</h3>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> K = °C + 273.15</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> Convert 25°C to Kelvin</p>
      <p>K = 25 + 273.15 = 298.15 K</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Kelvin to Celsius</h3>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> °C = K - 273.15</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> Convert 300 K to Celsius</p>
      <p>°C = 300 - 273.15 = 26.85°C</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Fahrenheit to Kelvin</h3>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> K = (°F - 32) × 5/9 + 273.15</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> Convert 98.6°F to Kelvin</p>
      <p>K = (98.6 - 32) × 5/9 + 273.15 = 66.6 × 5/9 + 273.15 = 37 + 273.15 = 310.15 K</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Kelvin to Fahrenheit</h3>
      <p><strong class="text-green-600 dark:text-green-400">Formula:</strong> °F = (K - 273.15) × 9/5 + 32</p>
      <p><strong class="text-green-600 dark:text-green-400">Example:</strong> Convert 300 K to Fahrenheit</p>
      <p>°F = (300 - 273.15) × 9/5 + 32 = 26.85 × 9/5 + 32 = 48.33 + 32 = 80.33°F</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Other Temperature Scales</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Rankine Scale (°R)</h3>
      <p>The Rankine scale is an absolute temperature scale like Kelvin, but it uses Fahrenheit degrees rather than Celsius degrees. Absolute zero is 0°R, and the freezing point of water is 491.67°R.</p>
      <p><strong class="text-green-600 dark:text-green-400">Conversion:</strong> °R = °F + 459.67 or °R = K × 9/5</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Réaumur Scale (°Ré)</h3>
      <p>The Réaumur scale was proposed by René Antoine Ferchault de Réaumur in 1730. It sets the freezing point of water at 0°Ré and the boiling point at 80°Ré.</p>
      <p><strong class="text-green-600 dark:text-green-400">Conversion:</strong> °C = °Ré × 5/4</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Practical Applications of Temperature Scales</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Everyday Life</h3>
      <p>Different temperature scales are used in everyday life depending on the country:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Weather forecasts use Celsius in most countries and Fahrenheit in the US</li>
        <li>Cooking recipes specify oven temperatures in either Celsius or Fahrenheit</li>
        <li>Medical thermometers typically display both Celsius and Fahrenheit</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Scientific Applications</h3>
      <p>In scientific contexts, specific scales are preferred for different applications:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Kelvin is used in thermodynamics and physics because it's an absolute scale</li>
        <li>Celsius is commonly used in chemistry and biology</li>
        <li>Specialized fields like cryogenics often use Kelvin to measure extremely low temperatures</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Industrial Applications</h3>
      <p>Various industries have specific temperature requirements:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Metallurgy uses high-temperature measurements for metal processing</li>
        <li>Food safety guidelines specify storage temperatures to prevent bacterial growth</li>
        <li>HVAC systems regulate building temperatures for comfort and efficiency</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Interesting Temperature Facts</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Temperature Extremes on Earth</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Highest recorded temperature: 56.7°C (134°F) in Death Valley, California, USA (1913)</li>
        <li>Lowest recorded temperature: -89.2°C (-128.6°F) at Vostok Station, Antarctica (1983)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Temperature Equivalence Point</h3>
      <p>The temperature at which Celsius and Fahrenheit are equal is -40°. That is, -40°C = -40°F.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Absolute Zero</h3>
      <p>Absolute zero (0 K, -273.15°C, -459.67°F) is the theoretical temperature at which all molecular motion stops. It's impossible to reach absolute zero, though scientists have come extremely close (within a few billionths of a degree).</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Conclusion</h2>
      <p>Understanding temperature scales and how to convert between them is essential in many fields, from everyday weather forecasts to scientific research. Each scale has its own history, reference points, and applications, making them suitable for different contexts. While Celsius and Fahrenheit are more commonly used in everyday life, Kelvin plays a crucial role in scientific applications where an absolute temperature scale is necessary.</p>
    `,
    date: "2023-11-30",
    author: "Dr. Thomas Wilson",
    readTime: "8 min read",
    tags: ["Science", "Temperature", "Unit Conversion", "Physics"],
    slug: "temperature-scales-explained",
    image: "/images/temperature-scales.png",
  },
  {
    id: "8",
    title: "10 Tips to Improve Your Typing Speed",
    excerpt:
      "Discover practical tips and exercises to boost your typing speed and accuracy. Learn how to position your hands correctly and develop muscle memory.",
    content: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Introduction</h2>
      <p>In today's digital world, typing efficiently is an essential skill. Whether you're a student, professional, or casual computer user, improving your typing speed and accuracy can save you time and reduce frustration. This article provides practical tips and exercises to help you become a faster, more accurate typist.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Why Typing Speed Matters</h2>
      <p>Fast, accurate typing offers several benefits:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Increased productivity and time savings</li>
        <li>Reduced mental fatigue when writing or communicating</li>
        <li>Better focus on content rather than the mechanics of typing</li>
        <li>Competitive advantage in many professional settings</li>
        <li>Reduced risk of repetitive strain injuries when using proper technique</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">10 Tips to Improve Your Typing Speed</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">1. Master the Correct Finger Placement</h3>
      <p>The foundation of fast typing is proper finger placement on the home row:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Left hand: A (pinky), S (ring finger), D (middle finger), F (index finger)</li>
        <li>Right hand: J (index finger), K (middle finger), L (ring finger), ; (pinky)</li>
        <li>Thumbs rest on the space bar</li>
      </ul>
      <p>Each finger is responsible for specific keys. Learning this placement creates muscle memory that allows you to type without looking at the keyboard.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">2. Maintain Proper Posture</h3>
      <p>Good posture prevents fatigue and injury while improving typing efficiency:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Sit up straight with your back against the chair</li>
        <li>Keep your feet flat on the floor</li>
        <li>Position your elbows at a 90-degree angle</li>
        <li>Wrists should hover just above the keyboard, not resting on the desk</li>
        <li>Position the screen at eye level to avoid neck strain</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">3. Don't Look at the Keyboard</h3>
      <p>Looking at your fingers while typing significantly slows you down. To break this habit:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Cover your hands with a cloth or use a keyboard cover</li>
        <li>Focus your eyes on the screen, not your fingers</li>
        <li>Trust your muscle memory—it will develop with practice</li>
        <li>Use typing software that highlights the keys you should press</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">4. Practice Regularly with Typing Tests</h3>
      <p>Consistent practice is key to improving typing speed. Set aside 15-30 minutes daily for typing exercises:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Take regular typing tests to measure your progress</li>
        <li>Focus on accuracy first, then gradually increase speed</li>
        <li>Use online typing test websites to track your words per minute (WPM)</li>
        <li>Set achievable goals (e.g., increase by 5 WPM each month)</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">5. Learn Keyboard Shortcuts</h3>
      <p>Keyboard shortcuts save time and reduce reliance on the mouse:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Copy (Ctrl+C), Cut (Ctrl+X), Paste (Ctrl+V)</li>
        <li>Select All (Ctrl+A), Undo (Ctrl+Z), Redo (Ctrl+Y)</li>
        <li>Switch between applications (Alt+Tab)</li>
        <li>Learn shortcuts specific to programs you use frequently</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">6. Focus on Accuracy Before Speed</h3>
      <p>Developing accuracy first creates a solid foundation for increasing speed:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Type slowly and deliberately at first</li>
        <li>Aim for 100% accuracy in your practice sessions</li>
        <li>Resist the urge to use the backspace key immediately</li>
        <li>Speed will naturally increase as your accuracy improves</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">7. Use Online Typing Courses and Games</h3>
      <p>Make learning fun and structured with online resources:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Typing.com offers comprehensive free lessons</li>
        <li>Keybr.com provides adaptive practice focused on your weak spots</li>
        <li>TypeRacer lets you compete against others in typing races</li>
        <li>MonkeyType offers a clean, customizable typing test environment</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">8. Practice with Real-World Content</h3>
      <p>Typing exercises with content relevant to your work or interests helps maintain motivation:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Type out articles related to your field</li>
        <li>Transcribe passages from your favorite books</li>
        <li>Practice with email templates you use frequently</li>
        <li>Type song lyrics or quotes you enjoy</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">9. Develop Rhythm and Consistency</h3>
      <p>Typing with a steady rhythm is more efficient than typing in bursts:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Focus on maintaining a consistent pace</li>
        <li>Type to the beat of a metronome set at a comfortable speed</li>
        <li>Gradually increase the metronome speed as you improve</li>
        <li>Avoid "sprinting" through easy words and slowing down for difficult ones</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">10. Take Care of Your Hands and Wrists</h3>
      <p>Preventing injury is essential for long-term typing improvement:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Take regular breaks (5 minutes every hour)</li>
        <li>Perform hand and wrist stretches throughout the day</li>
        <li>Consider an ergonomic keyboard and mouse</li>
        <li>Use wrist rests only during breaks, not while typing</li>
        <li>If you experience pain, stop typing and consult a healthcare professional</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Targeted Exercises for Improvement</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">For Beginners (Under 30 WPM)</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Focus on home row mastery (asdf jkl;)</li>
        <li>Practice simple words using only home row keys</li>
        <li>Gradually introduce top and bottom row keys</li>
        <li>Use guided typing lessons that introduce keys systematically</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">For Intermediate Typists (30-60 WPM)</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Practice with common digraphs (th, ch, wh) and trigraphs (the, and, ing)</li>
        <li>Focus on problem keys and transitions between rows</li>
        <li>Practice typing numbers and special characters</li>
        <li>Work on typing common phrases and sentences</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">For Advanced Typists (60+ WPM)</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Practice with challenging texts containing uncommon words</li>
        <li>Work on maintaining speed while typing technical or specialized vocabulary</li>
        <li>Focus on consistency across different types of content</li>
        <li>Practice typing without looking at the screen (touch typing mastery)</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Tracking Your Progress</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Key Metrics to Monitor</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li><strong class="text-green-600 dark:text-green-400">Words Per Minute (WPM):</strong> The standard measure of typing speed</li>
        <li><strong class="text-green-600 dark:text-green-400">Accuracy Rate:</strong> The percentage of correctly typed characters</li>
        <li><strong class="text-green-600 dark:text-green-400">Consistency:</strong> The variation in your typing speed</li>
        <li><strong class="text-green-600 dark:text-green-400">Problem Keys:</strong> Specific keys that consistently cause errors</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Setting Realistic Goals</h3>
      <p>Improvement takes time. Set achievable milestones based on your current level:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Beginners: Aim to increase by 5 WPM every 2-4 weeks</li>
        <li>Intermediate: Target 3-5 WPM improvement monthly</li>
        <li>Advanced: Focus on 1-2 WPM increases and higher accuracy</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Common Typing Mistakes to Avoid</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Technical Mistakes</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Using only a few fingers instead of all ten</li>
        <li>Looking at the keyboard while typing</li>
        <li>Incorrect finger placement on home row</li>
        <li>Hunching over the keyboard</li>
        <li>Resting wrists on the desk while typing</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Practice Mistakes</h3>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Prioritizing speed over accuracy</li>
        <li>Inconsistent practice schedule</li>
        <li>Not tracking progress</li>
        <li>Practicing only with easy or familiar content</li>
        <li>Ignoring ergonomics and proper posture</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Conclusion</h2>
      <p>Improving your typing speed is a gradual process that requires consistent practice and attention to technique. By focusing on proper finger placement, maintaining good posture, and practicing regularly with appropriate exercises for your skill level, you can significantly increase your typing speed and accuracy over time.</p>
      
      <p>Remember that progress may not be linear—you might experience plateaus or even temporary setbacks. The key is to persist with regular practice and to focus on the fundamentals. With dedication, most people can achieve typing speeds of 60-80 WPM or higher, making digital communication and content creation much more efficient and enjoyable.</p>
    `,
    date: "2023-10-15",
    author: "Jane Smith",
    readTime: "5 min read",
    tags: ["Typing", "Productivity", "Skills"],
    slug: "improve-typing-speed",
    image: "/images/science-of-typing.png",
  },
  // Add the rest of the blog posts here...
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Button
        variant="ghost"
        asChild
        className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950"
      >
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <article>
        <Card className="overflow-hidden border-t-4 border-t-blue-600 dark:border-t-blue-400">
          <div className="relative h-[300px] w-full overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">{post.title}</h1>
            </div>
          </div>
          <CardHeader className="space-y-4">
            <CardDescription className="flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Calendar className="h-4 w-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
                >
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
