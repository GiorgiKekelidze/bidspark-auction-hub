
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white dark:bg-card border-b border-border sticky top-0 z-30 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          {/* Simple SVG logo */}
          <svg width={28} height={28} viewBox="0 0 32 32" fill="none">
            <circle cx={16} cy={16} r={16} fill="#1E293B" />
            <path d="M12 18V12L20 16L12 20V18Z" fill="#fff"/>
          </svg>
          <span className="font-montserrat font-bold text-xl tracking-tight">Auctioneer</span>
        </Link>
        <div>
          <Link
            to="/items"
            className={`font-medium px-4 py-2 rounded transition text-base hover:bg-muted
              ${location.pathname.startsWith('/items') ? 'text-primary' : 'text-muted-foreground'}`}
          >
            My Auctions
          </Link>
        </div>
      </div>
    </nav>
  );
};
