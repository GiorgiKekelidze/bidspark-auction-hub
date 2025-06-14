
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListingPage } from "@/pages/ItemListingPage";
import { ItemDetailPage } from "@/pages/ItemDetailPage";
import { Navbar } from "@/components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auctions from "./pages/Auctions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/items" element={<ItemListingPage />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
