import { type CSSProperties, type CSS } from "@stitches/react";
import { type ImageProps } from "next/image";
import {
  ReactNode,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  MouseEventHandler,
  RefObject,
  type JSX,
} from "react";

import { TextSizes } from "../components/Text/styles";
import { systemIcons } from "../icons";
import { spacings, theme } from "../stitches.config";

/**
 * Avatar component props
 *
 * @example
 * ```tsx
 * <Avatar fallback="JD" src="/avatar.jpg" width={48} />
 * ```
 */
export interface IAvatar {
  /** Alternative text for the avatar image */
  alt?: string;
  /** Whether to show colored background for fallback */
  colors?: boolean;
  /** Custom CSS styles */
  css?: CSS;
  /** Fallback text to display when image is not available */
  fallback: string;
  /** Source URL for the avatar image */
  src?: string;
  /** Width of the avatar in pixels */
  width?: number;
}

/**
 * Badge component props - displays small status or informational labels
 *
 * @example
 * ```tsx
 * <Badge theme="blue" icon={<CheckIcon />}>
 *   Active
 * </Badge>
 * ```
 */
export interface IBadge {
  /** Whether the badge should take full width */
  block?: boolean;
  /** Content to display inside the badge */
  children?: ReactNode;
  /** Whether the badge can be closed/dismissed */
  closable?: boolean;
  /** Text or number to display in the badge */
  copy?: string | number | undefined;
  /** Custom CSS styles */
  css?: CSS;
  /** Icon to display alongside the badge content */
  icon?: ReactNode;
  /** Position of the icon relative to the content */
  iconPosition?: "left" | "right";
  /** Inline spacing around the badge */
  inline?: keyof typeof spacings | "auto";
  /** Whether the badge should appear as a clickable link */
  link?: boolean;
  /** Whether to show a loading state */
  loading?: boolean;
  /** Click handler for interactive badges */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /** Whether to render a smaller version of the badge */
  small?: boolean;
  /** Visual theme/color scheme for the badge */
  theme?: "default" | "solid" | "orange" | "purple" | "yellow" | "blue";
  /** Badge display variant - border adds left border, theme fills with color */
  variant?: "border" | "theme";
}

/**
 * Box component props - versatile container with optional image, header, and footer
 *
 * @example
 * ```tsx
 * <Box
 *   theme="blue"
 *   header={<Text as="h3">Card Title</Text>}
 *   image="/hero.jpg"
 *   expandable
 *   onClick={() => console.log('Box clicked')}
 * >
 *   Card content goes here
 * </Box>
 * ```
 */
export interface IBox {
  /** Content to display inside the box */
  children: ReactNode;
  /** Whether the box can be closed/dismissed */
  closable?: boolean;
  /** Custom CSS styles */
  css?: CSS;
  /** Call-to-action text for the box */
  cta?: string;
  /** Whether the box can be expanded/collapsed */
  expandable?: boolean;
  /** Height when expanded in pixels */
  expandableHeight?: number;
  /** Footer content to display at the bottom */
  footer?: ReactNode;
  /** Header content to display at the top */
  header?: ReactNode;
  /** Image URL to display in the box */
  image?: string;
  /** Alt text for the image */
  imageAlt?: ImageProps["alt"];
  /** Call-to-action text for the image */
  imageCTA?: string;
  /** How the image should fit within its container */
  imageFit?: CSSProperties["objectFit"];
  /** Height of the image */
  imageHeight?: string;
  /** Position of the image within its container */
  imagePosition?: CSSProperties["objectPosition"];
  /** Responsive image sizes */
  imageSizes?: ImageProps["sizes"];
  /** Target for image link */
  imageTarget?: "_blank" | "_self";
  /** Whether to show a loading state */
  loading?: boolean;
  /** Whether to render with minimal styling */
  minimal?: boolean;
  /** Click handler for the box */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /** Whether to render a smaller version */
  small?: boolean;
  /** Visual theme/color scheme for the box */
  theme?:
    | "default"
    | "fill"
    | "orange"
    | "purple"
    | "yellow"
    | "blue"
    | "minimal"
    | "solid"
    | "gradient";
  /** Add colored left border */
  border?: "default" | "orange" | "purple" | "yellow" | "blue" | "solid";
}

