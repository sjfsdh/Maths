import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Tag } from "lucide-react"

export const metadata = {
  title: "Blog - Quicklearn",
  description: "Educational articles, tips, and resources for students and teachers",
}

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "Mastering Mental Math: Techniques to Calculate Faster",
    excerpt: "Learn powerful mental math techniques to improve calculation speed and accuracy in everyday situations.",
    date: "2023-11-01",
    author: "Michael Chen",
    readTime: "8 min read",
    tags: ["Mathematics", "Mental Math", "Learning Techniques"],
    slug: "mastering-mental-math",
  },
  {
    id: "2",
    title: "The Science of Typing: How to Improve Your Speed and Accuracy",
    excerpt:
      "Discover the science behind efficient typing and learn evidence-based techniques to boost your typing speed and accuracy.",
    date: "2023-11-05",
    author: "Emily Johnson",
    readTime: "10 min read",
    tags: ["Typing", "Productivity", "Learning Techniques"],
    slug: "science-of-typing",
  },
  {
    id: "3",
    title: "Understanding Unit Conversions: A Comprehensive Guide",
    excerpt:
      "Master the fundamentals of unit conversions across different measurement systems with practical examples and conversion techniques.",
    date: "2023-11-10",
    author: "Dr. Robert Martinez",
    readTime: "12 min read",
    tags: ["Mathematics", "Science", "Unit Conversion", "Practical Skills"],
    slug: "understanding-unit-conversions",
  },
  {
    id: "4",
    title: "Mastering Percentages: Essential Skills for Everyday Math",
    excerpt:
      "Learn how to calculate and understand percentages for practical applications in shopping, finance, and data analysis.",
    date: "2023-11-15",
    author: "Lisa Wong",
    readTime: "9 min read",
    tags: ["Mathematics", "Percentages", "Practical Skills", "Finance"],
    slug: "mastering-percentages",
  },
  {
    id: "5",
    title: "Solving Algebraic Equations: Step-by-Step Techniques",
    excerpt:
      "Learn systematic approaches to solve different types of algebraic equations with clear examples and practical applications.",
    date: "2023-11-20",
    author: "Prof. James Anderson",
    readTime: "11 min read",
    tags: ["Mathematics", "Algebra", "Problem Solving", "Education"],
    slug: "solving-algebraic-equations",
  },
  {
    id: "6",
    title: "The Mathematics of Ratios and Proportions in Everyday Life",
    excerpt:
      "Explore how ratios and proportions are used in cooking, finance, art, and more, with practical examples and calculation techniques.",
    date: "2023-11-25",
    author: "Dr. Maria Rodriguez",
    readTime: "10 min read",
    tags: ["Mathematics", "Ratios", "Proportions", "Practical Applications"],
    slug: "mathematics-of-ratios",
  },
  {
    id: "7",
    title: "Temperature Scales Explained: Celsius, Fahrenheit, and Kelvin",
    excerpt:
      "Learn about the history, conversion formulas, and practical applications of different temperature scales used around the world.",
    date: "2023-11-30",
    author: "Dr. Thomas Wilson",
    readTime: "8 min read",
    tags: ["Science", "Temperature", "Unit Conversion", "Physics"],
    slug: "temperature-scales-explained",
  },
  {
    id: "8",
    title: "10 Tips to Improve Your Typing Speed",
    excerpt:
      "Discover practical tips and exercises to boost your typing speed and accuracy. Learn how to position your hands correctly and develop muscle memory.",
    date: "2023-10-15",
    author: "Jane Smith",
    readTime: "5 min read",
    tags: ["Typing", "Productivity", "Skills"],
    slug: "improve-typing-speed",
  },
  {
    id: "9",
    title: "Understanding Mathematical Formulas: A Beginner's Guide",
    excerpt:
      "A comprehensive introduction to basic mathematical formulas and concepts. Perfect for students who want to strengthen their math foundation.",
    date: "2023-10-10",
    author: "John Doe",
    readTime: "8 min read",
    tags: ["Mathematics", "Education", "Beginners"],
    slug: "understanding-math-formulas",
  },
  {
    id: "10",
    title: "The Importance of Unit Conversion in Science and Engineering",
    excerpt:
      "Learn why unit conversion is crucial in scientific and engineering fields. This article covers common conversion factors and practical examples.",
    date: "2023-10-05",
    author: "Alex Johnson",
    readTime: "6 min read",
    tags: ["Science", "Engineering", "Unit Conversion"],
    slug: "unit-conversion-importance",
  },
  {
    id: "11",
    title: "How to Calculate Percentages: Simple Methods and Shortcuts",
    excerpt:
      "Master the art of calculating percentages quickly and accurately. This guide provides easy-to-follow methods and mental math shortcuts.",
    date: "2023-09-28",
    author: "Sarah Williams",
    readTime: "4 min read",
    tags: ["Mathematics", "Percentages", "Practical Skills"],
    slug: "calculate-percentages",
  },
  {
    id: "12",
    title: "The History of Mathematical Notation and Symbols",
    excerpt:
      "Explore the fascinating evolution of mathematical symbols and notation systems throughout history and across different cultures.",
    date: "2023-09-20",
    author: "Prof. David Chen",
    readTime: "7 min read",
    tags: ["Mathematics", "History", "Education"],
    slug: "history-of-mathematical-notation",
  },
]

export default function BlogPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Quicklearn Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Educational articles, tips, and resources to help you learn and grow
        </p>
      </div>

      {/* AdSense Placeholder - Top */}
      <div className="w-full h-[90px] bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50 mb-8">
        <p className="text-muted-foreground text-sm">Advertisement Space</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-xl">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-xs">
                <User className="h-3 w-3" /> {post.author} • <Clock className="h-3 w-3" /> {post.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{post.tags.length - 3} more
                  </Badge>
                )}
              </div>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/blog/${post.slug}`}>Read More</Link>
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
