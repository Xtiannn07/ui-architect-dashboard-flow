import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./components/ThemeProvider";
import { SidebarProvider } from "./components/SidebarContext";
import { ConfiguratorProvider } from "./components/ConfiguratorContext";
import { Layout } from "./components/Layout";

import DefaultDashboard from "./pages/DefaultDashboard";
import AutomotiveDashboard from "./pages/AutomotiveDashboard";
import SmartHomeDashboard from "./pages/SmartHomeDashboard";
import CrmDashboard from "./pages/CrmDashboard";
import ProfileOverview from "./pages/ProfileOverview";
import Teams from "./pages/Teams";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";

// User Pages
import UserReports from "./pages/users/Reports";
import NewUser from "./pages/users/NewUser";

// Account Pages
import AccountSettings from "./pages/account/Settings";
import AccountBilling from "./pages/account/Billing";
import AccountInvoice from "./pages/account/Invoice";
import AccountSecurity from "./pages/account/Security";

// Project Pages
import ProjectsGeneral from "./pages/projects/General";
import ProjectsTimeline from "./pages/projects/Timeline";
import NewProject from "./pages/projects/NewProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <SidebarProvider>
        <ConfiguratorProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route path="/" element={<DefaultDashboard />} />
                  <Route path="/automotive" element={<AutomotiveDashboard />} />
                  <Route path="/smart-home" element={<SmartHomeDashboard />} />
                  <Route path="/crm" element={<CrmDashboard />} />
                  
                  {/* Profile Routes */}
                  <Route path="/profile" element={<ProfileOverview />} />
                  <Route path="/profile/teams" element={<Teams />} />
                  <Route path="/profile/projects" element={<AllProjects />} />
                  
                  {/* User Routes */}
                  <Route path="/users/reports" element={<UserReports />} />
                  <Route path="/users/new" element={<NewUser />} />
                  
                  {/* Account Routes */}
                  <Route path="/account/settings" element={<AccountSettings />} />
                  <Route path="/account/billing" element={<AccountBilling />} />
                  <Route path="/account/invoice" element={<AccountInvoice />} />
                  <Route path="/account/security" element={<AccountSecurity />} />
                  
                  {/* Project Routes */}
                  <Route path="/projects/general" element={<ProjectsGeneral />} />
                  <Route path="/projects/timeline" element={<ProjectsTimeline />} />
                  <Route path="/projects/new" element={<NewProject />} />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </TooltipProvider>
        </ConfiguratorProvider>
      </SidebarProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;