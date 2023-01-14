import React, { ReactElement } from "react";

import { Provider, View, Code, Table, Text, Button, Popover } from "../src/index";

export function App(): ReactElement {
  return (
    <Provider>
      <View bottom="largest" container inverted top="largest">
        <Button>Test</Button>
        <Popover trigger={<Button>Test Popover</Button>} type="click">
          <h1>t</h1>
        </Popover>
        <Text as="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Text as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>

        <Text as="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec
        </Text>
        <Code>
          Test Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest
          Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test
          Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test
          TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test
          TeTest Test Test TeTest Test Test TeTest Test Test TeTest Test Test Test Test Test Test
          Test Test Test Test Test Test
        </Code>
      </View>
      <View
        bottom="largest"
        container
        css={{
          darkThemeSpec: {
            paddingTop: "0",
          },
        }}
        top="largest">
        <Table bodyChildren={[["Body 1", "Body 2"]]} headChildren={["Head 1", "Head 2"]} sort />
      </View>
    </Provider>
  );
}
