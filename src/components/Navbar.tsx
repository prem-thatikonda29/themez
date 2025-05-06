import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LogOut, Menu, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Theme } from "./ThemeSidebar";
import { supabase } from "@/lib/supabaseClient";

import logo from "/logo.svg";

type PreviewType = "saas" | "portfolio" | "e-commerce";
export type ExportFormat = "css" | "json" | "tailwind" | "tailwind4";

interface NavbarProps {
  activePreview: PreviewType;
  setActivePreview: (value: PreviewType) => void;
  theme: Theme;
  onExport: (format: ExportFormat) => void;
  onToggleSidebar: () => void;
}

export const Navbar = ({
  activePreview,
  setActivePreview,
  onExport,
  onToggleSidebar,
}: NavbarProps) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (!error) setUser(user);

      console.log(user);
    }

    fetchUser();
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "b") {
        event.preventDefault();
        onToggleSidebar();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onToggleSidebar]);

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
          <img src={logo} alt="logo" className="h-6 w-24 object-cover" />
          <Select
            value={activePreview}
            onValueChange={(value: PreviewType) => setActivePreview(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select preview" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas">SaaS</SelectItem>
              <SelectItem value="e-commerce">E-commerce</SelectItem>
              <SelectItem value="portfolio">Portfolio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => onExport("css")}>
            <Upload className="h-4 w-4 mr-2" />
            Export Theme
          </Button>

          {user && (
            <>
              <span className="text-sm font-semibold w-8 h-8 bg-purple-50 rounded-full flex justify-center items-center">
                {user.user_metadata?.full_name?.[0].toUpperCase()}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => supabase.auth.signOut()}
              >
                <LogOut className="text-red-400" />
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
