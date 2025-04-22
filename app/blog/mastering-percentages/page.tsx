import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Tag, ArrowLeft, Calendar } from "lucide-react"

export const metadata = {
  title: "Mastering Percentages: Essential Skills for Everyday Math - Quicklearn",
  description:
    "Learn how to calculate and understand percentages for practical applications in shopping, finance, and data analysis.",
}

export default function BlogPost() {
  const post = {
    title: "Mastering Percentages: Essential Skills for Everyday Math",
    date: "2023-11-15",
    author: "Lisa Wong",
    readTime: "9 min read",
    tags: ["Mathematics", "Percentages", "Practical Skills", "Finance"],
    content: `
      <h2>Introduction</h2>
      <p>Percentages are everywhere in our daily lives—from shopping discounts and tax calculations to interest rates and data analysis. Despite their ubiquity, many people find percentages confusing or intimidating. This comprehensive guide will demystify percentages, explain their practical applications, and provide simple techniques for calculating them accurately and efficiently.</p>
      
      <h2>Understanding Percentages: The Basics</h2>
      
      <h3>What is a Percentage?</h3>
      <p>A percentage is a way of expressing a number as a fraction of 100. The word "percent" comes from the Latin "per centum," meaning "by the hundred." When we say 25%, we mean 25 out of 100, or 25/100, which equals 0.25 as a decimal.</p>
      
      <h3>The Three Basic Percentage Calculations</h3>
      <p>There are three fundamental percentage calculations that form the basis of all percentage problems:</p>
      
      <h4>1. Finding a percentage of a number</h4>
      <p><strong>Formula:</strong> (Percentage × Number) ÷ 100</p>
      <p><strong>Example:</strong> What is 15% of 80?</p>
      <p>15% of 80 = (15 × 80) ÷ 100 = 1200 ÷ 100 = 12</p>
      
      <h4>2. Finding what percentage one number is of another</h4>
      <p><strong>Formula:</strong> (Part ÷ Whole) × 100</p>
      <p><strong>Example:</strong> 15 is what percentage of 60?</p>
      <p>(15 ÷ 60) × 100 = 0.25 × 100 = 25%</p>
      
      <h4>3. Finding the original number when a percentage is known</h4>
      <p><strong>Formula:</strong> Amount ÷ (Percentage ÷ 100)</p>
      <p><strong>Example:</strong> 15 is 25% of what number?</p>
      <p>15 ÷ (25 ÷ 100) = 15 ÷ 0.25 = 60</p>
      
      <h2>Mental Math Shortcuts for Percentages</h2>
      
      <h3>Finding 10% and Working from There</h3>
      <p>One of the easiest ways to calculate percentages mentally is to find 10% first, then use that to find other percentages:</p>
      <ul>
        <li><strong>10%:</strong> Move the decimal point one place to the left</li>
        <li><strong>5%:</strong> Half of 10%</li>
        <li><strong>1%:</strong> Divide 10% by 10</li>
        <li><strong>20%:</strong> Double 10%</li>
        <li><strong>25%:</strong> 20% + 5% (or simply divide by 4)</li>
        <li><strong>50%:</strong> Divide by 2</li>
      </ul>
      
      <p><strong>Example:</strong> Calculate 35% of 80</p>
      <p>10% of 80 = 8</p>
      <p>30% of 80 = 3 × 8 = 24</p>
      <p>5% of 80 = 8 ÷ 2 = 4</p>
      <p>35% of 80 = 24 + 4 = 28</p>
      
      <h3>The Decimal Method</h3>
      <p>Convert the percentage to a decimal by dividing by 100, then multiply:</p>
      <p><strong>Example:</strong> 15% of 80</p>
      <p>15% = 15/100 = 0.15</p>
      <p>0.15 × 80 = 12</p>
      
      <h2>Practical Applications of Percentages</h2>
      
      <h3>Shopping and Discounts</h3>
      
      <h4>Calculating Sale Prices</h4>
      <p>To find the sale price after a discount:</p>
      <p><strong>Method 1:</strong> Original Price - (Original Price × Discount Percentage ÷ 100)</p>
      <p><strong>Method 2:</strong> Original Price × (1 - Discount Percentage ÷ 100)</p>
      
      <p><strong>Example:</strong> A $80 shirt is on sale for 25% off. What is the sale price?</p>
      <p>Method 1: $80 - ($80 × 25 ÷ 100) = $80 - $20 = $60</p>
      <p>Method 2: $80 × (1 - 25 ÷ 100) = $80 × 0.75 = $60</p>
      
      <h4>Calculating the Original Price</h4>
      <p>If you know the sale price and the discount percentage, you can find the original price:</p>
      <p><strong>Formula:</strong> Sale Price ÷ (1 - Discount Percentage ÷ 100)</p>
      
      <p><strong>Example:</strong> A shirt costs $60 after a 25% discount. What was the original price?</p>
      <p>$60 ÷ (1 - 25 ÷ 100) = $60 ÷ 0.75 = $80</p>
      
      <h4>Calculating Tax</h4>
      <p>To find the total price including tax:</p>
      <p><strong>Formula:</strong> Original Price × (1 + Tax Rate ÷ 100)</p>
      
      <p><strong>Example:</strong> A $50 item has 8% sales tax. What is the total price?</p>
      <p>$50 × (1 + 8 ÷ 100) = $50 × 1.08 = $54</p>
      
      <h3>Finance and Investment</h3>
      
      <h4>Simple Interest</h4>
      <p><strong>Formula:</strong> Interest = Principal × Rate × Time</p>
      <p>Where Rate is the annual interest rate as a decimal (percentage ÷ 100) and Time is in years.</p>
      
      <p><strong>Example:</strong> How much interest will $1000 earn in 2 years at 5% annual simple interest?</p>
      <p>Interest = $1000 × 0.05 × 2 = $100</p>
      
      <h4>Compound Interest</h4>
      <p><strong>Formula:</strong> A = P(1 + r)^t</p>
      <p>Where A is the final amount, P is the principal, r is the interest rate per period as a decimal, and t is the number of periods.</p>
      
      <p><strong>Example:</strong> How much will $1000 grow to in 3 years at 5% annual compound interest?</p>
      <p>A = $1000(1 + 0.05)^3 = $1000 × 1.157625 = $1157.63</p>
      
      <h4>Percentage Increase and Decrease</h4>
      <p><strong>Percentage Increase:</strong> [(New Value - Original Value) ÷ Original Value] × 100</p>
      <p><strong>Percentage Decrease:</strong> [(Original Value - New Value) ÷ Original Value] × 100</p>
      
      <p><strong>Example:</strong> An investment grew from $5000 to $6000 in one year. What is the percentage increase?</p>
      <p>[(6000 - 5000) ÷ 5000] × 100 = [1000 ÷ 5000] × 100 = 0.2 × 100 = 20%</p>
      
      <h3>Business and Economics</h3>
      
      <h4>Profit Margin</h4>
      <p><strong>Formula:</strong> [(Selling Price - Cost) ÷ Selling Price] × 100</p>
      
      <p><strong>Example:</strong> A product costs $60 to make and sells for $100. What is the profit margin?</p>
      <p>[(100 - 60) ÷ 100] × 100 = [40 ÷ 100] × 100 = 0.4 × 100 = 40%</p>
      
      <h4>Markup</h4>
      <p><strong>Formula:</strong> [(Selling Price - Cost) ÷ Cost] × 100</p>
      
      <p><strong>Example:</strong> A product costs $60 to make and sells for $100. What is the markup?</p>
      <p>[(100 - 60) ÷ 60] × 100 = [40 ÷ 60] × 100 = 0.6667 × 100 = 66.67%</p>
      
      <h3>Data Analysis and Statistics</h3>
      
      <h4>Percentage Change</h4>
      <p>Used to describe changes in data over time:</p>
      <p><strong>Formula:</strong> [(New Value - Old Value) ÷ Old Value] × 100</p>
      
      <p><strong>Example:</strong> A company's revenue increased from $2 million to $2.5 million. What is the percentage increase?</p>
      <p>[(2.5 - 2) ÷ 2] × 100 = [0.5 ÷ 2] × 100 = 0.25 × 100 = 25%</p>
      
      <h4>Percentage Points</h4>
      <p>When discussing changes in percentages, we often use "percentage points" to avoid confusion:</p>
      <p><strong>Example:</strong> If unemployment rises from 5% to 8%, we say it increased by 3 percentage points (not by 60%, which would be the percentage increase of the percentage).</p>
      
      <h2>Common Percentage Mistakes and How to Avoid Them</h2>
      
      <h3>Confusing Percentage Points with Percentages</h3>
      <p>A change from 10% to 15% is:</p>
      <ul>
        <li>An increase of 5 percentage points</li>
        <li>A 50% increase (because 5 is 50% of 10)</li>
      </ul>
      
      <h3>Calculating Percentage Change Incorrectly</h3>
      <p>Always use the original value as the denominator when calculating percentage change.</p>
      
      <h3>Applying Percentages in the Wrong Order</h3>
      <p>When applying multiple percentage changes, the order matters:</p>
      <p><strong>Example:</strong> A $100 item with a 20% markup and then a 10% discount:</p>
      <p>First markup: $100 × 1.2 = $120</p>
      <p>Then discount: $120 × 0.9 = $108</p>
      <p>This is different from applying a 10% discount and then a 20% markup:</p>
      <p>First discount: $100 × 0.9 = $90</p>
      <p>Then markup: $90 × 1.2 = $108</p>
      <p>In this case, the result is the same, but that's not always true with different percentages.</p>
      
      <h2>Tools for Percentage Calculations</h2>
      
      <h3>Our Percentage Calculator</h3>
      <p>For complex percentage calculations or when you need precise results, our <a href="/tools/percentage-calculator">Percentage Calculator</a> tool can help. It handles all types of percentage problems, including:</p>
      <ul>
        <li>Finding percentages of numbers</li>
        <li>Calculating what percentage one number is of another</li>
        <li>Finding the original number when a percentage is known</li>
        <li>Computing percentage increases and decreases</li>
        <li>Working with ratios and proportions</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Percentages are a powerful mathematical tool that helps us understand proportions, changes, and relationships in various contexts. By mastering the basic concepts and calculation techniques presented in this guide, you'll be better equipped to handle percentage problems in shopping, finance, business, and data analysis.</p>
      
      <p>Remember that practice makes perfect. Try applying these concepts to real-life situations, and use our <a href="/tools/percentage-calculator">Percentage Calculator</a> tool when you need assistance with complex calculations.</p>
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
