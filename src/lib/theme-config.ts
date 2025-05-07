type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
};

export type Theme =
  | "default"
  | "lightpurple"
  | "purpledark"
  | "darkpurple"
  | "purple"
  | "green"
  | "blue"
  | "red";

export const themeConfigs: Record<Theme, ThemeColors> = {
  default: {
    background: "oklch(0.99 0 0)",
    foreground: "oklch(0.2 0 0)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.2 0 0)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.2 0 0)",
    primary: "oklch(0.5 0 0)",
    primaryForeground: "oklch(1 0 0)",
    secondary: "oklch(0.95 0 0)",
    secondaryForeground: "oklch(0.2 0 0)",
    muted: "oklch(0.95 0 0)",
    mutedForeground: "oklch(0.5 0 0)",
    accent: "oklch(0.95 0 0)",
    accentForeground: "oklch(0.2 0 0)",
    border: "oklch(0.9 0 0)",
    input: "oklch(0.9 0 0)",
    ring: "oklch(0.7 0 0)",
  },
  lightpurple: {
    background: "oklch(0.995 0.01 300)",
    foreground: "oklch(0.3 0.02 300)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.3 0.02 300)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.3 0.02 300)",
    primary: "oklch(0.7 0.15 300)",
    primaryForeground: "oklch(1 0 0)",
    secondary: "oklch(0.97 0.01 300)",
    secondaryForeground: "oklch(0.3 0.02 300)",
    muted: "oklch(0.98 0.01 300)",
    mutedForeground: "oklch(0.6 0.02 300)",
    accent: "oklch(0.97 0.03 300)",
    accentForeground: "oklch(0.3 0.02 300)",
    border: "oklch(0.93 0.01 300)",
    input: "oklch(0.93 0.01 300)",
    ring: "oklch(0.8 0.08 300)",
  },
  purpledark: {
    background: "oklch(0.15 0.03 300)",
    foreground: "oklch(0.95 0.02 300)",
    card: "oklch(0.18 0.04 300)",
    cardForeground: "oklch(0.95 0.02 300)",
    popover: "oklch(0.18 0.04 300)",
    popoverForeground: "oklch(0.95 0.02 300)",
    primary: "oklch(0.5 0.25 300)",
    primaryForeground: "oklch(1 0 0)",
    secondary: "oklch(0.25 0.05 300)",
    secondaryForeground: "oklch(0.95 0.02 300)",
    muted: "oklch(0.25 0.03 300)",
    mutedForeground: "oklch(0.7 0.05 300)",
    accent: "oklch(0.3 0.08 300)",
    accentForeground: "oklch(0.95 0.02 300)",
    border: "oklch(0.3 0.04 300)",
    input: "oklch(0.2 0.04 300)",
    ring: "oklch(0.5 0.2 300)",
  },
  darkpurple: {
    background: "oklch(0.98 0.03 300)",
    foreground: "oklch(0.15 0.03 300)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.15 0.03 300)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.15 0.03 300)",
    primary: "oklch(0.4 0.25 300)",
    primaryForeground: "oklch(1 0 0)",
    secondary: "oklch(0.92 0.04 300)",
    secondaryForeground: "oklch(0.15 0.03 300)",
    muted: "oklch(0.94 0.03 300)",
    mutedForeground: "oklch(0.4 0.05 300)",
    accent: "oklch(0.9 0.05 300)",
    accentForeground: "oklch(0.15 0.03 300)",
    border: "oklch(0.85 0.04 300)",
    input: "oklch(0.85 0.04 300)",
    ring: "oklch(0.5 0.2 300)",
  },
  purple: {
    background: "oklch(0.99 0.02 300)",
    foreground: "oklch(0.2 0.02 300)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.2 0.02 300)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.2 0.02 300)",
    primary: "oklch(0.5 0.2 300)",
    primaryForeground: "oklch(1 0 0)",
    secondary: "oklch(0.95 0.02 300)",
    secondaryForeground: "oklch(0.2 0.02 300)",
    muted: "oklch(0.95 0.02 300)",
    mutedForeground: "oklch(0.5 0.02 300)",
    accent: "oklch(0.95 0.02 300)",
    accentForeground: "oklch(0.2 0.02 300)",
    border: "oklch(0.9 0.02 300)",
    input: "oklch(0.9 0.02 300)",
    ring: "oklch(0.7 0.02 300)",
  },
  green: {
    background: "oklch(0.99 0.02 150)",
    foreground: "oklch(0.2 0.02 150)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.2 0.02 150)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.2 0.02 150)",
    primary: "oklch(0.5 0.2 150)",
    primaryForeground: "oklch(1 0 0)",
    secondary: "oklch(0.95 0.02 150)",
    secondaryForeground: "oklch(0.2 0.02 150)",
    muted: "oklch(0.95 0.02 150)",
    mutedForeground: "oklch(0.5 0.02 150)",
    accent: "oklch(0.95 0.02 150)",
    accentForeground: "oklch(0.2 0.02 150)",
    border: "oklch(0.9 0.02 150)",
    input: "oklch(0.9 0.02 150)",
    ring: "oklch(0.7 0.02 150)",
  },
  blue: {
    background: "oklch(0.99 0.02 240)",
    foreground: "oklch(0.2 0.02 240)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.2 0.02 240)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.2 0.02 240)",
    primary: "oklch(0.5 0.2 240)",
    primaryForeground: "oklch(1 0 0)",
    secondary: "oklch(0.95 0.02 240)",
    secondaryForeground: "oklch(0.2 0.02 240)",
    muted: "oklch(0.95 0.02 240)",
    mutedForeground: "oklch(0.5 0.02 240)",
    accent: "oklch(0.95 0.02 240)",
    accentForeground: "oklch(0.2 0.02 240)",
    border: "oklch(0.9 0.02 240)",
    input: "oklch(0.9 0.02 240)",
    ring: "oklch(0.7 0.02 240)",
  },
  red: {
    background: "oklch(0.99 0.02 25)",
    foreground: "oklch(0.2 0.02 25)",
    card: "oklch(1 0 0)",
    cardForeground: "oklch(0.2 0.02 25)",
    popover: "oklch(1 0 0)",
    popoverForeground: "oklch(0.2 0.02 25)",
    primary: "oklch(0.5 0.2 25)",
    primaryForeground: "oklch(1 0 0)",
    secondary: "oklch(0.95 0.02 25)",
    secondaryForeground: "oklch(0.2 0.02 25)",
    muted: "oklch(0.95 0.02 25)",
    mutedForeground: "oklch(0.5 0.02 25)",
    accent: "oklch(0.95 0.02 25)",
    accentForeground: "oklch(0.2 0.02 25)",
    border: "oklch(0.9 0.02 25)",
    input: "oklch(0.9 0.02 25)",
    ring: "oklch(0.7 0.02 25)",
  },
};