/**
 * Button component props - interactive element for user actions
 *
 * @example
 * ```tsx
 * <Button theme="solid" icon={<PlusIcon />} loading={isSubmitting}>
 *   Add Item
 * </Button>
 * ```
 */
export interface IButton extends ComponentPropsWithoutRef<"button"> {
  /** Whether the button should take full width */
  block?: boolean;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether the button links to an external URL */
  external?: boolean;
  /** Icon to display alongside the button text */
  icon?: ReactNode;
  /** Position of the icon relative to the text */
  iconPosition?: "left" | "right";
  /** Inline spacing around the button */
  inline?: keyof typeof spacings | "auto";
  /** Whether to show a loading state with spinner */
  loading?: boolean;
  /** Whether to render a smaller version of the button */
  small?: boolean;
  /** Visual theme/style variant for the button */
  theme?: "default" | "solid" | "minimal";
}

/**
 * Calendar component props - date picker with range and single selection modes
 *
 * @example
 * ```tsx
 * <Calendar
 *   mode="range"
 *   minDate="2024-01-01"
 *   maxDate="2024-12-31"
 *   onSelection={({ startDate, endDate }) => console.log(startDate, endDate)}
 * />
 * ```
 */
export interface ICalendar {
  /** Array of date strings that should be disabled/blocked */
  blockedDates?: string[];
  /** Description text to display below the calendar */
  description?: string;
  /** End date for range selection (ISO string) */
  endDate?: string;
  /** Maximum selectable date (ISO string) */
  maxDate?: string;
  /** Maximum number of days that can be selected in range mode */
  maxLength?: number;
  /** Minimum selectable date (ISO string) */
  minDate?: string;
  /** Minimum number of days that must be selected in range mode */
  minLength?: number;
  /** Calendar selection mode */
  mode?: "range" | "single";
  /** Callback when dates are selected */
  onSelection: (dates: { endDate: string; startDate: string }) => void;
  /** Callback when the calendar view changes */
  onViewChange?: (dates: { endDate: string; startDate: string }) => void;
  /** Start date for range selection (ISO string) */
  startDate?: string;
  /** Currently viewed date (ISO string) */
  viewDate?: string;
}

/**
 * CalendarMonths component props - month/year picker interface
 *
 * @example
 * ```tsx
 * <CalendarMonths
 *   selectedDate="2024-06-01"
 *   onSelection={(date) => console.log('Selected:', date)}
 *   minDate="2020-01-01"
 *   maxDate="2030-12-31"
 * />
 * ```
 */
export interface ICalendarMonths {
  /** Maximum selectable date (ISO string) */
  maxDate?: string;
  /** Minimum selectable date (ISO string) */
  minDate?: string;
  /** Callback when a month/year is selected */
  onSelection: (date: string) => void;
  /** Currently selected date (ISO string) */
  selectedDate?: string;
  /** Currently viewed date for navigation (ISO string) */
  viewDate?: string;
}

/**
 * Drawer component props - slide-out panel that overlays content
 *
 * @example
 * ```tsx
 * <Drawer
 *   title="Settings"
 *   trigger={<Button>Open Drawer</Button>}
 *   small
 * >
 *   <Text>Drawer content here</Text>
 * </Drawer>
 * ```
 */
export interface IDrawer {
  /** Content to display inside the drawer */
  children: ReactNode;
  /** Function to close the drawer programmatically */
  close?: () => void;
  /** Custom CSS styles for the drawer */
  css?: CSS;
  /** Whether the drawer trigger is disabled */
  disabled?: boolean;
  /** Force a specific height for the drawer in pixels */
  forceHeight?: number;
  /** Whether to render the drawer in a portal */
  portal?: boolean;
  /** Whether to render a smaller version of the drawer */
  small?: boolean;
  /** Title text displayed in the drawer header */
  title: string;
  /** Element that triggers the drawer to open */
  trigger?: ReactNode;
  /** Custom CSS styles for the trigger element */
  triggerCSS?: CSS;
  /** Custom CSS styles for the drawer wrapper */
  wrapperCSS?: CSS;
}

/**
 * Modal component props - centered overlay dialog
 *
 * @example
 * ```tsx
 * <Modal
 *   title="Confirm Action"
 *   trigger={<Button>Open Modal</Button>}
 *   small
 * >
 *   <Text>Are you sure you want to continue?</Text>
 * </Modal>
 * ```
 */
