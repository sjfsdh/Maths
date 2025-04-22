import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Disclaimer - Quicklearn",
  description: "Disclaimer for Quicklearn educational tools and resources",
}

export default function DisclaimerPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Disclaimer</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <h2>1. Interpretation and Definitions</h2>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions.
            The following definitions shall have the same meaning regardless of whether they appear in singular or in
            plural.
          </p>

          <h2>2. Disclaimer</h2>
          <p>
            The information provided by Quicklearn on <a href="https://vicei.online">vicei.online</a> is for general
            informational and educational purposes only. All information on the Site is provided in good faith, however,
            we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy,
            validity, reliability, availability, or completeness of any information on the Site.
          </p>
          <p>
            Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a
            result of the use of the site or reliance on any information provided on the site. Your use of the site and
            your reliance on any information on the site is solely at your own risk.
          </p>

          <h2>3. External Links Disclaimer</h2>
          <p>
            The Site may contain links to external websites that are not provided or maintained by or in any way
            affiliated with Quicklearn. Please note that Quicklearn does not guarantee the accuracy, relevance,
            timeliness, or completeness of any information on these external websites.
          </p>

          <h2>4. Errors and Omissions Disclaimer</h2>
          <p>
            The information given by the Site is for general guidance on matters of interest only. Even if Quicklearn
            takes every precaution to ensure that the content of the Site is both current and accurate, errors can
            occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or
            inaccuracies in the information contained on the Site.
          </p>
          <p>
            Quicklearn is not responsible for any errors or omissions, or for the results obtained from the use of this
            information.
          </p>

          <h2>5. Fair Use Disclaimer</h2>
          <p>
            Quicklearn may use copyrighted material which has not always been specifically authorized by the copyright
            owner. Quicklearn is making such material available for criticism, comment, news reporting, teaching,
            scholarship, or research.
          </p>
          <p>
            Quicklearn believes this constitutes a "fair use" of any such copyrighted material as provided for in
            section 107 of the United States Copyright law.
          </p>

          <h2>6. Views Expressed Disclaimer</h2>
          <p>
            Any views and opinions that may be expressed in the Site are the views and opinions of the author and do not
            necessarily reflect those of Quicklearn.
          </p>

          <h2>7. No Responsibility Disclaimer</h2>
          <p>
            The information on the Site is provided with the understanding that Quicklearn is not herein engaged in
            rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used
            as a substitute for consultation with professional accounting, tax, legal, or other competent advisers.
          </p>

          <h2>8. "Use at Your Own Risk" Disclaimer</h2>
          <p>
            All information in the Site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or
            of the results obtained from the use of this information, and without warranty of any kind, express or
            implied.
          </p>
          <p>
            Quicklearn will not be liable to you or anyone else for any decision made or action taken in reliance on the
            information given by the Site or for any consequential, special, or similar damages, even if advised of the
            possibility of such damages.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at{" "}
            <a href="mailto:support@vicei.online">support@vicei.online</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
