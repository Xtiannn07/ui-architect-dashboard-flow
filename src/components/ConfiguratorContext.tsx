
import React, { createContext, useContext, useState } from "react";

interface ConfiguratorContextType {
  isOpen: boolean;
  isNavbarFixed: boolean;
  toggleConfigurator: () => void;
  toggleNavbarFixed: () => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(undefined);

export function ConfiguratorProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);

  const toggleConfigurator = () => setIsOpen(prev => !prev);
  const toggleNavbarFixed = () => setIsNavbarFixed(prev => !prev);

  return (
    <ConfiguratorContext.Provider 
      value={{ 
        isOpen, 
        isNavbarFixed, 
        toggleConfigurator, 
        toggleNavbarFixed 
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const context = useContext(ConfiguratorContext);
  if (context === undefined) {
    throw new Error("useConfigurator must be used within a ConfiguratorProvider");
  }
  return context;
}