export interface IModal {
  /** Content to display inside the modal */
  children: ReactNode;
  /** Function to close the modal programmatically */
  close?: () => void;
  /** Custom CSS styles for the modal */
  css?: CSS;
  /** Whether the modal trigger is disabled */
  disabled?: boolean;
  /** Force a specific height for the modal in pixels */
  forceHeight?: number;
  /** Whether to render the modal in a portal */
  portal?: boolean;
  /** Whether to render a smaller version of the modal */
  small?: boolean;
  /** Title text displayed in the modal header */
  title: string;
  /** Element that triggers the modal to open */
  trigger?: ReactNode;
  /** Custom CSS styles for the trigger element */
  triggerCSS?: CSS;
  /** Custom CSS styles for the modal wrapper */
  wrapperCSS?: CSS;
}

/**
 * Divider component props - visual separator line
 *
 * @example
 * ```tsx
 * <Divider top="large" bottom="medium" />
 * ```
 */
export interface IDivider {
  /** Bottom margin/spacing */
  bottom?: keyof typeof spacings;
  /** Custom CSS styles */
  css?: CSS;
  /** Top margin/spacing */
  top?: keyof typeof spacings;
}

/**
 * Field component props - multi-line textarea input with validation
 *
 * @example
 * ```tsx
 * <Field
 *   name="description"
 *   placeholder="Enter description..."
 *   rows={4}
 *   error={hasError}
 *   errorMessage="Description is required"
 *   submitFunction={handleSubmit}
 * />
 * ```
 */
export interface IField extends ComponentPropsWithRef<"textarea"> {
  /** Whether to show a copy button for the field value */
  copy?: boolean;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether the field is in an error state */
  error?: boolean;
  /** Error message to display below the field */
  errorMessage?: string;
  /** HTML id attribute for the field */
  id?: string;
  /** Whether to show a loading state */
  loading?: boolean;
  /** Name attribute for the field (required) */
  name: string;
  /** Whether to show a reset button */
  reset?: boolean;
  /** Function to call when reset button is clicked */
  resetFunction?: () => void;
  /** Text for the submit button */
  submit?: string;
  /** Function to call when submit action is triggered */
  submitFunction?: (value: string) => void | Promise<void> | unknown;
  /** Function to validate field value before submit */
  submitValid?: (value: string) => boolean;
  /** Whether the field is in a success state */
  success?: boolean;
  /** Success message to display below the field */
  successMessage?: string;
  /** Whether the field is in a warning state */
  warning?: boolean;
  /** Warning message to display below the field */
  warningMessage?: string;
  /** Width of the field */
  width?: number | string;
}

/**
 * Form component props - form wrapper with validation and submission handling
 *
 * @example
 * ```tsx
 * <Form
 *   name="userForm"
 *   submitFunction={handleFormSubmit}
 *   submitValid={isFormValid}
 *   loading={isSubmitting}
 * >
 *   <Input name="email" type="email" />
 *   <Button type="submit">Submit</Button>
 * </Form>
 * ```
 */
export interface IForm extends ComponentPropsWithRef<"form"> {
  /** Form content and input elements */
  children: ReactNode;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether the form is disabled */
  disabled?: boolean;
  /** HTML id attribute for the form */
  id?: string;
  /** Whether to listen for form validation events */
  listen?: boolean;
  /** Whether the form is in a loading/submitting state */
  loading?: boolean;
  /** Name attribute for the form (required) */
  name: string;
  /** Text for the submit button */
  submit?: string;
  /** Function to call when form is submitted */
  submitFunction: () => void | Promise<void> | unknown;
  /** Whether the form is valid and can be submitted */
  submitValid?: boolean;
}

/**
 * Image component props - enhanced Next.js Image with additional styling options
 *
 * @example
 * ```tsx
 * <Image
 *   src="/hero.jpg"
 *   alt="Hero image"
 *   fill
 *   fillFit="cover"
 *   borderRadius="medium"
 * />
 * ```
 */
export interface IImage extends ImageProps {
  /** Border radius from theme values */
  borderRadius?: keyof typeof theme.radii;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether the image should fill its container */
  fill?: boolean;
  /** How the image should fit when using fill */
  fillFit?: CSSProperties["objectFit"];
  /** Height when using fill mode */
  fillHeight?: string | number;
  /** Position of the image when using fill */
  fillPosition?: CSSProperties["objectPosition"];
}

