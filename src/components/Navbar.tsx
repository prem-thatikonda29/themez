import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Theme } from "./ThemeSidebar";

type PreviewType = "saas" | "portfolio" | "e-commerce";

interface NavbarProps {
  activePreview: PreviewType;
  setActivePreview: (value: PreviewType) => void;
  theme: Theme;
  onExportCSS: () => void;
  onExportJSON: () => void;
  onExportTailwind: () => void;
  onExportTailwind4: () => void; // Add this new prop
  onToggleSidebar: () => void;
}

export const Navbar = ({
  activePreview,
  setActivePreview,
  theme,
  onExportCSS,
  onExportJSON,
  onExportTailwind,
  onExportTailwind4, // Add this to destructuring
  onToggleSidebar,
}: NavbarProps) => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
          <h2 className="text-lg font-semibold">Themez</h2>
          <Select
            value={activePreview}
            onValueChange={(value: PreviewType) => setActivePreview(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select preview" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas">SaaS Template</SelectItem>
              <SelectItem value="portfolio">Portfolio Template</SelectItem>
              <SelectItem value="e-commerce">E-commerce Template</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onExportCSS}>
            <Download className="h-4 w-4 mr-2" />
            Preview CSS
          </Button>
          <Button variant="outline" size="sm" onClick={onExportJSON}>
            <Download className="h-4 w-4 mr-2" />
            Preview JSON
          </Button>
          <Button variant="outline" size="sm" onClick={onExportTailwind}>
            <Download className="h-4 w-4 mr-2" />
            Preview Tailwind v3
          </Button>
          <Button variant="outline" size="sm" onClick={onExportTailwind4}>
            <Download className="h-4 w-4 mr-2" />
            Preview Tailwind v4
          </Button>
        </div>
      </div>
    </nav>
  );
};
