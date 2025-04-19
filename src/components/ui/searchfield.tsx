// // "use client"

// // import type React from "react"

// // import { useState, useEffect, useRef } from "react"
// // import { Search } from "lucide-react"
// // import { Input } from "@/components/ui/input"
// // import { Button } from "@/components/ui/button"
// // import { useRouter } from "next/navigation"
// // import Link from "next/link"
// // import { countryData, type CountryData } from "@/data/countries"

// // export function JollySearchField() {
// //   const [searchQuery, setSearchQuery] = useState("")
// //   const [searchResults, setSearchResults] = useState<CountryData[]>([])
// //   const [isSearching, setIsSearching] = useState(false)
// //   const searchRef = useRef<HTMLDivElement>(null)
// //   const router = useRouter()

// //   // Handle search input change
// //   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const query = e.target.value
// //     setSearchQuery(query)

// //     if (query.length > 0) {
// //       setIsSearching(true)
// //       // Filter countries based on search query
// //       const filteredResults = countryData.filter((country) =>
// //         country.countryName.toLowerCase().includes(query.toLowerCase()),
// //       )
// //       setSearchResults(filteredResults)
// //     } else {
// //       setIsSearching(false)
// //       setSearchResults([])
// //     }
// //   }

// //   // Handle search submission
// //   const handleSearchSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     if (searchQuery && searchResults.length > 0) {
// //       router.push(searchResults[0].buttonLink)
// //       setIsSearching(false)
// //     }
// //   }

// //   // Close search results when clicking outside
// //   useEffect(() => {
// //     function handleClickOutside(event: MouseEvent) {
// //       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
// //         setIsSearching(false)
// //       }
// //     }

// //     document.addEventListener("mousedown", handleClickOutside)
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside)
// //     }
// //   }, [])

// //   return (
// //     <div className="relative w-full" ref={searchRef}>
// //       <form onSubmit={handleSearchSubmit} className="relative">
// //         <Input
// //           type="text"
// //           placeholder="Search for a country..."
// //           className="w-full pl-10 pr-4 py-2 rounded-md"
// //           value={searchQuery}
// //           onChange={handleSearchChange}
// //           onFocus={() => searchQuery && setIsSearching(true)}
// //         />
// //         <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
// //           <Search className="h-4 w-4" />
// //         </Button>
// //       </form>

// //       {/* Search Results Dropdown */}
// //       {isSearching && searchResults.length > 0 && (
// //         <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
// //           {searchResults.map((country, index) => (
// //             <Link
// //               key={index}
// //               href={country.buttonLink}
// //               className="flex items-center p-3 hover:bg-muted transition-colors cursor-pointer"
// //               onClick={() => setIsSearching(false)}
// //             >
// //               <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
// //                 <img
// //                   src={country.backgroundPhoto || "/placeholder.svg"}
// //                   alt={country.countryName}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //               <div>
// //                 <p className="font-medium">{country.countryName}</p>
// //                 <p className="text-xs text-muted-foreground">
// //                   {country.visaVariable} - {country.cost}
// //                 </p>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       )}

// //       {/* No Results Message */}
// //       {isSearching && searchQuery && searchResults.length === 0 && (
// //         <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 p-4 text-center">
// //           <p className="text-muted-foreground">No countries found matching "{searchQuery}"</p>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }
// 'use client'

// import type React from "react"
// import { useState, useEffect, useRef } from "react"
// import { Search } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { countryData, type CountryData } from "@/data/countries"
// import { useAuth } from "@/context/AuthContext"
// import { toast } from "sonner"

// export function JollySearchField() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [searchResults, setSearchResults] = useState<CountryData[]>([])
//   const [isSearching, setIsSearching] = useState(false)
//   const searchRef = useRef<HTMLDivElement>(null)
//   const router = useRouter()
//   const { session, refreshSession } = useAuth()

//   // Handle search input change
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value
//     setSearchQuery(query)