/**
 * Input component props - form input field with validation and actions
 *
 * @example
 * ```tsx
 * <Input
 *   name="email"
 *   type="email"
 *   placeholder="Enter your email"
 *   error={hasError}
 *   errorMessage="Please enter a valid email"
 *   submitFunction={handleSubmit}
 * />
 * ```
 */
export interface IInput extends ComponentPropsWithRef<"input"> {
  /** Whether to show a copy button for the input value */
  copy?: boolean;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether the input is in an error state */
  error?: boolean;
  /** Error message to display below the input */
  errorMessage?: string;
  /** HTML id attribute for the input */
  id?: string;
  /** Whether to listen for form validation events */
  listen?: boolean;
  /** Whether to show a loading state */
  loading?: boolean;
  /** Ref object to access the input element directly */
  mustRef?: RefObject<HTMLInputElement | null>;
  /** Name attribute for the input (required) */
  name: string;
  /** Whether to show a reset button */
  reset?: boolean;
  /** Function to call when reset button is clicked */
  resetFunction?: () => void;
  /** Whether to show/hide toggle for password inputs */
  reveal?: boolean;
  /** Text for the submit button */
  submit?: string;
  /** Function to call when submit action is triggered */
  submitFunction?: (value: string) => void | Promise<void> | unknown;
  /** Function to validate input value before submit */
  submitValid?: (value: string) => boolean;
  /** Whether the input is in a success state */
  success?: boolean;
  /** Success message to display below the input */
  successMessage?: string;
  /** Whether the input is in a warning state */
  warning?: boolean;
  /** Warning message to display below the input */
  warningMessage?: string;
  /** Width of the input field */
  width?: number | string;
}

/**
 * Places component props - Google Places autocomplete input with dropdown
 *
 * @example
 * ```tsx
 * <Places
 *   name="location"
 *   placeholder="Search for places..."
 *   onPlaceSelect={(place) => console.log('Selected place:', place)}
 *   apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
 * />
 * ```
 */
export interface IPlaces
  extends Omit<IInput, "submitFunction" | "submit" | "reveal" | "copy" | "reset"> {
  /** Google Maps API key for Places API */
  apiKey: string;
  /** Callback when a place is selected from the dropdown */
  onPlaceSelect?: (place: {
    description: string;
    place_id: string;
    structured_formatting?: {
      main_text: string;
      secondary_text: string;
    };
    types: string[];
  }) => void;
  /** Country restrictions (ISO 3166-1 Alpha-2 country codes) */
  countries?: string[];
  /** Types of places to search for */
  types?: string[];
}

/**
 * Maps component props - simple Google Maps display
 *
 * @example
 * ```tsx
 * <Maps
 *   apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
 *   center={{ lat: 40.7128, lng: -74.0060 }}
 *   height="400px"
 *   zoom={12}
 * />
 * // Or with address
 * <Maps
 *   apiKey={apiKey}
 *   center="New York, NY"
 *   height="400px"
 * />
 * // Shows loading when no center provided
 * <Maps apiKey={apiKey} height="400px" />
 * ```
 */
export interface IMaps {
  /** Google Maps API key for Maps API */
  apiKey: string;
  /** Height of the map */
  height?: string | number;
  /** Custom CSS styles */
  css?: CSS;
  /** Map center - coordinates object or address string. Shows loading if not provided. */
  center?: { lat: number; lng: number } | string;
  /** Map zoom level */
  zoom?: number;
  /** Map type */
  mapType?: "roadmap" | "satellite" | "hybrid" | "terrain";
}

/**
 * Loading component props - animated loading spinner
 *
 * @example
 * ```tsx
 * <Loading theme="colored" stroke="blue" />
 * ```
 */
export interface ILoading {
  /** Custom CSS styles */
  css?: CSS;
  /** Color of the loading spinner stroke */
  stroke?: string;
  /** Visual theme for the loading spinner */
  theme?: "default" | "colored";
}

/**
 * LoadingOverlay component props - full-screen loading overlay with message
 *
 * @example
 * ```tsx
 * <LoadingOverlay title="Saving changes..." theme="colored" />
 * ```
 */
