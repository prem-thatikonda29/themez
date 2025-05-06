import { useState, useEffect } from "react";
import { ThemeSidebar, type Theme } from "@/components/ThemeSidebar";
import Saas from "../previews/Saas";
import { Navbar } from "@/components/Navbar";
import { themeConfigs } from "@/lib/theme-config";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EcommerceLandingPage from "@/previews/ECom";

type PreviewType = "saas" | "portfolio" | "e-commerce";

const Preview = () => {
  const [theme, setTheme] = useState<Theme>("default");
  const [activePreview, setActivePreview] = useState<PreviewType>("saas");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [previewCode, setPreviewCode] = useState<string>("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewFormat, setPreviewFormat] = useState<ExportFormat>("css");

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    handleThemeChange(theme);
  }, []);

  // Listening for escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isPreviewOpen) {
        setIsPreviewOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

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

    setPreviewCode(themeCSS);
    setIsPreviewOpen(true);
  };

  const handleExportJSON = () => {
    const themeJSON = {
      theme: theme,
      colors: themeConfigs[theme],
    };

    const jsonString = JSON.stringify(themeJSON, null, 2);
    setPreviewCode(jsonString);
    setIsPreviewOpen(true);
  };

  const handleExportTailwind = () => {
    const themeColors = themeConfigs[theme];
    const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "${themeColors.background}",
        foreground: "${themeColors.foreground}",
        card: "${themeColors.card}",
        "card-foreground": "${themeColors.cardForeground}",
        popover: "${themeColors.popover}",
        "popover-foreground": "${themeColors.popoverForeground}",
        primary: "${themeColors.primary}",
        "primary-foreground": "${themeColors.primaryForeground}",
        secondary: "${themeColors.secondary}",
        "secondary-foreground": "${themeColors.secondaryForeground}",
        muted: "${themeColors.muted}",
        "muted-foreground": "${themeColors.mutedForeground}",
        accent: "${themeColors.accent}",
        "accent-foreground": "${themeColors.accentForeground}",
        border: "${themeColors.border}",
        input: "${themeColors.input}",
        ring: "${themeColors.ring}",
      }
    }
  }
}`;

    setPreviewCode(tailwindConfig);
    setIsPreviewOpen(true);
  };

  const handleExportTailwind4 = () => {
    const themeColors = themeConfigs[theme];
    const tailwindConfig = `/* Tailwind CSS v4.0 Configuration */
@layer theme {
    --color-background: ${themeColors.background};
    --color-foreground: ${themeColors.foreground};
    --color-card: ${themeColors.card};
    --color-card-foreground: ${themeColors.cardForeground};
    --color-popover: ${themeColors.popover};
    --color-popover-foreground: ${themeColors.popoverForeground};
    --color-primary: ${themeColors.primary};
    --color-primary-foreground: ${themeColors.primaryForeground};
    --color-secondary: ${themeColors.secondary};
    --color-secondary-foreground: ${themeColors.secondaryForeground};
    --color-muted: ${themeColors.muted};
    --color-muted-foreground: ${themeColors.mutedForeground};
    --color-accent: ${themeColors.accent};
    --color-accent-foreground: ${themeColors.accentForeground};
    --color-border: ${themeColors.border};
    --color-input: ${themeColors.input};
    --color-ring: ${themeColors.ring};
}

@layer utilities {
  .bg-background { background-color: var(--color-background); }
  .bg-foreground { background-color: var(--color-foreground); }
  .bg-card { background-color: var(--color-card); }
  .bg-card-foreground { background-color: var(--color-card-foreground); }
  .bg-popover { background-color: var(--color-popover); }
  .bg-popover-foreground { background-color: var(--color-popover-foreground); }
  .bg-primary { background-color: var(--color-primary); }
  .bg-primary-foreground { background-color: var(--color-primary-foreground); }
  .bg-secondary { background-color: var(--color-secondary); }
  .bg-secondary-foreground { background-color: var(--color-secondary-foreground); }
  .bg-muted { background-color: var(--color-muted); }
  .bg-muted-foreground { background-color: var(--color-muted-foreground); }
  .bg-accent { background-color: var(--color-accent); }
  .bg-accent-foreground { background-color: var(--color-accent-foreground); }
  .bg-border { background-color: var(--color-border); }
  .bg-input { background-color: var(--color-input); }
  .bg-ring { background-color: var(--color-ring); }
}`;

    setPreviewCode(tailwindConfig);
    setIsPreviewOpen(true);
  };

  const handleDownload = () => {
    const isJSON = previewCode.trim().startsWith("{");
    const blob = new Blob([previewCode], {
      type: isJSON ? "application/json" : "text/css",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `theme-${theme}.${isJSON ? "json" : "css"}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExport = (format: ExportFormat) => {
    switch (format) {
      case "css":
        handleExportCSS();
        break;
      case "json":
        handleExportJSON();
        break;
      case "tailwind":
        handleExportTailwind();
        break;
      case "tailwind4":
        handleExportTailwind4();
        break;
    }
  };

  useEffect(() => {
    if (isPreviewOpen) {
      handleExport("css");
    }
  }, [isPreviewOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          activePreview={activePreview}
          setActivePreview={setActivePreview}
          theme={theme}
          onExport={handleExport}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      <div className="flex pt-14">
        <div
          className={`fixed top-14 left-0 bottom-0 w-48 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ThemeSidebar
            currentTheme={theme}
            onThemeChange={handleThemeChange}
          />
        </div>
        <div
          className={`flex-1 overflow-y-auto transition-[margin] duration-300 ${
            isSidebarOpen ? "ml-48" : "ml-0"
          }`}
        >
          <div className={theme !== "default" ? `theme-${theme}` : ""}>
            {activePreview === "saas" && <Saas theme={theme} />}
            {activePreview === "e-commerce" && (
              <EcommerceLandingPage theme={theme} />
            )}
            {/* Add other preview components here */}
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <>
          <div
            className="fixed inset-0 bg-transparent"
            onClick={() => setIsPreviewOpen(false)}
          />
          <div className="fixed top-[4rem] right-16 bg-background border border-border rounded-lg shadow-lg p-4 max-w-sm w-full z-50">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Select
                  value={previewFormat}
                  onValueChange={(value: ExportFormat) => {
                    setPreviewFormat(value);
                    handleExport(value);
                  }}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="css">CSS Variables</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="tailwind">Tailwind v3</SelectItem>
                    <SelectItem value="tailwind4">Tailwind v4</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ×
                </button>
              </div>
            </div>
            <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto max-h-[300px] overflow-y-auto text-sm">
              <code>{previewCode}</code>
            </pre>
          </div>
        </>
      )}
    </div>
  );
};

export default Preview;