//     if (query.length > 0) {
//       setIsSearching(true)
//       const filteredResults = countryData.filter((country) =>
//         country.countryName.toLowerCase().includes(query.toLowerCase())
//       )
//       setSearchResults(filteredResults)
//     } else {
//       setIsSearching(false)
//       setSearchResults([])
//     }
//   }

//   // Handle search result click with auth check
//   const handleSearchSelect = async (link: string) => {
//     if (session) {
//       router.push(link)
//     } else {
//       toast("Please log in to access this form.")
//       router.push(`/auth?next=${link}`)
//     }
//     setIsSearching(false)
//   }

//   // Submit with first result (optional fallback)
//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (searchQuery && searchResults.length > 0) {
//       handleSearchSelect(searchResults[0].buttonLink)
//     }
//   }

//   // Close search results when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setIsSearching(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <div className="relative w-full" ref={searchRef}>
//       <form onSubmit={handleSearchSubmit} className="relative">
//         <Input
//           type="text"
//           placeholder="Search for a country..."
//           className="w-full pl-10 pr-4 py-2 rounded-md"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           onFocus={() => searchQuery && setIsSearching(true)}
//         />
//         <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
//           <Search className="h-4 w-4" />
//         </Button>
//       </form>

//       {/* Search Results Dropdown */}
//       {isSearching && searchResults.length > 0 && (
//         <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
//           {searchResults.map((country, index) => (
//             <div
//               key={index}
//               onClick={() => handleSearchSelect(country.buttonLink)}
//               className="flex items-center p-3 hover:bg-muted transition-colors cursor-pointer"
//             >
//               <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
//                 <img
//                   src={country.backgroundPhoto || "/placeholder.svg"}
//                   alt={country.countryName}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <p className="font-medium">{country.countryName}</p>
//                 <p className="text-xs text-muted-foreground">
//                   {country.visaVariable} – {country.cost}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* No Results Message */}
//       {isSearching && searchQuery && searchResults.length === 0 && (
//         <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 p-4 text-center">
//           <p className="text-muted-foreground">No countries found matching "{searchQuery}"</p>
//         </div>
//       )}
//     </div>
//   )
// }
'use client'

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { countryData, type CountryData } from "@/data/countries"
import { useAuth } from "@/context/AuthContext"
import { toast } from "sonner"

export function JollySearchField({ onAuthRedirect }: { onAuthRedirect?: (next: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<CountryData[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { session } = useAuth()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.length > 0) {
      setIsSearching(true)
      const filteredResults = countryData.filter((country) =>
        country.countryName.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(filteredResults)
    } else {
      setIsSearching(false)
      setSearchResults([])
    }
  }

  const handleSearchSelect = async (link: string) => {
    if (session) {
      router.push(link)
    } else {
      toast("Please log in to access this form.")
      if (onAuthRedirect) onAuthRedirect(link)
    }
    setIsSearching(false)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery && searchResults.length > 0) {
      handleSearchSelect(searchResults[0].buttonLink)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearching(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative w-full" ref={searchRef}>
      <form onSubmit={handleSearchSubmit} className="relative">
        <Input
          type="text"
          placeholder="Search for a country..."
          className="w-full pl-10 pr-4 py-2 rounded-md"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => searchQuery && setIsSearching(true)}
        />
        <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
          <Search className="h-4 w-4" />
        </Button>
      </form>

      {isSearching && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
          {searchResults.map((country, index) => (
            <div
              key={index}
              onClick={() => handleSearchSelect(country.buttonLink)}
              className="flex items-center p-3 hover:bg-muted transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                <img
                  src={country.backgroundPhoto || "/placeholder.svg"}
                  alt={country.countryName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{country.countryName}</p>
                <p className="text-xs text-muted-foreground">
                  {country.visaVariable} – {country.cost}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {isSearching && searchQuery && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 p-4 text-center">
          <p className="text-muted-foreground">No countries found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  )
}
