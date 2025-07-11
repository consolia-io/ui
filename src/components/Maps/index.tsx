import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState, type JSX } from "react";

import { Loading, type IMaps } from "../../index";
import { MapsStyled } from "./styles";

export default function Maps({
  apiKey,
  center,
  css,
  height = "400px",
  mapType = "roadmap",
  zoom = 12,
}: IMaps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);
  const [resolvedCenter, setResolvedCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Resolve center coordinates from address or use provided coords
  useEffect(() => {
    if (!apiKey || !center) {
      setResolvedCenter(null);
      setIsLoading(false);

      return;
    }

    const resolveCenter = async (): Promise<void> => {
      setIsLoading(true);

      // If center is already coordinates, use directly
      if (typeof center === "object" && center.lat && center.lng) {
        setResolvedCenter((prev) => {
          if (prev?.lat === center.lat && prev?.lng === center.lng) {
            return prev; // No change, prevent re-render
          }

          return center;
        });
        setIsLoading(false);

        return;
      }

      // If center is a string (address), geocode it
      if (typeof center === "string") {
        const loader = new Loader({
          apiKey,
          libraries: ["places", "maps", "geocoding"],
          version: "weekly",
        });

        const google = await loader.load();
        const geocoder = new google.maps.Geocoder();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        geocoder.geocode({ address: center }, (results: any, status: string) => {
          if (status === "OK" && results?.[0]?.geometry?.location) {
            const { location } = results[0].geometry;
            const newCenter = {
              lat: location.lat(),
              lng: location.lng(),
            };

            setResolvedCenter((prev) => {
              if (prev?.lat === newCenter.lat && prev?.lng === newCenter.lng) {
                return prev; // No change, prevent re-render
              }

              return newCenter;
            });
          } else {
            // Keep resolved center as null if geocoding fails
            setResolvedCenter(null);
          }
          setIsLoading(false);
        });
      }
    };

    resolveCenter();
  }, [apiKey, center]);

  // Initialize map once we have resolved coordinates
  useEffect(() => {
    if (!apiKey || !mapRef.current || !resolvedCenter) return;

    const initMap = async (): Promise<void> => {
      const loader = new Loader({
        apiKey,
        libraries: ["places", "maps", "geocoding"],
        version: "weekly",
      });

      const google = await loader.load();

      if (mapRef.current) {
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
          center: resolvedCenter,
          mapTypeId: mapType,
          zoom,
        });
      }
    };

    initMap();
  }, [apiKey, resolvedCenter, zoom, mapType]);

  // Show loading state when no center provided or while geocoding
  if (!center || isLoading || !resolvedCenter) {
    return (
      <MapsStyled
        css={{
          alignItems: "center",
          display: "flex",
          height: typeof height === "number" ? `${height}px` : height,
          justifyContent: "center",
          ...css,
        }}>
        <Loading />
      </MapsStyled>
    );
  }

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
