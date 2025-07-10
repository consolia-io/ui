import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, type JSX } from "react";

import { type IMaps } from "../../index";
import { MapsStyled } from "./styles";

export default function Maps({
  apiKey,
  center = { lat: 40.7128, lng: -74.006 }, // Default to NYC
  css,
  height = "400px",
  mapType = "roadmap",
  zoom = 12,
}: IMaps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    const initMap = async (): Promise<void> => {
      const loader = new Loader({
        apiKey,
        libraries: ["places", "maps"],
        version: "weekly",
      });

      const google = await loader.load();

      if (mapRef.current) {
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
          center,
          mapTypeId: mapType,
          zoom,
        });
      }
    };

    initMap();
  }, [apiKey, center, zoom, mapType]);

  return (
    <MapsStyled
      ref={mapRef}
      css={{
        height: typeof height === "number" ? `${height}px` : height,
        ...css,
      }}
    />
  );
}
