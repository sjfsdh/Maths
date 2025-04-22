"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollTop() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [pathname])

  return null
}
