
import React from "react";
import { AuctionCard } from "./AuctionCard";
import { CategoryFilter } from "./CategoryFilter";

// Sample items (replace with real API)
const DUMMY_LISTINGS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    title: "Apple MacBook Pro 16",
    currentPrice: 1200,
    endTime: new Date(Date.now() + 1000 * 60 * 45).toISOString(),
    highestBidder: "techKing",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    title: "Gaming Graphics Card RTX 4090",
    currentPrice: 900,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
    highestBidder: "gpuHunter",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    title: "Vintage Cat Portrait",
    currentPrice: 370,
    endTime: new Date(Date.now() + 1000 * 60 * 15).toISOString(),
    highestBidder: "catFanatic",
  },
];

export const AuctionList: React.FC = () => (
  <div className="container max-w-7xl py-6 flex flex-col gap-6 font-inter">
    <div className="flex flex-col md:flex-row mb-4 gap-4 items-center justify-between">
      <h1 className="text-3xl md:text-4xl font-montserrat font-bold tracking-tight">All Auctions</h1>
      <CategoryFilter />
      {/* Place for search bar or sort controls */}
    </div>
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {DUMMY_LISTINGS.map((item) => (
        <AuctionCard key={item.id} {...item} />
      ))}
    </div>
  </div>
);