export interface ILoadingOverlay extends ILoading {
  /** Title/message to display with the loading spinner */
  title: string;
}

/**
 * Logo component props - displays the Consolia logo in various formats
 *
 * @example
 * ```tsx
 * <Logo type="full" color="blue" width={120} hover />
 * ```
 */
export interface ILogo {
  /** Color from theme palette */
  theme?: "default" | "light" | "dark" | "orange" | "purple" | "yellow" | "blue";
  /** Custom CSS styles */
  css?: CSS;
  /** Whether to show hover effects */
  hover?: boolean;
  /** Whether to show outline version */
  outline?: boolean;
  /** Logo variant to display */
  type?: "icon" | "full" | "text";
  /** Width of the logo in pixels */
  width?: number;
}

/**
 * Menu component props - dropdown menu with nested options
 *
 * @example
 * ```tsx
 * <Menu
 *   trigger={<Button>Menu</Button>}
 *   options={[
 *     { label: "Edit", value: "edit", icon: <EditIcon /> },
 *     { label: "Delete", value: "delete", icon: <DeleteIcon /> }
 *   ]}
 *   onSelection={(value, label) => console.log(value, label)}
 * />
 * ```
 */
export interface IMenu {
  /** Additional content to render in the menu */
  children?: ReactNode;
  /** Custom CSS styles */
  css?: CSS;
  /** Initially selected option value */
  initial?: string;
  /** Callback when menu option is selected */
  onSelection?: (value: string, label: string) => void;
  /** Array of menu options with optional sub-menus */
  options: Array<{
    icon?: ReactNode;
    label: string;
    sub?: Array<{
      icon?: ReactNode;
      label: string;
      value: string;
    }>;
    value: string;
  }>;
  /** Element that triggers the menu */
  trigger: ReactNode;
}

/**
 * Nodes component props - hierarchical node tree visualization
 *
 * @example
 * ```tsx
 * <Nodes
 *   parent={<Text>Root Node</Text>}
 *   nodes={[
 *     { children: <Text>Child 1</Text>, color: "blue" },
 *     { children: <Text>Child 2</Text>, color: "purple" }
 *   ]}
 *   height={300}
 * />
 * ```
 */
export interface INodes {
  /** Array of child nodes to display */
  nodes: Array<{
    children: ReactNode;
    color?: "purple" | "orange" | "yellow" | "blue";
  }>;
  /** Parent/root node element */
  parent: ReactNode;
  /** Height of the nodes container in pixels */
  height?: number;
}

/**
 * Popover component props - floating content overlay
 *
 * @example
 * ```tsx
 * <Popover
 *   trigger={<Button>Show Info</Button>}
 *   minimal
 * >
 *   <Text>Additional information here</Text>
 * </Popover>
 * ```
 */
export interface IPopover {
  /** Content to display in the popover */
  children: ReactNode;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether the popover trigger is disabled */
  disabled?: boolean;
  /** Whether to use minimal styling */
  minimal?: boolean;
  /** Whether to render a smaller popover */
  small?: boolean;
  /** Element that triggers the popover */
  trigger: ReactNode;
  /** Custom CSS styles for the trigger */
  triggerCSS?: CSS;
  /** Custom CSS styles for the popover wrapper */
  wrapperCSS?: CSS;
}

/**
 * Provider component props - theme and context provider for the UI library
 *
 * @example
 * ```tsx
 * <Provider dark={isDarkMode}>
 *   <App />
 * </Provider>
 * ```
 */
export interface IProvider {
  /** Application content */
  children: ReactNode;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether to use dark theme */
  dark?: boolean;
}

/**
 * Select component props - dropdown selection with filtering and positioning options
 *
 * @example
 * ```tsx
 * <Select
 *   trigger={<Button>Select Option</Button>}
 *   options={[
 *     { label: "Option 1", value: "opt1", icon: <Icon1 /> },
 *     { label: "Option 2", value: "opt2", icon: <Icon2 /> }
 *   ]}
 *   onSelection={(value, label) => console.log(value, label)}
 *   filter
 *   horizontal="left"
 * />
 * ```
 */
