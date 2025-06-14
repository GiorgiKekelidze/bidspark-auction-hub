
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type BidInputProps = {
  currentBid: number;
  minIncrement: number;
  onBid: (amount: number) => void;
};

export const BidInput: React.FC<BidInputProps> = ({
  currentBid,
  minIncrement,
  onBid,
}) => {
  const [value, setValue] = useState(currentBid + minIncrement);

  return (
    <div className="flex gap-2 items-end font-inter">
      <input
        type="number"
        className="border border-ring rounded-md px-2 py-1 w-28 mr-2 focus:ring-2 focus:ring-primary transition"
        min={currentBid + minIncrement}
        step={minIncrement}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Button onClick={() => onBid(value)}>
        Place Bid
      </Button>
    </div>
  );
};
