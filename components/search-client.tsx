"use client"

import { useState, useEffect } from "react"

export default function SearchClient({
  onSearch,
  initialQuery = "",
}: {
  onSearch: (query: string) => void
  initialQuery?: string
}) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  useEffect(() => {
    onSearch(searchQuery)
  }, [searchQuery, onSearch])

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
