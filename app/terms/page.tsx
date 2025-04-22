import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Terms and Conditions - Quicklearn",
  description: "Terms and conditions for using Quicklearn educational tools and resources",
}

export default function TermsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms and Conditions</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Quicklearn ("we," "our," or "us"). These Terms and Conditions govern your use of our website
            located at <a href="https://vicei.online">vicei.online</a> (the "Site") and all content, services, and
            products available at or through the Site.
          </p>
          <p>
            By accessing or using our Site, you agree to be bound by these Terms. If you disagree with any part of the
            terms, you may not access the Site.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            The Site and its original content, features, and functionality are owned by Quicklearn and are protected by
            international copyright, trademark, patent, trade secret, and other intellectual property or proprietary
            rights laws.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at
            all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
            your account on our Site.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Site and for any activities or
            actions under your password.
          </p>

          <h2>4. Educational Content</h2>
          <p>
            Our Site provides educational tools and resources. While we strive for accuracy, we do not warrant that the
            content will be error-free. Any reliance you place on such information is strictly at your own risk.
          </p>

          <h2>5. User Contributions</h2>
          <p>
            Users may post content as part of the interactive features of our Site. Any content you post will be
            considered non-confidential and non-proprietary.
          </p>

          <h2>6. Prohibited Uses</h2>
          <p>You may use our Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Site in any way that violates any applicable law or regulation</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
            <li>Attempt to gain unauthorized access to secured portions of the Site</li>
            <li>Use the Site for any purpose that is unlawful or prohibited by these Terms</li>
          </ul>

          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall Quicklearn, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential, or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to
            or use of or inability to access or use the Site.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. It is your responsibility to check our
            Terms periodically for changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@vicei.online">support@vicei.online</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
