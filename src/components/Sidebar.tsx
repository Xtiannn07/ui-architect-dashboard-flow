
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "./SidebarContext";
import { 
  Home, 
  LayoutDashboard, 
  User, 
  Settings, 
  ShoppingCart, 
  ChevronDown, 
  ChevronRight 
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
  isMini?: boolean;
}

const NavItem = ({ icon, label, active, href, isMini }: NavItemProps) => {
  return (
    <Link 
      to={href} 
      className={`sidebar-item ${active ? "active" : ""} ${isMini ? "justify-center" : ""}`}
    >
      <div className="sidebar-icon">{icon}</div>
      {!isMini && <span>{label}</span>}
    </Link>
  );
};

interface NavCategoryProps {
  label: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  isMini?: boolean;
  defaultOpen?: boolean;
}

const NavCategory = ({ label, icon, children, isMini, defaultOpen = false }: NavCategoryProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (isMini) {
    return (
      <div className="my-1">
        <div className="sidebar-item justify-center">
          <div className="sidebar-icon">{icon}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-1">
      <button 
        className="sidebar-item w-full flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <div className="sidebar-icon">{icon}</div>
          <span>{label}</span>
        </div>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {isOpen && (
        <div className="pl-10 space-y-1 mt-1">
          {children}
        </div>
      )}
    </div>
  );
};

export function Sidebar() {
  const { isOpen, isMini, isTransparent } = useSidebar();
  const sidebarWidth = isOpen ? (isMini ? "w-16" : "w-64") : "w-0";
  const sidebarClasses = isTransparent 
    ? "bg-transparent backdrop-blur-xl bg-white/50 dark:bg-black/50" 
    : "bg-white dark:bg-slate-800";

  return (
    <aside 
      className={`fixed top-0 left-0 h-screen z-20 transition-all duration-300 shadow-lg 
      ${sidebarWidth} ${sidebarClasses} overflow-hidden`}
    >
      <div className="p-4 border-b flex items-center justify-center h-16">
        {!isMini ? (
          <h1 className="text-xl font-bold text-primary-blue">Architect UI</h1>
        ) : (
          <span className="text-2xl font-bold text-primary-blue">A</span>
        )}
      </div>
      <div className="px-3 py-4 overflow-y-auto">
        <div className="space-y-1">
          {!isMini && <div className="sidebar-category">Main Navigation</div>}

          <NavCategory 
            label="Dashboards" 
            icon={<LayoutDashboard size={20} />} 
            isMini={isMini}
            defaultOpen={true}
          >
            <NavItem 
              icon={<Home size={18} />} 
              label="Default" 
              href="/" 
              active={true}
              isMini={isMini}
            />
            <NavItem 
              icon={<ShoppingCart size={18} />} 
              label="Automotive" 
              href="/automotive" 
              isMini={isMini}
            />
            <NavItem 
              icon={<Home size={18} />} 
              label="Smart Home" 
              href="/smart-home" 
              isMini={isMini}
            />
            <NavItem 
              icon={<User size={18} />} 
              label="CRM" 
              href="/crm" 
              isMini={isMini}
            />
          </NavCategory>

          <NavCategory 
            label="Pages" 
            icon={<User size={20} />} 
            isMini={isMini}
          >
            <NavItem 
              icon={<User size={18} />} 
              label="Profile" 
              href="/profile" 
              isMini={isMini}
            />
            <NavItem 
              icon={<Settings size={18} />} 
              label="Settings" 
              href="/settings" 
              isMini={isMini}
            />
          </NavCategory>
        </div>
      </div>
    </aside>
  );
}
