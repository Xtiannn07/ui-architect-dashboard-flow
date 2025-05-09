import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "./SidebarContext";
import { Home, LayoutDashboard, User, Settings, ShoppingCart, ChevronDown, ChevronRight, Car, Users, Book, Star, FileText, UserPlus, CreditCard, FileInput as FileInvoice, Shield, FolderKanban, Clock, PlusCircle } from "lucide-react";

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
  const location = useLocation();
  const sidebarWidth = isOpen ? (isMini ? "w-16" : "w-64") : "w-0";
  const sidebarClasses = isTransparent 
    ? "bg-transparent backdrop-blur-xl bg-white/50 dark:bg-black/50" 
    : "bg-white dark:bg-slate-800";

  const isActiveRoute = (route: string) => {
    return location.pathname === route;
  };

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
              active={isActiveRoute("/")}
              isMini={isMini}
            />
            <NavItem 
              icon={<Car size={18} />} 
              label="Automotive" 
              href="/automotive" 
              active={isActiveRoute("/automotive")}
              isMini={isMini}
            />
            <NavItem 
              icon={<Home size={18} />} 
              label="Smart Home" 
              href="/smart-home" 
              active={isActiveRoute("/smart-home")}
              isMini={isMini}
            />
            <NavItem 
              icon={<Users size={18} />} 
              label="CRM" 
              href="/crm" 
              active={isActiveRoute("/crm")}
              isMini={isMini}
            />
          </NavCategory>

          <NavCategory 
            label="Users" 
            icon={<User size={20} />} 
            isMini={isMini}
            defaultOpen={location.pathname.includes("/users")}
          >
            <NavItem 
              icon={<FileText size={18} />} 
              label="Reports" 
              href="/users/reports" 
              active={isActiveRoute("/users/reports")}
              isMini={isMini}
            />
            <NavItem 
              icon={<UserPlus size={18} />} 
              label="New User" 
              href="/users/new" 
              active={isActiveRoute("/users/new")}
              isMini={isMini}
            />
          </NavCategory>

          <NavCategory 
            label="Account" 
            icon={<Settings size={20} />} 
            isMini={isMini}
            defaultOpen={location.pathname.includes("/account")}
          >
            <NavItem 
              icon={<Settings size={18} />} 
              label="Settings" 
              href="/account/settings" 
              active={isActiveRoute("/account/settings")}
              isMini={isMini}
            />
            <NavItem 
              icon={<CreditCard size={18} />} 
              label="Billing" 
              href="/account/billing" 
              active={isActiveRoute("/account/billing")}
              isMini={isMini}
            />
            <NavItem 
              icon={<FileInvoice size={18} />} 
              label="Invoice" 
              href="/account/invoice" 
              active={isActiveRoute("/account/invoice")}
              isMini={isMini}
            />
            <NavItem 
              icon={<Shield size={18} />} 
              label="Security" 
              href="/account/security" 
              active={isActiveRoute("/account/security")}
              isMini={isMini}
            />
          </NavCategory>

          <NavCategory 
            label="Projects" 
            icon={<FolderKanban size={20} />} 
            isMini={isMini}
            defaultOpen={location.pathname.includes("/projects")}
          >
            <NavItem 
              icon={<Book size={18} />} 
              label="General" 
              href="/projects/general" 
              active={isActiveRoute("/projects/general")}
              isMini={isMini}
            />
            <NavItem 
              icon={<Clock size={18} />} 
              label="Timeline" 
              href="/projects/timeline" 
              active={isActiveRoute("/projects/timeline")}
              isMini={isMini}
            />
            <NavItem 
              icon={<PlusCircle size={18} />} 
              label="New Project" 
              href="/projects/new" 
              active={isActiveRoute("/projects/new")}
              isMini={isMini}
            />
          </NavCategory>

          <NavCategory 
            label="Profile" 
            icon={<User size={20} />} 
            isMini={isMini}
            defaultOpen={location.pathname.includes("/profile")}
          >
            <NavItem 
              icon={<User size={18} />} 
              label="Profile Overview" 
              href="/profile" 
              active={isActiveRoute("/profile")}
              isMini={isMini}
            />
            <NavItem 
              icon={<Users size={18} />} 
              label="Teams" 
              href="/profile/teams" 
              active={isActiveRoute("/profile/teams")}
              isMini={isMini}
            />
            <NavItem 
              icon={<Star size={18} />} 
              label="Projects" 
              href="/profile/projects" 
              active={isActiveRoute("/profile/projects")}
              isMini={isMini}
            />
          </NavCategory>
        </div>
      </div>
    </aside>
  );
}