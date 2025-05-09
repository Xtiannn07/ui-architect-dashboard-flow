
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
import NotFound from "./pages/NotFound";

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
