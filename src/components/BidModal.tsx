
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BidModalProps {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  currentPrice: number;
  onSubmit: (bid: number) => void;
}

export const BidModal: React.FC<BidModalProps> = ({
  open,
  onOpenChange,
  currentPrice,
  onSubmit
}) => {
  const [bid, setBid] = useState<number>(currentPrice + 1);
  const [error, setError] = useState<string | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBid(Number(e.target.value));
    setError(null);
  };

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    if (bid <= currentPrice || isNaN(bid)) {
      setError(`Bid must be higher than current price ($${currentPrice})`);
      return;
    }
    onSubmit(bid);
    setBid(bid + 1); // Optional: increment for next open
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Place a Bid</DialogTitle>
          <DialogDescription>
            Enter how much you'd like to bid. Your bid must be higher than the current price.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleBid} className="mt-4 space-y-4">
          <Input
            type="number"
            min={currentPrice + 1}
            step="1"
            value={bid}
            onChange={handleInput}
            className="w-full"
            autoFocus
          />
          {error && <div className="text-sm text-red-500">{error}</div>}
          <DialogFooter>
            <Button type="submit">Submit Bid</Button>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
