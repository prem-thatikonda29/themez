import { Palette } from "lucide-react";

type Theme =
  | "default"
  | "purple"
  | "green"
  | "blue"
  | "red"
  | "lightpurple"
  | "darkpurple"
  | "purpledark";

interface ThemeThumbnailProps {
  theme: Theme;
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeThumbnail = ({
  theme,
  currentTheme,
  onThemeChange,
}: ThemeThumbnailProps) => {
  const isActive = theme === currentTheme;

  return (
    <button
      onClick={() => onThemeChange(theme)}
      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
        isActive ? "border-primary scale-110" : "border-border hover:scale-105"
      }`}
    >
      <div
        className={`w-full h-full ${
          theme !== "default" ? `theme-${theme}` : ""
        }`}
      >
        <div
          className={`h-1/2 ${theme === "default" ? "bg-black" : "bg-primary"}`}
        ></div>
        <div
          className={`h-1/2 ${
            theme === "default" ? "bg-white" : "bg-background"
          }`}
        ></div>
      </div>
    </button>
  );
};

interface ThemeSidebarProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSidebar = ({ currentTheme, onThemeChange }: ThemeSidebarProps) => {
  const themes: Theme[] = [
    "default",
    "lightpurple",
    "purple",
    "darkpurple",
    "purpledark",
    "green",
    "blue",
    "red",
  ];

  return (
    <div className="w-48 min-h-full bg-background border-r border-border p-4">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <h3 className="font-medium">Themes</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {themes.map((theme) => (
            <ThemeThumbnail
              key={theme}
              theme={theme}
              currentTheme={currentTheme}
              onThemeChange={onThemeChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ThemeSidebar, type Theme };
