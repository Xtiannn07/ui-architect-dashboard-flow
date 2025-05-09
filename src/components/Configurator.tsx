
import React from "react";
import { X } from "lucide-react";
import { useConfigurator } from "./ConfiguratorContext";
import { useSidebar } from "./SidebarContext";
import { useTheme } from "./ThemeProvider";

export function Configurator() {
  const { isOpen, isNavbarFixed, toggleConfigurator, toggleNavbarFixed } = useConfigurator();
  const { isMini, isTransparent, toggleMiniSidebar, toggleTransparent } = useSidebar();
  const { theme, toggleTheme } = useTheme();

  const configuratorWidth = isOpen ? "w-80" : "w-0";

  return (
    <div 
      className={`fixed top-0 right-0 h-screen ${configuratorWidth} 
        bg-white dark:bg-slate-800 shadow-lg z-30 transition-all duration-300 overflow-hidden`}
    >
      <div className="p-4 border-b flex items-center justify-between h-16">
        <h2 className="text-lg font-semibold">Configurator</h2>
        <button 
          onClick={toggleConfigurator}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">UI CONFIGURATOR</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            See our dashboard options and customize your experience.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2 border-t pt-4 dark:border-slate-700">
            <h4 className="font-medium">Sidenav Type</h4>
            <div className="flex gap-2">
              <button 
                onClick={() => isTransparent && toggleTransparent()}
                className={`px-4 py-2 text-sm rounded ${!isTransparent ? 'bg-primary-blue text-white' : 'bg-slate-100 dark:bg-slate-700'}`}
              >
                White
              </button>
              <button 
                onClick={() => !isTransparent && toggleTransparent()}
                className={`px-4 py-2 text-sm rounded ${isTransparent ? 'bg-primary-blue text-white' : 'bg-slate-100 dark:bg-slate-700'}`}
              >
                Transparent
              </button>
            </div>
          </div>

          <div className="space-y-2 border-t pt-4 dark:border-slate-700">
            <h4 className="font-medium">Navbar Fixed</h4>
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isNavbarFixed}
                  onChange={toggleNavbarFixed}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                  after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="space-y-2 border-t pt-4 dark:border-slate-700">
            <h4 className="font-medium">Sidenav Mini</h4>
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isMini}
                  onChange={toggleMiniSidebar}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                  after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="space-y-2 border-t pt-4 dark:border-slate-700">
            <h4 className="font-medium">Light / Dark</h4>
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer 
                  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                  after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