export interface ISelect {
  /** Custom CSS styles */
  css?: CSS;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether to show a filter/search input */
  filter?: boolean;
  /** Height of the dropdown */
  height?: number | string;
  /** Horizontal alignment of the dropdown */
  horizontal?: "left" | "right" | "center";
  /** Initially selected option value */
  initial?: string;
  /** Label for the select component */
  label?: string;
  /** Whether this is the last select in a group (affects styling) */
  last?: boolean;
  /** Whether to show a loading state */
  loading?: boolean;
  /** Callback when an option is selected */
  onSelection?: (value: string, label: string) => void;
  /** Array of selectable options */
  options: Array<{
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    label: string;
    value: string;
  }>;
  /** Element that triggers the dropdown */
  trigger: ReactNode;
  /** Custom CSS styles for the trigger */
  triggerCSS?: CSS;
  /** Vertical positioning of the dropdown */
  vertical?: "top" | "bottom";
  /** Width of the dropdown */
  width?: number | string;
  /** Custom CSS styles for the dropdown wrapper */
  wrapperCSS?: CSS;
}

/**
 * SelectMulti component props - multi-selection dropdown with limit and reset options
 *
 * @example
 * ```tsx
 * <SelectMulti
 *   trigger={<Button>Select Multiple</Button>}
 *   options={[
 *     { label: "Tag 1", value: "tag1" },
 *     { label: "Tag 2", value: "tag2" },
 *     { label: "Tag 3", value: "tag3" }
 *   ]}
 *   onSelection={(selections) => console.log(selections)}
 *   limit={3}
 *   reset
 * />
 * ```
 */
export interface ISelectMulti extends Omit<ISelect, "onSelection" | "initial" | "last"> {
  /** Initially selected options */
  initial?: Array<{ label: string; value: string }>;
  /** Maximum number of selections allowed */
  limit?: number;
  /** Callback when selections change */
  onSelection?: (value: Array<{ label: string; value: string }>) => void;
  /** Whether to show a reset/clear all button */
  reset?: boolean;
}

/**
 * Stack component props - responsive layout container with flexible spacing and alignment
 *
 * @example
 * ```tsx
 * <Stack
 *   direction="column"
 *   align="center"
 *   width={80}
 *   widthPhone={100}
 *   top="large"
 *   bottom="medium"
 *   onClick={() => console.log('Stack clicked')}
 * >
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 * </Stack>
 * ```
 */
export interface IStack {
  /** Text alignment within the stack */
  align?: CSSProperties["textAlign"];
  /** HTML element type to render as */
  as?: keyof JSX.IntrinsicElements;
  /** Bottom margin/spacing */
  bottom?: keyof typeof spacings;
  /** Content to display in the stack */
  children?: ReactNode;
  /** CSS class name */
  className?: string;
  /** Custom CSS styles */
  css?: CSS;
  /** Direction of the flex layout */
  direction?: "row" | "column";
  /** Whether to remove text margins and align items */
  inline?: boolean;
  /** Whether to use minimal styling */
  minimal?: boolean;
  /** Click handler for the stack */
  onClick?: () => void;
  /** Top margin/spacing */
  top?: keyof typeof spacings;
  /** Default width percentage */
  width?: number;
  /** Responsive width percentages */
  widthResponsive?: {
    desktopX?: number;
    laptopX?: number;
    phone?: number;
    tabletX?: number;
    wide?: number;
  };
  /** Main axis alignment */
  justify?: CSSProperties["justifyContent"];
  /** Gap between items */
  gap?: keyof typeof spacings;
  /** Whether to wrap items */
  wrap?: boolean;
  /** HTML id attribute */
  id?: string;
  /** Whether to use dark theme */
  inverted?: boolean;
  /** Cross-axis alignment */
  alignItems?: CSSProperties["alignItems"];
  /** Content alignment */
  alignContent?: CSSProperties["alignContent"];
  /** Flex basis */
  basis?: CSSProperties["flexBasis"];
  /** Flex grow */
  grow?: CSSProperties["flexGrow"];
  /** Flex shrink */
  shrink?: CSSProperties["flexShrink"];
  /** Flex order */
  order?: CSSProperties["order"];
}

/**
 * Table component props - data table with sorting, pagination, and nested rows
 *
 * @example
 * ```tsx
 * <Table
 *   columns={[
 *     { key: "name", label: "Name", sortable: true },
 *     { key: "email", label: "Email", align: "left" }
 *   ]}
 *   rows={[
 *     { id: "1", cells: { name: "John", email: "john@example.com" } },
 *     { id: "2", cells: { name: "Jane", email: "jane@example.com" } }
 *   ]}
 *   pagination
 * />
 * ```
 */
