"use client"
import { StaticImageData } from "next/image"
import owl from "@/public/owl.jpeg"
import caribou from "@/public/caribou.jpeg"
import murrelet from "@/public/murrelet.avif"
import salmon from "@/public/salmon.jpg"
import whale from "@/public/whale.jpeg"
import bear from "@/public/bear.jpeg"
import panda from "@/public/panda.jpeg"
import marmot from "@/public/marmot.png"
import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import { AnimalPopup } from "../components/AnimalPopup"

// Mock data for animal locations in British Columbia
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

// Climate events data
const climateEvents = [
  { id: 1, name: "Wildfires", lat: 53.7, lng: -124.5, year: 2030, emoji: "🔥" },
  { id: 2, name: "Drought", lat: 52.3, lng: -122.8, year: 2035, emoji: "☀️" },
  { id: 3, name: "Sea Level Rise", lat: 49.2, lng: -123.1, year: 2040, emoji: "🌊" },
]

export default function Map() {
  const [year, setYear] = useState(2025)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const createIcon = (emoji: string) =>
    new Icon({
      iconUrl: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    })

  if (!isMounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">British Columbia Wildlife Tracker</h1>
      <div className="h-[600px] relative border-4 border-forest-green rounded-lg overflow-hidden">
        <MapContainer center={[53, -126]} zoom={5} style={{ height: "100%", width: "100%" }} zoomControl={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <ZoomControl position="bottomright" />
          {animals.map((animal) => (
            <Marker key={animal.id} position={[animal.lat, animal.lng]} icon={createIcon(animal.emoji)}>
              <Popup>
                <AnimalPopup {...animal} />
              </Popup>
            </Marker>
          ))}
          {climateEvents
            .filter((event) => event.year <= year)
            .map((event) => (
              <Marker key={event.id} position={[event.lat, event.lng]} icon={createIcon(event.emoji)}>
                <Popup>
                  <h3 className="font-bold">
                    {event.name} {event.emoji}
                  </h3>
                  <p>Year: {event.year}</p>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
      <div className="mt-6">
        <label htmlFor="year-slider" className="block mb-2 font-semibold">
          Climate Change Timeline
        </label>
        <input
          type="range"
          id="year-slider"
          min="2025"
          max="2050"
          value={year}
          onChange={(e) => setYear(Number.parseInt(e.target.value))}
          className="w-full"
        />
        <p className="text-center mt-2">Year: {year}</p>
      </div>
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
          <h3 className="font-semibold mb-2">Climate Events Legend</h3>
          {climateEvents.map((event) => (
            <div key={event.id} className="flex items-center mb-2">
              <span className="text-2xl mr-2">{event.emoji}</span>
              <span>
                {event.name} (appears in {event.year})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

