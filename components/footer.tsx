import Link from "next/link"
import { BookOpen } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <span className="font-semibold">Quicklearn</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Educational tools and resources for students and teachers
          </p>
          <p className="text-xs text-muted-foreground">
            Contact us:{" "}
            <a href="mailto:support@vicei.online" className="hover:underline">
              support@vicei.online
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <div className="text-sm text-muted-foreground">© {currentYear} Quicklearn. All rights reserved.</div>
      </div>
    </footer>
  )
}
