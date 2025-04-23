import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"

// Import the ScrollToTopButton component
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Quicklearn - Educational Tools & Resources",
  description: "Interactive educational tools and resources for students and teachers",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </main>
            <ScrollToTopButton />
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
