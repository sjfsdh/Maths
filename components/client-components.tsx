"use client"

import { ScrollTop } from "@/components/scroll-top"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { Suspense } from "react"

export function ClientComponents() {
  return (
    <Suspense fallback={null}>
      <ScrollTop />
      <ScrollToTopButton />
    </Suspense>
  )
}
