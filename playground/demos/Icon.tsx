import { JSX } from "react";

import * as C from "../../src/index";

export default function IconDemo(): JSX.Element {
  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Basic Usage */}
      <C.Box header={
        <C.Text as="h4">Basic Usage</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon system="CircleIcon" />
          <C.Icon system="CheckCircleIcon" />
          <C.Icon system="WarningCircleIcon" />
          <C.Icon system="XCircleIcon" />
        </C.Stack>
      </C.Box>

      {/* Sizes */}
      <C.Box header={
        <C.Text as="h4">Sizes</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon forceSize={16} system="CheckCircleIcon" />
          <C.Icon forceSize={24} system="CheckCircleIcon" />
          <C.Icon forceSize={32} system="CheckCircleIcon" />
          <C.Icon forceSize={48} system="CheckCircleIcon" />
        </C.Stack>
      </C.Box>

      {/* Colors */}
      <C.Box header={
        <C.Text as="h4">Colors</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon forceColor="text" system="CheckCircleIcon" />
          <C.Icon forceColor="blue" system="CheckCircleIcon" />
          <C.Icon forceColor="purple" system="CheckCircleIcon" />
          <C.Icon forceColor="orange" system="CheckCircleIcon" />
        </C.Stack>
      </C.Box>

      {/* Inline Usage */}
      <C.Box header={
        <C.Text as="h4">Inline Usage</C.Text>
      }>
        <C.Stack>
          <C.Text>
            Text with <C.Icon inline="smaller" system="CheckCircleIcon" /> icon
          </C.Text>
          <C.Text>
            <C.Icon inline="small" system="ArrowRightIcon" /> Icon with margin
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* System Icons */}
      <C.Box header={
        <C.Text as="h4">System Icons</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon system="ArrowRightIcon" />
          <C.Icon system="InfoIcon" />
          <C.Icon system="MagnifyingGlassIcon" />
          <C.Icon system="ArrowClockwiseIcon" />
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={
        <C.Text as="h4">Combinations</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon 
            forceColor="blue" 
            forceSize={32} 
            system="CheckCircleIcon" 
          />
          <C.Icon 
            forceColor="orange" 
            forceSize={32} 
            system="WarningCircleIcon" 
          />
          <C.Icon 
            forceColor="red" 
            forceSize={32} 
            system="XCircleIcon" 
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 