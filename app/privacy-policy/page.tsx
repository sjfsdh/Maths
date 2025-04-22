import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - Quicklearn",
  description: "Privacy policy for Quicklearn educational tools and resources",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At Quicklearn, we respect your privacy and are committed to protecting your personal data. This privacy
            policy will inform you about how we look after your personal data when you visit our website and tell you
            about your privacy rights and how the law protects you.
          </p>

          <h2>2. The Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped
            together as follows:
          </p>
          <ul>
            <li>
              <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
            </li>
            <li>
              <strong>Contact Data</strong> includes email address and telephone numbers.
            </li>
            <li>
              <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time
              zone setting and location, browser plug-in types and versions, operating system and platform, and other
              technology on the devices you use to access this website.
            </li>
            <li>
              <strong>Usage Data</strong> includes information about how you use our website, products, and services.
            </li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
            in the following circumstances:
          </p>
          <ul>
            <li>To register you as a new customer.</li>
            <li>To provide and improve our services to you.</li>
            <li>To manage our relationship with you.</li>
            <li>To administer and protect our business and this website.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally
            lost, used, or accessed in an unauthorized way, altered, or disclosed.
          </p>

          <h2>5. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain
            information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to
            provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our
            Service is used.
          </p>
          <p>
            These third parties have access to your Personal Data only to perform these tasks on our behalf and are
            obligated not to disclose or use it for any other purpose.
          </p>

          <h2>7. Analytics</h2>
          <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
          <p>
            <strong>Google Analytics</strong> is a web analytics service offered by Google that tracks and reports
            website traffic. Google uses the data collected to track and monitor the use of our Service. This data is
            shared with other Google services. Google may use the collected data to contextualize and personalize the
            ads of its own advertising network.
          </p>

          <h2>8. Advertising</h2>
          <p>
            We may use third-party Service Providers to show advertisements to you to help support and maintain our
            Service.
          </p>
          <p>
            <strong>Google AdSense</strong> is an advertising service provided by Google. We use Google AdSense on our
            Service to display ads. Google's use of advertising cookies enables it and its partners to serve ads based
            on your visit to our Service and/or other websites on the Internet.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
            information from anyone under the age of 13.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:support@vicei.online">support@vicei.online</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
