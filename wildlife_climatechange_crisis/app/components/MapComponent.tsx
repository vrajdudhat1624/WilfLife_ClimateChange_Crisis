// components/MapComponent.tsx
"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AnimalPopup } from "./AnimalPopup";

const createIcon = (emoji: string) =>
  new Icon({
    iconUrl: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });

export default function MapComponent({ animals, climateEvents, year }: any) {
  return (
    <MapContainer center={[53, -126]} zoom={5} style={{ height: "100%", width: "100%" }} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />

      {/* Animal Markers */}
      {animals.map((animal: any) => (
        <Marker key={animal.id} position={[animal.lat, animal.lng]} icon={createIcon(animal.emoji)}>
          <Popup>
            <AnimalPopup {...animal} />
          </Popup>
        </Marker>
      ))}

      {/* Climate Event Markers */}
      {climateEvents
        .filter((event: any) => Number.parseInt(event.Year) <= year)
        .map((event: any, index: number) => (
          <Marker
            key={`${event["Event Name"]}-${index}`}
            position={[Number.parseFloat(event.Latitude), Number.parseFloat(event.Longitude)]}
            icon={createIcon(event["emoji"])}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">
                  {event["Event Name"]} {event["emoji"]}
                </h3>
                <p className="text-sm">Type: {event["Event Type"]}</p>
                <p className="text-sm">Year: {event.Year}</p>
                <p className="text-sm mt-2">{event.Impact}</p>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
