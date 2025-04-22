import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Tag, ArrowLeft, Calendar } from "lucide-react"

export const metadata = {
  title: "Temperature Scales Explained: Celsius, Fahrenheit, and Kelvin - Quicklearn",
  description:
    "Learn about the history, conversion formulas, and practical applications of different temperature scales used around the world.",
}

export default function BlogPost() {
  const post = {
    title: "Temperature Scales Explained: Celsius, Fahrenheit, and Kelvin",
    date: "2023-11-30",
    author: "Dr. Thomas Wilson",
    readTime: "8 min read",
    tags: ["Science", "Temperature", "Unit Conversion", "Physics"],
    content: `
      <h2>Introduction</h2>
      <p>Temperature is a fundamental physical quantity that affects virtually every aspect of our lives, from weather forecasts and cooking to industrial processes and scientific research. However, different parts of the world use different temperature scales, which can lead to confusion and conversion challenges. This article explores the three main temperature scales—Celsius, Fahrenheit, and Kelvin—their history, relationships, and practical applications.</p>
      
      <h2>The History of Temperature Measurement</h2>
      
      <h3>Early Temperature Measurement</h3>
      <p>The concept of measuring temperature dates back to ancient times, but the first thermometer-like device is attributed to Galileo Galilei in the late 16th century. His thermoscope could show temperature changes but lacked a standardized scale.</p>
      
      <h3>The Fahrenheit Scale</h3>
      <p>In 1724, German physicist Daniel Gabriel Fahrenheit introduced the first standardized temperature scale. He set 0°F as the temperature of a mixture of ice, water, and ammonium chloride (a freezing mixture used at the time), and 96°F as the approximate human body temperature. On this scale, water freezes at 32°F and boils at 212°F at standard atmospheric pressure.</p>
      
      <h3>The Celsius Scale</h3>
      <p>In 1742, Swedish astronomer Anders Celsius proposed a scale where 0° represented the boiling point of water and 100° represented the freezing point. Shortly after his death, the scale was reversed to its current form, where 0°C is the freezing point of water and 100°C is the boiling point at standard atmospheric pressure.</p>
      
      <h3>The Kelvin Scale</h3>
      <p>In 1848, British physicist William Thomson (later Lord Kelvin) proposed an absolute temperature scale based on the concept of absolute zero—the theoretical temperature at which all molecular motion ceases. The Kelvin scale uses the same increment as the Celsius scale but starts at absolute zero, which is approximately -273.15°C.</p>
      
      <h2>Understanding the Three Main Temperature Scales</h2>
      
      <h3>Celsius (°C)</h3>
      <p><strong>Key reference points:</strong></p>
      <ul>
        <li>0°C: Freezing point of water at standard atmospheric pressure</li>
        <li>100°C: Boiling point of water at standard atmospheric pressure</li>
        <li>-273.15°C: Absolute zero</li>
      </ul>
      
      <p><strong>Usage:</strong> The Celsius scale is used in most countries around the world for everyday temperature measurement, weather forecasts, cooking, and scientific applications.</p>
      
      <h3>Fahrenheit (°F)</h3>
      <p><strong>Key reference points:</strong></p>
      <ul>
        <li>32°F: Freezing point of water at standard atmospheric pressure</li>
        <li>212°F: Boiling point of water at standard atmospheric pressure</li>
        <li>-459.67°F: Absolute zero</li>
      </ul>
      
      <p><strong>Usage:</strong> The Fahrenheit scale is primarily used in the United States and a few other countries for everyday temperature measurement, weather forecasts, and some industrial applications.</p>
      
      <h3>Kelvin (K)</h3>
      <p><strong>Key reference points:</strong></p>
      <ul>
        <li>0K: Absolute zero (-273.15°C or -459.67°F)</li>
        <li>273.15K: Freezing point of water at standard atmospheric pressure</li>
        <li>373.15K: Boiling point of water at standard atmospheric pressure</li>
      </ul>
      
      <p><strong>Usage:</strong> The Kelvin scale is the SI (International System of Units) unit of temperature and is used primarily in scientific and engineering contexts. It's particularly important in thermodynamics, physics, and chemistry.</p>
      
      <p><strong>Note:</strong> Unlike Celsius and Fahrenheit, Kelvin does not use the degree symbol (°). Temperatures are simply expressed as "K" (e.g., 300K, not 300°K).</p>
      
      <h2>Converting Between Temperature Scales</h2>
      
      <h3>Celsius to Fahrenheit</h3>
      <p><strong>Formula:</strong> °F = (°C × 9/5) + 32</p>
      <p><strong>Example:</strong> Convert 25°C to Fahrenheit</p>
      <p>°F = (25 × 9/5) + 32 = 45 + 32 = 77°F</p>
      
      <h3>Fahrenheit to Celsius</h3>
      <p><strong>Formula:</strong> °C = (°F - 32) × 5/9</p>
      <p><strong>Example:</strong> Convert 77°F to Celsius</p>
      <p>°C = (77 - 32) × 5/9 = 45 × 5/9 = 25°C</p>
      
      <h3>Celsius to Kelvin</h3>
      <p><strong>Formula:</strong> K = °C + 273.15</p>
      <p><strong>Example:</strong> Convert 25°C to Kelvin</p>
      <p>K = 25 + 273.15 = 298.15K</p>
      
      <h3>Kelvin to Celsius</h3>
      <p><strong>Formula:</strong> °C = K - 273.15</p>
      <p><strong>Example:</strong> Convert 298.15K to Celsius</p>
      <p>°C = 298.15 - 273.15 = 25°C</p>
      
      <h3>Fahrenheit to Kelvin</h3>
      <p><strong>Formula:</strong> K = (°F - 32) × 5/9 + 273.15</p>
      <p><strong>Example:</strong> Convert 77°F to Kelvin</p>
      <p>K = (77 - 32) × 5/9 + 273.15 = 45 × 5/9 + 273.15 = 25 + 273.15 = 298.15K</p>
      
      <h3>Kelvin to Fahrenheit</h3>
      <p><strong>Formula:</strong> °F = (K - 273.15) × 9/5 + 32</p>
      <p><strong>Example:</strong> Convert 298.15K to Fahrenheit</p>
      <p>°F = (298.15 - 273.15) × 9/5 + 32 = 25 × 9/5 + 32 = 45 + 32 = 77°F</p>
      
      <h2>Practical Applications of Different Temperature Scales</h2>
      
      <h3>Everyday Life</h3>
      <p>In everyday life, temperature measurements are used for:</p>
      <ul>
        <li><strong>Weather forecasting:</strong> Celsius in most countries, Fahrenheit in the US</li>
        <li><strong>Cooking and baking:</strong> Recipes specify oven temperatures in °F or °C depending on the country</li>
        <li><strong>Body temperature:</strong> Normal human body temperature is approximately 37°C or 98.6°F</li>
        <li><strong>Home heating and cooling:</strong> Thermostats are set in °F or °C depending on the country</li>
      </ul>
      
      <h3>Science and Engineering</h3>
      <p>In scientific and engineering contexts, temperature measurements are crucial for:</p>
      <ul>
        <li><strong>Chemical reactions:</strong> Often specified in Celsius or Kelvin</li>
        <li><strong>Materials science:</strong> Properties like melting and boiling points are typically given in Celsius or Kelvin</li>
        <li><strong>Thermodynamics:</strong> Calculations almost always use Kelvin to avoid negative temperatures</li>
        <li><strong>Astronomy:</strong> Temperatures of celestial bodies are typically given in Kelvin</li>
        <li><strong>Electronics:</strong> Operating temperatures of components are usually specified in Celsius</li>
      </ul>
      
      <h3>Industry</h3>
      <p>Various industries rely on precise temperature measurements:</p>
      <ul>
        <li><strong>Food processing:</strong> Critical for food safety and quality</li>
        <li><strong>Pharmaceuticals:</strong> Manufacturing and storage temperatures affect drug efficacy</li>
        <li><strong>Metallurgy:</strong> Metal properties change significantly with temperature</li>
        <li><strong>HVAC systems:</strong> Heating, ventilation, and air conditioning rely on accurate temperature control</li>
      </ul>
      
      <h2>Interesting Temperature Facts</h2>
      
      <h3>Temperature Extremes on Earth</h3>
      <ul>
        <li><strong>Highest recorded temperature:</strong> 56.7°C (134.1°F) in Death Valley, California, USA (1913)</li>
        <li><strong>Lowest recorded temperature:</strong> -89.2°C (-128.6°F) at Vostok Station, Antarctica (1983)</li>
      </ul>
      
      <h3>Temperature Perception</h3>
      <p>Human perception of temperature is subjective and affected by factors like humidity, wind, and individual differences. This is why we have concepts like "wind chill factor" and "heat index" that attempt to describe how the temperature actually feels.</p>
      
      <h3>Temperature and States of Matter</h3>
      <p>Temperature plays a crucial role in determining the state of matter (solid, liquid, gas, or plasma). Water, for example, exists as ice below 0°C (32°F), as liquid water between 0°C and 100°C (32°F and 212°F), and as steam above 100°C (212°F) at standard atmospheric pressure.</p>
      
      <h2>Tools for Temperature Conversion</h2>
      
      <h3>Our Unit Converter</h3>
      <p>For quick and accurate temperature conversions, our <a href="/tools/unit-converter">Unit Converter</a> tool includes a dedicated temperature section. It allows you to convert between Celsius, Fahrenheit, Kelvin, and other temperature scales with ease.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding the different temperature scales and how to convert between them is a valuable skill in our globalized world. Whether you're traveling to a country that uses a different scale, following a recipe from abroad, or working in a scientific field, knowing how Celsius, Fahrenheit, and Kelvin relate to each other can be extremely useful.</p>
      
      <p>For assistance with temperature conversions and other unit transformations, try our <a href="/tools/unit-converter">Unit Converter</a> tool, which provides quick and accurate conversions between all major temperature scales.</p>
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