export interface ITable {
  /** Column definitions with keys, labels, and options */
  columns: Array<{
    key: string;
    label: string;
    align?: "left" | "center" | "right";
    width?: string;
    sortable?: boolean;
  }>;
  /** Row data with cells mapped to column keys */
  rows: Array<{
    id: string;
    cells: Record<string, ReactNode>;
    subRows?: Array<{
      id: string;
      cells: Record<string, ReactNode>;
    }>;
  }>;
  /** Custom CSS styles */
  css?: CSS;
  /** Error message to display */
  error?: string;
  /** Whether the table is in a loading state */
  loading?: boolean;
  /** Whether to show pagination controls */
  pagination?: boolean;
  /** Whether to enable keyboard navigation */
  kbd?: boolean;
}

/**
 * Text component props - versatile text element with styling and link options
 *
 * @example
 * ```tsx
 * <Text as="h2" highlight="blue" href="/link" target="_blank">
 *   This is a highlighted heading that links somewhere
 * </Text>
 * ```
 */
export interface IText extends ComponentPropsWithRef<"p"> {
  /** Whether to use accent styling */
  accent?: boolean;
  /** HTML element type and text size */
  as?: keyof typeof TextSizes;
  /** Whether to use balanced text wrapping */
  balanced?: boolean;
  /** Bottom margin/spacing */
  bottom?: keyof typeof spacings;
  /** Text content */
  children: ReactNode;
  /** Custom CSS styles */
  css?: CSS;
  /** Highlight color theme */
  highlight?: "blue" | "orange" | "purple" | "yellow" | "default";
  /** URL for link functionality */
  href?: string;
  /** Inline spacing around the text */
  inline?: keyof typeof spacings | "auto";
  /** Link styling variant */
  link?: "minimal" | "default";
  /** Whether to use muted styling with default opacity */
  muted?: boolean;
  /** Override the default size from 'as' prop */
  override?: keyof typeof TextSizes;
  /** Relationship attribute for links */
  rel?: string;
  /** Link target */
  target?: "_blank" | "_self";
  /** Top margin/spacing */
  top?: keyof typeof spacings;
  /** Number of lines to truncate text to (1-4) */
  truncate?: 1 | 2 | 3 | 4;
}

/**
 * Upload component props - file upload with drag & drop, validation, and multiple file support
 *
 * @example
 * ```tsx
 * <Upload
 *   multiple={true}
 *   accept="image/*"
 *   maxFiles={5}
 *   maxSize={5000000}
 *   onUpload={(files) => console.log('Uploaded:', files)}
 *   error={hasError}
 *   errorMessage="Please select valid images"
 * />
 * ```
 */
export interface IUpload<T extends boolean> {
  /** File type restrictions (MIME types) */
  accept?: string;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether the upload is disabled */
  disabled?: boolean;
  /** Whether the upload is in an error state */
  error?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Whether to show a loading state */
  loading?: boolean;
  /** Maximum number of files (for multiple uploads) */
  maxFiles?: number;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Whether to allow multiple file selection */
  multiple?: T;
  /** Callback when files are uploaded */
  onUpload: T extends true ? (files: FileList) => void : (file: File) => void;
  /** Whether the upload is in a success state */
  success?: boolean;
  /** Success message to display */
  successMessage?: string;
  /** Width of the upload component */
  width?: number | string;
}

/**
 * Toast notification controller props - configuration for the ToastController component
 *
 * @example
 * ```tsx
 * <ToastController
 *   position="top-right"
 *   toastOptions={{
 *     duration: 4000,
 *     style: { background: "#333", color: "#fff" }
 *   }}
 * />
 * ```
 */
export interface IToast {
  /** Position where toasts appear on screen */
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  /** Configuration options for individual toasts */
  toastOptions?: {
    /** Duration in milliseconds before auto-dismiss */
    duration?: number;
    /** Custom styling for toast notifications */
    style?: CSSProperties;
    /** Custom class name for toasts */
    className?: string;
  };
  /** Additional props passed to the underlying Toaster component */
  [key: string]: unknown;
}

