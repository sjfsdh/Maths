import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About - Quicklearn",
  description: "Learn about Quicklearn's mission and educational tools",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">About Quicklearn</CardTitle>
          <CardDescription>Our mission and vision</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            At Quicklearn, our mission is to make education accessible, interactive, and engaging for everyone. We
            believe that learning should be a lifelong journey, and our goal is to provide tools and resources that make
            this journey enjoyable and productive.
          </p>

          <h2>Our Story</h2>
          <p>
            Quicklearn was founded in 2020 by a group of educators and technology enthusiasts who saw the need for more
            interactive and user-friendly educational tools. What started as a small project to help students practice
            typing and basic math has grown into a comprehensive platform offering a variety of educational tools and
            resources.
          </p>

          <h2>What We Offer</h2>
          <p>Our platform currently includes the following tools:</p>
          <ul>
            <li>
              <strong>Math Expression Evaluator:</strong> Evaluate complex mathematical expressions with step-by-step
              solutions.
            </li>
            <li>
              <strong>Algebra Solver:</strong> Solve algebraic equations and systems with detailed explanations.
            </li>
            <li>
              <strong>Unit Converter:</strong> Convert between different units of measurement across various categories.
            </li>
            <li>
              <strong>Percentage & Ratio Calculator:</strong> Calculate percentages, ratios, and proportions with ease.
            </li>
            <li>
              <strong>Typing Speed Tester:</strong> Measure and improve your typing speed and accuracy with interactive
              tests.
            </li>
          </ul>

          <h2>Our Values</h2>
          <p>At Quicklearn, we are guided by the following values:</p>
          <ul>
            <li>
              <strong>Accessibility:</strong> We believe education should be accessible to everyone, regardless of their
              background or circumstances.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously strive to improve our tools and develop new ones to meet the
              evolving needs of learners.
            </li>
            <li>
              <strong>Quality:</strong> We are committed to providing high-quality, accurate, and reliable educational
              tools and resources.
            </li>
            <li>
              <strong>Community:</strong> We value the feedback and contributions of our user community and work to
              foster a supportive learning environment.
            </li>
          </ul>

          <h2>Our Team</h2>
          <p>
            Our team consists of educators, developers, designers, and content creators who are passionate about
            education and technology. We work together to create tools that are not only educational but also engaging
            and user-friendly.
          </p>

          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to{" "}
            <a href="/contact">contact us</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
