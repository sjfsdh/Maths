"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function SearchClient({
  onSearch,
}: {
  onSearch: (query: string) => void
}) {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)

  useEffect(() => {
    onSearch(query)
  }, [query, onSearch])

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="px-3 py-2 border rounded-md"
      />
    </div>
  )
}
