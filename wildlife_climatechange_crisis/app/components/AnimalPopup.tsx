import Image from "next/image"

import { StaticImageData } from "next/image"

interface AnimalPopupProps {
  name: string
  emoji: string
  status: string
  climate_vulnerability: string
  fact: string
  image: StaticImageData
}

export function AnimalPopup({ name, emoji, status, climate_vulnerability, fact, image }: AnimalPopupProps) {
  return (
    <div className="flex flex-col items-start space-y-4 max-w-xs">
      <div className="w-full h-40 relative">
      <Image
  src={image} //used it from the public folder
  alt="Salmon"
  width={500} // i was adjusting it so it fits
  height={300}
  style={{ objectFit: "cover" }}
  className="rounded-lg"
/>

      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold mb-2">
          {name} {emoji}
        </h3>
        <p className="text-sm mb-1">
          <span className="font-semibold">Status:</span> {status}
        </p>
        <p className="text-sm mb-1">
          <span className="font-semibold">Climate Vulnerability:</span> {climate_vulnerability}
        </p>
        <p className="text-sm italic">{fact}</p>
      </div>
    </div>
  )
}