/**
 * View component props - main layout container with optional hero styling
 *
 * @example
 * ```tsx
 * <View hero container top="large" bottom="large">
 *   <Text as="h1">Welcome to our app</Text>
 * </View>
 * ```
 */
export interface IView {
  /** Whether this is an app-level view */
  app?: boolean;
  /** HTML element type to render as */
  as?: keyof JSX.IntrinsicElements;
  /** Bottom margin/spacing */
  bottom?: keyof typeof spacings;
  /** Content to display in the view */
  children: ReactNode;
  /** Whether to use container width constraints */
  container?: boolean;
  /** Custom CSS styles */
  css?: CSS;
  /** Whether to use hero section styling */
  hero?: boolean;
  /** HTML id attribute */
  id?: string;
  /** Whether to invert colors */
  inverted?: boolean;
  /** Whether to hide when printing */
  noPrint?: boolean;
  /** Top margin/spacing */
  top?: keyof typeof spacings;
}

/**
 * Portal component props - renders children in a portal (outside normal DOM tree)
 *
 * @example
 * ```tsx
 * <Portal disabled={false}>
 *   <Modal>Content rendered in portal</Modal>
 * </Portal>
 * ```
 */
export interface IPortal {
  /** Content to render in the portal */
  children?: ReactNode;
  /** Whether to disable portal rendering */
  disabled?: boolean;
}

/**
 * Icon component props - wrapper for Phosphor icons with consistent styling
 *
 * @example
 * ```tsx
 * // Using system icons (recommended for internal use)
 * <Icon system="ArrowRightIcon" forceColor="blue" forceSize={24} inline="small" />
 *
 * // Using any Phosphor icon (for client use)
 * <Icon phosphor="AnyPhosphorIcon" forceColor="blue" forceSize={24} inline="small" weight="bold" />
 * ```
 */
export interface IIcon {
  /** Custom CSS styles */
  css?: CSS;
  /** Force a specific color from theme */
  forceColor?: string;
  /** Force a specific size in pixels */
  forceSize?: number;
  /** Inline spacing around the icon */
  inline?: keyof typeof spacings;
  /** System icon name (for internal use) */
  system?: (typeof systemIcons)[number];
  /** Any Phosphor icon name (for client use) */
  phosphor?: keyof typeof import("@phosphor-icons/react");
  /** Icon weight from Phosphor */
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

/**
 * Tabs component props - tabbed interface for switching between content panels
 *
 * @example
 * ```tsx
 * <Tabs
 *   options={[
 *     { label: "Home", value: "home", icon: <HomeIcon /> },
 *     { label: "Profile", value: "profile", icon: <UserIcon /> }
 *   ]}
 *   initial="home"
 *   onSelection={(value) => console.log('Selected tab:', value)}
 * />
 * ```
 */
export interface ITabs {
  /** Initially selected tab value */
  initial?: string;
  /** Whether to use small tabs */
  small?: boolean;
  /** Callback when tab is selected */
  onSelection?: (value: string) => void;
  /** Array of tab options */
  options: Array<{
    icon?: ReactNode;
    label: string;
    value: string;
  }>;
  /** Custom CSS styles */
  css?: CSS;
}

/**
 * Accordion component props - collapsible content sections with optional multiple expansion
 *
 * @example
 * ```tsx
 * <Accordion
 *   allowMultiple
 *   options={[
 *     {
 *       label: "Section 1",
 *       value: "section1",
 *       children: <Text>Content for section 1</Text>,
 *       icon: <ChevronIcon />
 *     },
 *     {
 *       label: "Section 2",
 *       value: "section2",
 *       children: <Text>Content for section 2</Text>,
 *       large: true
 *     }
 *   ]}
 *   onToggle={(value, isOpen) => console.log(value, isOpen)}
 * />
 * ```
 */
export interface IAccordion {
  /** Whether multiple sections can be open simultaneously */
  allowMultiple?: boolean;
  /** Initially opened section value */
  initial?: string;
  /** Callback when section is toggled */
  onToggle?: (value: string, isOpen: boolean) => void;
  /** Array of accordion sections */
  options: Array<{
    children: ReactNode;
    icon?: ReactNode;
    label: string;
    value: string;
    large?: boolean;
  }>;
  /** Display mode: 'list' (default) or 'grid' */
  mode?: "list" | "grid";
}
