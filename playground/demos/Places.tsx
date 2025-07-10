import { useState } from "react";

import { Places, Stack, Text, View } from "../../src";

export default function PlacesDemo() {
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState<any>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return (
      <View>
        <Text as="h2">Places Demo</Text>
        <Text>
          To use this demo, please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text as="h2">Places Demo</Text>
      
      <Stack css={{ maxWidth: "600px" }} gap="large">
        <div>
          <Text as="h3">Basic Places Search</Text>
          <Places
            apiKey={apiKey}
            name="basic-places"
            placeholder="Search for any place..."
            onPlaceSelect={(place) => {
              setSelectedPlace(place.description);
              setSelectedPlaceDetails(place);
            }}
          />
          {selectedPlace && (
            <Text css={{ backgroundColor: "$surface", borderRadius: "$medium", marginTop: "$small", padding: "$small" }}>
              Selected: {selectedPlace}
            </Text>
          )}
        </div>

        <div>
          <Text as="h3">Country-Restricted Search (US Only)</Text>
          <Places
            apiKey={apiKey}
            countries={["us"]}
            name="us-places"
            placeholder="Search places in the United States..."
            onPlaceSelect={(place) => {
              console.log("US Place selected:", place);
            }}
          />
        </div>

        <div>
          <Text as="h3">Address-Only Search</Text>
          <Places
            apiKey={apiKey}
            name="address-places"
            placeholder="Search for addresses..."
            types={["address"]}
            onPlaceSelect={(place) => {
              console.log("Address selected:", place);
            }}
          />
        </div>

        <div>
          <Text as="h3">Establishment Search</Text>
          <Places
            apiKey={apiKey}
            name="business-places"
            placeholder="Search for businesses and points of interest..."
            types={["establishment"]}
            onPlaceSelect={(place) => {
              console.log("Business selected:", place);
            }}
          />
        </div>

        <div>
          <Text as="h3">Custom Styling</Text>
          <Places
            apiKey={apiKey}
            css={{
              "& input": {
                borderColor: "$blue",
              },
            }}
            dropdownCSS={{
              borderColor: "$blue",
              boxShadow: "0 4px 20px rgba(0, 100, 255, 0.15)",
            }}
            name="styled-places"
            placeholder="Styled places search..."
            onPlaceSelect={(place) => {
              console.log("Styled place selected:", place);
            }}
          />
        </div>

        {selectedPlaceDetails && (
          <div>
            <Text as="h3">Selected Place Details</Text>
            <pre style={{ 
              backgroundColor: "var(--colors-surface)", 
              borderRadius: "var(--radii-medium)", 
              fontSize: "var(--fontSizes-small)",
              overflow: "auto",
              padding: "var(--space-medium)"
            }}>
              {JSON.stringify(selectedPlaceDetails, null, 2)}
            </pre>
          </div>
        )}
      </Stack>
    </View>
  );
} 