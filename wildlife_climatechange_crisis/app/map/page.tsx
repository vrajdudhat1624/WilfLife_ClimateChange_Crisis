/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useEffect } from "react"
import owl from "@/public/owl.jpeg"
import caribou from "@/public/caribou.jpeg"
import murrelet from "@/public/murrelet.avif"
import salmon from "@/public/salmon.jpg"
import whale from "@/public/whale.jpeg"
import bear from "@/public/Bear.jpeg"
import panda from "@/public/panda.jpeg"
import marmot from "@/public/marmot.png"
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});
// Existing animals array remains the same
const animals = [
  {
    id: 1,
    name: "Grizzly Bear",
    lat: 54.5,
    lng: -125.5,
    status: "Vulnerable",
    climate_vulnerability: "High",
    fact: "Grizzly bears are losing habitat due to climate change.",
    emoji: "🐻",
    image: bear,


  },
  {
    id: 2,
    name: "Orca",
    lat: 50.5,
    lng: -128.5,
    status: "Endangered",
    climate_vulnerability: "Medium",
    fact: "Orcas are affected by changes in salmon populations due to warming waters.",
    emoji: "🐳",
    image: whale,


  },
  {
    id: 3,
    name: "Spirit Bear",
    lat: 52.8,
    lng: -128.2,
    status: "Rare",
    climate_vulnerability: "High",
    fact: "Spirit bears are unique to coastal British Columbia and are threatened by habitat loss.",
    emoji: "🐻‍❄️",
    image: panda,

  },
  {
    id: 4,
    name: "Salmon",
    lat: 49.5, // Moving closer to the ocean
    lng: -130.0, // Further offshore in the Pacific Ocean
    status: "Varies by species",
    climate_vulnerability: "High",
    fact: "Salmon populations are declining due to warming waters and changes in ocean conditions.",
    emoji: "🐟",
    image: salmon,
  },

  {
    id: 5,
    name: "Vancouver Island Marmot",
    lat: 49.6,
    lng: -125.5,
    status: "Critically Endangered",
    climate_vulnerability: "Very High",
    fact: "One of the rarest mammals in North America, threatened by habitat loss and climate change.",
    emoji: "🐹",
    image: marmot,

  },
  {
    id: 6,
    name: "Northern Spotted Owl",
    lat: 49.3,
    lng: -121.7,
    status: "Endangered",
    climate_vulnerability: "High",
    fact: "Habitat loss and competition from Barred Owls are major threats to this species.",
    emoji: "🦉",
    image:
    owl,
  },
  {
    id: 7,
    name: "Mountain Caribou",
    lat: 52.1,
    lng: -122.5,
    status: "Endangered",
    climate_vulnerability: "Very High",
    fact: "Climate change is altering their habitat and food sources, leading to population declines.",
    emoji: "🦌",
    image:
    caribou
    ,
  },
  {
    id: 8,
    name: "Marbled Murrelet",
    lat: 51.0,
    lng: -127.5,
    status: "Threatened",
    climate_vulnerability: "Medium",
    fact: "Old-growth forest dependent, threatened by logging and climate-induced changes to marine food webs.",
    emoji: "🐦",
    image:
    murrelet,
  },
]

// Interface for climate events from CSV
interface ClimateEvent {
  Year: string
  "Event Type": string
  "Event Name": string
  Latitude: string
  Longitude: string
  Impact: string
}

export default function Map() {
  const [year, setYear] = useState(1990)
  const [isMounted, setIsMounted] = useState(false)
  const [climateEvents, setClimateEvents] = useState<ClimateEvent[]>([])
  const [yearRange, setYearRange] = useState({ min: 1990, max: 2023 })

  useEffect(() => {
    setIsMounted(true)
    fetchClimateEvents()
  }, [])

  const fetchClimateEvents = async () => {
    try {
      const response = await fetch(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bc_natural_disasters_1990s_present-W6yzid7qzWDTMoDTt7qx2EKPg4ByBA.csv",
      )
      const text = await response.text()

      // Parse CSV
      const rows = text.split("\n")
      const headers = rows[0].split(",")
      const data = rows
          .slice(1)
          .map((row) => {
            const values = row.split(",")
            return headers.reduce((obj: any, header, index) => {
              obj[header.trim()] = values[index]?.trim()
              return obj
            }, {})
          })
          .filter((event) => event.Year && event.Latitude && event.Longitude)

      // Update year range
      const years = data.map((event) => Number.parseInt(event.Year))
      const min = Math.min(...years)
      const max = Math.max(...years)
      setYearRange({ min, max })
      setYear(min) // Start at earliest year

      setClimateEvents(data)
    } catch (error) {
      console.error("Error fetching climate events:", error)
    }
  }

  // const createIcon = (emoji: string) =>
  //     new Icon({
  //       iconUrl: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`,
  //       iconSize: [32, 32],
  //       iconAnchor: [16, 16],
  //       popupAnchor: [0, -16],
  //     })

  // Get emoji based on event type
  const getEventEmoji = (eventType: string): string => {
    const typeMap: { [key: string]: string } = {
      Flood: "🌊",
      Wildfire: "🔥",
      Drought: "☀️",
      Storm: "⛈️",
      Landslide: "⛰️",
      Earthquake: "🌋",
      "Heat Wave": "🌡️",
    }
    return typeMap[eventType] || "⚠️"
  }

  if (!isMounted) {
    return null
  }

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">British Columbia Wildlife Tracker</h1>
        <div className="h-[600px] relative border-4 border-forest-green rounded-lg overflow-hidden">
        <MapComponent animals={animals} climateEvents={climateEvents} year={year} />

        </div>

        {/* Year Slider */}
        <div className="mt-6">
          <label htmlFor="year-slider" className="block mb-2 font-semibold">
            Natural Disasters Timeline
          </label>
          <input
              type="range"
              id="year-slider"
              min={yearRange.min}
              max={yearRange.max}
              value={year}
              onChange={(e) => setYear(Number.parseInt(e.target.value))}
              className="w-full"
          />
          <p className="text-center mt-2">Year: {year}</p>
        </div>

        {/* Legends */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Wildlife Legend</h3>
            {animals.map((animal) => (
                <div key={animal.id} className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{animal.emoji}</span>
                  <span>{animal.name}</span>
                </div>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Natural Disasters Legend</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(getEventEmoji("")).map(([type, emoji]) => (
                  <div key={type} className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{emoji}</span>
                    <span>{type}</span>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

