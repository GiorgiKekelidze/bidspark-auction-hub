
import React from "react";

type Bid = { user: string; amount: number; time: string };

export const BidHistory: React.FC<{ bids: Bid[] }> = ({ bids }) => (
  <ul className="max-h-40 overflow-y-auto">
    {bids.length === 0 ? (
      <li className="text-muted-foreground text-sm">No bids yet.</li>
    ) : (
      bids.map((b, i) => (
        <li key={i} className="flex justify-between py-1 text-sm border-b last:border-b-0">
          <span className="font-semibold">{b.user}</span>
          <span>${b.amount}</span>
          <span className="text-gray-400">{new Date(b.time).toLocaleTimeString()}</span>
        </li>
      ))
    )}
  </ul>
);
