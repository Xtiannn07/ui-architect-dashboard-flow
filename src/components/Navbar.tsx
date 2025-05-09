
import React from "react";
import { Menu, Settings, Bell, Moon, Sun } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { useConfigurator } from "./ConfiguratorContext";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const { toggleSidebar } = useSidebar();
  const { toggleConfigurator, isNavbarFixed } = useConfigurator();
  const { theme, toggleTheme } = useTheme();

  const navbarClasses = isNavbarFixed 
    ? "fixed top-0 left-0 right-0 z-10" 
    : "relative";

  return (
    <nav 
      className={`${navbarClasses} bg-white dark:bg-slate-800 shadow-md transition-all duration-300`}
    >
      <div className="flex justify-between items-center p-4 h-16">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Menu size={20} />
          </button>
          <div>
            <h2 className="text-lg font-semibold">Dashboard</h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors relative"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button 
            onClick={toggleConfigurator}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Settings size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
