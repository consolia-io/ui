# @consolia/ui

> A React component library styled with Stitches, designed specifically for Consolia's internal projects and design system.

[![npm version](https://img.shields.io/npm/v/@consolia/ui.svg)](https://www.npmjs.com/package/@consolia/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ⚠️ Important Notice

**This library is built specifically for Consolia's design system and internal use cases.** While it's open-sourced for transparency and potential inspiration, it's **not intended as a general-purpose component library** for public consumption. 

- ✅ **Use if**: You're working on Consolia projects or want to study the implementation
- ❌ **Consider alternatives if**: You need a general-purpose UI library for your own projects

For general-purpose React component libraries, consider [Chakra UI](https://chakra-ui.com/), [Mantine](https://mantine.dev/), [Ant Design](https://ant.design/), or [Material-UI](https://mui.com/) instead.

## Features

- 🎨 **Modern Design System** - Carefully crafted components with consistent theming
- 🏗️ **Built for Next.js** - Compatible with Next.js and React 19+
- 🎯 **TypeScript First** - Full type safety with comprehensive TypeScript definitions
- 📱 **Responsive** - Mobile-first design with flexible breakpoint system
- 🎭 **Theming** - Light/dark mode support with Stitches CSS-in-JS
- ⚡ **Performance** - Tree-shakeable with minimal runtime overhead
- 📖 **Well Documented** - Auto-generated API documentation from TypeScript interfaces

## Installation

```bash
# Using pnpm (recommended)
pnpm add @consolia/ui

# Using npm
npm install @consolia/ui

# Using yarn
yarn add @consolia/ui
```

### Peer Dependencies
Ensure you have the required peer dependencies:

```bash
pnpm add react react-dom next
```

## Quick Start

```tsx
import { Provider, Button, Text, Stack } from '@consolia/ui';

function App() {
  return (
    <Provider>
      <Stack direction="column" align="center" css={{ padding: '$large' }}>
        <Text as="h1">Welcome to Consolia UI</Text>
        <Button theme="solid" onClick={() => alert('Hello!')}>
          Get Started
        </Button>
      </Stack>
    </Provider>
  );
}
```

## Development

To work on components locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run linting and formatting
pnpm tidy

# Build the library
pnpm build

# Generate documentation
pnpm docs:only
```

## Project Structure

```tree
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── types.ts            # TypeScript interfaces (auto-documented)
├── stitches.config.ts  # Design system configuration
└── index.ts            # Main entry point

docs/                   # Auto-generated API documentation
playground/             # Component demos and examples
```



## Components

This library includes the following components with full TypeScript support and comprehensive documentation:

- **[Accordion](./docs/interfaces/IAccordion.md)** - Collapsible content sections with multiple expansion support
- **[Avatar](./docs/interfaces/IAvatar.md)** - User profile image with fallback text display
- **[Badge](./docs/interfaces/IBadge.md)** - Small status indicators and informational labels
- **[Box](./docs/interfaces/IBox.md)** - Versatile container with optional image, header, and footer
- **[Button](./docs/interfaces/IButton.md)** - Interactive element for user actions with multiple themes
- **[Calendar](./docs/interfaces/ICalendar.md)** - Date picker with range and single selection modes
- **[CalendarMonths](./docs/interfaces/ICalendarMonths.md)** - Month and year selection interface
- **[Divider](./docs/interfaces/IDivider.md)** - Visual separator line with customizable spacing
- **[Drawer](./docs/interfaces/IDrawer.md)** - Slide-out panel overlay for secondary content
- **[Field](./docs/interfaces/IField.md)** - Multi-line textarea input with validation and actions
- **[Form](./docs/interfaces/IForm.md)** - Form wrapper with validation and submission handling
- **[Icon](./docs/interfaces/IIcon.md)** - Consistent icon wrapper with theming support
- **[Image](./docs/interfaces/IImage.md)** - Enhanced Next.js Image with additional styling options
- **[Input](./docs/interfaces/IInput.md)** - Single-line form input with validation and actions
- **[Loading](./docs/interfaces/ILoading.md)** - Animated loading spinner with customizable appearance
- **[LoadingOverlay](./docs/interfaces/ILoadingOverlay.md)** - Full-screen loading overlay with message display
- **[Logo](./docs/interfaces/ILogo.md)** - Consolia brand logo in various formats and styles
- **[Menu](./docs/interfaces/IMenu.md)** - Dropdown menu with nested options and keyboard navigation
- **[Modal](./docs/interfaces/IModal.md)** - Centered overlay dialog for important interactions
- **[Nodes](./docs/interfaces/INodes.md)** - Hierarchical node tree visualization with connecting lines
- **[Popover](./docs/interfaces/IPopover.md)** - Floating content overlay triggered by user interaction
- **[Portal](./docs/interfaces/IPortal.md)** - Render content outside normal DOM hierarchy
- **[Provider](./docs/interfaces/IProvider.md)** - Theme and context provider for the entire UI system
- **[Select](./docs/interfaces/ISelect.md)** - Dropdown selection with filtering and positioning options
- **[SelectMulti](./docs/interfaces/ISelectMulti.md)** - Multi-selection dropdown with limits and batch operations
- **[Stack](./docs/interfaces/IStack.md)** - Responsive layout container with flexible spacing and alignment
- **[Table](./docs/interfaces/ITable.md)** - Data table with sorting, pagination, and nested rows
- **[Tabs](./docs/interfaces/ITabs.md)** - Tabbed interface for organizing content into panels
- **[Text](./docs/interfaces/IText.md)** - Versatile text element with multiple sizes, styles, and link support
- **[Upload](./docs/interfaces/IUpload.md)** - File upload with drag & drop, validation, and progress
- **[View](./docs/interfaces/IView.md)** - Main layout container with hero styling and responsive behavior

> 📖 **Full API Documentation**: Detailed TypeScript interfaces, props, and examples are available in the [`docs/interfaces/`](./docs/interfaces/) directory. All documentation is auto-generated from TSDoc comments in the source code.

## Theming

The library uses Stitches for styling with a comprehensive design system:

```tsx
import { Provider } from '@consolia/ui';

// Enable dark mode
<Provider dark>
  <YourApp />
</Provider>

// Custom CSS with theme tokens
<Button css={{ 
  backgroundColor: '$purple', 
  color: '$background',
  borderRadius: '$large' 
}}>
  Custom Button
</Button>
```

### Available Theme Tokens

- **Colors**: `$background`, `$text`, `$purple`, `$blue`, `$orange`, `$yellow`, `$border`, `$borderLight`, `$overlay`, `$surface`, `$surfaceHover`, `$surfaceLight`
- **Spacing**: `$none`, `$smallest`, `$smaller`, `$small`, `$medium`, `$large`, `$larger`, `$largest`, `$excess`
- **Radii**: `$small`, `$medium`, `$large`
- **Font Sizes**: `$small`, `$default`, `$h6`, `$h5`, `$h4`, `$h3`, `$h2`, `$h1`
- **Breakpoints**: `phone`, `phoneX`, `tablet`, `tabletX`, `laptop`, `laptopX`, `desktop`, `desktopX`, `wide`

### Available Utils

- **Responsive**: `phone()`, `phoneX()`, `tablet()`, `tabletX()`, `laptop()`, `laptopX()`, `desktop()`, `desktopX()`, `wide()`, `micro()`, `print()`, `retina()`
- **Visibility**: `hidden()`, `hiddenInline()`, `hiddenSpecial()`, `visible()`, `visibleInline()`, `visibleSpecial()`
- **Theme-aware**: `darkOnly()`, `lightOnly()`

```tsx
// Example usage of utils
<Button css={{
  phone: { fontSize: '$small' },      // Responsive
  hidden: 'tablet',                   // Hide on tablet
  darkOnly: { color: '$yellow' }  // Dark mode specific
}}>
  Responsive Button
</Button>
```





## Acknowledgments

This library is built on top of excellent open source projects:

- **[@stitches/react](https://stitches.dev/)** - CSS-in-JS library with near-zero runtime
- **[@phosphor-icons/react](https://phosphoricons.com/)** - Flexible icon family for interfaces
- **[react-hot-toast](https://react-hot-toast.com/)** - Smoking hot React notifications
- **[fast-sort](https://github.com/snovakovic/fast-sort)** - Blazing fast array sorting

## License

[MIT](./LICENSE.md) © [Consolia](https://github.com/consolia-io)

---

Built with love by [dolmios](https://github.com/dolmios) for [Consolia](https://github.com/consolia-io)
