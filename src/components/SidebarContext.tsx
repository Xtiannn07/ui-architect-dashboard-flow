
import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
  isOpen: boolean;
  isMini: boolean;
  isTransparent: boolean;
  toggleSidebar: () => void;
  toggleMiniSidebar: () => void;
  toggleTransparent: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMini, setIsMini] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const toggleMiniSidebar = () => setIsMini(prev => !prev);
  const toggleTransparent = () => setIsTransparent(prev => !prev);

  return (
    <SidebarContext.Provider 
      value={{ 
        isOpen, 
        isMini, 
        isTransparent, 
        toggleSidebar, 
        toggleMiniSidebar, 
        toggleTransparent 
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
