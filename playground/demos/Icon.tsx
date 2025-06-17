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
          <C.Icon system="CheckCircleIcon" forceSize={16} />
          <C.Icon system="CheckCircleIcon" forceSize={24} />
          <C.Icon system="CheckCircleIcon" forceSize={32} />
          <C.Icon system="CheckCircleIcon" forceSize={48} />
        </C.Stack>
      </C.Box>

      {/* Colors */}
      <C.Box header={
        <C.Text as="h4">Colors</C.Text>
      }>
        <C.Stack direction="row">
          <C.Icon system="CheckCircleIcon" forceColor="text" />
          <C.Icon system="CheckCircleIcon" forceColor="blue" />
          <C.Icon system="CheckCircleIcon" forceColor="purple" />
          <C.Icon system="CheckCircleIcon" forceColor="orange" />
        </C.Stack>
      </C.Box>

      {/* Inline Usage */}
      <C.Box header={
        <C.Text as="h4">Inline Usage</C.Text>
      }>
        <C.Stack>
          <C.Text>
            Text with <C.Icon system="CheckCircleIcon" inline="smaller" /> icon
          </C.Text>
          <C.Text>
            <C.Icon system="ArrowRightIcon" inline="small" /> Icon with margin
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
            system="CheckCircleIcon" 
            forceSize={32} 
            forceColor="blue" 
          />
          <C.Icon 
            system="WarningCircleIcon" 
            forceSize={32} 
            forceColor="orange" 
          />
          <C.Icon 
            system="XCircleIcon" 
            forceSize={32} 
            forceColor="red" 
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 