
import React from "react";
import { Clock, User } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

type AuctionCardProps = {
  image: string;
  title: string;
  currentPrice: number;
  endTime: string;
  highestBidder: string;
  onClick?: () => void;
};

export const AuctionCard: React.FC<AuctionCardProps> = ({
  image,
  title,
  currentPrice,
  endTime,
  highestBidder,
  onClick,
}) => (
  <div
    className="transform hover:scale-105 transition-transform duration-200 shadow-xl rounded-lg overflow-hidden bg-card border border-border cursor-pointer animate-fade-in"
    onClick={onClick}
  >
    <div className="w-full h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
      <img src={image} alt={title} className="object-cover w-full h-full" />
    </div>
    <div className="p-4 flex flex-col gap-2">
      <h2 className="font-montserrat font-bold text-lg truncate">{title}</h2>
      <div className="flex items-center gap-2 text-green-600 font-bold text-xl">
        ${currentPrice.toLocaleString()}
      </div>
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <CountdownTimer endTime={endTime} />
        </div>
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          {highestBidder}
        </div>
      </div>
    </div>
  </div>
);
