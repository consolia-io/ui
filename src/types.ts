import { CSSProperties, CSS } from "@stitches/react";
import { ImageProps as NextImageProps } from "next/image";
import {
  ReactNode,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  HTMLAttributes,
  MouseEventHandler,
  ElementType,
  ComponentType,
  SVGProps,
  FormHTMLAttributes,
} from "react";
import { Toaster } from "react-hot-toast";

import { TextSizes } from "./components/Text/Text.styles";
import { theme } from "./stitches.config";

type ThemeSpacing = keyof typeof theme.space;

type InferComponentProps<T extends ElementType> = T extends ComponentType<infer U>
  ? U
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : Record<string, never>;

export interface AvatarProps {
  alt?: string;
  colors?: boolean;
  css?: CSS;
  fallback: string;
  src?: string;
  width?: number;
}

export interface BadgeProps {
  block?: boolean;
  children?: ReactNode;
  closable?: boolean;
  copy?: boolean;
  copyText?: string | number | undefined;
  css?: CSS;
  dot?: boolean | "pulse";
  dotColor?: "red" | "orange" | "purple" | "blue" | "green" | "border" | "default";
  icon?: ReactNode;
  iconOnly?: boolean;
  iconPosition?: "left" | "right";
  inline?: ThemeSpacing | "auto";
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  small?: boolean;
  theme?: "red" | "orange" | "yellow" | "purple" | "blue" | "green" | "border" | "default";
}

export interface BoxProps {
  children: ReactNode;
  closable?: boolean;
  css?: CSS;
  hover?: boolean;
  image?: string;
  imageAlt?: string;
  imageCTA?: string;
  imageFit?: CSSProperties["objectFit"];
  imageHeight?: string;
  imagePosition?: CSSProperties["objectPosition"];
  imageTarget?: "_blank" | "_self";
  loading?: boolean;
  minimal?: boolean;
  theme?: "default" | "success" | "warning" | "error" | "transparent" | "fill";
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: ReactNode | string;
  css?: CSS;
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  inline?: ThemeSpacing | "auto";
  loading?: boolean;
  small?: boolean;
  theme?: "default" | "fill" | "minimal" | "solid";
}

export interface CodeProps {
  children: ReactNode;
  css?: CSS;
}

export interface DialogProps {
  children: ReactNode;
  close?: () => void;
  css?: CSS;
  height?: number | string;
  locked?: boolean;
  trigger: ReactNode;
  width?: number | string;
}

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  bottom?: ThemeSpacing;
  css?: CSS;
  top?: ThemeSpacing;
}

export interface FieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  copy?: boolean;
  css?: CSS;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  submit?: string;
  submitFunction?: (value: string | number) => void | Promise<void>;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  width?: number | string;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  css?: CSS;
  disabled?: boolean;
  listen?: boolean;
  mustRef?: RefObject<HTMLFormElement>;
  submit?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submitFunction?: any;
  submitValid?: boolean;
}

export interface ImageProps extends NextImageProps {
  borderRadius?: keyof typeof theme.radii;
  css?: CSS;
  fill?: boolean;
  fillFit?: CSSProperties["objectFit"];
  fillHeight?: string | number;
  fillPosition?: CSSProperties["objectPosition"];
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  copy?: boolean;
  css?: CSS;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
  listen?: boolean;
  loading?: boolean;
  mustRef?: RefObject<HTMLInputElement>;
  reset?: boolean;
  resetFunction?: () => void;
  reveal?: boolean;
  submit?: string;
  submitFunction?: (value: string | number) => void | Promise<void>;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  width?: number | string;
}

export interface LoadingProps {
  horizontal?: "left" | "right";
  stroke?: string;
  vertical?: "top" | "bottom";
  width?: number | string;
}

export interface LogoProps extends SVGProps<SVGSVGElement> {
  css?: CSS;
  inline?: ThemeSpacing | "auto";
}

export interface PopoverProps {
  children: ReactNode;
  css?: CSS;
  horizontal?: "left" | "right" | "center";
  minimal?: boolean;
  trigger: ReactNode;
  type?: "click" | "hover";
  vertical?: "top" | "bottom";
  width?: number | string;
}

export interface ProviderProps {
  children: ReactNode;
  css?: CSS;
  initial?: "dark" | "light";
  locked?: "dark" | "light";
  trigger?: ReactNode;
  triggerActive?: ReactNode;
}

export interface SelectProps {
  css?: CSS;
  filter?: boolean;
  height?: number | string;
  horizontal?: "left" | "right" | "center";
  label?: string;
  last?: boolean;
  loading?: boolean;
  locked?: boolean;
  onSelection?: (value: string, label: string) => void;
  options: Array<{
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    label: string;
    value: string;
  }>;
  selection?: string[];
  trigger: ReactNode;
  vertical?: "top" | "bottom";
  width?: number | string;
}

export interface StackProps {
  align?: CSSProperties["textAlign"];
  bottom?: ThemeSpacing;
  children: ReactNode;
  css?: CSS;
  direction?: "row" | "column";
  flex?: CSSProperties["alignItems"];
  flexduo?: boolean;
  minimal?: boolean;
  noPrint?: boolean;
  offset?: number;
  offsetDesktop?: number;
  offsetLaptop?: number;
  offsetPhone?: number;
  offsetTablet?: number;
  offsetWide?: number;
  top?: ThemeSpacing;
  width?: number;
  widthDesktop?: number;
  widthLaptop?: number;
  widthPhone?: number;
  widthTablet?: number;
  widthWide?: number;
}

export interface TableProps {
  bodyChildren?: Array<
    Array<{ label?: ReactNode; value: string | number; width?: string | number }>
  >;
  css?: CSS;
  defaultDirection?: "asc" | "desc";
  defaultLimit?: 10 | 25 | 50 | 100 | 200;
  defaultSort?: number;
  headChildren?: Array<string>;
  hover?: boolean;
  identifier?: string;
  loading?: boolean;
  pagination?: boolean;
  restrictLimit?: number;
  rowNumbers?: boolean;
  sortDisabled?: number[];
  sortable?: boolean;
}

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  accent?: boolean;
  as?: keyof typeof TextSizes;
  bottom?: ThemeSpacing;
  children: ReactNode;
  css?: CSS;
  inline?: ThemeSpacing | "auto";
  override?: keyof typeof TextSizes;
  top?: ThemeSpacing;
}

export type ToastProps = InferComponentProps<typeof Toaster>;

export interface ViewProps {
  bottom?: ThemeSpacing;
  children: ReactNode;
  container?: boolean;
  css?: CSS;
  inverted?: boolean;
  noPrint?: boolean;
  top?: ThemeSpacing;
}
