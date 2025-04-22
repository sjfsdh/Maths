import Link from "next/link"
import { BookOpen } from "lucide-react"

interface LogoProps {
  variant?: "default" | "mobile"
}

export function Logo({ variant = "default" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 p-1.5 shadow-md">
        <BookOpen className="h-5 w-5 text-white" />
      </div>
      {variant !== "mobile" && (
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Quicklearn
        </span>
      )}
    </Link>
  )
}
