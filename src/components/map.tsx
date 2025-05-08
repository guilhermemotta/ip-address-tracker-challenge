"use client";

import * as React from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import IconLocation from "../assets/icon-location.svg";

interface AppMapProps {
  lat: number;
  long: number;
}

const locationIcon = L.icon({
  iconUrl: IconLocation.src,
});

export default function AppMap({ lat, long }: AppMapProps) {
  const mapContainer = React.useRef<HTMLDivElement>(null);
  const map = React.useRef<L.Map | null>(null);

  React.useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    map.current = L.map(mapContainer.current, {
      center: L.latLng(lat, long),
      zoom: 12,
      zoomControl: false,
      layers: [
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }),
      ],
    });
    L.marker([lat, long], {
      zIndexOffset: 500,
      icon: locationIcon,
    }).addTo(map.current);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        // height: "80vh",
        flex: 2,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        ref={mapContainer}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
    </div>
  );
}
