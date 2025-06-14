
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MOCK_ITEMS } from "@/data/items";
import { motion } from "framer-motion";

export const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = MOCK_ITEMS.find((it) => it.id === id);

  const navigate = useNavigate();

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-lg font-bold mb-2">Item not found</h2>
        <button className="px-4 py-2 bg-primary text-white rounded" onClick={() => navigate("/items")}>
          Back to Listings
        </button>
      </div>
    );
  }

  // Remaining time, simple for demo
  const getTimeLeft = (end: string) => {
    const total = Date.parse(end) - Date.now();
    if (total <= 0) return "Auction ended";
    const mins = Math.floor((total / 1000 / 60) % 60);
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return (
      (days > 0 ? `${days}d ` : "") +
      (hrs > 0 ? `${hrs}h ` : "") +
      (mins > 0 ? `${mins}m` : "")
    ).trim() || "Ending soon";
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 36 }}
      transition={{ duration: 0.2 }}
      className="container mx-auto px-2 sm:px-4 py-8 flex flex-col md:flex-row gap-10"
    >
      <div className="md:w-1/2 flex flex-col gap-4">
        <img src={item.image} alt={item.title} className="rounded-xl object-cover aspect-video w-full" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-6">
        <Link to="/items" className="text-sm text-blue-600 hover:underline">&larr; Back to Listings</Link>
        <h2 className="text-2xl font-bold font-montserrat">{item.title}</h2>
        <div className="text-lg">
          Starting Price:{" "}
          <span className="text-green-600 font-semibold">${item.startingPrice}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-muted px-3 py-1 rounded">{getTimeLeft(item.endTime)} left</span>
          <span className="text-gray-400">|</span>
          <span>{item.bids} bid{item.bids !== 1 ? "s" : ""}</span>
        </div>
        <p className="text-muted-foreground text-base">
          {item.title} for sale! This is a demo description. Add item details, seller info, and more here for a real app.
        </p>
        <button
          className="bg-primary text-white font-semibold rounded px-5 py-3 w-fit hover:bg-primary/90 transition"
          onClick={() => alert("Bid form would go here!")}
        >
          Place Bid
        </button>
      </div>
    </motion.section>
  );
};
