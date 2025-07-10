/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Maps, Stack, Text, View } from "../../src";

export default function MapsDemo() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return (
      <View>
        <Text as="h2">Maps Demo</Text>
        <Text>
          To use this demo, please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text as="h2">Maps Demo</Text>

      <Stack gap="large">
        <div>
          <Text as="h3">Default Map (NYC)</Text>
          <Maps apiKey={apiKey} />
        </div>

        <div>
          <Text as="h3">Custom Height</Text>
          <Maps apiKey={apiKey} height="300px" />
        </div>

        <div>
          <Text as="h3">London, UK</Text>
          <Maps
            apiKey={apiKey}
            center={{ lat: 51.5074, lng: -0.1278 }}
            height="500px"
            zoom={13}
          />
        </div>

        <div>
          <Text as="h3">Satellite View - San Francisco</Text>
          <Maps
            apiKey={apiKey}
            center={{ lat: 37.7749, lng: -122.4194 }}
            height="400px"
            mapType="satellite"
            zoom={12}
          />
        </div>

        <div>
          <Text as="h3">Small Map - Tokyo</Text>
          <Maps
            apiKey={apiKey}
            center={{ lat: 35.6762, lng: 139.6503 }}
            css={{ maxWidth: "500px" }}
            height="250px"
            zoom={10}
          />
        </div>
      </Stack>
    </View>
  );
} 