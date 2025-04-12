"use client"

import * as React from "react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Country = {
  name: string
  visaTime: string
  imageUrl: string
  value: string
}

const popularCountries: Country[] = [
  {
    name: "United Arab Emirates",
    visaTime: "Visa in 3 days",
    imageUrl: "https://source.unsplash.com/featured/?dubai",
    value: "uae",
  },
  {
    name: "Egypt",
    visaTime: "Visa in 3 days",
    imageUrl: "https://source.unsplash.com/featured/?pyramids",
    value: "egypt",
  },
  {
    name: "Singapore",
    visaTime: "Visa in 12 days",
    imageUrl: "https://source.unsplash.com/featured/?singapore",
    value: "singapore",
  },
  {
    name: "Japan",
    visaTime: "Visa in 24 days",
    imageUrl: "https://source.unsplash.com/featured/?japan",
    value: "japan",
  },
  {
    name: "Türkiye",
    visaTime: "Visa in 1 day",
    imageUrl: "https://source.unsplash.com/featured/?turkey",
    value: "turkey",
  },
]

export function CountrySearchDropdown({
  countries,
  onSelect,
}: {
  countries: Country[]
  onSelect?: (country: Country) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<Country | null>(null)

  const handleSelect = (country: Country) => {
    setSelected(country)
    onSelect?.(country)
    setOpen(false)
  }

  const filtered = (input: string) =>
    countries.filter((c) =>
      c.name.toLowerCase().includes(input.toLowerCase())
    )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between"
        >
          {selected ? selected.name : "Search for a country"}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Type a country..."
            onValueChange={() => {}}
          />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup heading="Most Popular">
              {popularCountries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={() => handleSelect(country)}
                  className="flex items-center gap-3"
                >
                  <Image
                    src={country.imageUrl}
                    alt={country.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium">{country.name}</span>
                    <span className="text-xs text-muted-foreground">{country.visaTime}</span>
                  </div>
                  {selected?.value === country.value && (
                    <Check className="ml-auto h-4 w-4 text-green-600" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading="All Countries">
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={() => handleSelect(country)}
                  className="flex items-center gap-3"
                >
                  <Image
                    src={country.imageUrl}
                    alt={country.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium">{country.name}</span>
                    <span className="text-xs text-muted-foreground">{country.visaTime}</span>
                  </div>
                  {selected?.value === country.value && (
                    <Check className="ml-auto h-4 w-4 text-green-600" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
