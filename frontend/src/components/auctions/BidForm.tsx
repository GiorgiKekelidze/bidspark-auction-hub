
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type BidFormProps = {
  currentBid: number;
  onBid: (amount: number) => void;
  disabled?: boolean;
};

export const BidForm: React.FC<BidFormProps> = ({ currentBid, onBid, disabled }) => {
  const [value, setValue] = useState(currentBid + 10);

  return (
    <form
      className="flex gap-2 mt-2"
      onSubmit={e => {
        e.preventDefault();
        onBid(Number(value));
      }}
    >
      <input
        type="number"
        value={value}
        min={currentBid + 1}
        className="border border-gray-300 p-2 rounded-md w-24"
        onChange={e => setValue(Number(e.target.value))}
        disabled={disabled}
      />
      <Button type="submit" disabled={disabled}>Place Bid</Button>
    </form>
  );
};
