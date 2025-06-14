import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MOCK_ITEMS } from "@/data/items";
import { motion } from "framer-motion";
import { BidModal } from "@/components/BidModal";
import { Button } from "@/components/ui/button";

type Bid = {
  amount: number;
  time: string;
  user: string;
};

export const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = MOCK_ITEMS.find((it) => it.id === id);

  const navigate = useNavigate();

  // We'll keep bid history in state, seeded with a mock
  const [bids, setBids] = useState<Bid[]>(
    item
      ? [
          {
            amount: item.startingPrice,
            time: "just now",
            user: "Seller",
          },
        ]
      : []
  );
  // Last or max bid is current price
  const currentPrice = bids.length ? bids[0].amount : item?.startingPrice ?? 0;

  // Modal control
  const [bidModalOpen, setBidModalOpen] = useState(false);

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-lg font-bold mb-2">Item not found</h2>
        <button
          className="px-4 py-2 bg-primary text-white rounded"
          onClick={() => navigate("/items")}
        >
          Back to Listings
        </button>
      </div>
    );
  }

  // Demo time left
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

  // Handle new bid submission
  const handleNewBid = (amount: number) => {
    setBids((prev) => [
      {
        amount,
        time: "just now",
        user: "DemoUser",
      },
      ...prev,
    ]);
    setBidModalOpen(false);
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
        <img
          src={item.image}
          alt={item.title}
          className="rounded-xl object-cover aspect-video w-full"
        />
        {/* Future: image gallery */}
      </div>
      <div className="md:w-1/2 flex flex-col gap-6">
        <Link
          to="/items"
          className="text-sm text-blue-600 hover:underline"
        >
          &larr; Back to Listings
        </Link>
        <h2 className="text-2xl font-bold font-montserrat">{item.title}</h2>
        <div className="text-lg">
          Current Price:{" "}
          <span className="text-green-600 font-semibold">${currentPrice}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-muted px-3 py-1 rounded">
            {getTimeLeft(item.endTime)} left
          </span>
          <span className="text-gray-400">|</span>
          <span>
            {bids.length - 1} bid{bids.length - 1 !== 1 ? "s" : ""}
          </span>
        </div>
        <p className="text-muted-foreground text-base">
          {item.title} for sale! This is a demo description. Add item details, seller info, and more here for a real app.
        </p>
        <Button
          onClick={() => setBidModalOpen(true)}
          className="w-fit"
        >
          Place a Bid
        </Button>

        {/* Bid history */}
        <div>
          <h3 className="font-semibold mb-2">Bid History</h3>
          <ul className="divide-y border rounded-md bg-muted/50 text-base max-h-56 overflow-y-auto">
            {bids.map((bid, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center px-3 py-2"
              >
                <span>
                  <span className="font-semibold">${bid.amount}</span> by{" "}
                  <span className="text-muted-foreground">{bid.user}</span>
                </span>
                <span className="text-xs text-gray-400">{bid.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bid modal */}
      <BidModal
        open={bidModalOpen}
        onOpenChange={setBidModalOpen}
        currentPrice={currentPrice}
        onSubmit={handleNewBid}
      />
    </motion.section>
  );
};
