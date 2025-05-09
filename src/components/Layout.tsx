
import React from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Configurator } from "./Configurator";
import { useSidebar } from "./SidebarContext";
import { useConfigurator } from "./ConfiguratorContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isOpen, isMini } = useSidebar();
  const { isOpen: isConfiguratorOpen, isNavbarFixed } = useConfigurator();
  
  const mainPaddingLeft = isOpen ? (isMini ? "pl-16" : "pl-64") : "pl-0";
  const mainPaddingTop = isNavbarFixed ? "pt-16" : "";
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Sidebar />
      <div className={`transition-all duration-300 ${mainPaddingLeft} ${mainPaddingTop}`}>
        <Navbar />
        <main className="p-4">
          {children}
        </main>
      </div>
      <Configurator />
      {isConfiguratorOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
          onClick={() => useConfigurator().toggleConfigurator()}
        />
      )}
    </div>
  );
}
