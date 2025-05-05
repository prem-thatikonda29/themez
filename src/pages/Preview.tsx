import { useState, useEffect } from "react";
import { ThemeSidebar, type Theme } from "@/components/ThemeSidebar";
import Saas from "../previews/Saas";
import { Navbar } from "@/components/Navbar";
import { themeConfigs } from "@/lib/theme-config";

type PreviewType = "saas" | "portfolio" | "e-commerce";

const Preview = () => {
  const [theme, setTheme] = useState<Theme>("default");
  const [activePreview, setActivePreview] = useState<PreviewType>("saas");

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.classList.remove(
      "theme-purple",
      "theme-green",
      "theme-blue"
    );

    if (newTheme !== "default") {
      document.documentElement.classList.add(`theme-${newTheme}`);
    }
  };

  useEffect(() => {
    handleThemeChange(theme);
  }, []);

  const getThemeValue = (theme: Theme) => {
    switch (theme) {
      case "purple":
        return "300";
      case "green":
        return "150";
      case "blue":
        return "240";
      default:
        return "0";
    }
  };

  const handleExportCSS = () => {
    const themeColors = themeConfigs[theme];
    const themeCSS = `
    /* Theme: ${theme} */
    :root {
      --background: ${themeColors.background};
      --foreground: ${themeColors.foreground};
      --card: ${themeColors.card};
      --card-foreground: ${themeColors.cardForeground};
      --popover: ${themeColors.popover};
      --popover-foreground: ${themeColors.popoverForeground};
      --primary: ${themeColors.primary};
      --primary-foreground: ${themeColors.primaryForeground};
      --secondary: ${themeColors.secondary};
      --secondary-foreground: ${themeColors.secondaryForeground};
      --muted: ${themeColors.muted};
      --muted-foreground: ${themeColors.mutedForeground};
      --accent: ${themeColors.accent};
      --accent-foreground: ${themeColors.accentForeground};
      --border: ${themeColors.border};
      --input: ${themeColors.input};
      --ring: ${themeColors.ring};
    }`;

    const blob = new Blob([themeCSS], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `theme-${theme}.css`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExportJSON = () => {
    const themeJSON = {
      theme: theme,
      colors: themeConfigs[theme],
    };

    const blob = new Blob([JSON.stringify(themeJSON, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `theme-${theme}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          activePreview={activePreview}
          setActivePreview={setActivePreview}
          theme={theme}
          onExportCSS={handleExportCSS}
          onExportJSON={handleExportJSON}
        />
      </div>

      <div className="flex pt-14">
        <div className="fixed top-14 left-0 bottom-0 w-48">
          <ThemeSidebar
            currentTheme={theme}
            onThemeChange={handleThemeChange}
          />
        </div>
        <div className="ml-48 flex-1 overflow-y-auto">
          {activePreview === "saas" && <Saas theme={theme} />}
          {/* Add other preview components here */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
