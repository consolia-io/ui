/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Maps, Stack, Text, View } from "../../src";

export default function MapsDemo() {
  // TEMPORARY: Hardcoded API key for testing - replace with env var once working
  const apiKey = "AIzaSyBi7_1oi9VWPY1PwaYIEa6uS34JKR_6G-U";
  
  // Debug: Check if API key is loaded
  console.log("Maps Demo - API Key loaded:", apiKey ? "✅ YES" : "❌ NO", apiKey?.slice(0, 10) + "...");

  if (!apiKey) {
    return (
      <View>
        <Text as="h2">Maps Demo</Text>
        <Text>
          To use this demo, please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.
        </Text>
        <Text accent>For demo purposes, the API key would be loaded from environment variables.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text as="h2">Maps Demo</Text>

      <Stack gap="large">
        <div>
          <Text as="h3">Loading State (No Center Provided)</Text>
          <Maps apiKey={apiKey} height="300px" />
        </div>

        <div>
          <Text as="h3">Default Map (NYC Coordinates)</Text>
          <Maps 
            apiKey={apiKey} 
            center={{ lat: 40.7128, lng: -74.0060 }}
          />
        </div>

        <div>
          <Text as="h3">Address: "London, UK"</Text>
          <Maps
            apiKey={apiKey}
            center="London, UK"
            height="400px"
            zoom={13}
          />
        </div>

        <div>
          <Text as="h3">Address: "Times Square, New York"</Text>
          <Maps
            apiKey={apiKey}
            center="Times Square, New York"
            height="350px"
            zoom={16}
          />
        </div>

        <div>
          <Text as="h3">Coordinates: San Francisco</Text>
          <Maps
            apiKey={apiKey}
            center={{ lat: 37.7749, lng: -122.4194 }}
            height="400px"
            mapType="satellite"
            zoom={12}
          />
        </div>

        <div>
          <Text as="h3">Address: "Eiffel Tower, Paris"</Text>
          <Maps
            apiKey={apiKey}
            center="Eiffel Tower, Paris"
            css={{ maxWidth: "500px" }}
            height="300px"
            zoom={15}
          />
        </div>
      </Stack>
    </View>
  );
} 