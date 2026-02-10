"use client";

import * as React from "react";
import L, { Map } from "leaflet";
import "leaflet/dist/leaflet.css";

import IconLocation from "../assets/icon-location.svg";
import styles from "./map.module.css";

const locationIcon = L.icon({
  iconUrl: IconLocation.src,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

interface ClientMapProps {
  lat: number;
  long: number;
}

export default function ClientMap({ lat, long }: ClientMapProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const mapRef = React.useRef<Map | null>(null);

  React.useEffect(() => {
    if (mapRef.current) return;

    if (ref.current) {
      let map: Map | null = null;
      map = L.map(ref.current, {
        center: [lat, long],
        zoom: 16,
        zoomControl: false,
        layers: [
          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }),
        ],
      });
      mapRef.current = map;

      // Ajusta a visão para centralizar o marcador entre a base do painel e
      // a parte inferior da tela (por enquanto a referência é da tela mobile)
      map.panBy(L.point(0, -100));

      L.marker([lat, long], {
        zIndexOffset: 500,
        icon: locationIcon,
      }).addTo(map);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [ref]);

  React.useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo([lat, long]);

      L.marker([lat, long], {
        zIndexOffset: 500,
        icon: locationIcon,
      }).addTo(mapRef.current);
    }
  }, [lat, long]);

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.mapContainer} />
    </div>
  );
}
